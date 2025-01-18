"use client";
import Loader from "@/components/Loader";
import MobileView from "@/components/MobileView";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import checklist from "@/assets/icons/checklist.png";
import preview from "@/assets/icons/preview.svg";
import { useToast } from "@/hooks/use-toast"
import copy from "@/assets/icons/copy.svg";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CategoryData {
  [key: string]: string[];
}

const data: CategoryData = {
  Education: [
    "Learn",
    "Academy",
    "Scholar",
    "Tutor",
    "Edu",
    "Study",
    "Teaching",
    "Course",
    "Lecture",
    "School",
    "University",
    "Knowledge",
  ],
  Nonprofit: [
    "Charity",
    "Help",
    "Donate",
    "Cause",
    "Fund",
    "Mission",
    "Giving",
    "Support",
    "Volunteer",
    "Impact",
    "Relief",
  ],
  Banking: [
    "Bank",
    "Finance",
    "Funds",
    "Invest",
    "Capital",
    "Lend",
    "Loan",
    "Wealth",
    "Money",
    "Account",
    "Reserve",
  ],
  Retail: [
    "Shop",
    "Store",
    "Goods",
    "Retailer",
    "Market",
    "Products",
    "Boutique",
    "Purchase",
    "Mall",
    "Sale",
    "Brand",
  ],
  "Interior design": [
    "Design",
    "Decor",
    "Home",
    "Spaces",
    "Interiors",
    "Styling",
    "Decorate",
    "Living",
    "Style",
    "Room",
    "Space",
  ],
  "Real estate": [
    "Estate",
    "Property",
    "House",
    "Land",
    "Home",
    "Realty",
    "Agent",
    "Invest",
    "Living",
    "Location",
    "Broker",
  ],
  Tech: [
    "Tech",
    "Innovation",
    "Software",
    "Digital",
    "Apps",
    "Web",
    "Gadget",
    "Future",
    "Network",
    "Cloud",
    "AI",
  ],
  Health: [
    "Wellness",
    "Health",
    "Care",
    "Medicine",
    "Clinic",
    "Therapy",
    "Fit",
    "Healthy",
    "Vital",
    "Doctor",
    "Nurse",
  ],
  Fitness: [
    "Fit",
    "Health",
    "Gym",
    "Strength",
    "Workout",
    "Fitness",
    "Training",
    "Power",
    "Endurance",
    "Body",
    "Exercise",
  ],
  Foodie: [
    "Food",
    "Tasty",
    "Eats",
    "Dish",
    "Delicious",
    "Meals",
    "Snack",
    "Gourmet",
    "Cook",
    "Recipe",
    "Taste",
  ],
  Lifestyle: [
    "Lifestyle",
    "Vibes",
    "Trendy",
    "Daily",
    "Journey",
    "Living",
    "Happy",
    "Mindset",
    "Dream",
    "Life",
    "Adventure",
  ],
  Gaming: [
    "Game",
    "Player",
    "Gamer",
    "Play",
    "Online",
    "Console",
    "Arcade",
    "Virtual",
    "XP",
    "Challenge",
    "Victory",
  ],
  Artist: [
    "Art",
    "Paint",
    "Design",
    "Create",
    "Gallery",
    "Canvas",
    "Sketch",
    "Craft",
    "Brush",
    "Masterpiece",
    "Artist",
  ],
  Musician: [
    "Music",
    "Band",
    "Sound",
    "Tunes",
    "Melody",
    "Rhythm",
    "Harmony",
    "Beat",
    "Vibe",
    "Track",
    "Artist",
  ],
  Fashion: [
    "Style",
    "Fashion",
    "Chic",
    "Trendy",
    "Design",
    "Outfit",
    "Look",
    "Couture",
    "Vogue",
    "Classy",
    "Wear",
  ],
};

const page = () => {
  const [category, setCategory] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [usernames, setUsernames] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const { toast } = useToast()
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const generateUsernames = () => {
    if (!category || !keyword) return;
    setLoading(true);
    const words = keyword.split(" ");
    setTimeout(() => {
      const keywords = data[category];
      const results: string[] = [];
      keywords.forEach((term) => {
        results.push(
          `${keyword}${term}`,
          `the_${keyword}`,
          `${keyword}_official`,
          `real_${keyword}`,
          `${keyword}_${term}`,
          `${term}_${keyword}`,
          `${keyword}The${term}`,
          `iam_${keyword}_${term}`,
          `${words[0]} ${words[words.length - 1]}`,
          `${words[0]}.${words[words.length - 1]}`,
          `${words[0]}_${words[words.length - 1]}`,
          `${keyword} ✨`,
          `✨ ${keyword}`,
          `${keyword} 🌟`,
          `${words[0]} the ${words[words.length - 1]}`
        );
      });
      setUsernames(results);
      setLoading(false);
    }, 1000);
  };

  const handleNameClick = (name: any) => {
    setName(name);
  };
  const handleCopyName = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    navigator.clipboard.writeText(name);
    toast({
      title: "Copied to clipboard!"
    })
  };

  return (
    <div>
      <h1 className="text-4xl text-indigo-600 text-center mt-8 font-bold">
        Instagram Name Generator
      </h1>
      <p className="text-lg text-gray-600 text-center mt-4">
        Create a professional, eye-catching Instagram name in seconds
      </p>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-10 gap-10 justify-center px-2">
        <div className="w-full max-w-md">
          <div>
            <label
              htmlFor="category"
              className="block text-xl font-medium text-gray-700"
            >
              Select Category:
            </label>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Select Category
              </option>
              {Object.keys(data).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            <label
              htmlFor="keyword"
              className="block text-xl font-medium text-gray-700"
            >
              Enter name:
            </label>
            <input
              id="keyword"
              type="text"
              value={keyword}
              onChange={handleKeywordChange}
              placeholder="Enter the name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            onClick={generateUsernames}
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none mt-6"
          >
            Generate Usernames
          </button>
          {loading ? (
            <Loader />
          ) : usernames.length > 0 ? (
            <div className="mt-6">
              <h3 className="text-xl font-medium text-gray-800">
                Suggested Usernames:
              </h3>
              <div className="mt-4 h-[300px] w-full max-w-md border rounded-lg bg-white overflow-y-auto">
                <ul className="space-y-2 p-2">
                  {usernames.map((name, index) => (
                    <li
                      key={index}
                      className="p-2 border rounded-lg bg-gray-50 cursor-pointer hover:bg-indigo-600 hover:text-white flex justify-between items-center"
                      onClick={() => handleNameClick(name)}
                    >
                      <span>{name}</span>
                      <p className="flex justify-center items-center">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            alt="preview"
                            src={preview}
                            width={28}
                            height={28}
                            onClick={() => handleNameClick(name)}
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
                            onClick={handleCopyName}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Copy Name</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </p>
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
                <p className="text-xl font-medium mt-4">No Name generated yet</p>
                <p className="mt-2 text-sm">
                  Select options and click generate to see your username
                </p>
              </div>
            </Card>
          )}
        </div>
        <div className="w-full flex justify-center">
          <MobileView name={name} />
        </div>
      </div>
    </div>
  );
};

export default page;
