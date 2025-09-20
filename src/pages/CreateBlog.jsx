
// import { useState } from "react";
// import QuoteOfTheDay from "../components/QuoteOfTheDay";   // ✅ import

// export default function CreateBlog({ blogs, setBlogs }) {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title || !content) return alert("Please share a title and your message!");

//     const newBlog = {
//       id: Date.now(),
//       title,
//       content,
//       date: new Date().toLocaleString(),
//     };
//     //setBlogs([...blogs, newBlog]);
//     setBlogs([newBlog, ...blogs]); 
//     setTitle("");
//     setContent("");
//     alert("Your motivational blog has been published ✅");
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg border border-orange-200">
//       {/* ✅ Quote of the Day */}
//       <QuoteOfTheDay />

//       <h2 className="text-3xl font-bold text-orange-600 mb-4 text-center underline ">Share Motivation</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Give your post an inspiring title..."
//           className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Write your motivational story or quote..."
//           className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
//           rows="6"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded transition">
//           Inspire Others
//         </button>
//       </form>
//     </div>
//   );
// }


import { useState } from "react";
import QuoteOfTheDay from "../components/QuoteOfTheDay"; // ✅ import

export default function CreateBlog({ blogs, setBlogs }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("success"); // 🏷️ new state for tag

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Please share a title and your message!");

    const newBlog = {
      id: Date.now(),
      title,
      content,
      tag, // 🏷️ add tag here
      date: new Date().toLocaleString(),
    };

    setBlogs([newBlog, ...blogs]);
    setTitle("");
    setContent("");
    setTag("success"); // reset tag
    alert("Your motivational blog has been published ✅");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg border border-orange-200">
      {/* ✅ Quote of the Day */}
      <QuoteOfTheDay />

      <h2 className="text-3xl font-bold text-orange-600 mb-4 text-center underline">
        Share Motivation
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Blog Title */}
        <input
          type="text"
          placeholder="Give your post an inspiring title..."
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Blog Content */}
        <textarea
          placeholder="Write your motivational story or quote..."
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* 🏷️ Blog Tag */}
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="success">Success</option>
          <option value="failure">Failure</option>
          <option value="life">Life</option>
          <option value="health">Health</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded transition"
        >
          Inspire Others
        </button>
      </form>
    </div>
  );
}
