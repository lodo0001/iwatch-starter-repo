import Image from "next/image";
import H1 from "./H1";

const Indhold = ({ activeWatchImage, setActiveWatchImage }) => {
  return (
    <div className="H1AndImg">
      <H1 />
      <Image src={activeWatchImage} alt="iWatch" width={450} height={450} />
      <div className="dots">
        <span
          className="dot navy_dot"
          onClick={() => setActiveWatchImage("/navy.png")}
        ></span>
        <span className="dot_small"></span>
        <span className="dot_small"></span>
        <span className="dot_small"></span>
        <span className="dot_small"></span>
        <span className="dot_small"></span>
        <span
          className="dot mint_dot"
          onClick={() => setActiveWatchImage("/mint (1).png")}
        ></span>
        <span className="dot_small"></span>
        <span className="dot_small"></span>
        <span className="dot_small"></span>
        <span className="dot_small"></span>
        <span className="dot_small"></span>
        <span
          className="dot ocean_dot"
          onClick={() => setActiveWatchImage("/ocean.png")}
        ></span>
      </div>
    </div>
  );
};

export default Indhold;
