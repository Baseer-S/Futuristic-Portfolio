import { useState } from "react";
import emailjs from "@emailjs/browser";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {

      const serviceId = "service_yzy7cjo";
      const templateId = "template_xhtbm34";
      const publicKey = "u4KAgRvntXn3il8iG";

      // Get current date and time
      const now = new Date();
      const formattedTime = now.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: formattedTime,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setFormStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Failed to send message. Please try again or email me directly.",
      });
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's connect and create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-6">
            {[
              {
                icon: Icons.Mail,
                title: "Email",
                value: "baseerofficial0@gmail.com",
                link: "mailto:baseerofficial0@gmail.com",
                linkText: "Send Email",
              },
              {
                icon: Icons.Linkedin,
                title: "LinkedIn",
                value: "Connect with me professionally",
                link: "https://www.linkedin.com/in/baseer-s-419713285/",
                linkText: "View Profile",
              },
              {
                icon: Icons.Github,
                title: "GitHub",
                value: "Check out my code repositories",
                link: "https://github.com/Baseer-S",
                linkText: "View Projects",
              },
            ].map((contact) => {
              const IconComponent = contact.icon;
              return (
                <div
                  key={contact.title}
                  className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 text-center transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-10 h-10 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{contact.title}</h3>
                  <p className="text-slate-400 mb-4">{contact.value}</p>
                <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 font-medium hover:text-blue-300 transition-colors"
                    >
                    {contact.linkText}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-300">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="bg-slate-900/80 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="bg-slate-900/80 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-slate-300">
                  Subject
                </Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="bg-slate-900/80 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or idea..."
                  className="bg-slate-900/80 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500 resize-none"
                />
              </div>

              {formStatus.message && (
                <div
                  className={`p-4 rounded-lg text-center font-medium ${formStatus.type === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}
                >
                  {formStatus.message}
                </div>
              )}

              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-white font-semibold"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <span className="ml-2">{isSubmitting ? "⏳" : "🚀"}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;