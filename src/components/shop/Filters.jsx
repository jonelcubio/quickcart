import filter from "../../assets/filter.svg";
import rightside from "../../assets/rightside.svg";

export function Filters(){

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
      
    </main>
  );
}