import Image from "next/image";

const Nederst = ({ activeWatchImage, setActiveWatchImage }) => {
  return (
    <div className="mb-6 flex items-center justify-between py-6">
      <p className="font-3xl text-white">← 1 →</p>
      <div className="flex gap-9">
        <div className="relative inline-block">
          <div className="absolute bottom-0 left-0 h-[70%] w-[100%] rounded-xl bg-slate-700/60"></div>
          <Image
            src="/navy.png"
            width={100}
            height={100}
            alt="Apple logo"
            className="relative z-10 transition-transform duration-300 hover:scale-110"
            onClick={() => setActiveWatchImage("/navy.png")}
          />
        </div>
        <div className="relative inline-block">
          <div className="absolute bottom-0 left-0 h-[70%] w-[100%] rounded-xl bg-[rgba(106,221,204,0.6)]"></div>
          <Image
            src="/mint (1).png"
            width={100}
            height={100}
            alt="Apple logo"
            className="relative z-10 transition-transform duration-300 hover:scale-110"
            onClick={() => setActiveWatchImage("/mint (1).png")}
          />
        </div>
        <div className="relative inline-block">
          <div className="absolute bottom-0 left-0 h-[70%] w-[100%] rounded-xl bg-[rgba(93,175,222,0.6)]"></div>
          <Image
            src="/ocean.png"
            width={100}
            height={100}
            alt="Apple logo"
            className="relative z-10 transition-transform duration-300 hover:scale-110"
            onClick={() => setActiveWatchImage("/ocean.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default Nederst;
