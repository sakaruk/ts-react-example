import { Link, Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div style={{display:"flex", gap: "10px"}}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="out-of-stock">Out of stock</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}