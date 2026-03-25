import { FaApple } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
