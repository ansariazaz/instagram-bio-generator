import React from 'react'
import { Metadata } from "next";
import InstagramCaption from '../../pages/instagram-caption/InstagramCaption';
export const metadata: Metadata = {
  title: "Best Free Instagram Caption Generator | AI Caption Ideas",
  description:
    "Generate the best Instagram captions with our FREE AI Instagram Caption Generator! No login required—get creative caption ideas instantly!",
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