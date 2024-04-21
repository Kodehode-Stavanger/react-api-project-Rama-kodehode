import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Homepage() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://fakestoreapi.com/products/");
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (location.pathname === "/") {
      fetchData();
    }
  }, [location.pathname]);

  return (
    <div className="home">
      <NavLink to={"/"}>HOME</NavLink>
      <NavLink className={"categories"} to={"/men"}>
        Men
      </NavLink>
      <NavLink className={"categories"} to={"/women"}>
        Women
      </NavLink>
      <NavLink className={"categories"} to={"/electronics"}>
        Electronics
      </NavLink>
      <NavLink className={"categories"} to={"/jewelery"}>
        Jewelery
      </NavLink>
      <Outlet />

      {location.pathname === "/" && data.length > 0 && (
        <div className="products">
          {data.map((e) => (
            <div key={e.id} className="product">
              <img src={e?.image} alt={e.title} />
              <h3>{e?.title}</h3>
              <p>Price: ${e?.price}</p>
              <p>Rating: {e?.rating.rate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
