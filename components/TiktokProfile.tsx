import Image from "next/image";
import more from "@/assets/more.svg";
import back from "@/assets/back.svg";
import tiktok from "@/assets/icons/tiktok.svg";
import photo from "@/assets/images/photo.jpeg";
import photo1 from "@/assets/images/photo1.jpeg";
import photo2 from "@/assets/images/photo2.jpeg";
import photo3 from "@/assets/images/photo3.jpeg";
import photo4 from "@/assets/images/photo4.jpeg";
import photo5 from "@/assets/images/photo5.jpeg";
export default function TiktokProfile() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <section className="flex justify-between items-center pt-8 px-4 border-b mt-4">
        <Image src={back} alt="Back" className="w-6" />
        <div className="flex items-center">
          <h1 className="text-lg font-bold">Tiktok</h1>
        </div>
        <Image src={more} alt="More" className="w-6" />
      </section>
      <div className="flex flex-col items-center mt-6">
        <div className="rounded-full p-4">
          <Image
            src={tiktok}
            alt="Profile Picture"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <h1 className="text-xl font-semibold mt-2">@flo.create_</h1>
        <div className="mt-2 flex gap-4 text-center">
          <div>
            <p className="font-semibold">471</p>
            <p className="text-gray-500 text-sm">Following</p>
          </div>
          <div>
            <p className="font-semibold">146.5K</p>
            <p className="text-gray-500 text-sm">Followers</p>
          </div>
          <div>
            <p className="font-semibold">1.7M</p>
            <p className="text-gray-500 text-sm">Likes</p>
          </div>
        </div>
        <button className="bg-red-500 text-white mt-4 px-6 py-2 rounded-lg font-semibold">
          Follow
        </button>
        <p className="mt-3 text-center text-sm text-gray-700">
          Marketing Tips | Portfolio Support 🎨 <br />
          FLO'S PORTFOLIO TEMPLATES
        </p>
        <a
          href="https://www.flo-create.co.uk/templates"
          className="text-blue-500 mt-2 text-sm"
        >
          https://www.flo-create.co.uk/templates
        </a>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mt-6">
        <div className="text-sm font-semibold border-b-2 border-red-500 pb-2 pl-2">
          Success stories
        </div>
        <div className="text-sm font-semibold border-b-2 border-gray-300 pb-2">
          Project examples ✨
        </div>
        <div className="text-sm font-semibold border-b-2 border-gray-300 pb-2">
          Portfolio
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-3 gap-2 p-4">
        {[
          { views: "23.5K", src: photo },
          { views: "9.3K", src: photo1 },
          { views: "3.7M", src: photo2 },
          { views: "10K", src: photo3 },
          { views: "6.2K", src: photo4 },
          { views: "Just watched 👀", src: photo5 },
        ].map((video, index) => (
          <div key={index} className="relative">
            <Image
              src={video.src}
              alt="video thumbnail"
              width={300}
              height={300}
              className="rounded-lg h-36 object-cover"
            />
            <p className="absolute bottom-2 left-2 text-white text-sm font-bold bg-black/50 px-1 rounded">
              {video.views}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
