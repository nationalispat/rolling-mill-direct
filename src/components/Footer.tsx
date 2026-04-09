import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="bg-premium-dark text-primary-foreground py-20">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logoIcon} alt="National Ispat Udyog" className="h-8 w-auto brightness-0 invert" />
              <p className="font-heading text-base font-bold tracking-tight">
                NATIONAL <span className="text-gold">ISPAT</span> UDYOG
              </p>
            </div>
            <p className="text-primary-foreground/40 text-sm leading-relaxed max-w-[220px]">
              Reliable steel bars and rods for construction, infrastructure, fabrication and industry.
            </p>
          </div>

          <div>
            <p className="font-heading font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-gold/70">Products</p>
            <ul className="space-y-3 text-sm text-primary-foreground/40">
              <li><a href="#products" className="hover:text-primary-foreground transition-colors">TMT Steel Bars</a></li>
              <li><a href="#products" className="hover:text-primary-foreground transition-colors">Round Bars</a></li>
              <li><a href="#products" className="hover:text-primary-foreground transition-colors">Flat Bars</a></li>
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-gold/70">Company</p>
            <ul className="space-y-3 text-sm text-primary-foreground/40">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#why-us" className="hover:text-primary-foreground transition-colors">Why Us</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-gold/70">Reach Us</p>
            <ul className="space-y-3 text-sm text-primary-foreground/40">
              <li>+91 9215225200</li>
              <li>nationalispat1@gmail.com</li>
              <li>Samalkha, Panipat, Haryana</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/25">
            © {new Date().getFullYear()} National Ispat Udyog. All rights reserved.
          </p>
          <div className="gold-line" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
