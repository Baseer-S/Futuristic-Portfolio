import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import avatarImg from "@/assets/baseer-avatar.jpg";
import aiResearchImg from "@/assets/ai-research-assistant.png";
import portfolioImg from "@/assets/portfolio-screenshot.png";
import aiAssistantImg from "@/assets/ai-assistant.png";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Create particles
    const particlesContainer = document.getElementById("particles");
    if (particlesContainer) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.cssText = `
          position: absolute;
          width: 3px;
          height: 3px;
          background: hsl(var(--primary));
          border-radius: 50%;
          opacity: 0.15;
          left: ${Math.random() * 100}%;
          animation: particleFloat ${Math.random() * 12 + 5}s linear infinite;
          animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Particle Background */}
      <div id="particles" className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/85 backdrop-blur-3xl border-b border-border/10 shadow-2xl"
            : "bg-background/75 backdrop-blur-xl border-b border-border/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-10 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={avatarImg}
                alt="Baseer Logo"
                className="w-8 h-8 rounded-md object-cover shadow-lg shadow-primary/25"
              />
              <span className="text-xl font-bold tracking-tight">Baseer</span>
            </div>
            <ul className="hidden md:flex gap-10">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground/90 hover:text-foreground font-medium text-sm tracking-tight transition-all hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gradient-to-r after:from-primary after:to-secondary hover:after:w-full after:transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all"
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] text-4xl opacity-30 animate-[float_6s_ease-in-out_infinite]">
            ⚡
          </div>
          <div className="absolute top-[55%] right-[10%] text-4xl opacity-30 animate-[float_6s_ease-in-out_infinite_1.5s]">
            🚀
          </div>
          <div className="absolute bottom-[40%] left-[30%] text-4xl opacity-30 animate-[float_6s_ease-in-out_infinite_4s]">
            💻
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-[slideInLeft_1s_ease-out]">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm animate-[fadeInUp_1s_ease-out_0.2s_both]">
              <span>✨ Available for new opportunities</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent animate-[fadeInUp_1s_ease-out_0.4s_both]">
              Baseer,<br />
              the Software<br />
              Engineer
            </h1>
            <p className="text-2xl font-semibold text-primary animate-[fadeInUp_1s_ease-out_0.6s_both]">
              Building the future with code
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed animate-[fadeInUp_1s_ease-out_0.8s_both]">
              Java backend developer specializing in high-performance APIs and scalable architectures
              using Spring Boot, Reactjs, MySQL, and RESTful services. Passionate about clean, secure
              code and solving complex backend challenges with efficiency and reliability.
            </p>
            <div className="flex gap-4 animate-[fadeInUp_1s_ease-out_1s_both]">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all"
              >
                <a href="#contact">Let's Connect</a>
              </Button>
            </div>
          </div>

          <div className="animate-[slideInRight_1s_ease-out]">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="bg-card/80 backdrop-blur-md border border-border/20 rounded-xl p-6 shadow-2xl transition-transform hover:scale-105 duration-300 cursor-pointer"
              style={{
                transform: `perspective(1000px) rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-muted-foreground text-sm">Developer.java</span>
              </div>
              <pre className="font-mono text-sm space-y-2 overflow-x-auto">
                <code className="block opacity-0 animate-[fadeInUp_0.6s_ease-out_1.3s_both]">
                  <span className="text-secondary">public class</span>{" "}
                  <span className="text-primary">Developer</span> &#123;
                </code>
                <code className="block opacity-0 animate-[fadeInUp_0.6s_ease-out_1.5s_both]">
                  &nbsp;&nbsp;<span className="text-secondary">String</span> name ={" "}
                  <span className="text-green-500">"Baseer S"</span>;
                </code>
                <code className="block opacity-0 animate-[fadeInUp_0.6s_ease-out_1.7s_both]">
                  &nbsp;&nbsp;<span className="text-secondary">String[]</span> skills = &#123;
                </code>
                <code className="block opacity-0 animate-[fadeInUp_0.6s_ease-out_1.8s_both]">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-500">"Java"</span>,{" "}
                  <span className="text-green-500">"ReactJS"</span>,{" "}
                  <span className="text-green-500">"MySQL"</span>,
                </code>
                <code className="block opacity-0 animate-[fadeInUp_0.6s_ease-out_1.9s_both]">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-500">"HTML"</span>,{" "}
                  <span className="text-green-500">"CSS"</span>,{" "}
                  <span className="text-green-500">"Spring Boot"</span>
                </code>
                <code className="block opacity-0 animate-[fadeInUp_0.6s_ease-out_2.0s_both]">
                  &nbsp;&nbsp;&#125;;
                </code>
                <code className="block opacity-0 animate-[fadeInUp_0.6s_ease-out_1.9s_both]">
                  &nbsp;&nbsp;<span className="text-secondary">String</span> passion ={" "}
                  <span className="text-green-500">"Crafting impactful digital experiences"</span>;
                </code>
                <code className="block opacity-0 animate-[fadeInUp_0.6s_ease-out_2.1s_both]">
                  &nbsp;&nbsp;<span className="text-secondary">public String</span> createMagic()
                  &#123;
                </code>
                <code className="block opacity-0 animate-[fadeInUp_0.6s_ease-out_2.3s_both]">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">return</span>{" "}
                  <span className="text-green-500">"🚀 Building with code & creativity"</span>;
                </code>
                <code className="block opacity-0 animate-[fadeInUp_0.6s_ease-out_2.5s_both]">
                  &nbsp;&nbsp;&#125;
                </code>
                <code className="block opacity-0 animate-[fadeInUp_0.6s_ease-out_2.7s_both]">
                  &#125; <span className="text-muted-foreground">// Let's build something great!✨</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30 rounded-[5%] max-w-4xl mx-8 lg:mx-auto text-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            About Me
          </h2>
          <img
            src={avatarImg}
            alt="Baseer S Profile"
            className="w-40 h-40 rounded-full object-cover mx-auto shadow-xl shadow-primary/30 border-4 border-primary"
          />
          <div className="text-muted-foreground space-y-4 text-lg leading-relaxed max-w-3xl mx-auto px-6">
            <p>
              I'm <strong className="text-foreground">Baseer S</strong>, a{" "}
              <strong className="text-foreground">BCA student</strong> and backend developer
              specializing in <strong className="text-foreground">Java</strong>,{" "}
              <strong className="text-foreground">Spring Boot</strong>,
              <strong className="text-foreground">Reactjs</strong> and{" "}
              <strong className="text-foreground">RESTful APIs</strong>. My focus is on building
              high-performance, secure, and scalable backend systems that solve real-world challenges.
            </p>
            <p>
              With a solid foundation in <strong className="text-foreground">MySQL</strong> and data
              structures, I bring structure and clarity to backend development. Alongside backend
              engineering, I've also developed projects that integrate{" "}
              <strong className="text-foreground">AI capabilities</strong> — enhancing functionality
              through intelligent features using APIs like{" "}
              <strong className="text-foreground">Gemini</strong>.
            </p>
            <p>
              I am passionate about clean code, system design, and continuous learning. My goal is to
              create reliable and efficient software that drives meaningful outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                skills: [
                  { icon: "🌐", name: "HTML" },
                  { icon: "💨", name: "Tailwind CSS" },
                  { icon: "⚡", name: "JavaScript" },
                  { icon: "⚛️", name: "React.js" },
                ],
              },
              {
                title: "Backend",
                skills: [
                  { icon: "☕", name: "Java" },
                  { icon: "🐍", name: "Python" },
                  { icon: "🗄️", name: "MySQL" },
                  { icon: "📚", name: "Data Structures & Algorithms" },
                ],
              },
              {
                title: "Tools & Others",
                skills: [
                  { icon: "🐙", name: "Git/GitHub" },
                  { icon: "🧠", name: "IntelliJ IDEA" },
                  { icon: "🐳", name: "Docker" },
                  { icon: "📬", name: "Postman" },
                ],
              },
            ].map((category) => (
              <div
                key={category.title}
                className="bg-card/60 backdrop-blur-md border border-border/20 rounded-xl p-8 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
              >
                <h3 className="text-xl font-semibold text-primary mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg transition-all hover:bg-primary/20 hover:translate-x-1"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Some of my recent work that I'm proud of
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Research Assistant Extension",
                period: "2025 — Present",
                description:
                  "A custom browser extension built to enhance research efficiency using AI with features like summarization, rewriting, translation, and note-taking.",
                image: aiResearchImg,
                tech: ["Java", "Spring Boot", "Gemini API", "HTML", "CSS", "JavaScript", "RESTful APIs"],
                github: "https://github.com/Baseer-S/research-assistant",
              },
              {
                title: "Personal Futuristic Portfolio",
                description:
                  "Visually dynamic personal portfolio website with a modern UI, responsive layout, and custom animations. Built with HTML, CSS, and JavaScript.",
                image: portfolioImg,
                tech: ["JavaScript", "HTML", "CSS"],
                live: "#home",
                github: "https://github.com/Baseer-S/Futuristic-Portfolio",
              },
              {
                title: "AI Assistant – Gemini Clone",
                description:
                  "A Gemini-style AI assistant web app that responds intelligently to text input with Java Spring Boot backend and Gemini API integration.",
                image: aiAssistantImg,
                tech: ["Java", "Spring Boot", "Gemini API", "React.js", "HTML", "CSS", "Bootstrap"],
                github: "https://github.com/Baseer-S/Gemini-2.0",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="bg-card/60 backdrop-blur-md border border-border/20 rounded-xl overflow-hidden transition-all hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/30"
              >
                <div className="h-48 bg-gradient-to-br from-muted to-card overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.period && (
                    <p className="text-sm font-medium text-muted-foreground">{project.period}</p>
                  )}
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    {project.live && (
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 hover:translate-x-1 transition-all"
                      >
                        <span>Live Demo</span>
                        <span>↗</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 hover:translate-x-1 transition-all"
                      >
                        <span>GitHub</span>
                        <span>→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's connect and create something amazing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              {[
                {
                  icon: "📧",
                  title: "Email",
                  value: "baseerofficial0@gmail.com",
                  link: "mailto:baseerofficial0@gmail.com",
                  linkText: "Send Email",
                },
                {
                  icon: "💼",
                  title: "LinkedIn",
                  value: "Connect with me professionally",
                  link: "https://www.linkedin.com/in/baseer-s-419713285/",
                  linkText: "View Profile",
                },
                {
                  icon: "🐙",
                  title: "GitHub",
                  value: "Check out my code repositories",
                  link: "https://github.com/Baseer-S",
                  linkText: "View Projects",
                },
              ].map((contact) => (
                <div
                  key={contact.title}
                  className="bg-card/60 backdrop-blur-md border border-border/20 rounded-xl p-6 text-center transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
                >
                  <div className="text-4xl mb-4">{contact.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                  <p className="text-muted-foreground mb-4">{contact.value}</p>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    {contact.linkText}
                  </a>
                </div>
              ))}
            </div>
            <div className="bg-card/60 backdrop-blur-md border border-border/20 rounded-xl p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required className="bg-background/80 border-border/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-background/80 border-border/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required className="bg-background/80 border-border/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    required
                    className="bg-background/80 border-border/20"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
                >
                  <span>Send Message</span>
                  <span className="ml-2">🚀</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background/90 border-t border-border/10 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={avatarImg}
                  alt="Baseer Logo"
                  className="w-8 h-8 rounded-md object-cover"
                />
                <span className="text-xl font-bold">Baseer</span>
              </div>
              <p className="text-muted-foreground">Building the future, one line of code at a time.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/baseer-s-419713285/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Baseer-S"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:baseerofficial0@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-border/10">
            <p className="text-muted-foreground">
              © 2025-2027 Baseer S. All rights reserved. Designed with 🎨, coded with 💻, and powered by
              ☕.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
