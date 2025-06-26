import { Header } from "./components/index/Header.jsx";
import { Route, Routes } from "react-router-dom";
import { Hero } from "./components/index/Hero.jsx";
import { Shop } from "./components/index/Shop.jsx";
import { PreFooter } from "./components/index/PreFooter.jsx";
import { Footer } from "./components/index/Footer.jsx";
import {ShopItem} from "./components/shop/ShopItem.jsx";


export function App() {
  return(
    <>
    <Header />

    <Routes>
      {/* Homepage */}
      <Route path="/" element={
        <>
          <Hero />
          <Shop />
          <PreFooter />
        </>
      } />

      {/* Shop Page */}
      <Route path="/shop/:id" element={<ShopItem />} />
    </Routes>

    <Footer />
    </>
  );

}