import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "ui-ux" | "development">("all");

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  const filterButtons = [
    { value: "all", label: "All Projects" },
    { value: "ui-ux", label: "UI/UX Design" },
    { value: "development", label: "Development" },
  ] as const;

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Explore my latest work spanning UI/UX design and full-stack development projects.
            </p>
          </motion.div>

          {/* Project Filter */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-muted p-2 rounded-xl inline-flex space-x-2">
              {filterButtons.map((button) => (
                <Button
                  key={button.value}
                  variant={filter === button.value ? "default" : "ghost"}
                  onClick={() => setFilter(button.value)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    filter === button.value
                      ? "gradient-accent text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground text-lg">
                No projects found for the selected category.
              </p>
            </motion.div>
          )}

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
