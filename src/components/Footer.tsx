const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-heading text-lg font-extrabold tracking-tight mb-3">
              STEEL<span className="text-forge">ROLL</span>
            </p>
            <p className="text-background/50 text-sm leading-relaxed max-w-[220px]">
              Premium steel bars and rods for construction, infrastructure, and industry.
            </p>
          </div>

          <div>
            <p className="font-heading font-semibold mb-4 text-xs uppercase tracking-[0.15em] text-background/70">Products</p>
            <ul className="space-y-2.5 text-sm text-background/50">
              <li><a href="#products" className="hover:text-forge transition-colors">TMT Steel Bars</a></li>
              <li><a href="#products" className="hover:text-forge transition-colors">Round Bars</a></li>
              <li><a href="#products" className="hover:text-forge transition-colors">Flat Bars</a></li>
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold mb-4 text-xs uppercase tracking-[0.15em] text-background/70">Company</p>
            <ul className="space-y-2.5 text-sm text-background/50">
              <li><a href="#about" className="hover:text-forge transition-colors">About</a></li>
              <li><a href="#why-us" className="hover:text-forge transition-colors">Why Us</a></li>
              <li><a href="#contact" className="hover:text-forge transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold mb-4 text-xs uppercase tracking-[0.15em] text-background/70">Reach Us</p>
            <ul className="space-y-2.5 text-sm text-background/50">
              <li>+91 98765 43210</li>
              <li>info@steelroll.com</li>
              <li>Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-xs text-background/30">
          © {new Date().getFullYear()} SteelRoll. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
