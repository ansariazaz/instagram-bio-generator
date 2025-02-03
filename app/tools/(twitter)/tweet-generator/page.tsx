import React from 'react'
import TweetGenerator from '../../pages/fakeTweet/FakeTweet'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Realistic Fake Tweet Generator | SocialMediaTalkie",
  description:
    "Generate realistic fake tweets and export them as screenshots. Edit usernames, content, number of views, likes, retweets",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  alternates: {
    canonical: "https://socialmediatalky.com/tools/tweet-generator",
  },
};
const page = () => {
  return (
    <TweetGenerator/>
  )
}

export default page