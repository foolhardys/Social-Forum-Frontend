import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SmallLoader from "../Components/SmallLoader";

const createBlog = import.meta.env.VITE_API_URL + '/createBlog'

const CreateBlog = () => {

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'blog',
    thumbnail: null,
    images: [],
  });
  const [requestLoader, setRequestLoader] = useState(false)
  const navigate = useNavigate()
  const tempuser = localStorage.getItem('user')
  const user = JSON.parse(tempuser)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  const handleFileChange = (e) => {
    const { name, files } = e.target;

    if (files.length > 1) {
      const images = [];
      for (let i = 0; i < files.length; i++) {
        images.push(files[i]);
      }
      console.log(images);
      setFormData({
        ...formData,
        [name]: images,
      });
    } else {
      setFormData({
        ...formData,
        [name]: files[0],
      });
  }
}


const handleFilesChange = (e)=>{
  const {name , files} = e.target 
  const images = Array.from(files)
console.log(images);
  setFormData({
    ...formData,
    [name] : images
  })
}




  const handleCreateBlog = async (e) => {
    e.preventDefault();

    try {
      setRequestLoader(true)
      const token = user.token
      if (!formData.title || !formData.content || !formData.thumbnail || !formData.images) {
        toast.error('Enter all fields')
      }

      const formDataWithFiles = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'thumbnail' || key === 'images') {
          formDataWithFiles.append(key, value);
        } else {
          formDataWithFiles.append(key, JSON.stringify(value));
        }
      });
      console.log(formData);

      const request = await axios.post(createBlog, formData,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          }
        }
      );
      console.log(request);
      setRequestLoader(false)
      toast.success('Blog created')
      navigate('/blogs')
    } catch (error) {
      setRequestLoader(false)
      toast.error(error.message)
      throw new Error(error.message || "Failed to create blog")
    }
  };



  return (
    <section className='min-h-screen flex items-center flex-col bg-purple-200 p-4'>
      <div className="lg:w-[980px] w-full">
        <h1 className="text-[35px] font-[700]">Create a new blog</h1>
      </div>
      <form onSubmit={handleCreateBlog} className="lg:w-[980px] md:w-[700px] w-full flex flex-col gap-2 py-4" >
        <div className="flex flex-col">
          <label htmlFor="title" className="text-[18px] font-[500]">Title</label>
          <input
            value={formData.title}
            type="text"
            name="title"
            id="title"
            className="p-2 outline-none focus:border-2 focus:border-blue-600 rounded-md"
            onChange={handleInputChange}
            required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="content" className="text-[18px] font-[500]">Content</label>
          <textarea
            value={formData.content}
            name="content"
            id="content"
            className="h-[300px] w-full resize-none p-2 outline-none focus:border-2 focus:border-blue-600 rounded-md"
            onChange={handleInputChange}
            required></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="thumbnail" className="text-[18px] font-[500]">Thumbnail</label>
          <input
            type="file"
            name="thumbnail"
            id="thumbnail"
            accept="image/*"
            onChange={handleFileChange}
            required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="images" className="text-[18px] font-[500]">Images</label>
          <input
            type="file"
            name="images"
            id="images"
            accept="image/*"
            onChange={handleFilesChange}
            multiple
            required />
        </div>
        <button
          type="submit"
          className='p-2 mt-3 bg-blue-700 rounded-md hover:bg-blue-400 text-white text-center flex items-center justify-center'>
          {
            requestLoader ? <SmallLoader /> : <>Create Blog</>
          }
        </button>
      </form>
    </section>
  )
}


export default CreateBlog
