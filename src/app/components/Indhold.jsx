import Image from "next/image";
import H1 from "./H1";

const Indhold = () => {
  return (
    <div className="H1AndImg">
      <H1 />
      <Image src="/navy.png" width={450} height={450} alt="Apple logo" />
      <div className="dots">
        <span className="dot navy_dot"></span>
        <span className="dot_small"></span>
        <span className="dot_small"></span>
        <span className="dot_small"></span>
        <span className="dot_small"></span>
        <span className="dot_small"></span>
        <span className="dot mint_dot"></span>
        <span className="dot_small"></span>
        <span className="dot_small"></span>
        <span className="dot_small"></span>
        <span className="dot_small"></span>
        <span className="dot_small"></span>
        <span className="dot ocean_dot"></span>
      </div>
    </div>
  );
};

export default Indhold;
