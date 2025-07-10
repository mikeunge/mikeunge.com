"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch("https://formspree.io/f/myzwybay", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      toast({
        title: "Error",
        description:
          "There was a problem sending your message. Please try again later.",
      });
      setIsSubmitting(false);
      return;
    }

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="mb-16 container mx-auto px-6 mt-20">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Get In Touch
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-12 space-y-10 md:space-y-0">
          {/* Contact Form */}
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Hi Mike, I'd like to discuss..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 text-lg font-semibold transform hover:-translate-y-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-inner">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-blue-500" />
                <span>Neunkirchen, Lower Austria, Austria</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-blue-500" />
                <a
                  href="mailto:mikeunge@protonmail.com"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  mikeunge@protonmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-6 h-6 mr-3 text-blue-500" />
                <a
                  href="https://linkedin.com/in/mikeunge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  LinkedIn/in/mikeunge
                </a>
              </div>
              <div className="flex items-center">
                <Github className="w-6 h-6 mr-3 text-blue-500" />
                <a
                  href="https://github.com/mikeunge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  GitHub/mikeunge
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
