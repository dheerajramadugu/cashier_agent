import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full bg-black text-white p-4 flex items-center justify-between shadow">
      <h1 className="text-xl font-bold">🍕 Pizza Store</h1>
      <nav className="flex gap-6 text-lg">
        <Link to="/menu">Menu</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </div>
  );
}
