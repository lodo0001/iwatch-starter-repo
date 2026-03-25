import Navbar from "./components/Navbar";
import Indhold from "./components/Indhold";
import BuyNow_btn from "./components/BuyNow_btn";
import Nederst from "./components/Nederst";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Indhold />
        <BuyNow_btn />
        <Nederst />
      </main>
    </div>
  );
}
