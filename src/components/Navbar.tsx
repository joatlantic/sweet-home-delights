import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "الرئيسية" },
    { to: "/products", label: "المنتجات" },
    { to: "/about", label: "من نحن" },
    { to: "/contact", label: "اتصل بنا" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/98 backdrop-blur-md border-b border-primary/10 shadow-sm">
      <div className="container px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="text-2xl md:text-3xl font-bold bg-gradient-to-l from-primary via-golden to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            🧁 حلويات منزلية
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-foreground/70 hover:text-foreground hover:bg-primary/5 transition-all text-lg px-6 py-2.5 rounded-full font-medium"
                activeClassName="text-primary bg-primary/10 font-bold"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 hover:bg-primary/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/10 bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/70 hover:text-foreground hover:bg-primary/5 transition-all text-lg py-3 px-4 rounded-lg font-medium"
                  activeClassName="text-primary bg-primary/10 font-bold"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
