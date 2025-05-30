import {useState, useEffect} from 'react';
import axios from 'axios';
import testimonials from '../../data/testimonials';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';
import green from '../../assets/green.png';
import mail from '../../assets/mail.svg';


export function IndexShop() {
  const [data, setData] = useState([]);

  {/* Fetch data from the API when the component mounts */
  {/* This will run once when the component is first rendered */}
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => {
      setData(res.data);
      console.log('Data fetched successfully:', res.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [])

  return(
    <main className="indexShop-main">
      <div className="indexShop-category-title-con">
        <div className="indexShop-category-title">NEW ARRIVALS</div>
      </div>

      <div className="indexShop-products-con">
          {data.slice(0,4).map((item => (
            <div className="indexShop-products-list" key={item.id}>
              <div className="indexShop-product-image">
                <img src={item.image} alt={item.title} className="indexShop-image"/>
              </div>

              <div className="indexShop-product-title">{item.title}</div>
              <div className="indexShop-product-rating">{item.rating.rate}⭐</div>
              <div className="indexShop-product-price">${item.price}</div>
            </div>
          )
          ))}
      </div>

      <div className="indexShop-viewall">View All</div>

        <div className="indexShop-category-title-con">
        <div className="indexShop-category-title title">TOP SELLING</div>

        <div className="indexShop-products-con">
        {data.slice(5,9).map((item => (
          <div className="indexShop-products-list" key={item.id}>
            <div className="indexShop-product-image">
              <img src={item.image} alt={item.title} className="indexShop-image"/>
            </div>

            <div className="indexShop-product-title">{item.title}</div>
            <div className="indexShop-product-rating">{item.rating.rate}⭐</div>
            <div className="indexShop-product-price">${item.price}</div>
          </div>
        )
        ))}
      </div>

      <div className="indexShop-viewall">View All</div>

        <div className="category-flex">
          <div className="title happy-customers">OUR HAPPY CUSTOMERS</div>
        </div>

        <div className="indexShop-testimonials-con">
          {testimonials.map((test) => (
            <div className="indexShop-testimonials-list" key={test.id}>
              <div className="indexShop-testimonials-stars">{test.stars}⭐</div>

              <div className="indexShop-testimonials-name-list">
                <div className="indexShop-testimonials-name">{test.name}</div>
                <img src={green} alt="verified testimonial" className='indexShop-testimonials-check' />
              </div>

              <div className="indexShop-testimonials-message">{test.message}</div>
            </div>
          ))}
        </div>


        <div className="indexShop-latest-list">
          <span className="indexShop-latest-title">STAY UP TO DATE ABOUT<br></br>OUR LATEST OFFERS</span>

          <div className="indexShop-latest-button-list">
            <div className="indexShop-input-list">
              <img src={mail} alt="Enter your email address" className='indexShop-mail' />
              <input type="email" placeholder="Enter your email address" className='indexShop-input' />
            </div>

            <button className="indexShop-button">Subscribe to Newsletter</button>
          </div>
        </div>

      </div>
    </main>
  );
}}