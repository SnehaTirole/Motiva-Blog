// import { useState } from "react";

// export default function ViewBlogs({ blogs, setBlogs }) {
//   const [editId, setEditId] = useState(null);
//   const [editTitle, setEditTitle] = useState("");
//   const [editContent, setEditContent] = useState("");

//   const handleDelete = (id) => {
//     if (window.confirm("Delete this motivational post?")) {
//       setBlogs(blogs.filter((b) => b.id !== id));
//     }
//   };

//   const startEdit = (blog) => {
//     setEditId(blog.id);
//     setEditTitle(blog.title);
//     setEditContent(blog.content);
//   };

//   const saveEdit = () => {
//     setBlogs(
//       blogs.map((b) =>
//         b.id === editId ? { ...b, title: editTitle, content: editContent } : b
//       )
//     );
//     setEditId(null);
//   };
// if (!Array.isArray(blogs)) {
//   return <p className="text-center text-red-500">⚠️ Error: Blogs data is invalid.</p>;
// }

//   return (
//     <div className="max-w-3xl mx-auto">
//       <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">Motivational Stories 🌟</h2>
//       {blogs.length === 0 && <p className="text-center text-gray-500">No posts yet. Be the first to inspire!</p>}
//       <div className="space-y-6">
//         {blogs.map((blog) => (
//           <div key={blog.id} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-lg shadow-lg border border-orange-200">
//             {editId === blog.id ? (
//               <>
//                 <input
//                   type="text"
//                   value={editTitle}
//                   onChange={(e) => setEditTitle(e.target.value)}
//                   className="w-full border p-2 mb-2 rounded"
//                 />
//                 <textarea
//                   value={editContent}
//                   onChange={(e) => setEditContent(e.target.value)}
//                   className="w-full border p-2 mb-2 rounded"
//                 />
//                 <button onClick={saveEdit} className="bg-green-600 text-white px-3 py-1 rounded mr-2">Save</button>
//                 <button onClick={() => setEditId(null)} className="bg-gray-400 text-white px-3 py-1 rounded">Cancel</button>
//               </>
//             ) : (
//               <>
//                 <h3 className="text-xl font-semibold text-orange-700 underline">{blog.title}</h3>
//                 <p className="text-gray-700 mt-2">{blog.content}</p>
//                 <p className="text-sm text-gray-500 mt-1"> {blog.date}</p>
//                 <div className="mt-3 space-x-3">
//                   <button onClick={() => startEdit(blog)} className="bg-blue-600 text-white px-3 py-1 rounded">Edit</button>
//                   <button onClick={() => handleDelete(blog.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

export default function ViewBlogs({ blogs, setBlogs }) {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // 🔎 search state
  const [sortOrder, setSortOrder] = useState("newest"); // ⬆️ sort state
  const [selectedTag, setSelectedTag] = useState("all"); // 🏷️ filter state

  // ✅ Delete a blog
  const handleDelete = (id) => {
    if (window.confirm("Delete this motivational post?")) {
      setBlogs(blogs.filter((b) => b.id !== id));
    }
  };

  // ✅ Start editing
  const startEdit = (blog) => {
    setEditId(blog.id);
    setEditTitle(blog.title);
    setEditContent(blog.content);
  };

  // ✅ Save edited blog
  const saveEdit = () => {
    setBlogs(
      blogs.map((b) =>
        b.id === editId ? { ...b, title: editTitle, content: editContent } : b
      )
    );
    setEditId(null);
  };

  // 🚨 Safety check
  if (!Array.isArray(blogs)) {
    return (
      <p className="text-center text-red-500">
        ⚠️ Error: Blogs data is invalid.
      </p>
    );
  }

  // 🔎 Filter + Search + Sort
  let filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedTag !== "all") {
    filteredBlogs = filteredBlogs.filter((blog) =>
      blog.tag?.toLowerCase() === selectedTag.toLowerCase()
    );
  }

  if (sortOrder === "newest") {
    filteredBlogs = filteredBlogs.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  } else if (sortOrder === "oldest") {
    filteredBlogs = filteredBlogs.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  } else if (sortOrder === "title") {
    filteredBlogs = filteredBlogs.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
        Motivational Stories 
      </h2>

      {/* 🔎 Search + Sort + Filter Controls */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search blogs..."
          className="border p-2 rounded w-full md:flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="title">Sort by Title</option>
        </select>

        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All Tags</option>
          <option value="success">Success</option>
          <option value="failure">Failure</option>
          <option value="life">Life</option>
          <option value="health">Health</option>
        </select>
      </div>

      {/* 📝 Blogs List */}
      {filteredBlogs.length === 0 && (
        <p className="text-center text-gray-500">
          No posts found. Try another keyword!
        </p>
      )}

      <div className="space-y-6">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-lg shadow-lg border border-orange-200"
          >
            {editId === blog.id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full border p-2 mb-2 rounded"
                />
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full border p-2 mb-2 rounded"
                />
                <button
                  onClick={saveEdit}
                  className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditId(null)}
                  className="bg-gray-400 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-orange-700 underline">
                  {blog.title}
                </h3>
                <p className="text-gray-700 mt-2">{blog.content}</p>
                <p className="text-sm text-gray-500 mt-1">{blog.date}</p>
                {blog.tag && (
                  <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded mt-2 inline-block">
                    #{blog.tag}
                  </span>
                )}
                <div className="mt-3 space-x-3">
                  <button
                    onClick={() => startEdit(blog)}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


