import { Link } from "wouter";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/progress", label: "Progress" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/AxayAgola/", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/axay-agola-4064b1228/",
      label: "LinkedIn",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/mrperfect_71?t=0wYRaFGla0NNdj4pksgTOg&s=09",
      label: "X (Twitter)",
    },
  ];

  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <span className="text-2xl font-bold text-gradient">Mr.Perfect</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Make Something New Inovation.
          </p>
          <div className="flex justify-center space-x-2 mb-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
              </a>
            ))}
          </div>
          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground text-sm">
              © 2025 Portfolio. All rights reserved. Built with passion and
              attention to detail.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
