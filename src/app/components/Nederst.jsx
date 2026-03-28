import Image from "next/image";

const Nederst = ({ activeWatchImage, setActiveWatchImage }) => {
  return (
    <div className="nederst">
      <p>← 1 →</p>
      <div className="watch_list">
        <div className="watch_card">
          <div className="watch_bg navy"></div>
          <Image
            src="/navy.png"
            width={100}
            height={100}
            alt="Apple logo"
            className="watch_img"
            onClick={() => setActiveWatchImage("/navy.png")}
          />
        </div>
        <div className="watch_card">
          <div className="watch_bg mint"></div>
          <Image
            src="/mint (1).png"
            width={100}
            height={100}
            alt="Apple logo"
            className="watch_img"
            onClick={() => setActiveWatchImage("/mint (1).png")}
          />
        </div>
        <div className="watch_card">
          <div className="watch_bg ocean"></div>
          <Image
            src="/ocean.png"
            width={100}
            height={100}
            alt="Apple logo"
            className="watch_img"
            onClick={() => setActiveWatchImage("/ocean.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default Nederst;
