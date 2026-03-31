const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-heading text-xl font-bold tracking-wide mb-3">
              STEEL<span className="text-forge">ROLL</span>
            </p>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Premium steel bars and rods for construction, infrastructure, and industry.
            </p>
          </div>

          <div>
            <p className="font-heading font-semibold mb-3 text-sm uppercase tracking-wider">Products</p>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#products" className="hover:text-forge transition-colors">TMT Steel Bars</a></li>
              <li><a href="#products" className="hover:text-forge transition-colors">Round Bars</a></li>
              <li><a href="#products" className="hover:text-forge transition-colors">Flat Bars</a></li>
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold mb-3 text-sm uppercase tracking-wider">Company</p>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#about" className="hover:text-forge transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-forge transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-forge transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold mb-3 text-sm uppercase tracking-wider">Contact</p>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>+91 98765 43210</li>
              <li>info@steelroll.com</li>
              <li>Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} SteelRoll. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
