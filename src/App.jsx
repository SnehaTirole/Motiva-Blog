
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";   // ✅ new
import CreateBlog from "./pages/CreateBlog";
import ViewBlogs from "./pages/ViewBlogs";
import About from "./pages/About";
import { useState, useEffect } from "react";

export default function App() {
  const defaultBlogs = [
    { id: 1, title: "Believe in Yourself", content: "No matter how tough things get, always believe that you have the power to rise above challenges.", date: "2025-09-07 10:00 AM",tag:"Success" },
    { id: 2, title: "Consistency Wins", content: "Small efforts repeated daily turn into big results. Stay consistent and success will follow.", date: "2025-09-06 06:30 PM",tag:"Success" },
    { id: 3, title: "Failure is Growth", content: "Don’t fear failure. Every failure teaches you something new and brings you closer to success.", date: "2025-09-05 09:15 AM" ,tag:"Success"},
  ];


  const [blogs, setBlogs] = useState(() => {
  try {
    const saved = JSON.parse(localStorage.getItem("blogs"));
    // ✅ Ensure it's always an array
    return Array.isArray(saved) && saved.length > 0 ? saved : defaultBlogs;
  } catch {
    return defaultBlogs;
  }
});


  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-6 min-h-[80vh]">
        <Routes>
          <Route path="/" element={<CreateBlog blogs={blogs} setBlogs={setBlogs} />} />
          <Route path="/view" element={<ViewBlogs blogs={blogs} setBlogs={setBlogs} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />   {/* ✅ footer added */}
    </Router>
  );
}
