import search from '../../assets/search.svg';
import cart from '../../assets/cart.svg';
import profile from '../../assets/profile.svg';


export function Header() {
  return(
    <main className="header-main">

      <div className="header-uppertop-con">
        <span className="header-uppertop">Sign up and get 20% off to your first order.</span>
        <span className="header-uppertop-underline">Sign Up Now</span>
      </div>

      <div className="header-nav-con">
        <div className="header-brand">QUICKCART</div>

        <div className="header-nav-links">Shop</div>
        <div className="header-nav-links">On Sale</div>
        <div className="header-nav-links">New Arrivals</div>
        <div className="header-nav-links">Brands</div>

        <div className="header-search-list">
            <div className="header-search-img-con">
              <img src={search} alt="Search for products" className='header-search-img' />
            </div>
       
          
            <div className="header-search-input-con">
              <input type="text" placeholder="Search for products..." className='header-search-input' />
            </div>
          </div>

        <div className="header-cart-con">
          <img src={cart} alt="Cart" className='header-cart' />
        </div>

        <div className="header-profile-con">
            <img src={profile} alt="Profile" className='header-profile' />
        </div>
        
      </div>
    </main>
  );
}