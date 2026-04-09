import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 md:py-36 bg-section-alt overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-16">
          <ScrollReveal variant="fade-left" className="lg:col-span-2">
            <div className="gold-line mb-6" />
            <p className="text-gold font-semibold text-xs uppercase tracking-[0.25em] mb-4">Contact</p>
            <h2 className="text-3xl md:text-[40px] font-heading font-extrabold text-foreground leading-tight mb-10">
              Let's work together.
            </h2>

            <div className="space-y-7">
              {[
                { icon: Phone, label: "Phone", lines: ["+91 9215225200", "+91 9813332252"] },
                { icon: Mail, label: "Email", lines: ["nationalispat1@gmail.com"] },
                { icon: MapPin, label: "Address", lines: ["Jaurasi Road, Samalkha", "Panipat, Haryana 132101"] },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm mb-0.5">{item.label}</p>
                    {item.lines.map((line) => (
                      <p key={line} className="text-muted-foreground text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl overflow-hidden border border-gold/15 shadow-premium">
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
            <form className="bg-card border border-border hover:border-gold/20 rounded-2xl p-8 md:p-10 space-y-6 h-full shadow-premium transition-all duration-500" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-heading font-semibold text-foreground mb-2 block">Name</label>
                  <Input placeholder="Your name" className="rounded-xl h-12" />
                </div>
                <div>
                  <label className="text-sm font-heading font-semibold text-foreground mb-2 block">Phone</label>
                  <Input placeholder="+91 XXXXX XXXXX" className="rounded-xl h-12" />
                </div>
              </div>
              <div>
                <label className="text-sm font-heading font-semibold text-foreground mb-2 block">Email</label>
                <Input type="email" placeholder="you@company.com" className="rounded-xl h-12" />
              </div>
              <div>
                <label className="text-sm font-heading font-semibold text-foreground mb-2 block">Message</label>
                <Textarea rows={5} placeholder="Product type, quantity, delivery timeline..." className="rounded-xl" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full shadow-premium text-base">
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
