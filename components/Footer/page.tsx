import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo2.svg";

const Footer: React.FC = () => {
  return (
    <div className="w-full">
      <footer className="bg-white border-t border-gray-200 py-10 shadow-sm mt-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <Link href="https://socialmediatalky.com/">
              <Image
                src={logo}
                alt="Logo"
                width={200}
                height={150}
                className="transition-transform duration-300 hover:scale-110"
              />
            </Link>
            <p className="mt-6 w-2/3">AI-powered tools to level up your social media game</p>
          </div>

          {/* Tools Section */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-medium mb-4 text-gray-800">Tools</h4>
            <ul className="space-y-2">
              {[
                { href: "/tools/instagram-bio-generator", label: "Instagram Bio Generator" },
                { href: "/tools/instagram-username-generator", label: "Instagram Username Generator" },
                { href: "/tools/instagram-name-generator", label: "Instagram Name Generator" },
                { href: "/tools/instagram-caption-generator", label: "Instagram Caption Generator" },
              ].map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-md transition-colors duration-300"
                  >
                    {tool.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <a
              href="https://socialmediatalky.com/contact/"
              className="text-gray-800 font-medium block mb-2 px-2 hover:bg-gray-100 rounded-md transition-colors duration-300"
            >
              Contact Us
            </a>
            <a
              href="https://socialmediatalky.com/privacy-policy/"
              className="text-gray-800 font-medium block px-2 hover:bg-gray-100 rounded-md transition-colors duration-300"
            >
              Privacy & Policy
            </a>
          </div>
        </div>
      </footer>

      <div className="bg-gray-900 text-white py-4 text-center">
        <p className="transition-opacity duration-300 hover:opacity-80">
          © Copyright Socialmediatalky 2025.
        </p>
      </div>
    </div>
  );
};

export default Footer;
