import productsImage from "@/assets/steel-products.jpg";
import { CheckCircle } from "lucide-react";

const products = [
  {
    name: "TMT Steel Bars",
    description: "High-strength thermo-mechanically treated bars for reinforced construction.",
    specs: ["Fe 500 / Fe 500D / Fe 550D", "6mm to 32mm diameter", "BIS certified"],
  },
  {
    name: "Mild Steel Round Bars",
    description: "Versatile round bars for general engineering and fabrication purposes.",
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
    <section id="products" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-forge font-semibold text-sm uppercase tracking-widest mb-3">Our Products</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Steel Products You Can{" "}
            <span className="text-gradient-steel">Rely On</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Manufactured with precision and tested rigorously, our range of
            steel bars and rods meet every structural demand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <img
            src={productsImage}
            alt="High quality steel bars and rods in warehouse"
            loading="lazy"
            width={1280}
            height={960}
            className="rounded-lg shadow-xl w-full object-cover aspect-[4/3] sticky top-24"
          />

          <div className="space-y-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-forge/30 transition-all duration-300"
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-forge shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
