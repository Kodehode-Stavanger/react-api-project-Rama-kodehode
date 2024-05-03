import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Loading from "./Loading";

export default function Categories() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://fakestoreapi.com/products/category/${categoryName}`
        );
        setProducts(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [categoryName]);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="categories-cont">
      <h1>{capitalizeFirstLetter(categoryName)}</h1>
      {products.map((product) => (
        <div key={product.id}>
          <div className="product">
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating.rate}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
