import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScroll(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="2xl:container mx-auto sticky top-0 z-50 border-b" id="home">
      <nav className="bg-slate-900 text-white shadow-lg w-full px-[5%] md:px-[10%] relative">
        <div className="container mx-auto py-5 flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Sudharsan M
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-cyan-400 transition-colors duration-200 font-semibold"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-cyan-400 transition-transform duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-cyan-400 my-1 transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-cyan-400 transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-slate-900 transition-all duration-300 overflow-hidden ${
            open ? "max-h-60 py-2" : "max-h-0 py-0"
          }`}
        >
          <div className="flex flex-col items-center space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block w-full text-center py-2 hover:text-cyan-400 transition-colors duration-200 font-semibold"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute left-0 bottom-0 w-full h-1 bg-slate-800">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-150"
            style={{ width: `${scroll}%` }}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
