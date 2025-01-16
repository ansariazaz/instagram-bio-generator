"use client";
import { useState } from "react";
import MobileView from "@/components/MobileView";
import Loader from "@/components/Loader";
import data from "@/data/bio/data.json";
import Head from "next/head";
import Image from "next/image";
import instgram from "@/assets/images/instagram.jpeg";
import Faq from "@/components/Faq/Faq";
const page = () => {
  const [selectedGender, setSelectedGender] = useState<string>("girls");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [bios, setBios] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedBio, setSelectedBio] = useState<string>("");

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

  const handleCopyBio = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    navigator.clipboard.writeText(selectedBio);
    alert("Bio copied to clipboard!");
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
  const features = [
    {
      title: "No Additional Software Needed",
      description:
        "Use our Instagram Bio Generator without downloading anything. Just open it in any browser, and you’re good to go—no extra extensions or programs needed.",
      image: "/feature1.png", // Replace with actual image paths
      reverse: false,
    },
    {
      title: "Totally Free",
      description:
        "All the features are completely free to use. No hidden charges or annoying popups are asking you to spend to access anything. Everything on our Instagram Bio Generator is available for free.",
      image: "/feature2.png", // Replace with actual image paths
      reverse: true,
    },
    {
      title: "Works on Any Device",
      description:
        "This tool works on all devices and browsers, including PCs, smartphones, and tablets. It will work effectively with any browser you own.",
      image: "/feature3.png", // Replace with actual image paths
      reverse: false,
    },
    {
      title: "Stays Within Instagram’s Character Limit",
      description:
        "Instagram only lets you use 150 characters for your bio, so you need to be innovative to make it interesting. Our AI-generated Instagram bio tool will help you create a bio that fits Instagram’s limits and matches the purpose of your account.",
      image: "/feature4.png", // Replace with actual image paths
      reverse: true,
    },
    {
      title: "AI Creates Your Bio",
      description:
        "We use AI to make sure the Instagram bio you create with our free generator is perfect for your profile—catchy, effective, and just right. You can trust that it will help your Instagram stand out and grow.",
      image: "/feature5.png", // Replace with actual image paths
      reverse: false,
    },
  ];
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
  const tips = [
    {
      title: "Use Keywords/Hashtags",
      description:
        "Add relevant keywords or hashtags to boost your visibility in searches.",
    },
    {
      title: "Be Concise",
      description: "Keep your bio short and to the point (150 characters max).",
    },
    {
      title: "Highlight Your Brand",
      description: "Show what makes your brand unique.",
    },
    {
      title: "Show Personality",
      description: "Add a personal touch to connect with others.",
    },
    {
      title: "Add a Link",
      description:
        "Include a link to direct people to your website or projects.",
    },
  ];

  return (
    <>
      <Head>
        <title>Free Instagram Bio Generator - Copy and Paste Bios Easily</title>
        <meta
          name="description"
          content="Create the perfect Instagram bio with our free Instagram bio generator. Discover unique ideas and easily copy and paste your bios!"
        />
      </Head>
      <h1 className="text-4xl text-indigo-600 text-center mt-10 font-bold">
        Free Instagram Bio Generator: Copy and Paste Your Best Bio
      </h1>
      <p className="text-lg text-gray-600 text-center mt-4">
        Discover the ultimate free Instagram bio generator. Create unique,
        stylish bios in seconds and copy and paste them directly to your profile
        for instant impact!
      </p>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-10 gap-10 justify-center px-2">
        <div className="w-2/3">
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
                  className="form-radio h-5 w-5 text-indigo-600"
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
                  className="form-radio h-5 w-5 text-indigo-600"
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
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
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
              className="w-full mt-4 p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Generate Instagram Bio
            </button>
          </div>
          {loading ? (
            <Loader />
          ) : (
            bios.length > 0 && (
              <ul className="mt-6 space-y-4 h-[500px] overflow-auto">
                {bios.map((bio, index) => (
                  <li
                    key={index}
                    className="p-4 border rounded-lg bg-white cursor-pointer hover:bg-indigo-600 hover:text-white flex justify-between items-center"
                  >
                    <span>{bio}</span>
                    <p>
                      <span
                        className="bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-blue-600 mr-4"
                        onClick={() => handleBioClick(bio)}
                      >
                        Preview
                      </span>
                      <span
                        className="bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-blue-600"
                        onClick={handleCopyBio}
                      >
                        Copy
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
        <div className="w-1/3 flex justify-center">
          <MobileView selectedBio={selectedBio} />
        </div>
      </div>
      <div className="bg-gray-50 text-gray-800 font-sans">
        {/* Hero Section */}
        <div className="flex justify-center mt-20 items-center">
          <div className="max-w-6xl w-full flex flex-col md:flex-row justify-center items-center gap-10">
            {/* Text Section */}
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">
                What is the Instagram Bio Generator?
              </h2>
              <p className="text-gray-600 text-lg">
                An Instagram bio generator creates unique, catchy bios based on
                your personality, interests, or business goals. Get creative
                bios that make your profile pop in seconds.
              </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/3">
              <Image
                src="/instagram-bio.png"
                width={1000}
                height={1000}
                alt="Instagram bio"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* how it work */}
        <section className="py-12 bg-blue-50 mt-10">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              How Does an Instagram Bio Generator Work?
            </h2>
            <p className="text-gray-700 mb-12">
              Our tool uses smart AI to create unique Instagram bios based on
              each user’s profile, helping them get more attention and connect
              better with others.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  You Give Information
                </h3>
                <p className="text-gray-600">
                  Users share important information like their hobbies, jobs,
                  and personal style.
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
        {/* how to use  */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-600">
                How to Use Our Instagram Bio Generator?
              </h2>
              <p className="text-gray-700 mt-4">
                Our Instagram bio generator uses AI, powered by the latest
                ChatGPT technology, to create amazing bios. But it still
                requires a human touch to make them truly stand out. Want to
                make your Instagram profile unforgettable? It’s super easy with
                this bio generator for Instagram.
              </p>
            </div>

            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center mb-12">
              <div className="lg:w-1/2 mb-6 lg:mb-0">
                <div className="bg-white rounded-lg shadow-md p-10 h-64 flex justify-center items-center">
                  {/* Placeholder for Image */}
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-10">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Step 1 - Describe the Account
                </h3>
                <p className="text-gray-700">
                  Explain what your Instagram profile is about in a few words.
                  For example, if it's about gaming, you could write "beginner
                  gaming tips."
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row items-center mb-12">
              <div className="lg:w-1/2 lg:order-2 mb-6 lg:mb-0">
                <div className="bg-white rounded-lg shadow-md p-10 h-64 flex justify-center items-center">
                  {/* Placeholder for Image */}
                </div>
              </div>
              <div className="lg:w-1/2 lg:pr-10 lg:order-1">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Step 2 - Generate a Bio
                </h3>
                <p className="text-gray-700">
                  Our AI tool will create an Instagram bio for you based on the
                  description you give for free. Just pick the tone that suits
                  your profile best.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-6 lg:mb-0">
                <div className="bg-white rounded-lg shadow-md p-10 h-64 flex justify-center items-center">
                  {/* Placeholder for Image */}
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-10">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Step 3 - Copy and Paste It
                </h3>
                <p className="text-gray-700">
                  Once you pick the Instagram bio you like, just copy it and
                  paste it into your profile. It’s an easy way to reach more
                  people quickly without wasting time or effort.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* why use */}
        <section className="py-12 bg-blue-50">
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
                <div className="bg-white rounded-lg shadow-md p-10 h-64 flex justify-center items-center">
                  {/* Placeholder for Image */}
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-10">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Customizable Options
                </h3>
                <p className="text-gray-700">
                  Our tool lets you pick different styles for your bio, like
                  confident, funny, creative, inspiring, trustworthy, caring,
                  intriguing, energetic, or relaxed. We've designed our
                  Instagram bio emoji generator to deliver you the best results
                  based on what you like.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-blue-50 mt-10">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Features of Our Instagram Bio Generator
            </h2>
            <p className="text-gray-600 mb-8">
              Discover how our bio generator helps you stand out.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
        {/* who benefit */}
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


        {/* Tips Section */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-600">
                Instagram Bio Writing Tips
              </h2>
            </div>
            <ul className="space-y-6">
              {tips.map((tip, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                >
                  <div className="text-blue-600 text-lg font-semibold">
                    &#8226;
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-4xl font-bold text-center text-gray-800 mb-4">
          FAQs
        </p>
        <Faq />
      </div>
    </>
  );
};

export default page;
