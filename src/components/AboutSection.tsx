import facilityImage from "@/assets/stockyard-2.jpg";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal variant="fade-left">
            <img
              src={facilityImage}
              alt="Our modern rolling mill facility"
              loading="lazy"
              width={1280}
              height={960}
              className="rounded-2xl w-full object-cover aspect-[3/4]"
            />
          </ScrollReveal>

          <ScrollReveal variant="fade-right">
            <p className="text-forge font-semibold text-xs uppercase tracking-[0.2em] mb-4">About Us</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground leading-tight mb-6">
              Decades of trust in every bar we roll.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 text-[15px]">
              With over two decades of expertise, our rolling mill delivers
              premium steel bars and rods that power construction, infrastructure,
              and industrial projects across the country.
            </p>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              We combine state-of-the-art machinery with rigorous quality control — 
              every product is tested and certified to meet the highest industry standards.
              Our commitment to innovation and sustainability keeps us at the forefront
              of the steel manufacturing industry.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
