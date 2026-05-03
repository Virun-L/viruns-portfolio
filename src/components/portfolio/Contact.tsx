import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import { toast } from "@/hooks/use-toast";

const SERVICE_ID  = "service_zb7x3fs";
const TEMPLATE_ID = "template_4fszvoc";
const PUBLIC_KEY  = "-G5xx10BW3wOZwYiG";

export const Contact = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", subject: "", message: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — intro */}
          <div ref={ref} className={cn("reveal", visible && "is-visible")}>
            <span className="section-label"><span className="tag-text">//</span> contact</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy">
              Let's build something together
            </h2>
            <p className="mt-3 text-muted-foreground">
              Have an idea, a role, or just want to say hi? Hit me up!
            </p>
          </div>

          {/* Right — form */}
          <form ref={formRef} onSubmit={onSubmit} className="bento p-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="What's it about?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={6} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me a bit about your idea or opportunity..." />
            </div>
            <button type="submit" disabled={sending}
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground transition-all hover:bg-navy/90 hover:shadow-glow hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed">
              {sending ? "Sending…" : "Send Message"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};