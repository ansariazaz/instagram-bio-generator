import React from 'react'
import InstagramBio from '../../pages/instagram-bio/InstagramBio'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Free Instagram Bio Generator - Copy and Paste Bios Easily",
  description: "Create the perfect Instagram bio with our free Instagram bio generator. Discover unique ideas and easily copy and paste your bios!",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
};
const page = () => {
  return (
    <InstagramBio/>
  )
}

export default page