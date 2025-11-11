import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../src/components/ui/navigation-menu";
import { Button } from "../src/components/ui/button";
import { FiHome, FiPhoneCall } from "react-icons/fi";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full text-white bg-black shadow-lg">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FiHome className="text-2xl" />
          <h1 className="text-xl font-semibold tracking-wide">PrimeEstates</h1>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            <NavigationMenuItem>
              <a
                href="/"
                className="text-sm font-medium transition-all hover:text-gray-300 hover:scale-105"
              >
                Home
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a
                href="/properties"
                className="text-sm font-medium transition-all hover:text-gray-300 hover:scale-105"
              >
                Properties
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a
                href="/about"
                className="text-sm font-medium transition-all hover:text-gray-300 hover:scale-105"
              >
                About
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a
                href="/contact"
                className="text-sm font-medium transition-all hover:text-gray-300 hover:scale-105"
              >
                Contact
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Call to Action */}
        <Button className="flex items-center gap-2 text-black transition-all bg-white hover:bg-gray-200">
          <FiPhoneCall />
          Contact Us
        </Button>
      </div>
    </header>
  );
}
