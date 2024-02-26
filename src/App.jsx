import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import Faq from './Pages/Faq'
import Resources from './Pages/Resources'
import Quiz from './Pages/Quiz'
import Error from './Pages/Error'
import Layout from "./Layout"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import ForgetPassword from "./Pages/ForgetPassword"
import UpdatePassword from "./Pages/UpdatePassword"
import Blog from "./Pages/Blog"
import PrivateRoute from "./Components/Auth/PrivateRoute"
import Dashboard from "./Pages/Dashboard"
import CreateResource from "./Pages/CreateResource"
import CreateBlog from "./Pages/CreateBlog"
import UpdateBlog from "./Pages/UpdateBlog"

function App() {

  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route index element={<Home />} />
        <Route path='aboutus' element={<About />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='blogs/:id' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
        <Route path='faq' element={<Faq />} />
        <Route path='resources' element={<Resources />} />
        <Route path='quiz' element={<Quiz />} />
        <Route path='createResource' element={<CreateResource />} />
        <Route path='createBlog' element={<CreateBlog />} />
        <Route path='updateBlog/:id' element={<UpdateBlog />} />
        <Route path="*" element={<Error />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/forget-password' element={<ForgetPassword />} />
      <Route path='/login/update-password/:id' element={<UpdatePassword />} />
      <Route element={<PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>} >
        <Route path="/dashboard/about" element={<Home/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
