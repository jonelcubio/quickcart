import filter from "../../assets/filter.svg";
import rightside from "../../assets/rightside.svg";
import { useState } from "react";

export function Filters(){

  const [priceRange, setPriceRange] = useState(100);
  const [selectedColor, setSelectedColor] = useState("");

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

  return(
    <main className="filters-main">

      <div className="filter-con">
        <div className="filter-name">Filters</div>
        <div className="filter-img-con">
          <img src={filter} alt="filters" className="filter-img" />
        </div>
      </div>

        <div className="filter-options-con">
          <div className="filter-options-list">
            <div className="foptions-list">Men</div>
            <div className="foptions-list">Women</div>
            <div className="foptions-list">Jewelry</div>
            <div className="foptions-list">Electronics</div>
          </div>
        </div>

        <div className="filter-slider-con">
          <div className="filter-slider-title">Price</div>
          <input type="range" min="10" max="200" className="filter-slider" onChange={handlePriceChange}/>

          <div className="filter-slider-value">${priceRange}</div>
        </div>

        <div className="colors-options-con">
          <div className="colors-options-title">Colors</div>
          <div className="colors-options-list">
            <div className="foptions-list-green">&nbsp;</div>
            <div className="foptions-list-red">&nbsp;</div>
            <div className="foptions-list-yellow">&nbsp;</div>
            <div className="foptions-list-orange">&nbsp;</div>
            <div className="foptions-list-skyblue">&nbsp;</div>
            <div className="foptions-list-blue">&nbsp;</div>
            <div className="foptions-list-violet">&nbsp;</div>
            <div className="foptions-list-pink">&nbsp;</div>
            <div className="foptions-list-white">&nbsp;</div>
            <div className="foptions-list-black">&nbsp;</div>
          </div>
        </div>

    </main>
  );
}