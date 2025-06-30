import { Link } from "react-router-dom";

export function Hero() {
  return(
    <main className="hero-main">

      <div className="hero-con">
        <span className="hero-text">FIND PRODUCTS<br></br> THAT MATCHES <br></br>YOUR STYLE.</span>
        <div className="hero-des">Browse through diverse range of meticulously crafted items, designed<br></br> to bring out your individuality to your sense of style.</div>

        <div className="hero-button-con">
          <Link to="/shop"><button className="hero-button">Shop Now</button></Link>
        </div>


        <div className="hero-stats-con">

          <div className="hero-stats-list">
            <div className="hero-stats-num">200+</div>
            <div className="hero-stats-text">International Brands</div>
          </div>

          <div className="hero-stats-list">
            <div className="hero-stats-num">2,000+</div>
            <div className="hero-stats-text">High-Quality Products</div>
          </div>

          <div className="hero-stats-list">
            <div className="hero-stats-num">30,000+</div>
            <div className="hero-stats-text">Happy Customers</div>
          </div>
        </div>
      </div>
    </main>

  );
}