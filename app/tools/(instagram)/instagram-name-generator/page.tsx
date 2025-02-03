import React from 'react'
import InstagramName from '../../pages/instagram-name/InstagramName'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Free Instagram name Generator - Copy and Paste name Easily",
  description:
    "Create the perfect Instagram name with our free Instagram name generator. Discover unique ideas and easily copy and paste your name!",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  alternates: {
    canonical: "https://socialmediatalky.com/tools/instagram-name-generator",
  },
}
const page = () => {
  return (
    <InstagramName/>
  )
}

export default page