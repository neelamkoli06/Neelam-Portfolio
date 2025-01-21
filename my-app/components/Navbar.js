import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // State to track mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">MyPortfolio</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-300 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden  ${isMenuOpen ? "block" : "hidden"}`}
      >
        <Link
          href="/"
          className="block px-4 py-2 hover:bg-purple-700"
          onClick={toggleMenu} // Close menu when a link is clicked
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block px-4 py-2 hover:bg-purple-700"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          href="/projects"
          className="block px-4 py-2 hover:bg-purple-700"
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="block px-4 py-2 hover:bg-purple-700"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
