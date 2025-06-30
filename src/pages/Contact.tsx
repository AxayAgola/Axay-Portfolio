import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  TwitterIcon,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arcreated111@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 901-676-3468",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, Gujarat",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/axay-agola-4064b1228/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/AxayAgola/",
      label: "GitHub",
    },
    {
      icon: TwitterIcon,
      href: "https://x.com/mrperfect_71?t=0wYRaFGla0NNdj4pksgTOg&s=09",
      label: "Twitter",
    },
  ];
  const onsubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);

    // Append access key (required)
    formData.append("access_key", "1266bfb3-a674-4bfa-b6d3-95401fa07301");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Web3Forms response:", data); // for debugging

      if (data.success) {
        setResult("");
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
      } else {
        console.error("Web3Forms error:", data);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("Failed to send. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-20 items-center">
            {/* Left Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Let's Create Something{" "}
                <span className="text-gradient">Amazing</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Ready to bring your vision to life? I'm here to help you create
                exceptional digital experiences that engage users and drive
                results.
              </p>

              {/* Contact Info */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center">
                      <info.icon className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Center Image */}
            <motion.img
              src="/images/sleep boy.png"
              alt="about"
              className="w-full h-auto relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="shadow-2xl">
                <CardContent className="p-8">
                  <form onSubmit={onsubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter Your Name"
                          className="bg-secondary border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="abc@example.com"
                          className="bg-secondary border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell me about your project..."
                        className="bg-secondary border-border focus:border-primary resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-accent hover:gradient-accent-hover text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      {result ? result : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
