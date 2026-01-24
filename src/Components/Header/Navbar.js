import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavItem from "./NavItem";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0b132b] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="bg-orange-500 p-2 rounded-lg text-lg">🍳</div>
          <h1 className="text-xl font-bold">RasoiOnCall</h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <NavItem text="Home" />
          <NavItem text="Find Chefs" />
          <NavItem text="Services" />
          <NavItem text="How It Works" />
          <NavItem text="Smart Match" />
        </ul>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm hover:text-orange-400 transition">
            Become a Chef
          </button>

          <button className="border border-orange-500 px-4 py-2 rounded-lg text-sm hover:bg-orange-500 transition">
            Login
          </button>
        </div>

        {/* MOBILE ICON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0f1a3a] px-6 py-6 space-y-4 text-sm">
          <NavItem text="Home" />
          <NavItem text="Find Chefs" />
          <NavItem text="Services" />
          <NavItem text="How It Works" />
          <NavItem text="Smart Match" />
          <NavItem text="Become a Chef" />
          <NavItem text="Login" />
        </div>
      )}
    </nav>
  );
}
