import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const COMMENTS_KEY = "article-comments";

export const Comments = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  // Load comments from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(COMMENTS_KEY);
    if (stored) {
      try {
        setComments(JSON.parse(stored));
      } catch {
        console.warn("Invalid comments in localStorage");
      }
    }
  }, []);

  // Save comments to localStorage
  useEffect(() => {
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    const trimmed = newComment.trim();
    if (trimmed) {
      setComments((prev) => [...prev, trimmed]);
      setNewComment("");
    }
  };

  return (
    <div className="pt-6 space-y-4">
      <h3 className="text-xl font-semibold">💬 Comments</h3>
      {comments.length === 0 && (
        <p className="text-muted-foreground">No comments yet.</p>
      )}
      <div className="space-y-3">
        {comments.map((c, i) => (
          <div
            key={i}
            className="bg-muted/30 rounded-lg px-4 py-2 border border-border"
          >
            {c}
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <Input
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button onClick={handleAddComment}>Post</Button>
      </div>
    </div>
  );
};
