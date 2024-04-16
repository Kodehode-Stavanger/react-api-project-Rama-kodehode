import { useState, useEffect } from "react";
import axios from "axios";

export default function Electronics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://fakestoreapi.com/products/category/electronics"
        );
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

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
