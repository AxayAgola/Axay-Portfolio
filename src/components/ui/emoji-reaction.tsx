// File: components/ui/emoji-reaction.tsx
import { useEffect, useState } from "react";
import { Button } from "./button";

const emojiList = ["🔥", "❤️", "😂", "😢", "👏"];
const STORAGE_KEY = "emoji-reactions";

export const EmojiReactions = () => {
  const [reactions, setReactions] = useState<Record<string, number>>({
    "🔥": 0,
    "❤️": 0,
    "😂": 0,
    "😢": 0,
    "👏": 0,
  });

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setReactions(JSON.parse(stored));
      } catch {
        console.warn("Invalid emoji reaction data in localStorage.");
      }
    }
  }, []);

  // Save to localStorage whenever reactions change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reactions));
  }, [reactions]);

  const handleReaction = (emoji: string) => {
    setReactions((prev) => ({
      ...prev,
      [emoji]: prev[emoji] + 1,
    }));
  };

  return (
    <div className="flex gap-4 flex-wrap justify-start items-center mt-6">
      <span className="text-muted-foreground font-semibold">React:</span>
      {emojiList.map((emoji) => (
        <Button
          key={emoji}
          variant="outline"
          size="sm"
          onClick={() => handleReaction(emoji)}
          className="text-xl px-3 py-2 flex items-center gap-2"
        >
          <span>{emoji}</span>
          <span>{reactions[emoji]}</span>
        </Button>
      ))}
    </div>
  );
};
