"use client";

import { useRouter } from "next/navigation";

const tools = [
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
    description: "Generate creative Instagram caption effortlessly.",
    href: "/tools/instagram-caption-generator",
  },
  {
    name: "Facebook Bio Generator",
    description: "Generate creative Facebook bio effortlessly.",
    href: "/tools/facebook-bio-generator",
  },
  {
    name: "Twitter Bio Generator",
    description: "Generate creative Twitter bio effortlessly.",
    href: "/tools/twitter-bio-generator",
  },
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
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 pt-10">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Social media Toolbox</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {tools.map((tool) => (
          <div
            key={tool.name}
            onClick={() => router.push(tool.href)}
            className="p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800">{tool.name}</h2>
            <p className="text-gray-600 mt-2">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
