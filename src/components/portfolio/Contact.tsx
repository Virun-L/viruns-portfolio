import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only for now; submit logic to be added later.
    toast({
      title: "Form ready ✨",
      description: "Send functionality will be wired up soon. Thanks for reaching out!",
    });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="container">
        <div ref={ref} className={cn("reveal mb-12 max-w-2xl", visible && "is-visible")}>
          <p className="font-mono-ui text-sm text-accent">// contact</p>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-navy">
            Let's build something <span className="text-gradient">together</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Have an idea, a role, or just want to say hi? My inbox is open.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-5">
          {/* Info card */}
          <aside className="lg:col-span-2 bento p-7 bg-navy text-navy-foreground border-navy relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" aria-hidden />
            <h3 className="font-display text-2xl font-semibold">Reach out</h3>
            <p className="mt-2 text-white/70 text-sm">
              The fastest ways to get in touch with me.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10"><Mail className="h-4 w-4 text-accent" /></span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">Email</p>
                  <a href="mailto:hello@example.com" className="font-medium hover:text-accent transition-colors">hello@example.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10"><MapPin className="h-4 w-4 text-accent" /></span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">Location</p>
                  <p className="font-medium">Colombo, Sri Lanka</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-wider text-white/60 mb-3">Find me online</p>
              <div className="flex items-center gap-2">
                <a aria-label="GitHub" href="#" className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 transition-all hover:bg-accent hover:text-navy hover:-translate-y-0.5"><Github className="h-4 w-4" /></a>
                <a aria-label="LinkedIn" href="#" className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 transition-all hover:bg-accent hover:text-navy hover:-translate-y-0.5"><Linkedin className="h-4 w-4" /></a>
                <a aria-label="Email" href="mailto:hello@example.com" className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 transition-all hover:bg-accent hover:text-navy hover:-translate-y-0.5"><Mail className="h-4 w-4" /></a>
              </div>
            </div>
          </aside>

          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 bento p-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="What's it about?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a bit about your idea or opportunity..." />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground transition-all hover:bg-navy/90 hover:shadow-glow hover:-translate-y-0.5"
            >
              Send Message
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <p className="text-xs text-muted-foreground">
              This form is UI-ready — sending will be wired up soon.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
