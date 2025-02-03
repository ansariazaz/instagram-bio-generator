import React from 'react'
import { Metadata } from "next";
import InstagramCaption from '../../pages/instagram-caption/InstagramCaption';
export const metadata: Metadata = {
  title: "Free Instagram Caption Generator - Copy and Paste Caption Easily",
  description:
    "Create the perfect Instagram Caption with our free Instagram Caption generator. Discover unique ideas and easily copy and paste your Caption!",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  alternates: {
    canonical: "https://socialmediatalky.com/tools/instagram-caption-generator",
  },
};
const page = () => {
  return (
    <InstagramCaption/>
  )
}

export default page