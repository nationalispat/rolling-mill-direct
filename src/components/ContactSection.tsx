import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
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
            <form className="bg-card border border-border rounded-2xl p-8 space-y-5 h-full" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                  <Input placeholder="Your name" className="rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <Input placeholder="+91 XXXXX XXXXX" className="rounded-lg" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input type="email" placeholder="you@company.com" className="rounded-lg" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <Textarea rows={4} placeholder="Product type, quantity, delivery timeline..." className="rounded-lg" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold rounded-full">
                Send Enquiry
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
