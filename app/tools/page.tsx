"use client";

import { useRouter } from "next/navigation";

const toolsByCategory = {
  Instagram: [
    {
      name: "Instagram Bio Generator",
      description: "Generate creative Instagram bios effortlessly.",
      href: "/tools/instagram-bio-generator",
    },
    {
      name: "Instagram Username Generator",
      description: "Generate creative Instagram username effortlessly.",
      href: "/tools/instagram-username-generator",
    },
    {
      name: "Instagram Name Generator",
      description: "Generate creative Instagram name effortlessly.",
      href: "/tools/instagram-name-generator",
    },
    {
      name: "Instagram Caption Generator",
      description: "Generate Instagram captions in your tone with AI.",
      href: "/tools/instagram-caption-generator",
    },
  ],
  Facebook: [
    {
      name: "Facebook Bio Generator",
      description: "Generate creative Facebook bio effortlessly.",
      href: "/tools/facebook-bio-generator",
    },
  ],
  Twitter: [
    {
      name: "Twitter Bio Generator",
      description: "Generate creative Twitter bio effortlessly.",
      href: "/tools/twitter-bio-generator",
    },
  ],
  Tiktok: [
    {
      name: "Tiktok Bio Generator",
      description: "Generate creative Tiktok bio effortlessly.",
      href: "/tools/tiktok-bio-generator",
    },
    {
      name: "Tiktok Caption Generator",
      description: "Generate creative Tiktok caption effortlessly.",
      href: "/tools/tiktok-caption-generator",
    },
  ],
  Others:[
    {
      name: "Tweet Generator",
      description: "Generate Tweet effortlessly.",
      href: "/tools/tweet-generator",
    },
    {
      name: "Screenshot Generator",
      description: "Generate screenshot effortlessly.",
      href: "/tools/screenshot-generator",
    },
  ]
};

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 pt-10">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        AI Social Media Tools
      </h1>
      <p className="max-w-2xl text-center">
        AI-powered tools to level up your social media game. Writing captions, or creating unique bios, these free tools make managing
        your social media content simple and stress-free.
      </p>
      <div className="w-full max-w-4xl mt-12">
        {Object.entries(toolsByCategory).map(([category, tools]) => (
          <div key={category} className="mb-10 ">
            {/* Centered border */}
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-4">
              {category} tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  onClick={() => router.push(tool.href)}
                  className="p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600 ">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{tool.description}</p>
                </div>
              ))}
            </div>
            <div className="border-b border-gray-300 w-1/2 mx-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
``
