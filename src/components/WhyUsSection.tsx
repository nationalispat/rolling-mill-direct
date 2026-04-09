import { Cog, Truck, ShieldCheck, Leaf, Clock, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: Cog, title: "Advanced Machinery", desc: "State-of-the-art rolling mills with automated controls." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Every batch tested in our in-house lab, BIS compliant." },
  { icon: Truck, title: "Timely Delivery", desc: "Own fleet ensuring on-time delivery across regions." },
  { icon: Leaf, title: "Sustainable", desc: "Recycled inputs and reduced emissions in every process." },
  { icon: Clock, title: "Custom Orders", desc: "Flexible production for your specific size and grade." },
  { icon: Users, title: "Trusted Partners", desc: "Long-standing relationships with builders and dealers." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-28 md:py-36 overflow-hidden">
      <div className="container">
        <ScrollReveal variant="tilt">
          <div className="text-center max-w-lg mx-auto mb-16">
            <div className="gold-line mx-auto mb-6" />
            <p className="text-gold font-semibold text-xs uppercase tracking-[0.25em] mb-4">Why Us</p>
            <h2 className="text-3xl md:text-[40px] font-heading font-extrabold text-foreground leading-tight">
              The strength behind your projects.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} variant="scale" delay={i * 0.03}>
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-gold/30 hover:shadow-premium-hover transition-all duration-500 h-full group">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors duration-300">
                  <f.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
