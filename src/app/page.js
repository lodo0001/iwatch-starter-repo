"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Indhold from "./components/Indhold";
import BuyNow_btn from "./components/BuyNow_btn";
import Nederst from "./components/Nederst";

export default function Home() {
  const [activeWatchImage, setActiveWatchImage] = useState("/navy.png");

  return (
    <div className="container">
      <Navbar />
      <main>
        <Indhold
          activeWatchImage={activeWatchImage}
          setActiveWatchImage={setActiveWatchImage}
        />
        <BuyNow_btn />
        <Nederst
          activeWatchImage={activeWatchImage}
          setActiveWatchImage={setActiveWatchImage}
        />
      </main>
    </div>
  );
}
