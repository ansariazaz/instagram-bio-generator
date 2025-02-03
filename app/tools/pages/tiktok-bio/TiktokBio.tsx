"use client";
import { useState } from "react";
import MobileView from "@/components/MobileView";
import Loader from "@/components/Loader";
import { bioData } from "@/data/name";
import data from "@/data/bio/data.json";
import checklist from "@/assets/icons/checklist.png";
import preview from "@/assets/icons/preview.svg";
import { useToast } from "@/hooks/use-toast";
import copy from "@/assets/icons/copy.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import Image from "next/image";
const TiktokBio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("girls");
  const [bios, setBios] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedBio, setSelectedBio] = useState<string>("");
  const { toast } = useToast()
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(event.target.value);
    setSelectedCategory(""); // Reset category when gender changes
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
  return (
    <div>
      <h1 className="text-4xl text-indigo-600 text-center mt-8 font-bold">
        Tiktok Bio Generator
      </h1>
      <p className="text-lg text-gray-600 text-center mt-4">
        Create a professional, eye-catching tiktok bio in seconds
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
                            onClick={() => handleCopyBio(bio)}
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
                <p className="text-xl font-medium mt-4">No bio generated yet</p>
                <p className="mt-2 text-sm">
                  Select options and click generate to see your bio
                </p>
              </div>
            </Card>
          )}
        </div>
        <div className="flex justify-center">
          <MobileView selectedBio={selectedBio} platform="tiktok" />
        </div>
      </div>
    </div>
  );
};

export default TiktokBio;
