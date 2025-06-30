import { Header } from "../index/Header";
import {Filters} from "../shop/Filters.jsx";
import rightside from "../../assets/rightside.svg";
import { Link } from "react-router-dom";
import axios from "axios";

export function Shop() {
  return(
   
      <>
      <Header />
      <div className="shop-con">
        <Link to="/"><div className="shop-list">Home</div></Link>
        <div className="shop-link-img-con">
          <img src={rightside} alt="right arrow" className="shop-link-img" />
        </div>
        <Link to="/shop"><div className="shop-list">Shop</div></Link>
      </div>

      <Filters />
      </>
    
  );
}   