import { Cog, Truck, ShieldCheck, Leaf, Clock, Users } from "lucide-react";

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
    <section id="why-us" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-lg mx-auto mb-16">
          <p className="text-forge font-semibold text-xs uppercase tracking-[0.2em] mb-4">Why Us</p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground leading-tight">
            The strength behind your projects.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {features.map((f) => (
            <div key={f.title} className="bg-card p-8 hover:bg-secondary/50 transition-colors duration-300">
              <f.icon className="w-8 h-8 text-forge mb-5" strokeWidth={1.5} />
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
