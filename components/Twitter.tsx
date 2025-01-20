import React from "react";
import Image from "next/image";
import coverPhoto from "@/assets/icons/twitter.svg";
import profilePic from "@/assets/avatar.png";
import { Icon } from "@iconify/react";
import notify from "@/assets/icons/notify.svg";
import burger from "@/assets/icons/burger.svg";
import people from "@/assets/icons/people.svg";
import more from "@/assets/more.svg";
import back from "@/assets/back.svg";

import message from '@/assets/icons/message.svg'

interface TwitterProfileProps {
  profileName?: string;
  username?: string;
  bio?: string;
  website?: string;
  location?: string;
  joinDate?: string;
  tweetsCount?: number;
  followersCount?: string;
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
  followersCount = "48K",
  followingCount = 103,
}) => {
  interface BottomBarButton {
    icon: string;
    alt: string;
    active: boolean;
  }
  const bottomBarButtons: BottomBarButton[] = [
    {
      icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/home-icon.png",
      alt: "home icon",
      active: false,
    },
    {
      icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/search-icon.png",
      alt: "search icon",
      active: true,
    },
    {
      icon: notify,
      alt: "heart icon",
      active: false,
    },
    {
      icon: message,
      alt: "profile picture",
      active: false,
    },
  ];
  return (
    <div className="max-w-[600px] mx-auto rounded-lg border bg-white">
      <section className="flex justify-between items-center pt-8 px-4 border-b mt-4">
        <Image src={back} alt="Back" className="w-6" />
        <div className="flex items-center">
          <h1 className="text-lg font-bold">John Doe</h1>
        </div>
        <Image src={more} alt="More" className="w-6" />
      </section>
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
          <p className="text-gray-700 font-bold">
            {followingCount} <span className="text-gray-500">Following</span>
          </p>
          <p className="text-gray-700 font-bold">
            {followersCount} <span className="text-gray-500">Followers</span>
          </p>
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
          <Image
            src={profilePic}
            alt="Tweet"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-bold">
              {profileName}{" "}
              <span className="text-gray-500">{username} • 18/05/2018</span>
            </p>
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
      <section className="w-[350px] sticky bottom-0 flex justify-around items-center bg-white shadow p-2 border-t rounded-bl-[44px] rounded-br-[40px]">
        {bottomBarButtons.map((btn, idx) => (
          <Image
            key={idx}
            src={btn.icon}
            alt={btn.alt}
            width={20}
            height={20}
          />
        ))}
      </section>
    </div>
  );
};

export default TwitterProfile;
