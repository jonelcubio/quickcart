import { useState, useEffect} from 'react';
import axios from 'axios';



export function ShopProducts() {
  
    const [data, setData] = useState([]);

  useEffect(()=> {
    axios.get('https://fakestoreapi.com/products')
    .then(res => {
      setData(res.data);
      console.log('Data fetched successfully:', res.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
  }, [])

  return (
    <main className="shopproducts-main">

    <div className="shopproducts-title-con">
      <div className="shopproducts-show">Showing 1-9 of {data.length} Products</div>

      <div className="shopproducts-sort-title">Sort by:</div>
      <div className="shopproducts-sort-con">
        <select className="shopproducts-sort-select">
          <option value="mostPopular">Most Popular</option>
          <option value="rating">Rating</option>
          <option value="lowest-price">Lowest Price</option>
        </select>
      </div>
    </div>

    <div className="shopproducts-con">
      {data.slice(0, 10).map(item => (
      <div className="shopproducts-list" key={item.id}>
        <div className="shopproducts-img-con">
          <img src={item.image} alt={item.title} className="indexShop-image-shopproducts" loading="lazy"/>
        </div>

        <div className="shopproducts-title">{item.title}</div>
        <div className="shopproducts-rating">{item.rating.rate}⭐</div>
        <div className="shopproducts-price">${item.price}</div>
      </div>
      ))}
    </div>

    </main>
  );
}