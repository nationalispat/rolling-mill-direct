import productsImage from "@/assets/stockyard-4.jpg";
import { CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    name: "TMT Steel Bars",
    description: "High-strength thermo-mechanically treated bars for reinforced construction.",
    specs: ["Fe 500 / Fe 500D / Fe 550D", "6mm to 32mm diameter", "BIS certified"],
  },
  {
    name: "Mild Steel Round Bars",
    description: "Versatile round bars for general engineering and fabrication.",
    specs: ["IS 2062 grade", "8mm to 50mm diameter", "Smooth & consistent finish"],
  },
  {
    name: "Flat Bars",
    description: "Precision flat bars for grills, gates, and structural applications.",
    specs: ["Multiple widths available", "Custom lengths", "Hot rolled finish"],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 md:py-32 bg-section-alt overflow-hidden">
      <div className="container">
        <ScrollReveal variant="tilt">
          <div className="text-center max-w-lg mx-auto mb-16">
            <p className="text-forge font-semibold text-xs uppercase tracking-[0.2em] mb-4">Products</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground leading-tight">
              Steel you can rely on.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal variant="fade-left">
            <img
              src={productsImage}
              alt="High quality steel bars and rods"
              loading="lazy"
              width={1280}
              height={960}
              className="rounded-2xl w-full h-auto object-contain lg:sticky lg:top-24"
            />
          </ScrollReveal>

          <div className="space-y-4">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} variant="card" delay={i * 0.05}>
                <div className="bg-card rounded-xl p-6 border border-border hover:border-forge/40 transition-colors duration-300">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1.5">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2.5 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-forge shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
