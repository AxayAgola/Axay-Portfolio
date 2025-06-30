import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-primary/20 text-primary hover:bg-primary/30"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        <Button
          variant="ghost"
          className="text-primary hover:text-accent-foreground p-0 h-auto"
        >
          {project.category === "development"
            ? "View Project"
            : "View Case Study"}
          {project.category === "development" ? (
            <ExternalLink className="ml-2 h-4 w-4" />
          ) : (
            <ArrowRight className="ml-2 h-4 w-4" />
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
