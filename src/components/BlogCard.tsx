import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "highlight.js/styles/github.css";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { BlogPost } from "@/lib/data";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="group overflow-hidden hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl">
      <div className="aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-primary text-sm font-medium">
            {post.category}
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground text-sm">{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 leading-tight">{post.title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">{post.date}</span>
          <Link href={`/article`}>
            <Button
              variant="ghost"
              className="text-primary hover:text-accent-foreground p-0 h-auto"
            >
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
