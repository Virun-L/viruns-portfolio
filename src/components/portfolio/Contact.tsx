import { useState } from "react";
import { Send } from "lucide-react";
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
          <span className="section-label"><span className="tag-text">//</span> contact</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy">
            Let's build something together
          </h2>
          <p className="mt-3 text-muted-foreground">
            Have an idea, a role, or just want to say hi? My inbox is open.
          </p>
        </div>

        <form onSubmit={onSubmit} className="bento p-7 space-y-5 max-w-3xl mx-auto">
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
    </section>
  );
};
