"use client";

import { useRouter } from "next/navigation";

const tools = [
  {
    name: "Instagram Bio Generator",
    description: "Generate creative Instagram bios effortlessly.",
    href: "/instagram-bio-generator",
  },
  {
    name: "Instagram Username Generator",
    description: "Generate creative Instagram username effortlessly.",
    href: "/instagram-username-generator",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Toolbox</h1>
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
