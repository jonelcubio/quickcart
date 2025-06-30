import { Home } from "./components/index/Home";
import { ShopPreview } from "./components/index/ShopPreview";
import { Shop } from "./components/shop/Shop";
import {Routes, Route} from "react-router-dom"


export function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      {/* Add more routes here as needed */}
    </Routes>
  );

}