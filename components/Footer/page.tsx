import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo2.svg";
const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex flex-col justify-between bg-blue-200 text-blue-800 py-10">
        <div className="flex justify-center gap-32">
          {/* Left Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">About Company</h3>
            <div className="mb-4">
              <Image
                src={logo} // Replace with the correct path for your image
                alt="Logo"
                width={240}
                height={80}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm font-light leading-relaxed">
              © Copyright Socialmediatalky 2025
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Tools</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/instagram-bio-generator"
                  className="hover:text-white"
                >
                  Instagram-bio-generator
                </Link>
              </li>
              <li>
                <Link
                  href="/instagram-username-generator"
                  className="hover:text-white"
                >
                  Instagram Username Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/instagram-name-generator"
                  className="hover:text-white"
                >
                  Instagram Name Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/instagram-caption-generator"
                  className="hover:text-white"
                >
                  Instagram Caption Generator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <a
              href="https://socialmediatalky.com/contact/"
              className="text-lg font-medium mb-4"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
      <div className="bg-gray-900 text-white py-4 text-center">
        <p>Crafted with Care by XYZLab. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
