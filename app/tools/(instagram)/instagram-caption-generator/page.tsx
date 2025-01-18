"use client";
import Loader from "@/components/Loader";
import MobileView from "@/components/MobileView";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import checklist from "@/assets/icons/checklist.png";
import preview from "@/assets/icons/preview.svg";
import { useToast } from "@/hooks/use-toast";
import copy from "@/assets/icons/copy.svg";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const categories = {
  motivational: [
    "Dream big, {keyword}, and make it happen! ✨",
    "Believe in {keyword} and yourself. 🌟",
    "{keyword} is the key to success! 💪",
    "Stay focused and {keyword} your way to the top. 🚀",
    "Hard work and {keyword} go hand in hand. 🏆",
    "Push through challenges with {keyword}. 💥",
  ],
  lifestyle: [
    "Savor every {keyword} moment. 🍃",
    "Living the {keyword} life one step at a time. 🌸",
    "{keyword}: where style meets simplicity. 👗",
    "Find joy in the little {keyword} things. ☀️",
    "Every day is a {keyword} day. 🌼",
    "Stay inspired with {keyword} energy. 🌟",
  ],
  funny: [
    "Warning: Excessive {keyword} may cause smiles! 😂",
    "Life's too short—add some {keyword}. 😎",
    "Just me and my {keyword}. No paparazzi, please. 🎥",
    "Keep calm and {keyword} on. 🤪",
    "{keyword}: because adulting is overrated. 🍼",
    "Why be normal when you can be {keyword}? 🦄",
  ],
  travel: [
    "Every journey begins with a single {keyword}. ✈️",
    "Collecting {keyword} moments, not things. 🌍",
    "Wanderlust fueled by {keyword}. 🌎",
    "Pack your bags and bring your {keyword}. 🧳",
    "Discovering new horizons with {keyword}. 🗺️",
    "The best adventures start with {keyword}. 🏔️",
  ],
  fitness: [
    "No pain, no {keyword}. 💪",
    "{keyword}: fuel for a stronger you. 🏋️",
    "Rise, shine, and {keyword}. 🏃",
    "Sweat now, shine later with {keyword}. ✨",
    "Transform your goals with {keyword}. 🔥",
    "Make {keyword} your superpower. 🦸",
  ],
  food: [
    "Happiness is homemade {keyword}. 🍽️",
    "Good food, good mood, and {keyword}. 🥗",
    "Life tastes better with {keyword}. 🍔",
    "{keyword} is the ingredient of joy. 🧁",
    "Foodies unite over {keyword}. 🍕",
    "Cooking up some {keyword} magic. 🍳",
  ],
  tech: [
    "Level up with {keyword} tech. 💻",
    "{keyword}: the future is here. 🌐",
    "Where innovation meets {keyword}. 🚀",
    "Exploring possibilities with {keyword}. 🧠",
    "Power your life with {keyword}. 🔋",
    "{keyword}: the ultimate game-changer. 🕹️",
  ],
  nature: [
    "Breathe in {keyword}, exhale peace. 🌲",
    "Embrace the beauty of {keyword}. 🌺",
    "Nature's finest moments with {keyword}. 🏞️",
    "Find your calm in {keyword}. 🌊",
    "Discover the magic of {keyword}. 🌅",
    "Every sunrise is a {keyword} opportunity. 🌄",
  ],
  relationships: [
    "{keyword}: the heart of every connection. ❤️",
    "Building bridges with {keyword}. 🌉",
    "Love grows with {keyword}. 🌹",
    "{keyword} makes us stronger together. 🤝",
    "Celebrate bonds with {keyword}. 🎉",
    "Friendship thrives on {keyword}. 🌟",
  ],
  education: [
    "Knowledge begins with {keyword}. 📚",
    "Unlock potential with {keyword}. 🗝️",
    "Learning is powered by {keyword}. 🧠",
    "Shape the future with {keyword}. 🏫",
    "Education meets inspiration in {keyword}. 🌟",
    "Fuel your mind with {keyword}. 🔥",
  ],
};

const emojis = {
  motivational: ["🌟", "✨", "💪", "🚀", "🏆", "💥"],
  lifestyle: ["🍃", "🌸", "👗", "☀️", "🌼", "🌟"],
  funny: ["😂", "😎", "🎥", "🤪", "🍼", "🦄"],
  travel: ["✈️", "🌍", "🌎", "🧳", "🗺️", "🏔️"],
  fitness: ["💪", "🏋️", "🏃", "✨", "🔥", "🦸"],
  food: ["🍽️", "🥗", "🍔", "🧁", "🍕", "🍳"],
  tech: ["💻", "🌐", "🚀", "🧠", "🔋", "🕹️"],
  nature: ["🌲", "🌺", "🏞️", "🌊", "🌅", "🌄"],
  relationships: ["❤️", "🌉", "🌹", "🤝", "🎉", "🌟"],
  education: ["📚", "🗝️", "🧠", "🏫", "🌟", "🔥"],
};

const page = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [captions, setCaptions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCaption, setSelectedCaption] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const { toast } = useToast()
  const generateCaptions = () => {
    if (!keyword.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const newCaptions = categories[category].map((template) =>
        template.replace("{keyword}", keyword)
      );

      const categoryEmojis = emojis[category];
      const emojiCaptions = new Array(5)
        .fill(null)
        .map(
          () =>
            `#${keyword} ${
              categoryEmojis[Math.floor(Math.random() * categoryEmojis.length)]
            }`
        );

      setCaptions([...newCaptions, ...emojiCaptions]);
      setLoading(false);
    }, 1000);
  };
  const handleCaptionClick = (caption: string) => {
    setSelectedCaption(caption);
  };

  const handleCopyCaption = (
    caption: string
  ) => {
    setSelectedCaption(caption);
    navigator.clipboard.writeText(caption);
    toast({
      title: "Copied to clipboard!"
    })
  };

  return (
    <div>
      <h1 className="text-4xl text-indigo-600 text-center mt-8 font-bold">
        Instagram Caption Generator
      </h1>
      <p className="text-lg text-gray-600 text-center mt-4">
        Create professional, engaging captions in seconds
      </p>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-10 gap-10 justify-center px-2">
        <div className="w-full mt-6">
          <div className="w-full">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Enter your keyword"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <label
              htmlFor="category"
              className="block text-xl font-medium text-gray-700 mt-4"
            >
              Select Category:
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border mt-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Select Category
              </option>
              {Object.keys(categories).map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
            <button
              onClick={generateCaptions}
              className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none mt-6"
            >
              Generate Captions
            </button>
          </div>
          {loading ? (
            <Loader />
          ) : captions.length > 0 ? (
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
                      
                    >
                      <span>{caption}</span>
                      <div className="flex gap-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Image
                                  alt="preview"
                                  src={preview}
                                  width={28}
                                  height={28}
                                  onClick={() => handleCaptionClick(caption)}
                                  className="mr-4"
                                />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Preview Name</p>
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
                                  onClick={()=>handleCopyCaption(caption)}
                                />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Copy Name</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <Card className="mt-16">
              <div className="text-center py-12 text-gray-500 flex flex-col justify-center items-center">
                <Image
                  src={checklist}
                  alt="checklist"
                  width={100}
                  height={100}
                />
                <p className="text-xl font-medium mt-4">
                  No caption generated yet
                </p>
                <p className="mt-2 text-sm">
                  Select options and click generate to see your caption
                </p>
              </div>
            </Card>
          )}
        </div>
        <div className="w-full flex justify-center">
          <MobileView selectedCaption={selectedCaption} />
        </div>
      </div>
    </div>
  );
};

export default page;
