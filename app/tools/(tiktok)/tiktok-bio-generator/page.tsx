import React from 'react'
import TiktokBio from '../../pages/tiktok-bio/TiktokBio'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Free Tiktok Bio Generator - Copy and Paste Bios Easily",
  description:
    "Create the perfect Tiktok bio with our free Tiktok bio generator. Discover unique ideas and easily copy and paste your bios!",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  alternates: {
    canonical: "https://socialmediatalky.com/tools/tiktok-bio-generator",
  },
};
const page = () => {
  return (
    <TiktokBio/>
  )
}

export default page