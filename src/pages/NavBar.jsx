import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
          padding: 0,
          margin: 0,
          fontSize: "50px",
        }}
      >
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </li>
        {categories.map((data) => (
          <li key={data}>
            <Link
              to={`/category/${data}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                textTransform: "capitalize",
              }}
            >
              {data}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
