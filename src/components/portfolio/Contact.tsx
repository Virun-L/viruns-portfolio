import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import { toast } from "@/hooks/use-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SERVICE_ID  = "service_zb7x3fs";
const TEMPLATE_ID = "template_4fszvoc";
const PUBLIC_KEY  = "-G5xx10BW3wOZwYiG";
const RECAPTCHA_SITE_KEY = "6LcXmtYsAAAAAEhYTUa843h7GZuHYsuCFe95mYLy"; 

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const Contact = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (!formRef.current) return;
    
    // Ensure reCAPTCHA is verified
    const token = recaptchaRef.current?.getValue();
    if (!token) {
      toast({
        title: "Verification required",
        description: "Please complete the reCAPTCHA.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      reset();
      recaptchaRef.current?.reset();
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
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="bento p-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...register("name")} placeholder="Your name" />
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register("email")} placeholder="you@example.com" />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" {...register("subject")} placeholder="What's it about?" />
              {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={6} {...register("message")} placeholder="Tell me a bit about your idea or opportunity..." />
              {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
            </div>
            
            <div className="pt-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
              />
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