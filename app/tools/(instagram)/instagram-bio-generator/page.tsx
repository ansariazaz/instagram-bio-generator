import React from "react";
import InstagramBio from "../../pages/instagram-bio/InstagramBio";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Free AI Instagram Bio Generator - Copy and Paste Bios Easily",
  description:
    "Create the perfect AI Instagram bio with our free Instagram bio generator. Discover unique ideas and easily copy and paste your bios!",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  alternates: {
    canonical: "https://socialmediatalky.com/tools/instagram-bio-generator",
  },
};
const page = () => {
  return <InstagramBio />;
};

export default page;
