import React from "react";
import Image from "next/image";
import coverPhoto from "@/assets/images/cover.jpg";
import profilePic from "@/assets/icons/facebook.svg";
import avatar from "@/assets/avatar.png";
import avatar1 from "@/assets/images/avatar1.png";
import avatar2 from "@/assets/images/avatar2.png";
import { Icon } from "@iconify/react";
import more from "@/assets/more.svg";
import back from "@/assets/back.svg";
import notify from '@/assets/icons/notify.svg'
import burger from '@/assets/icons/burger.svg'
import people from '@/assets/icons/people.svg'

interface FacebookProfileProps {
  profileName?: string;
  profileBio?: string;
  profilePosts?: number;
  friendsCount?: number;
  photosCount?: number;
}
interface Gallery {
  img: string;
  alt: string;
}
const galleryImages: Gallery[] = [
  {
    img: "https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Image 1",
  },
  {
    img: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Image 2",
  },
  {
    img: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Image 3",
  },
  {
    img: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Image 4",
  },
  {
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Image 5",
  },
  {
    img: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Image 6",
  },
  {
    img: "https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Image 7",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Image 8",
  },
  {
    img: "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Image 9",
  },
  {
    img: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Image 10",
  },
  {
    img: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Image 11",
  },
  {
    img: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Image 12",
  },
  {
    img: "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Image 13",
  },
  {
    img: "https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Image 14",
  },
  {
    img: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Image 15",
  },
];
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
      icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/profile-picture.png",
      alt: "search icon",
      active: true,
    },
    {
      icon: people,
      alt: "add icon",
      active: false,
    },
    {
      icon:notify,
      alt: "heart icon",
      active: false,
    },
    {
      icon:burger,
      alt: "profile picture",
      active: false,
    },
  ];
const FacebookProfile: React.FC<FacebookProfileProps> = ({
  profileName = "John Doe",
  profileBio = "Living life to the fullest.",
  profilePosts = 230,
  friendsCount = 500,
  photosCount = 120,
}) => {
  return (
    <div className="max-w-[600px] mx-auto rounded-lg shadow-md border bg-white px-2">
      <section className="flex justify-between items-center pt-8 px-4 border-b mt-4">
        <Image src={back} alt="Back" className="w-6" />
        <div className="flex items-center">
          <h1 className="text-lg font-bold">John Doe</h1>
        </div>
        <Image src={more} alt="More" className="w-6" />
      </section>
      <div className="relative">
        <Image
          src={coverPhoto}
          alt="Cover Photo"
          className="w-full h-[200px] object-cover rounded-t-lg"
        />
        <div className="absolute bottom-[-50px] left-4 border-4 border-white rounded-full">
          <Image
            src={profilePic}
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="pt-12 px-4 text-center">
        <h1 className="text-2xl font-bold">{profileName}</h1>
        <p className="text-gray-600">{profileBio}</p>
      </div>
      <div className="flex justify-around py-4 border-t">
        <div className="text-center">
          <p className="text-lg font-bold">{profilePosts}</p>
          <p className="text-gray-500 text-sm">Posts</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">{friendsCount}</p>
          <p className="text-gray-500 text-sm">Friends</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">{photosCount}</p>
          <p className="text-gray-500 text-sm">Photos</p>
        </div>
      </div>
      <div className="flex justify-between px-4 py-2 border-t">
        <button className="flex-1 py-2 bg-blue-600 text-white rounded mr-2">
          Add Friend
        </button>
        <button className="flex-1 py-2 border rounded">Message</button>
      </div>
      <div className="flex justify-between px-4 py-4 border-t">
        <Icon icon="mdi:account-box" width={24} height={24} />
        <Icon icon="mdi:account-group" width={24} height={24} />
        <Icon icon="mdi:image" width={24} height={24} />
        <Icon icon="mdi:video" width={24} height={24} />
        <Icon icon="mdi:dots-horizontal" width={24} height={24} />
      </div>
      <div className="px-4 py-4 border-t">
        <h2 className="text-lg font-semibold">Intro</h2>
        <p className="text-gray-600">
          "Passionate about coding and technology."
        </p>
      </div>
      <div className="border-t">
        <h2 className="text-lg font-semibold ml-4 mt-4">Recent Photos</h2>
        <section className="grid grid-cols-3 gap-[1px] mt-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative w-full h-24">
              <Image src={image.img} alt={image.alt} layout="fill" />
            </div>
          ))}
        </section>
      </div>
      <div className="px-4 py-4 border-t">
        <h2 className="text-lg font-semibold">Friends</h2>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="text-center flex items-center flex-col">
            <Image
              src={avatar}
              width={100}
              height={100}
              alt="Friend 1"
              className="rounded-full w-20"
            />
            <p className="text-sm font-semibold">Alice</p>
          </div>
          <div className="text-center flex items-center flex-col">
            <Image
              src={avatar1}
              width={100}
              height={100}
              alt="Friend 2"
              className="rounded-full w-16"
            />
            <p className="text-sm font-semibold">Bob</p>
          </div>
          <div className="text-center flex items-center flex-col">
            <Image
              src={avatar2}
              width={100}
              height={100}
              alt="Friend 3"
              className="rounded-full w-20"
            />
            <p className="text-sm font-semibold">Charlie</p>
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

export default FacebookProfile;
