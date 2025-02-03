import Image from "next/image";
import loader from "@/assets/loader.svg";
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[300px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  );
};

export default Loader;
