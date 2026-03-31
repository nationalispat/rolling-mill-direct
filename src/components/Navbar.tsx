import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="font-heading text-xl md:text-2xl font-bold text-primary-foreground tracking-wide">
          STEEL<span className="text-forge">ROLL</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-forge transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <Button variant="outline" className="border-forge text-forge hover:bg-forge hover:text-accent-foreground font-semibold">
            Get Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-primary-foreground/80 hover:text-forge transition-colors text-sm font-medium uppercase"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button variant="outline" className="w-full border-forge text-forge hover:bg-forge hover:text-accent-foreground font-semibold">
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
