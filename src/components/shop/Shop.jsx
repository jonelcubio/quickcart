import { Header } from "../index/Header";
import {Filters} from "../shop/Filters.jsx";
import { ShopBreadcrumbs } from "./ShopBreadcrumbs.jsx";

export function Shop() {
  return(
   
      <>
      <Header />
      <ShopBreadcrumbs />
      <Filters />
      </>
    
  );
}   