import React from "react";
import Image from "next/image";
import coverPhoto from "@/assets/icons/twitter.svg";
import profilePic from "@/assets/avatar.png";
import { Icon } from "@iconify/react";

interface TwitterProfileProps {
  profileName?: string;
  username?: string;
  bio?: string;
  website?: string;
  location?: string;
  joinDate?: string;
  tweetsCount?: number;
  followersCount?: number;
  followingCount?: number;
}

const TwitterProfile: React.FC<TwitterProfileProps> = ({
  profileName = "yourname",
  username = "@yourname",
  bio = "Type your description here. Add your links in this color twitter.com/yourname and write about yourself.",
  website = "yourwebsite.com",
  location = "Your location",
  joinDate = "Joined July 2022",
  tweetsCount = 0,
  followersCount = 0,
  followingCount = 0,
}) => {
  return (
    <div className="max-w-[600px] mx-auto rounded-lg border bg-white">
      <div className="relative bg-customBlue h-[150px] rounded-t-lg">
      <div className="absolute top-[100px] left-4 border-4 border-white rounded-full">
        <Image
          src={coverPhoto}
          alt="Profile Picture"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
      </div>
      <div className="pt-16 px-4 text-left">
        <h1 className="text-xl font-bold">{profileName}</h1>
        <p className="text-gray-500">{username}</p>
        <p className="text-gray-600 mt-2">{bio}</p>
        <p className="text-blue-500 mt-1">{website}</p>
        <p className="text-gray-500">📍 {location}</p>
        <p className="text-gray-500">📅 {joinDate}</p>
        <div className="flex space-x-4 mt-2">
          <p className="text-gray-700 font-bold">{followingCount} <span className="text-gray-500">Following</span></p>
          <p className="text-gray-700 font-bold">{followersCount} <span className="text-gray-500">Followers</span></p>
        </div>
      </div>
      <div className="flex justify-around border-t py-2">
        <button className="text-gray-700 font-bold">Posts</button>
        <button className="text-gray-500">Replies</button>
        <button className="text-gray-500">Media</button>
        <button className="text-gray-500">Likes</button>
      </div>
      <div className="p-4 border-t">
        <div className="flex space-x-2 items-start">
          <Image src={profilePic} alt="Tweet" width={40} height={40} className="rounded-full" />
          <div>
            <p className="font-bold">{profileName} <span className="text-gray-500">{username} • 18/05/2018</span></p>
            <p className="text-gray-700">Your words to the world.</p>
            <div className="mt-2 bg-customBlue h-[150px] rounded-lg"></div>
            <div className="flex space-x-4 text-gray-500 text-sm mt-2">
              <p>3,883</p>
              <p>5,692</p>
              <p>89.5K</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterProfile;
