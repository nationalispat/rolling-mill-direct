import { Cog, Truck, ShieldCheck, Leaf, Clock, Users } from "lucide-react";

const features = [
  { icon: Cog, title: "Advanced Machinery", desc: "State-of-the-art rolling mills with automated controls for precision output." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Every batch tested in our in-house lab with full compliance to BIS standards." },
  { icon: Truck, title: "Timely Delivery", desc: "Own fleet and logistics partnerships ensuring on-time delivery across regions." },
  { icon: Leaf, title: "Eco-Friendly", desc: "Sustainable manufacturing with recycled inputs and reduced emissions." },
  { icon: Clock, title: "Custom Orders", desc: "Flexible production schedules to meet your specific size and grade requirements." },
  { icon: Users, title: "Trusted Partners", desc: "Long-standing relationships with builders, contractors, and dealers nationwide." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-forge font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            The Strength Behind{" "}
            <span className="text-forge">Your Projects</span>
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed">
            We don't just make steel — we build partnerships rooted in quality,
            reliability, and trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <f.icon className="w-10 h-10 text-forge mb-4" />
              <h3 className="font-heading text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-primary-foreground/65 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
