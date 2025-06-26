import { Header } from "./components/index/Header";
import { Hero } from "./components/index/Hero";
import { Shop } from "./components/index/Shop";
import { PreFooter } from "./components/index/PreFooter";
import { Footer } from "./components/index/Footer";
import {Routes, Route} from 'react-router-dom';
import { ShopItem } from "./components/shop/ShopItem";



export function App() {
  return(
    <>
    <Header />
    <Hero />
    <Shop />
    <PreFooter />
    <Footer />

    <Routes>
      <Route path="/" element={<Shop />} />
        <Route path="/shop/:id" element={<ShopItem />} />
    </Routes>
    </>
  );

}