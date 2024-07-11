import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";

const baseUrl = import.meta.env.VITE_API_URL + "/getAllBlogs";

const Blogs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const tempuser = localStorage.getItem("user");
  const user = JSON.parse(tempuser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(baseUrl);
        const data = res.data.data;
        setBlogs(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
        toast.error(error?.response?.data?.message);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Blogs</h2>
          {user?.accountType === "Admin" || user?.accountType === "SuperAdmin" ? (
            <Link
              className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 flex items-center"
              to="/createBlog"
            >
              <FaPlus className="mr-2" /> Create New Blog
            </Link>
          ) : null}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  <Link to={`/blogs/${blog._id}`} className="hover:text-blue-600 transition-colors duration-200">
                    {blog.title.replace(/"/g, "")}
                  </Link>
                </h3>
                <p className="text-gray-600 line-clamp-3">{blog.description || "No description available."}</p>
                <Link 
                  to={`/blogs/${blog._id}`}
                  className="mt-4 inline-block px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;