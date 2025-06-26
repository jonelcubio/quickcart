import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function ShopItem() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{maxWidth: 200}} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* Add more product details as needed */}
    </div>
  );
}