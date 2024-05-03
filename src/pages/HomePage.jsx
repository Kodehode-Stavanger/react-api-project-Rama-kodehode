import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import Loading from "./Loading";

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://fakestoreapi.com/products/");
        setItems(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <div key={item.id} className={styles.product}>
          <img src={item.image} alt={item.title} />
          <h1>{item.title}</h1>
          <p>Price: ${item.price}</p>
          <p>Rating: {item.rating.rate}</p>
        </div>
      ))}
    </div>
  );
}
