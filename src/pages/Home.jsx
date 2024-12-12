import React, { useState, useEffect } from "react";

// สมมุติว่าเราจะโหลดข้อมูลจาก data.json
import blogData from '../../db.json';

const BlogCard = ({ blog, onClick }) => {
  return (
    <div
      className="card w-96 bg-white shadow-lg mb-6  cursor-pointer "
      onClick={() => onClick(blog.id)} // คลิกเพื่อขยายการ์ด
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{blog.title}</h3>
        <p className="text-sm text-gray-600">{blog.summary}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null); // ใช้เพื่อจัดการการขยายการ์ด

  useEffect(() => {
    // สมมุติว่าเราจะโหลดข้อมูลจากไฟล์ data.json
    setBlogs(blogData);
  }, []);

  const handleCardClick = (id) => {
    // เปลี่ยนสถานะ selectedBlog ให้เป็นบล็อกที่ถูกเลือก
    setSelectedBlog((prevBlog) =>
      prevBlog && prevBlog.id === id ? null : blogs.find((blog) => blog.id === id)
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Blog Home</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onClick={handleCardClick} // ส่งฟังก์ชัน handleCardClick
          />
        ))}
      </div>

      {/* แสดงข้อมูลของบล็อกที่ถูกเลือก */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full">
            <h2 className="text-3xl font-bold mb-4">{selectedBlog.title}</h2>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-lg mb-4">{selectedBlog.content}</p>
            <button
              className="btn btn-outline btn-warning"
              onClick={() => setSelectedBlog(null)} // คลิกปิดการแสดงข้อมูล
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
