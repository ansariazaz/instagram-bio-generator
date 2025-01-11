'use client'
import { useState } from "react";
import MobileView from "@/components/MobileView";
import Loader from "@/components/Loader";
import { bioData } from "@/data";
const page = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [bios, setBios] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedBio, setSelectedBio] = useState<string>("");
  
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
        setBios(bioData.categories[selectedCategory] || []);
        setLoading(false);
      }, 1000);
    };
  return (
    <div>
      <h1 className="text-4xl text-indigo-600 text-center mt-8 font-bold">
        Twitter Bio Generator
      </h1>
      <p className="text-lg text-gray-600 text-center mt-4">
        Create a professional, eye-catching twitter bio in seconds
      </p>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-10 gap-10 justify-center px-2">
        <div className="w-full">
          <div className=" w-full">
            <label
              htmlFor="self-description"
              className="text-lg font-medium text-gray-700"
            >
              Describe yourself in a few words:
            </label>
            <input
              id="self-description"
              type="text"
              placeholder="Name, Location, Interest, Expertise, Hobby"
              className="w-full mt-2 mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
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
              {Object.keys(bioData.categories).map((category) => (
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
              <ul className="mt-6 space-y-4">
                {bios.map((bio, index) => (
                  <li
                    key={index}
                    onClick={() => handleBioClick(bio)}
                    className="p-4 border rounded-lg bg-white cursor-pointer hover:bg-indigo-600 hover:text-white flex justify-between items-center"
                  >
                    <span>{bio}</span>
                    <span
                      className="bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-blue-600"
                      onClick={handleCopyBio}
                    >
                      Copy
                    </span>
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
        <div className="w-full flex justify-center">
          <MobileView selectedBio={selectedBio} />
        </div>
      </div>
    </div>
  );
};

export default page;
