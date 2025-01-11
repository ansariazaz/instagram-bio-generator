import React from "react";
import Image from "next/image";
import iphone from "@/assets/phone.png"; 
import InstagramProfile from "@/components/InstagramProfile";

interface MobileViewProps {
  selectedBio?: string;
  username?:string;
  name?:string;
  selectedCaption?:string
}

const MobileView: React.FC<MobileViewProps> = ({ selectedBio,username,name,selectedCaption }) => {
  return (
    <div className="phone-container">
      <Image src={iphone} alt="iPhone mockup" className="iphone absolute z-2 pointer-events-none" />
      <InstagramProfile selectedBio={selectedBio} username={username} name={name} selectedCaption={selectedCaption}/>
    </div>
  );
};

export default MobileView;
