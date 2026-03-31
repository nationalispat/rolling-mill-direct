import facilityImage from "@/assets/facility.jpg";
import { Award, Factory, Shield, TrendingUp } from "lucide-react";

const stats = [
  { icon: Factory, value: "25+", label: "Years Experience" },
  { icon: TrendingUp, value: "50K+", label: "Tons/Year Capacity" },
  { icon: Award, value: "ISO", label: "Certified Quality" },
  { icon: Shield, value: "100%", label: "Quality Tested" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={facilityImage}
              alt="Our modern rolling mill facility"
              loading="lazy"
              width={1280}
              height={960}
              className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 bg-forge text-accent-foreground px-6 py-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-heading text-3xl font-bold">25+</p>
              <p className="text-sm font-medium opacity-90">Years of Trust</p>
            </div>
          </div>

          <div>
            <p className="text-forge font-semibold text-sm uppercase tracking-widest mb-3">About Our Company</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Built on Steel,{" "}
              <span className="text-gradient-steel">Driven by Quality</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over two decades of expertise, our rolling mill delivers
              premium steel bars and rods that power construction, infrastructure,
              and industrial projects. We combine state-of-the-art machinery with
              rigorous quality control to ensure every product meets the highest
              standards.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our commitment to innovation and sustainability keeps us at the
              forefront of the steel industry, serving clients across the nation
              with reliability and precision.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <stat.icon className="w-5 h-5 text-forge mt-0.5 shrink-0" />
                  <div>
                    <p className="font-heading font-bold text-lg text-foreground">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
