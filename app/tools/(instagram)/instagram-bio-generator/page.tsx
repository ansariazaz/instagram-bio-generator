"use client";
import { useState } from "react";
import MobileView from "@/components/MobileView";
import Loader from "@/components/Loader";
import data from "@/data/bio/data.json";
import Image from "next/image";
import ai from "@/assets/images/ai.png";
import Feature from "@/components/Section/Feature";
import Tips from "@/components/Section/Tips";
import Instruction from "@/components/Section/Instruction";
import Hero from "@/components/Section/Hero";
import FAQPage from "@/components/Faq/Faq";
import checklist from "@/assets/icons/checklist.png";
import preview from "@/assets/icons/preview.svg";
import { useToast } from "@/hooks/use-toast"
import copy from "@/assets/icons/copy.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
const page = () => {
  const [selectedGender, setSelectedGender] = useState<string>("girls");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [bios, setBios] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedBio, setSelectedBio] = useState<string>("");
  const { toast } = useToast()

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(event.target.value);
    setSelectedCategory(""); // Reset category when gender changes
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleBioClick = (bio: string) => {
    setSelectedBio(bio);
  };

  const handleCopyBio = (bio:string) => {
    navigator.clipboard.writeText(bio);
    toast({
      title: "Copied to clipboard!"
    })
  };

  const handleGenerateClick = () => {
    setLoading(true);
    setTimeout(() => {
      const selectedData =
        selectedGender && selectedCategory
          ? data[selectedGender][selectedCategory] || []
          : [];
      setBios(selectedData);
      setLoading(false);
    }, 1000);
  };

  const benefits = [
    {
      title: "Boost Your Instagram Presence",
      description:
        "Your Instagram bio is like your first impression. Make it stand out with an Instagram bio emoji generator. Boost your profile and connect with your followers easily.",
      image: "/boost-instagram.png", // Replace with your image path
      reverse: false,
    },
    {
      title: "Customize It for Your Followers",
      description:
        "Our free AI Instagram bio generator creates a clear and interesting summary of your brand. It tells your story, helping people understand who you are and what you care about. It's an easy and free way to connect with your audience.",
      image: "/customize-followers.png", // Replace with your image path
      reverse: true,
    },
    {
      title: "Show What Your Brand Is About",
      description:
        "Our free AI Instagram bio generator creates a clear and interesting summary of your brand. It tells your story, helping people understand who you are and what you care about. It's an easy and free way to connect with your audience.",
      image: "/brand-about.png", // Replace with your image path
      reverse: false,
    },
  ];
  const benefit = [
    {
      title: "Social Media Influencers",
      description:
        "Create bios that attract your audience, grow followers with strong personal branding, and boost engagement.",
    },
    {
      title: "Job Seekers",
      description:
        "Write clear bios that show your services, use keywords to attract customers, and boost brand visibility.",
    },
    {
      title: "Small Business Owners",
      description:
        "Build a powerful personal brand on social media by showing your skills and experience clearly to attract employers and network with others.",
    },
  ];
 
  return (
    <>
      <h1 className="text-4xl text-blue-600 text-center mt-10 font-bold max-w-3xl ml-auto mr-auto">
        Free Instagram Bio Generator: Copy and Paste Your Best Bio
      </h1>
      <p className="text-lg text-gray-600 text-center mt-4 max-w-3xl ml-auto mr-auto">
        Discover the ultimate free Instagram bio generator. Create unique,
        stylish bios in seconds and copy and paste them directly to your profile
        for instant impact!
      </p>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-10 gap-10 justify-between px-2">
        <div className="mt-8">
          <div className="w-full">
            <div className="mb-4">
              <div>
                <label className="text-lg font-medium text-gray-700">
                  Select Gender:
                </label>
              </div>
              <label className="inline-flex items-center mt-4">
                <input
                  type="radio"
                  name="gender"
                  value="girls"
                  checked={selectedGender === "girls"}
                  onChange={handleGenderChange}
                  className="form-radio h-5 w-5 text-blue-600 cursor-pointer"
                />
                <span className="ml-2 text-gray-700">Girls</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="gender"
                  value="boys"
                  checked={selectedGender === "boys"}
                  onChange={handleGenderChange}
                  className="form-radio h-5 w-5 text-blue-600 cursor-pointer"
                />
                <span className="ml-2 text-gray-700">Boys</span>
              </label>
            </div>
            <label
              htmlFor="category"
              className="text-lg font-medium text-gray-700"
            >
              Select a Category:
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 cursor-pointer"
            >
              <option value="">-- Choose a Category --</option>
              {Object.keys(data[selectedGender]).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button
              onClick={handleGenerateClick}
              className="w-full mt-8 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Generate Instagram Bio
            </button>
          </div>
          {loading ? (
            <Loader />
          ) : bios.length > 0 ? (
            <ul className="mt-6 space-y-4 h-[412px] overflow-auto">
              {bios.map((bio, index) => (
                <li
                  key={index}
                  className="p-4 border rounded-lg bg-white cursor-pointer hover:bg-blue-600 hover:text-white flex justify-between items-center"
                >
                  <span>{bio}</span>
                  <p className="flex justify-center items-center">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            alt="preview"
                            src={preview}
                            width={28}
                            height={28}
                            onClick={() => handleBioClick(bio)}
                            className="mr-4"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Preview Bio</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            src={copy}
                            alt="copy"
                            width={28}
                            height={28}
                            onClick={()=>handleCopyBio(bio)}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Copy Bio</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <Card className="mt-12">
                <div className="text-center py-12 text-gray-500 flex flex-col justify-center items-center">
                  <Image
                    src={checklist}
                    alt="checklist"
                    width={100}
                    height={100}
                  />
                  <p className="text-xl font-medium mt-4">
                    No bio generated yet
                  </p>
                  <p className="mt-2 text-sm">
                    Select options and click generate to see your bio
                  </p>
                </div>
            </Card>
          )}
        </div>
        <div className="flex justify-center">
          <MobileView selectedBio={selectedBio} platform="instagram" />
        </div>
      </div>
      <Hero />

      <section className="py-12 bg-blue-50 mt-10">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            How Does an Instagram Bio Generator Work?
          </h2>
          <p className="text-gray-700 mb-12">
            Our tool uses smart AI to create unique Instagram bios based on each
            user’s profile, helping them get more attention and connect better
            with others.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                You Give Information
              </h3>
              <p className="text-gray-600">
                Users share important information like their hobbies, jobs, and
                personal style.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                AI Creates Ideas
              </h3>
              <p className="text-gray-600">
                The AI looks at what users enter and compares it with popular
                bio styles and keywords, using a huge collection of successful
                bios to help create the best one.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Get Your Custom Bio
              </h3>
              <p className="text-gray-600">
                The tool creates several bio options that connect with the
                user's audience and improve their online profile.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Instruction />
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600">
              Why Use Our AI Bio Generator for Instagram
            </h2>
            <p className="text-gray-700 mt-4">
              At Socialmediatalky, we’ve created an easy-to-use bio generator
              that works perfectly. Whatever you want to do with it, it will
              work. Here’s how we can help you create a unique Instagram bio
              that gets more attention and interaction:
            </p>
          </div>

          {/* Customizable Options */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <Image
                src={ai}
                alt="how to use"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Customizable Options
              </h3>
              <p className="text-gray-700">
                Our tool lets you pick different styles for your bio, like
                confident, funny, creative, inspiring, trustworthy, caring,
                intriguing, energetic, or relaxed. We've designed our Instagram
                bio emoji generator to deliver you the best results based on
                what you like.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Feature />
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600">
              Benefits of Using the Instagram Bio Generator
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600">
              Who Benefits From an Instagram Bio Generator?
            </h2>
            <p className="text-gray-700 mt-4">
              Different groups of people can get a lot of benefits from using a
              bio for Instagram generator.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefit.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Tips />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-4xl font-bold text-center text-gray-800 mb-4">
          FAQs
        </p>
        <FAQPage />
      </div>
    </>
  );
};

export default page;
