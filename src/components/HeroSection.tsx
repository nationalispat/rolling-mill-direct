import heroImage from "@/assets/hero-rolling-mill.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <img
        src={heroImage}
        alt="Rolling mill steel production with molten bars and industrial machinery"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="container relative z-10 pt-20">
        <div className="max-w-xl">
          <p className="text-white/70 text-sm font-medium tracking-[0.2em] uppercase mb-5">
            Precision Steel Manufacturing
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-extrabold text-primary-foreground leading-[1.1] mb-6">
            Quality Steel,<br />Built to Last.
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/65 max-w-md mb-10 leading-relaxed font-light">
            Reliable steel bars and rods for construction, infrastructure, fabrication and industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-white text-foreground hover:bg-white/90 font-semibold rounded-full px-8 gap-2">
              Our Products <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 font-medium rounded-full px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border">
        <div className="container py-5 flex flex-wrap justify-center md:justify-between gap-6 md:gap-0">
          {[
            { value: "25+", label: "Years Experience" },
            { value: "50K+", label: "Tons / Year" },
            { value: "ISO", label: "Certified" },
            { value: "100%", label: "Quality Tested" },
          ].map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <p className="font-heading text-xl md:text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
