import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import PostService from "../services/post.service";
import Swal from "sweetalert2";
import { useAuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext"; // นำเข้า ThemeContext
const baseURL = import.meta.env.VITE_PIC_URL;

import { format } from "date-fns";

const PostDetail = () => {
  const [postDetail, setPostDetail] = useState(null);
  const { id } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext); // ใช้ context เพื่อเข้าถึงธีม

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await PostService.getPostById(id);
        if (response.status === 200) {
          setPostDetail(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Post Detail",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = () => {
    Swal.fire({
      title: "Delete",
      text: "Do you want to delete this post?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        PostService.DeleteById(id); // เรียกใช้ฟังก์ชัน delete
        Swal.fire({
          title: "Delete Post",
          text: "Delete successfully",
          icon: "success",
        }).then(() => {
          navigate("/");
        });
      }
    });
  };

  if (!postDetail) return <div>NOT FOUND</div>;

  return (
    <div
      className={`post-page win-h-full min-w-full flex items-center justify-center p-4 pt-20 text-center ${
        theme === "light" ? "bg-white" : "bg-gray-900"
      }`}
    >
      <div
        className={`${
          theme === "light" ? "bg-white" : "bg-gray-900"
        } p-8 rounded shadow-lg w-full max-w-4xl`}
      >
        <h1 className="text-3xl font-bold mb-4">
          {postDetail.title}
        </h1>

        <div className="text-gray-600 mb-4 text-center">
          <time className="block mb-2">
            {format(postDetail.createdAt, "dd MMMM yyyy HH:mm")}
          </time>
          <div className="author mb-2">
          <span className="text-blue-500">@<a href={`/author/${postDetail.author._id}`}>{postDetail.author.username}</a></span>
          </div>
        </div>
        {user.id === postDetail.author._id && (
          <div className="edit-row mb-4 text-center flex items-center justify-center gap-2">
            <a href={`/edit/${postDetail._id}`} className="btn btn-warning">
              Edit Post
            </a>
            <a
              className="btn btn-error"
              onClick={() => handleDelete(postDetail._id)}
            >
              Delete Post
            </a>
          </div>
        )}
        <img
          src={`${baseURL}/${postDetail.cover}`}
          alt={postDetail.title}
          className="w-full h-64 object-cover mb-4"
        />
        <div
          className={`content ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
          dangerouslySetInnerHTML={{ __html: postDetail.content }}
        ></div>
      </div>
    </div>
  );
};

export default PostDetail;
