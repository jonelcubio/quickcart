import { useState, useEffect } from 'react';
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

    <div className="shopproducts-con">
      {data.map(item => (
      <div className="shopproducts-list" key={item.id}>
        <div className="shopproducts-img-con">
          <img src={item.image} alt={item.title} className="indexShop-image"/>
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