import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-4 flex justify-between items-center shadow-md">
      <img src={logo} className="h-13  m-0"></img>
      <h1 className="font-bold text-3xl tracking-wide ">MotivaBlog </h1>
      <div className="space-x-6 font-medium">
        <Link to="/" className="hover:underline">Create</Link>
        <Link to="/view" className="hover:underline">Read</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>
    </nav>
  );
}
