import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import {
  SiReact,
  SiFigma,
  SiNodedotjs,
  SiNextdotjs,
  SiSqlite,
  SiDotnet,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const About = () => {
  const skills = [
    { icon: SiDotnet, name: "Asp.Net", color: "text-yellow-500" },
    { icon: SiSqlite, name: "SqlServer", color: "text-green-400" },
    { icon: TbBrandCSharp, name: "CSharp", color: "text-purple-400" },
    { icon: SiNextdotjs, name: "Extjs", color: "text-blue-500" },
    { icon: SiReact, name: "React", color: "text-blue-400" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiFigma, name: "Figma", color: "text-purple-400" },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Hello, My name is Axay Agola , in 2025 i passout my MCA(Master
                of Computer Appliaction) degree, with over 4 months stipend
                based internship experience of creating E-discovery process
                software, and i always prefer new inovations beacuse new
                inovation can make a future. My journey began with a fascination
                for how design and technology can solve real-world problems.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I specialize in creating intuitive user interfaces, scalable web
                applications, and seamless user experiences that drive
                engagement and growth. My approach combines technical expertise
                with creative problem-solving to deliver exceptional results.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                When I'm not coding or designing, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                my knowledge through blog posts.
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="hover:bg-secondary transition-colors duration-300">
                      <CardContent className="p-4 text-center">
                        <skill.icon
                          className={`text-2xl mb-2 mx-auto ${skill.color}`}
                        />
                        <p className="text-sm font-medium">{skill.name}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="/images/Boy1.png"
                alt="UI/UX design projects and wireframes"
                className="rounded-4xl ml-40 mb-20 w-240 l-20"
              />

              <motion.div
                className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center">
                    <Award className="text-white h-6 w-6" />
                  </div>
                  {/* <div>
                    <p className="font-semibold">5+ Years</p>
                    <p className="text-muted-foreground text-sm">Experience</p>
                  </div> */}
                </div>
              </motion.div>
            </motion.div>
            <motion.a
              href="/Axay-Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mb-10 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 transition-colors"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A timeline of my career highlights and key achievements
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                year: "Jan-April 2025",
                role: "Full-Stack Developer Intern",
                company: "Knovos India Pvt. Ltd.",
                description:
                  "Built  RESTful  APIs  for  data  handling  and  integrated  front-endcomponents with Extjs." +
                  "Developed a robust backend system for automatedingestion,  extraction,  and  metadata  storage  ofeDiscovery files (.PST, .MSG, .EML, PDF, ZIP, etc.).Implemented  multithreaded  Worker  Service  toprocess  files  in  batches  (1000  files/job),  extractattachments recursively, and prevent duplicates.Stored file metadata and relationships (e.g., parent-child) in SQL Server using ADO.NET.Enabled  real-time  monitoring  and  job  tracking  forlegal  compliance,  achieving  90%  faster  processingand handling 1M+ files.",
              },
              // {
              //   year: "2021 - 2023",
              //   role: "UI/UX Designer & Developer",
              //   company: "Creative Solutions Ltd.",
              //   description:
              //     "Designed and developed user-centered digital products for various clients across industries.",
              // },
              // {
              //   year: "2019 - 2021",
              //   role: "Frontend Developer",
              //   company: "Digital Agency Co.",
              //   description:
              //     "Built responsive web applications and collaborated with design teams to create engaging user experiences.",
              // },
            ].map((experience, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/4">
                  <span className="text-primary font-semibold">
                    {experience.year}
                  </span>
                </div>
                <Card className="md:w-3/4">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {experience.role}
                    </h3>
                    <p className="text-primary mb-2">{experience.company}</p>
                    <p className="text-muted-foreground">
                      {experience.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
