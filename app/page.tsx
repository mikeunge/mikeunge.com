"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "mikeunge" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="max-w-xl mx-auto px-6 py-12">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <Avatar className="w-20 h-20 mb-6 grayscale">
            <AvatarImage src="/images/profile.webp" alt="Profile" />
            <AvatarFallback className="text-xl bg-muted">M</AvatarFallback>
          </Avatar>

          <h1 className="text-3xl font-medium tracking-tight mb-2">
            Michele Ungerböck
          </h1>
          <p className="text-muted-foreground">
            Software Developer & DevOps Engineer
          </p>
        </div>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            About
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I build and maintain software systems that scale. With experience
            across development and operations, I focus on creating reliable
            infrastructure and clean, maintainable code.
          </p>
        </section>

        <section className="mb-16">
          <Button
            className="w-full"
            data-cal-namespace="mikeunge"
            data-cal-link="mikeunge"
            data-cal-config='{"layout":"month_view"}'
          >
            Get in touch
          </Button>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Contact
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:mike@mikeunge.com"
                className="flex items-center justify-between py-1 hover:text-foreground transition-colors group"
              >
                <span className="text-foreground">Email</span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  mike@mikeunge.com
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/mikeunge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-1 hover:text-foreground transition-colors group"
              >
                <span className="text-foreground">Instagram</span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  @mikeunge
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/mikeunge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-1 hover:text-foreground transition-colors group"
              >
                <span className="text-foreground">X/Twitter</span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  @mikeunge
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/mikeunge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-1 hover:text-foreground transition-colors group"
              >
                <span className="text-foreground">LinkedIn</span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  @mikeunge
                </span>
              </a>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
          <p>&copy; {new Date().getFullYear()} mikeunge.com</p>
        </footer>
      </div>
    </main>
  );
}
