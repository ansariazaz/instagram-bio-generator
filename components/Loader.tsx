import Image from "next/image";
import loader from "@/assets/loader.svg";
const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[100px] mt-4">
      <Image src={loader} alt="Loading..." width={100} height={100}  />
    </div>
  );
};

export default Loader;
