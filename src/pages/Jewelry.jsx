import { useEffect, useState } from "react";
import axios from "axios";

export default function Jewelery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://fakestoreapi.com/products/category/jewelery"
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
      <h1>JEWELERY</h1>
      {data.map((jewelery) => (
        <div key={jewelery.id} className="product">
          <img src={jewelery?.image} alt={jewelery.title} />
          <h3>{jewelery?.title}</h3>
          <p>Price: ${jewelery?.price}</p>
          <p>Rating: {jewelery?.rating.rate}</p>
        </div>
      ))}
    </div>
  );
}
