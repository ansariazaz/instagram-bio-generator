"use client";
import { useState } from "react";
import MobileView from "@/components/MobileView";
import Loader from "@/components/Loader";
import data from "@/data/bio/data.json";

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

  return (
    <>
      <h1 className="text-4xl text-indigo-600 text-center mt-8 font-bold">
        Instagram Bio Generator
      </h1>
      <p className="text-lg text-gray-600 text-center mt-4">
        Create a professional, eye-catching Instagram bio in seconds
      </p>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-10 gap-10 justify-center px-2">
        <div className="w-full">
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
        <div className="w-full flex justify-center">
          <MobileView selectedBio={selectedBio} />
        </div>
      </div>
    </>
  );
};

export default page;
