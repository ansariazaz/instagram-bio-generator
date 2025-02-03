import React from 'react'
import TwitterBio from '../../pages/twitter-bio/twitterBio'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Free Twitter Bio Generator - Copy and Paste Bios Easily",
  description:
    "Create the perfect Twitter bio with our free Twitter bio generator. Discover unique ideas and easily copy and paste your bios!",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  alternates: {
    canonical: "https://socialmediatalky.com/tools/twitter-bio-generator",
  },
};
const page = () => {
  return (
    <TwitterBio/>
  )
}

export default page