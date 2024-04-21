import { useEffect, useState } from "react";
import axios from "axios";

export default function Men() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://fakestoreapi.com/products/category/men's clothing"
        );
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>MEN'S CLOTHING</h1>
      {data.map((men) => (
        <div key={men.id} className="product">
          <img src={men?.image} alt={men.title} />
          <h3>{men?.title}</h3>
          <p>Price: ${men?.price}</p>
          <p>Rating: {men?.rating.rate}</p>
        </div>
      ))}
    </div>
  );
}
