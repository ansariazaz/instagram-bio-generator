// components/Navbar.tsx
import Link from "next/link";
import logo from '@/assets/logo2.svg';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 p-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link href="https://socialmediatalky.com/">
          <Image
            src={logo}
            alt="logo"
            width={180}
            height={150}
            className="transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Navigation Buttons */}
        <div className="flex space-x-6">
          <Link
            href="https://socialmediatalky.com/blog/"
            className="text-gray-800 font-medium py-2 px-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            href="https://socialmediatalky.com/contact/"
            className="text-gray-800 font-medium py-2 px-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
