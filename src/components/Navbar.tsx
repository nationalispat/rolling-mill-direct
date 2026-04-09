import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        <a href="#home" className="flex items-center gap-2.5">
          <img src={logoIcon} alt="National Ispat Udyog" className="h-8 w-auto" />
          <span className="font-heading text-sm md:text-base font-extrabold text-foreground tracking-tight leading-tight">
            NATIONAL<br className="md:hidden" /> <span className="text-steel">ISPAT</span> UDYOG
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-[13px] font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90 font-medium text-[13px] rounded-full px-5">
            Get Quote
          </Button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button size="sm" className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium rounded-full">
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
