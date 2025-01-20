"use client";
import Loader from "@/components/Loader";
import MobileView from "@/components/MobileView";
import { useState } from "react";

const templates = [
  "Life is better with {keyword}. 💫",
  "Chasing dreams and {keyword}. 🌟",
  "{keyword} vibes only! ✨",
  "When in doubt, just {keyword}. 😎",
  "Keep calm and {keyword}. ❤️",
  "{keyword} makes everything better. 🌈",
  "Living my best {keyword} life! 🌸",
  "Say yes to {keyword} and happiness. 🌻",
  "Every moment is a {keyword} moment. 📸",
  "{keyword}: the perfect way to shine. 🌞",
];

const emojis = ["❤️", "🌟", "✨", "🌈", "🌸", "🌻", "😎", "💫", "🌞", "📸"];

const page = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [captions, setCaptions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCaption, setSelectedCaption] = useState<string>("");

  const generateCaptions = () => {
    if (!keyword.trim()) return;
    setLoading(true)
    setTimeout(() => {
        const newCaptions = templates.map((template) =>
        template.replace("{keyword}", keyword)
      );
  
      const randomEmojis = new Array(5)
        .fill(null)
        .map(() => emojis[Math.floor(Math.random() * emojis.length)]);
  
      const emojiCaptions = randomEmojis.map((emoji) => `${keyword} ${emoji}`);
  
      setCaptions([...newCaptions, ...emojiCaptions]);
      setLoading(false)
    }, 1000);

  };

  const handleCaptionClick = (caption: string) => {
    setSelectedCaption(caption);
  };

  const handleCopyCaption = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    navigator.clipboard.writeText(selectedCaption);
    alert("Caption copied to clipboard!");
  };

  return (
    <div >
      <h1 className="text-4xl text-indigo-600 text-center mt-8 font-bold">
        Tiktok caption Generator
      </h1>
      <p className="text-lg text-gray-600 text-center mt-4">
        Create a professional, eye-catching tiktok caption in seconds
      </p>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-10 gap-10 justify-center px-2">
        <div className="w-full mt-6 space-y-4">
          <div className="w-full">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Enter your keyword"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={generateCaptions}
              className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none mt-4"
            >
              Generate Captions
            </button>
          </div>
          {loading ? (
            <Loader />
          ) : (
            captions.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-medium text-gray-800">
                  Suggested Captions:
                </h3>
                <div className="mt-4 h-[300px] w-full border rounded-lg bg-white overflow-y-auto">
                  <ul className="space-y-2 p-2">
                    {captions.map((caption, index) => (
                      <li
                        key={index}
                        className="p-2 border rounded-lg bg-gray-50 cursor-pointer hover:bg-indigo-600 hover:text-white flex justify-between items-center"
                        onClick={() => handleCaptionClick(caption)}
                      >
                        <span>{caption}</span>
                        <span
                          className="bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-blue-600"
                          onClick={handleCopyCaption}
                        >
                          Copy
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
         
        </div>

        <div className="w-full flex justify-center">
          <MobileView selectedCaption={selectedCaption} platform="tiktok" />
        </div>
      </div>
    </div>
  );
};

export default page;
