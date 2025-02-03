import React from 'react'
import InstagramUsername from '../../pages/instagram-username/InstagramUsername'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Free Instagram username Generator - Copy and Paste username Easily",
  description:
    "Create the perfect Instagram username with our free Instagram username generator. Discover unique ideas and easily copy and paste your username!",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  alternates: {
    canonical: "https://socialmediatalky.com/tools/instagram-username-generator",
  },
};
const page = () => {
  return (
    <InstagramUsername/>
  )
}

export default page