import React from "react";
import Image from "next/image";
import iphone from "@/assets/phone.png";
import InstagramProfile from "@/components/InstagramProfile";
import FacebookProfile from "./FacebookProfile";
import TwitterProfile from "./TwitterProfile";
import TiktokProfile from "./TiktokProfile";

interface MobileViewProps {
  platform: string;
  selectedBio?: string;
  username?: string;
  name?: string;
  selectedCaption?: string;
}

const MobileView: React.FC<MobileViewProps> = ({
  selectedBio,
  username,
  name,
  selectedCaption,
  platform,
}) => {
  return (
    <div className="phone-container">
      <Image
        src={iphone}
        height={600}
        alt="iPhone mockup"
        className="iphone absolute z-2 pointer-events-none"
      />
      {platform === "instagram" && (
        <InstagramProfile
          selectedBio={selectedBio}
          username={username}
          name={name}
          selectedCaption={selectedCaption}
        />
      )}
      {platform === "facebook" && <FacebookProfile  selectedBio={selectedBio}/>}
      {platform ==="twitter" && <TwitterProfile selectedBio={selectedBio}/>}
      {platform==="tiktok" && <TiktokProfile selectedBio={selectedBio} selectedCaption={selectedCaption}/>}
    </div>
  );
};

export default MobileView;
