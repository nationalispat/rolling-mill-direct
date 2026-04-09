import heroImage from "@/assets/hero-rolling-mill.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "80px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.img
        src={heroImage}
        alt="Rolling mill steel production with molten bars and industrial machinery"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y: imgY, scale: imgScale }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <motion.div className="container relative z-10 pt-20" style={{ y: textY, opacity: textOpacity }}>
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="gold-line mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-6"
          >
            Precision Steel Manufacturing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-[60px] font-heading font-extrabold text-primary-foreground leading-[1.08] mb-7"
            style={{ perspective: 800 }}
          >
            Quality Steel,<br />
            <span className="text-gradient-gold">Built to Last.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-base md:text-lg text-primary-foreground/55 max-w-md mb-12 leading-relaxed font-light"
          >
            Reliable steel bars and rods for construction, infrastructure, fabrication and industry.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-8 gap-2 shadow-premium">
              Our Products <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="ghost" className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 font-medium rounded-full px-8 border border-primary-foreground/15">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-md border-t border-gold-subtle">
        <div className="container py-6 flex flex-wrap justify-center md:justify-between gap-6 md:gap-0">
          {[
            { value: "35+", label: "Years Experience" },
            { value: "5K+", label: "Tons / Year" },
            { value: "100%", label: "Quality Tested" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center px-6 relative">
              {i > 0 && <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-border" />}
              <p className="font-heading text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-xs mt-1 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
