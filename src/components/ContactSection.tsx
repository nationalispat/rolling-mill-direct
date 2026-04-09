import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("enquiries").insert({
      name: form.name,
      phone: form.phone || null,
      email: form.email,
      message: form.message,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Failed to send enquiry", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Enquiry sent successfully!", description: "We'll get back to you soon." });
      setForm({ name: "", phone: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-section-alt overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-16">
          <ScrollReveal variant="fade-left" className="lg:col-span-2">
            <p className="text-forge font-semibold text-xs uppercase tracking-[0.2em] mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground leading-tight mb-8">
              Let's work together.
            </h2>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", lines: ["+91 9215225200", "+91 9813332252"] },
                { icon: Mail, label: "Email", lines: ["nationalispat1@gmail.com"] },
                { icon: MapPin, label: "Address", lines: ["Jaurasi Road, Samalkha", "Panipat, Haryana 132101"] },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm mb-0.5">{item.label}</p>
                    {item.lines.map((line) => (
                      <p key={line} className="text-muted-foreground text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden border border-border">
              <video
                src="/videos/address-video.mp4"
                controls
                className="w-full aspect-video object-cover"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-right" className="lg:col-span-3">
            <form className="bg-card border border-border rounded-2xl p-8 space-y-5 h-full" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                  <Input placeholder="Your name" className="rounded-lg" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <Input placeholder="+91 XXXXX XXXXX" className="rounded-lg" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                <Input type="email" placeholder="you@company.com" className="rounded-lg" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                <Textarea rows={4} placeholder="Product type, quantity, delivery timeline..." className="rounded-lg" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <Button type="submit" size="lg" disabled={loading} className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold rounded-full">
                {loading ? "Sending..." : "Send Enquiry"}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
