import heroImage from "@/assets/hero-rolling-mill.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <img
        src={heroImage}
        alt="Rolling mill steel production with molten bars and industrial machinery"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forge/20 border border-forge/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-forge animate-pulse" />
            <span className="text-forge text-sm font-medium">Precision Steel Manufacturing</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
            Forging Strength,{" "}
            <span className="text-forge">Rolling Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 max-w-lg mb-8 font-light leading-relaxed">
            Premium quality steel bars and rods manufactured with cutting-edge
            technology to meet the highest industry standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-forge hover:bg-forge-dark text-accent-foreground font-semibold text-base gap-2">
              Explore Products <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base gap-2">
              <Phone size={18} /> Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
