import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <img src={logoIcon} alt="National Ispat Udyog" className="h-7 w-auto brightness-0 invert" />
              <p className="font-heading text-base font-extrabold tracking-tight">
                NATIONAL ISPAT UDYOG
              </p>
            </div>
            <p className="text-background/50 text-sm leading-relaxed max-w-[220px]">
              Reliable steel bars and rods for construction, infrastructure, fabrication and industry.
            </p>
          </div>

          <div>
            <p className="font-heading font-semibold mb-4 text-xs uppercase tracking-[0.15em] text-background/70">Products</p>
            <ul className="space-y-2.5 text-sm text-background/50">
              <li><a href="#products" className="hover:text-background transition-colors">TMT Steel Bars</a></li>
              <li><a href="#products" className="hover:text-background transition-colors">Round Bars</a></li>
              <li><a href="#products" className="hover:text-background transition-colors">Flat Bars</a></li>
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold mb-4 text-xs uppercase tracking-[0.15em] text-background/70">Company</p>
            <ul className="space-y-2.5 text-sm text-background/50">
              <li><a href="#about" className="hover:text-background transition-colors">About</a></li>
              <li><a href="#why-us" className="hover:text-background transition-colors">Why Us</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold mb-4 text-xs uppercase tracking-[0.15em] text-background/70">Reach Us</p>
            <ul className="space-y-2.5 text-sm text-background/50">
              <li>+91 9215225200</li>
              <li>nationalispat1@gmail.com</li>
              <li>Samalkha, Panipat, Haryana</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-xs text-background/30">
          © {new Date().getFullYear()} National Ispat Udyog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
