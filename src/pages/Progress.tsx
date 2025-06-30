import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  Clock,
  AlertCircle,
  Code,
  Target,
  TrendingUp,
} from "lucide-react";

const ProgressPage = () => {
  const [filter] = useState<"all" | "completed" | "in-progress" | "planned">(
    "all"
  );

  const projects = [
    {
      id: 1,
      title: "Smart Meta View",
      description: "",
      status: "in-progress",
      progress: 65,
      category: "development",
      technologies: ["React", "Node.js", "SqlServer"],
      startDate: "-",
      deadline: "-",
      tasks: {
        completed: 12,
        total: 16,
      },
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.status === filter;
  });

  const overallStats = {
    totalProjects: projects.length,
    completed: projects.filter((p) => p.status === "completed").length,
    inProgress: projects.filter((p) => p.status === "in-progress").length,
    planned: projects.filter((p) => p.status === "planned").length,
    averageProgress: Math.round(
      projects.reduce((sum, p) => sum + p.progress, 0) / projects.length
    ),
  };

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
              Development <span className="text-gradient">Progress</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Track the progress of ongoing projects, completed milestones, and
              upcoming developments.
            </p>
          </motion.div>
          {/* Main Project Spotlight */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 backdrop-blur-sm border-border/50 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Current Focus</h3>
                      <p className="text-muted-foreground">
                        Primary Development Project
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                    <Clock className="h-3 w-3 mr-1" />
                    In Progress
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-3xl font-bold text-gradient mb-3">
                      Smart Meta View
                    </h4>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      We’re Build a powerful web app to help protect your photos
                      from AI misuse. It analyzes images, extracts metadata, and
                      detects AI-generated or altered content—giving you full
                      transparency, control, and enhanced digital safety.
                    </p>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg">
                          Overall Progress
                        </span>
                        <span className="text-2xl font-bold text-gradient">
                          65%
                        </span>
                      </div>

                      <div className="relative">
                        <Progress value={75} className="h-4 bg-secondary" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tasks</span>
                          <span className="font-medium">12/16</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Timeline
                          </span>
                          <span className="font-medium">few months left</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold mb-3">Technology Stack</h5>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Asp.Net", "C#", "SQLServer", "Docker"].map(
                          (tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-primary/10 text-primary hover:bg-primary/20"
                            >
                              {tech}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-3">Recent Milestones</h5>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Responsive UI Design</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Image Extraction through API</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="h-4 w-4 text-yellow-500" />
                          <span>Image AI Detection (in progress)</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-3">Next Steps</h5>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <AlertCircle className="h-4 w-4 text-blue-500" />
                          <span>User Authantication</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <AlertCircle className="h-4 w-4 text-blue-500" />
                          <span>Video AI Detection</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
          Stats Overview
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 smooth-transition">
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-gradient mb-1">
                  {/* {overallStats.totalProjects}*/}4
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Total Projects
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 smooth-transition">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {/* {overallStats.completed} */}2
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Completed
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 smooth-transition">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-yellow-400 mb-1">
                  {/* {overallStats.inProgress} */}2
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  In Progress
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 smooth-transition">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-gradient mb-1">
                  {overallStats.averageProgress}%
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Avg Progress
                </div>
              </CardContent>
            </Card>
          </motion.div>
          {/* Project Filter */}
          {/* <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-muted p-2 rounded-xl inline-flex space-x-2">
              {filterButtons.map((button) => (
                <Button
                  key={button.value}
                  variant={filter === button.value ? "default" : "ghost"}
                  onClick={() => setFilter(button.value)}
                  className={`px-6 py-3 rounded-lg font-medium smooth-transition touch-action-manipulation ${
                    filter === button.value
                      ? "gradient-accent text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {button.label}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {button.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </motion.div> */}
          {/* Projects Grid */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              > */}
          {/* <Card className="group overflow-hidden hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {getCategoryIcon(project.category)}
                        <Badge
                          variant="outline"
                          className={`text-xs font-medium ${getStatusColor(
                            project.status
                          )}`}
                        >
                          {getStatusIcon(project.status)}
                          <span className="ml-1 capitalize">
                            {project.status.replace("-", " ")}
                          </span>
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        #{project.id.toString().padStart(3, "0")}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0"> */}
          {/* Progress Bar */}
          {/* <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-primary font-bold">
                          {project.progress}%
                        </span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div> */}
          {/* Tasks */}
          {/* <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground">
                        Tasks
                      </span>
                      <span className="text-sm font-medium">
                        {project.tasks.completed}/{project.tasks.total}
                      </span>
                    </div> */}
          {/* Technologies */}
          {/* <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div> */}
          {/* Timeline */}
          {/* <div className="text-xs text-muted-foreground space-y-1">
                      <div className="flex justify-between">
                        <span>Started:</span>
                        <span>
                          {new Date(project.startDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Deadline:</span>
                        <span>
                          {new Date(project.deadline).toLocaleDateString()}
                        </span>
                      </div>
                    </div> */}
          {/* </CardContent>
                </Card>
              </motion.div>
            ))}
          </div> */}
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
        </div>
      </section>
    </div>
  );
};

export default ProgressPage;
