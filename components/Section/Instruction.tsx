import React from "react";
import step1 from "@/assets/images/step1.jpg";
import step2 from "@/assets/images/step2.jpg";
import step3 from "@/assets/images/step3.png";
import Image from "next/image";
const Instruction = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600">
            How to Use Our Instagram Bio Generator?
          </h2>
          <p className="text-gray-700 mt-4">
            Our Instagram bio generator uses AI, powered by the latest ChatGPT
            technology, to create amazing bios. But it still requires a human
            touch to make them truly stand out. Want to make your Instagram
            profile unforgettable? It’s super easy with this bio generator for
            Instagram.
          </p>
        </div>

        {/* Step 1 */}
        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            {/* Placeholder for Image */}
            <Image
              src={step1}
              alt="how to use"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Step 1 - Describe the Account
            </h3>
            <p className="text-gray-700">
              Explain what your Instagram profile is about in a few words. For
              example, if it's about gaming, you could write "beginner gaming
              tips."
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="lg:w-1/2 lg:order-2 mb-6 lg:mb-0">
          <Image
              src={step2}
              alt="how to use"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pr-10 lg:order-1">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Step 2 - Generate a Bio
            </h3>
            <p className="text-gray-700">
              Our AI tool will create an Instagram bio for you based on the
              description you give for free. Just pick the tone that suits your
              profile best.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
          <Image
              src={step3}
              alt="how to use"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Step 3 - Copy and Paste It
            </h3>
            <p className="text-gray-700">
              Once you pick the Instagram bio you like, just copy it and paste
              it into your profile. It’s an easy way to reach more people
              quickly without wasting time or effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instruction;
