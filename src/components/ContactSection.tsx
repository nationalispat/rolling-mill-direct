import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-forge font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Let's Build{" "}
            <span className="text-gradient-steel">Together</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Request a quote, ask about custom orders, or schedule a facility visit.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-forge/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-forge" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground mb-1">Phone</p>
                <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                <p className="text-muted-foreground text-sm">+91 98765 43211</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-forge/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-forge" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground mb-1">Email</p>
                <p className="text-muted-foreground text-sm">info@steelroll.com</p>
                <p className="text-muted-foreground text-sm">sales@steelroll.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-forge/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-forge" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground mb-1">Factory Address</p>
                <p className="text-muted-foreground text-sm">
                  Industrial Area, Phase II,<br />
                  Steel City, Maharashtra 431001
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form className="md:col-span-3 bg-card border border-border rounded-lg p-6 md:p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <Input placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                <Input placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <Input type="email" placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <Textarea rows={4} placeholder="Tell us about your requirements — product type, quantity, delivery timeline..." />
            </div>
            <Button type="submit" size="lg" className="w-full bg-forge hover:bg-forge-dark text-accent-foreground font-semibold">
              Send Enquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
