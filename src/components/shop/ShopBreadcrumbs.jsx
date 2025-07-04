import { Link } from "react-router-dom";
import rightside from "../../assets/rightside.svg";

export function ShopBreadcrumbs() {
  return(
    <main className="shop-breadcrumbs-main">
      <div className="shop-con">
        <Link to="/"><div className="shop-list">Home</div></Link>

        <div className="shop-link-img-con">
          <img src={rightside} alt="right arrow" className="shop-link-img" />
        </div>
        
        <Link to="/shop"><div className="shop-list">Shop</div></Link>
      </div>
    </main>
  );
}