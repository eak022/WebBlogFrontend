import React, { useContext } from "react";
import { Link } from "react-router-dom"; // เพิ่มการนำเข้า Link
import { ThemeContext } from "../contexts/ThemeContext"; // นำเข้า ThemeContext

const baseURL = import.meta.env.VITE_PIC_URL;

const Post = ({ title, author, summary, cover, createdAt, _id }) => {
  const { theme } = useContext(ThemeContext); // ใช้ context เพื่อเข้าถึงธีม

  return (
    <div
      className={`card card-side bg-base-100 shadow-xl mb-6 w-full ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <figure className="md:w-1/2 flex items-center justify-center">
        <img
          src={`${baseURL}/${cover}`}
          alt={title}
          className="w-full h-64 object-cover"
        />
      </figure>
      <div className="p-6 md:w-1/2 flex flex-col card-body">
        {/* ใช้ Link เพื่อไปยังโพสเดิม */}
        <Link to={`/post/${_id}`} className="href">
          <h2 className="card-title text-xl font-bold">{title}</h2>
        </Link>
        <h4 className="text-gray-600">
          {author.username} - {createdAt}
        </h4>
        <p className="text-gray-800">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
