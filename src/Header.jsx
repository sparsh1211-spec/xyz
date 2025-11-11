import { useState } from "react";
import { Button } from "../src/components/ui/button";
import { FiHome, FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../src/components/ui/navigation-menu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full text-white bg-black shadow-lg">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FiHome className="text-2xl" />
          <h1 className="text-xl font-semibold tracking-wide">PrimeEstates</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              <NavigationMenuItem>
                <a href="/" className="text-sm font-medium transition-all hover:text-gray-300 hover:scale-105">
                  Home
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/properties" className="text-sm font-medium transition-all hover:text-gray-300 hover:scale-105">
                  Properties
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/about" className="text-sm font-medium transition-all hover:text-gray-300 hover:scale-105">
                  About
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/contact" className="text-sm font-medium transition-all hover:text-gray-300 hover:scale-105">
                  Contact
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button className="flex items-center gap-2 text-black transition-all bg-white hover:bg-gray-200">
            <FiPhoneCall />
            Contact Us
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {mobileOpen ? (
            <FiX className="text-3xl cursor-pointer" onClick={() => setMobileOpen(false)} />
          ) : (
            <FiMenu className="text-3xl cursor-pointer" onClick={() => setMobileOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden bg-black w-full px-6 py-4 transition-all duration-300 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col gap-6">
          <a href="/" className="text-base font-medium transition-all hover:text-gray-300">
            Home
          </a>
          <a href="/properties" className="text-base font-medium transition-all hover:text-gray-300">
            Properties
          </a>
          <a href="/about" className="text-base font-medium transition-all hover:text-gray-300">
            About
          </a>
          <a href="/contact" className="text-base font-medium transition-all hover:text-gray-300">
            Contact
          </a>

          <Button className="flex items-center gap-2 mt-4 text-black transition-all bg-white hover:bg-gray-200">
            <FiPhoneCall />
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
}
