import { useEffect, useState } from "react";
import axios from "axios";
import "./Categories.css";

export default function Woman() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://fakestoreapi.com/products/category/women's clothing"
        );
        setData(result.data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
  });
  return (
    <div>
      <h1>WOMAN`S CLOTHING</h1>
      {data.map((woman) => (
        <div key={woman.id} className="product">
          <img src={woman?.image} alt={woman.title} />
          <h3>{woman?.title}</h3>
          <p>Rating: {woman?.rating.rate}</p>
          <p>Price: ${woman?.price}</p>
        </div>
      ))}
    </div>
  );
}
