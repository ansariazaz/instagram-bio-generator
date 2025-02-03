import React from 'react'
import TiktokCaption from '../../pages/tiktok-caption/TiktokCaption'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Free Tiktok Caption Generator - Copy and Paste Caption Easily",
  description:
    "Create the perfect Tiktok Caption with our free Tiktok Caption generator. Discover unique ideas and easily copy and paste your Caption!",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  alternates: {
    canonical: "https://socialmediatalky.com/tools/tiktok-caption-generator",
  },
};
const page = () => {
  return (
    <TiktokCaption/>
  )
}

export default page