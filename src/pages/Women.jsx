import { useEffect, useState } from "react";
import axios from "axios";
import "./Categories.css";
import Loading from "./Loading";

export default function Woman() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://fakestoreapi.com/products/category/women's clothing"
        );
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error", error);
        setIsLoading(false);
      }
    };
    fetchData();
  });

  if (isLoading) {
    return <Loading />;
  }
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
