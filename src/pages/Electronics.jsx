import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

export default function Woman() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://fakestoreapi.com/products/category/electronics"
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
      <h1>ELECTRONICS</h1>
      {data.map((electronics) => (
        <div key={electronics.id} className="product">
          <img src={electronics?.image} alt={electronics.title} />
          <h3>{electronics?.title}</h3>
          <p>Price: ${electronics?.price}</p>
          <p>Rating: {electronics?.rating.rate}</p>
        </div>
      ))}
    </div>
  );
}
