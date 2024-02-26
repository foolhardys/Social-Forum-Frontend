import { Link } from 'react-router-dom'
import image from '../assets/Illustrations/not-found.png'

const Error = () => {
  return (
    <section className="bg-white h-screen flex items-center justify-center flex-col gap-4">
      <img src={image} className='h-[300px]' alt="not found" />
      <Link className='p-2 bg-purple-700 rounded-md shadow-md text-white hover:bg-purple-500' to='/'>Back to Home</Link>
    </section>
  )
}

export default Error