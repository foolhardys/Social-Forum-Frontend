import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SmallLoader from "../Components/SmallLoader";

const createResource = import.meta.env.VITE_API_URL + '/createResource'

const CreateResource = () => {

  const [formData, setFormData] = useState({
    title: '',
    resourceUrl: [],
    category: 'Teacher Resources'
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

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }


  const handleCreateResource = async (e) => {
    e.preventDefault();

    try {
      setRequestLoader(true)
      const token = user.token
      if (!formData.title || !formData.resourceUrl || !formData.category) {
        toast.error('Enter all fields')
      }

      console.log(formData);

      const request = await axios.post(createResource, formData,
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
  }



  return (
    <section className='min-h-screen flex items-center flex-col bg-purple-200 p-4'>
      <div className="lg:w-[980px] w-full">
        <h1 className="text-[35px] font-[700]">Create a new blog</h1>
      </div>
      <form onSubmit={handleCreateResource} className="lg:w-[980px] md:w-[700px] w-full flex flex-col gap-2 py-4" >
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
        {/* <div className="flex flex-col">
          <label htmlFor="content" className="text-[18px] font-[500]">Resource URL</label>
          <input
            value={''}
            name="resourseUrl"
            id="resourseUrl"
            className="p-2 outline-none focus:border-2 focus:border-blue-600 rounded-md"
            onChange={''}
            required></input>
        </div> */}
        <div className="flex flex-col">
          <label htmlFor="content" className="text-[18px] font-[500]">Resource URL</label>
          <input
            type="file"
            name="resourceUrl"
            id="resourceUrl"
            required
            className="p-2 outline-none focus:border-2 focus:border-blue-600 rounded-md"
            onChange={handleFileChange}></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="text-[18px] font-[500]">Category</label>
          <select
            name="category"
            id="category"
            required
            className="p-2 outline-none focus:border-2 focus:border-blue-600 rounded-md mt-1 text-[18px]"
            onChange={handleSelectChange}>
            <option className="text-[16px] p-1" value="Teacher Resources">Teacher Resources</option>
            <option className="text-[16px] p-1" value="Student Resources">Student Resources</option>
            <option className="text-[16px] p-1" value="E - Resources">E-Resources</option>
            <option className="text-[16px] p-1" value="Sample Papers">Sample Papers</option>
            <option className="text-[16px] p-1" value="Career Guidance">Career Guidance</option>
            <option className="text-[16px] p-1" value="Publications">Publications</option>
          </select>
        </div>
        <button
          type="submit"
          className='p-2 mt-3 bg-blue-700 rounded-md hover:bg-blue-400 text-white text-center flex items-center justify-center'>
          {
            requestLoader ? <SmallLoader /> : <>Create Resource</>
          }
        </button>
      </form>
    </section>
  )
}

export default CreateResource