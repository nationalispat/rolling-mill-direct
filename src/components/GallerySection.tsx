import stockyard1 from "@/assets/stockyard-1.jpg";
import stockyard2 from "@/assets/stockyard-2.jpg";
import stockyard3 from "@/assets/stockyard-3.jpg";
import stockyard4 from "@/assets/stockyard-4.jpg";
import stockyard5 from "@/assets/stockyard-5.jpg";
import stockyard6 from "@/assets/stockyard-6.jpg";
import ScrollReveal from "./ScrollReveal";

const stockyardImages = [
  { src: stockyard4, alt: "Steel bars stacked in the stockyard", label: "Steel Bars" },
  { src: stockyard6, alt: "Steel rods and flats in storage", label: "Finished Products" },
  { src: stockyard2, alt: "Factory shed and industrial structure", label: "Factory Shed" },
  { src: stockyard1, alt: "Stockyard with covered inventory", label: "Stockyard" },
  { src: stockyard3, alt: "Steel beams at the facility", label: "Steel Beams" },
  { src: stockyard5, alt: "Rolling mill signage", label: "Mill Markings" },
];

const rollingMillImages = [
  { src: "", alt: "Rolling Mill 1 in action", label: "Rolling Mill 1" },
  { src: "", alt: "Rolling Mill 2 in action", label: "Rolling Mill 2" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 overflow-hidden">
      <div className="container">
        <ScrollReveal variant="tilt">
          <div className="text-center max-w-lg mx-auto mb-16">
            <p className="text-forge font-semibold text-xs uppercase tracking-[0.2em] mb-4">Gallery</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground leading-tight">
              Our facility & stockyard.
            </h2>
          </div>
        </ScrollReveal>

        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">Stockyard</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-16">
          {stockyardImages.map((img, i) => (
            <ScrollReveal key={img.label} variant="scale" delay={i * 0.04}>
              <div className="group relative overflow-hidden rounded-xl aspect-[3/4]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">Rolling Mills</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {rollingMillImages.map((img) => (
            <ScrollReveal key={img.label} variant="card">
              <div className="relative overflow-hidden rounded-xl aspect-video bg-muted flex items-center justify-center border border-dashed border-border">
                {img.src ? (
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-6">
                    <p className="text-muted-foreground text-sm font-medium">{img.label}</p>
                    <p className="text-muted-foreground/60 text-xs mt-1">Photo coming soon</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
