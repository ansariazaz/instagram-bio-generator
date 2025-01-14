// components/Navbar.tsx
import Link from "next/link";
import logo from '@/assets/logo2.svg'
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/">
         <Image src={logo}
          alt="logo"
          width={200}
          height={200}
         />
        </Link>

        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <Link
            href="https://socialmediatalky.com/blog/"
            className="bg-blue-200 text-blue-800 font-medium px-4 py-2 rounded-full hover:bg-blue-300"
          >
            Blog
          </Link>
          <Link
            href="https://socialmediatalky.com/contact/"
            className="bg-blue-200 text-blue-800 font-medium px-4 py-2 rounded-full hover:bg-blue-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
