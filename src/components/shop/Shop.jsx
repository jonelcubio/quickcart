import { Header } from "../index/Header";
import {Filters} from "../shop/Filters.jsx";
import rightside from "../../assets/rightside.svg";
import { Link } from "react-router-dom";
import { ShopProducts } from "./ShopProducts.jsx";
import { ShopBreadcrumbs } from "./ShopBreadcrumbs.jsx";

export function Shop() {
  return(
   
      <>
      <Header />
      <ShopBreadcrumbs />
        

      <div className="shop-flex">
        <Filters />
        <ShopProducts />
      </div>
      </>
    
  );
}   