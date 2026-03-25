import Image from "next/image";
import H1 from "./components/H1";
import { FaApple } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container">
      <header>
        <nav>
          <FaApple size={60} />
          <ul>
            <li>Mac</li>
            <li>iPhone</li>
            <li>iPad</li>
            <li>
              <button className="Iwatch_btn">iWatch</button>
            </li>
            <li>Support</li>
          </ul>
          <Image
            src="/Search and Cart.svg"
            width={80}
            height={80}
            alt="Apple logo"
          />
        </nav>
      </header>
      <main>
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
        <button className="BuyNow_btn">Buy Now</button>
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
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
