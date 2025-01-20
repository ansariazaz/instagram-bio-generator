import React from "react";
import Image from "next/image";
import back from "@/assets/back.svg";
import down from "@/assets/down.svg";
import more from "@/assets/more.svg";
import instagram from '@/assets/icons/instagram.svg'
interface Story {
  img: string;
  text: string;
}
interface Gallery {
  img: string;
  alt: string;
}

interface Tab {
  icon: string;
  alt: string;
}

interface BottomBarButton {
  icon: string;
  alt: string;
  active: boolean;
}

interface InstagramProfileProps {
  selectedBio?: string;
  username?:string;
  name?:string;
  selectedCaption?:string
}

const InstagramProfile: React.FC<InstagramProfileProps> = ({ selectedBio,username, name, selectedCaption }) => {
  const stories: Story[] = [
    {
      img: "https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60",
      text: "Game On",
    },
    {
      img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      text: "Take a Stand",
    },
    {
      img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      text: "You got this",
    },
    {
      img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      text: "#skater girl",
    },
    {
      img: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      text: "Game On",
    },
  ];
  const galleryImages: Gallery[] = [
    {
      img: "https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 1",
    },
    {
      img: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 2",
    },
    {
      img: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 3",
    },
    {
      img: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 4",
    },
    {
      img: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Image 5",
    },
    {
      img: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 6",
    },
    {
      img: "https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 7",
    },
    {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 8",
    },
    {
      img: "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 9",
    },
    {
      img: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Image 10",
    },
    {
      img: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 11",
    },
    {
      img: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 12",
    },
    {
      img: "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 13",
    },
    {
      img: "https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 14",
    },
    {
      img: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 15",
    },
    {
      img: "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 16",
    },
    {
      img: "https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 17",
    },
    {
      img: "https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 18",
    },
    {
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 19",
    },
    {
      img: "https://images.unsplash.com/photo-1539108826694-1297410cdda9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 20",
    },
    {
      img: "https://images.unsplash.com/photo-1529690982439-df5e60eb5a3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 21",
    },
    {
      img: "https://images.unsplash.com/photo-1491056792553-4704d261e3ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Image 22",
    },
    {
      img: "https://images.unsplash.com/photo-1562138888-3d0a63b21dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 23",
    },
    {
      img: "https://images.unsplash.com/photo-1568641134257-ab85695f67e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 24",
    },
    {
      img: "https://images.unsplash.com/photo-1545385095-f5a14a9160d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Image 25",
    },
    {
      img: "https://images.unsplash.com/photo-1547462713-a208daf9d997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 26",
    },
    {
      img: "https://images.unsplash.com/photo-1522586217274-9096ee38a805?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "Image 27",
    },
  ];
  const tabs: Tab[] = [
    {
      icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/grid-icon.png",
      alt: "grid icon",
    },
    {
      icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/igtv-icon.png",
      alt: "igtv icon",
    },
    {
      icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/smile-icon.png",
      alt: "smile icon",
    },
    {
      icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/tagged-icon.png",
      alt: "tagged icon",
    },
  ];

  const bottomBarButtons: BottomBarButton[] = [
    {
      icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/home-icon.png",
      alt: "home icon",
      active: false,
    },
    {
      icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/search-icon.png",
      alt: "search icon",
      active: true,
    },
    {
      icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/add-icon.png",
      alt: "add icon",
      active: false,
    },
    {
      icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/heart-icon.png",
      alt: "heart icon",
      active: false,
    },
    {
      icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/profile-picture.png",
      alt: "profile picture",
      active: false,
    },
  ];

  return (
    <div className="max-w-[350px] rounded-lg z-10">
      <section className="flex justify-between items-center pt-8 px-4 border-b mt-4">
        <Image src={back} alt="Back" className="w-6" />
        <div className="flex items-center">
          <h1 className="text-lg font-bold">{username ? username : "Instagram"}</h1>
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/kisspng-social-media-instagram-verified-badge-symbol-compu-5b1eedb5aba638.1612204615287535897031.jpg"
            alt="verified"
            width={20}
            height={20}
            className="w-4 ml-2"
          />
        </div>
        <Image src={more} alt="More" className="w-6" />
      </section>

      <section className="flex items-center p-4 space-x-4">
        <div
          className="w-20 h-20 rounded-full border flex items-center justify-center"
        >
           <Image src={instagram} alt="More"  className="rounded-full" />
        </div>
        <div className="flex-grow flex justify-around text-center">
          <div>
            <p className="text-lg font-bold">6,126</p>
            <p className="text-sm text-gray-500">Posts</p>
          </div>
          <div>
            <p className="text-lg font-bold">317 M</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-lg font-bold">225</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-2">
        <h2 className="text-lg font-semibold">{name ? name : "Instagram"}</h2>
        <p className="text-gray-600">{selectedBio}</p>
        <a
          href="https://socialmediatalky.com/tools"
          className="text-blue-500 text-sm"
        >
          www.socialmediatalky.com/tools
        </a>
        <p>{selectedCaption && selectedCaption}</p>
      </section>

      <section className="px-4 py-2 flex space-x-2">
        <button className="flex-1 py-1 bg-blue-500 text-white rounded">
          Follow
        </button>
        <button className="flex-1 py-1 border rounded">Message</button>
        <Image src={down} alt="More actions" className="w-6" />
      </section>

      <section className="px-4 py-2 flex overflow-x-auto space-x-4">
        {stories.map((story, idx) => (
          <div key={idx} className="flex-shrink-0 text-center">
            <div
              className="w-16 h-16 bg-cover bg-center rounded-full border mx-auto"
              style={{ backgroundImage: `url(${story.img})` }}
            ></div>
            <p className="text-sm mt-1">{story.text}</p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-4 gap-1 border-t">
        {tabs.map((tab, idx) => (
          <button key={idx} className="p-2">
            <Image src={tab.icon} alt={tab.alt} width={20} height={20} className="mx-auto" />
          </button>
        ))}
      </section>

      <section className="grid grid-cols-3 px-2 gap-[1px]">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative w-full h-24">
            <Image
              src={image.img}
              alt={image.alt}
              layout="fill"
            />
          </div>
        ))}
      </section>
      <section className="w-[350px] sticky bottom-0 flex justify-around items-center bg-white shadow p-2 border-t rounded-bl-[44px] rounded-br-[40px]">
        {bottomBarButtons.map((btn, idx) => (
          <Image
            key={idx}
            src={btn.icon}
            alt={btn.alt}
            width={20}
            height={20}
          />
        ))}
      </section>
    </div>
  );
};

export default InstagramProfile;
