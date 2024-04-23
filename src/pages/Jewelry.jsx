import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

export default function Woman() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://fakestoreapi.com/products/category/jewelery"
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
