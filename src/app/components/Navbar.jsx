import { FaApple } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="font-xl py-6 text-white">
      <nav className="flex cursor-pointer items-center justify-between py-6">
        <FaApple size={60} />
        <ul className="text-m flex items-center gap-18 font-medium">
          <li>Mac</li>
          <li>iPhone</li>
          <li>iPad</li>
          <li>
            <button className="rounded-2xl bg-white px-6 py-1 text-[#b6ccda]">
              iWatch
            </button>
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
