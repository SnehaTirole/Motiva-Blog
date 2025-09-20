import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="font-bold text-2xl tracking-wide">MotivaBlog </h1>
      <div className="space-x-6 font-medium">
        <Link to="/" className="hover:underline">Create</Link>
        <Link to="/view" className="hover:underline">Read</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>
    </nav>
  );
}
