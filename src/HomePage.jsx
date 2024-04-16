import { Link, NavLink, Outlet } from "react-router-dom";
import "./index.css";
import Card from "./pages/Card";

export default function Homepage() {
  return (
    <div>
      <NavLink to={"/"}>HOME</NavLink>
      <Card />
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
    </div>
  );
}
