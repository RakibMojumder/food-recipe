import gif from "@/../public/loader.gif";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed h-screen w-full inset-0 bg-white/50 z-50 flex justify-center items-center">
      <Image src={gif} alt="gif" width={50} height={50} />
    </div>
  );
};

export default Loader;
