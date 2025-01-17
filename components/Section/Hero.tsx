import Image from "next/image";
import React from "react";
import instgram from "@/assets/images/instagram.jpeg";
const Hero = () => {
  return (
    <div className="flex justify-center mt-24 items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">
            What is the Instagram Bio Generator?
          </h2>
          <p className="text-gray-600 text-lg max-w-xl">
            An Instagram bio generator creates unique, catchy bios based on your
            personality, interests, or business goals. Get creative bios that
            make your profile pop in seconds.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3">
          <Image
            src={instgram}
            width={1000}
            height={1000}
            alt="Instagram bio"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
