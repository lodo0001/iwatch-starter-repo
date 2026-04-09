import Image from "next/image";
import H1 from "./H1";

const Indhold = ({ activeWatchImage, setActiveWatchImage }) => {
  return (
    <div className="flex items-center justify-between justify-items-center py-2.5">
      <H1 />
      <Image src={activeWatchImage} alt="iWatch" width={450} height={450} />
      <div className="grid justify-items-center gap-2">
        <span
          className={`h-10 w-10 cursor-pointer rounded-full bg-[#434558] ${
            activeWatchImage === "/navy.png" ? "border-3 border-white" : ""
          }`}
          onClick={() => setActiveWatchImage("/navy.png")}
        ></span>
        <span className="h-1 w-1 rounded-full bg-white"></span>
        <span className="h-1 w-1 rounded-full bg-white"></span>
        <span className="h-1 w-1 rounded-full bg-white"></span>
        <span className="h-1 w-1 rounded-full bg-white"></span>
        <span className="h-1 w-1 rounded-full bg-white"></span>
        <span
          className={`h-10 w-10 cursor-pointer rounded-full bg-[#6addcc] ${
            activeWatchImage === "/mint (1).png" ? "border-3 border-white" : ""
          }`}
          onClick={() => setActiveWatchImage("/mint (1).png")}
        ></span>
        <span className="h-1 w-1 rounded-full bg-white"></span>
        <span className="h-1 w-1 rounded-full bg-white"></span>
        <span className="h-1 w-1 rounded-full bg-white"></span>
        <span className="h-1 w-1 rounded-full bg-white"></span>
        <span className="h-1 w-1 rounded-full bg-white"></span>
        <span
          className={`h-10 w-10 cursor-pointer rounded-full bg-[#a8d7ee] ${
            activeWatchImage === "/ocean.png" ? "border-3 border-white" : ""
          }`}
          onClick={() => setActiveWatchImage("/ocean.png")}
        ></span>
      </div>
    </div>
  );
};

export default Indhold;
