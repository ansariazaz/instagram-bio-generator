import React from 'react'
import FacebookBio from '../../pages/facebook-bio/FacebookBio'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Free Facebook Bio Generator - Copy and Paste Bios Easily",
  description:
    "Create the perfect Facebook bio with our free Facebook bio generator. Discover unique ideas and easily copy and paste your bios!",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  alternates: {
    canonical: "https://socialmediatalky.com/tools/facebook-bio-generator",
  },
};
const page = () => {
  return (
    <FacebookBio/>
  )
}

export default page