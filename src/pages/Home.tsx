import {
  ChevronDown,
  Award,
  Code,
  Palette,
  Zap,
  Coffee,
  PenLine,
  FileText,
  Star,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Progress } from "@/components/ui/progress";

const Home = () => {
  const stats = [
    { number: "2+", label: "Projects Completed", icon: Star },
    // { number: "5+", label: "Years Experience", icon: Award },
    { number: "2+", label: "My Articles", icon: PenLine },
    { number: "∞", label: "Glass of Soda", icon: Coffee },
  ];

  const floatingElements = [
    { icon: Code, delay: 0, x: "10%", y: "20%" },
    { icon: Palette, delay: 2, x: "85%", y: "15%" },
    { icon: Zap, delay: 4, x: "15%", y: "80%" },
    { icon: Award, delay: 6, x: "80%", y: "75%" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-95" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>

          {/* Floating Icons */}
          {floatingElements.map((element, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{ left: element.x, top: element.y }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: element.delay,
              }}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
                <element.icon className="h-8 w-8 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Typing Animation Effect */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-center">
                <span className="block text-gradient">
                  <Typewriter
                    words={[
                      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |",
                      "मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={2000}
                  />
                </span>
              </h1>

              {/* <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold leading-tight gap-10">
                <motion.span
                  className="block"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |
                </motion.span>
                <motion.span
                  className="block text-gradient relative top-7"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||
                  <motion.div
                    className="absolute -right-4 top-0 w-1 h-20 bg-primary"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.span>
              </h1> */}
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-10 mt-20 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I am Axay Agola, I craft exceptional digital experiences through
              innovative{" "}
              <span className="text-primary font-semibold">
                Web Application
                {/* </span>{" "}
              and{" "}
              <span className="text-accent font-semibold"> */}
              </span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Link href="/projects">
                <Button
                  size="lg"
                  className="gradient-accent hover:gradient-accent-hover text-white font-semibold px-10 py-6 text-lg button-hover-lift shadow-2xl hover:shadow-primary/25 touch-action-manipulation"
                >
                  View My Work
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-lg button-hover-lift backdrop-blur-sm touch-action-manipulation"
                >
                  Get In Touch
                  <Star className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 smooth-transition button-hover-lift touch-action-manipulation">
                    <CardContent className="p-6 text-center">
                      <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-muted-foreground text-sm font-medium">
              Scroll to explore
            </span>
            <ChevronDown className="text-primary text-xl" />
          </div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      {/* <section className="py-20 bg-muted relative overflow-hidden">
        {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        </div> */}

      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
                  Get to know me
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Passionate About{" "}
                  <span className="text-gradient">Creating</span>
                </h2>
              </motion.div>

              <motion.p
                className="text-muted-foreground text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I'm a passionate UI/UX designer and full-stack developer with
                over 5 years of experience creating digital solutions that make
                a difference. Every project is an opportunity to solve complex
                problems with elegant solutions.
              </motion.p>

              <motion.p
                className="text-muted-foreground text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                I specialize in creating intuitive user interfaces, scalable web
                applications, and seamless user experiences that drive
                engagement and growth through thoughtful design and clean code.
              </motion.p> */}

      {/* Skills Tags */}
      {/* <motion.div
                className="flex flex-wrap gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {["React", "Asp>net", "UI/UX", "C#", "Figma"].map(
                  (skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  )
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg button-hover-lift touch-action-manipulation group"
                  >
                    Learn More About Me
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            > */}
      {/* Main Image */}
      {/* <div className="relative">
                <motion.img
                  src="/images/Boy1.png"
                  alt="about image"
                  className="rounded-2xl  w-full relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                /> */}

      {/* Floating Cards */}
      {/* <motion.div
                  className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-xl border border-border z-20"
                  initial={{ opacity: 0, y: 20, rotate: -5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -5 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ rotate: 0, scale: 1.05 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center">
                      <Award className="text-white h-6 w-6" />
                    </div>
                    {/* <div>
                      <p className="font-semibold"></p>
                      <p className="text-muted-foreground text-sm">
                        Experience
                      </p>
                    </div> 
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-xl border border-border z-20"
                  initial={{ opacity: 0, y: -20, rotate: 5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                  whileHover={{ rotate: 0, scale: 1.05 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Available</p>
                      <p className="text-xs text-muted-foreground">
                        For Projects
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div> */}

      {/* Decorative Elements */}
      {/* //         <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-full blur-3xl" />
      //       </motion.div>
      //     </div>
      //   </div>
      // </section> */}
      <motion.div
        className=""
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Card className="bg-gradient-to-br from-warning/10 via-card/50 to-accent/10 backdrop-blur-sm border-border/50 overflow-hidden w-full">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center">
                  <Code className="h-6 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">
                      New Project Progress
                    </span>
                    <span className="text-2xl font-bold text-gradient">
                      65%
                    </span>
                  </div>

                  <div className="relative  ">
                    <Progress value={65} className="h-4 w-50 bg-secondary" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full w-full" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Smart Meta View
                      </span>
                      <span className="font-medium">12/16</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Timeline</span>
                      <span className="font-medium">few months left</span>
                    </div>
                  </div>
                </div>

                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 smooth-transition w-60">
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

                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 smooth-transition w-60">
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

                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 smooth-transition w-60">
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

                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 smooth-transition w-60">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gradient mb-1">
                      {/* {overallStats.averageProgress} */}65%
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      Avg Progress
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
      {/* Call to Action Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="text-gradient">Next Project</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate to bring your ideas to life. Whether you need
              stunning new inovations, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="gradient-accent hover:gradient-accent-hover text-white font-semibold px-8 py-4 button-hover-lift shadow-lg touch-action-manipulation"
                >
                  Start a Project
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 button-hover-lift touch-action-manipulation"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
