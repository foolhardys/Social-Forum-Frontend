const Contact = () => {
  return (
    <div className="bg-purple-200 flex items-center justify-center">
      <div className="min-h-screen max-w-[1080px] flex items-center lg:flex-row flex-col py-8">
        <div className="flex flex-col p-4 flex-1">
          <h2 className="lg:text-[55px] md:text-[45px] text-[50px] font-semibold leading-tight font-serif my-10">Contact Us</h2>
          <p className="lg:text-[20px] md:text-[16px] text-[18px] mb-10">Have questions or suggestions? Reach out to us using the form.
            Drop an E-mail , call or message.</p>
          <a href="mailto:" className="lg:text-[20px] md:text-[16px] text-[18px] mb-10">xyz@gmail.com</a>
          <h2 className="lg:text-[20px] md:text-[16px] text-[18px] mb-10">xxxxxxxxxx</h2>
        </div>
        <form className="bg-black md:p-8 p-4 flex flex-col justify-center gap-1 flex-1 rounded-lg shadow-lg m-2 min-w-[300px]">
          <div>
            <h1 className="lg:text-[45px] md:text-[35px] text-[40px] font-light mb-[-5px] font-serif my-10 text-white">Get in touch</h1>
            <p className="lg:text-[20px] md:text-[16px] text-[18px] mb-10 text-gray-300">You can reach us anytime</p>
          </div>
          <div className=" min-h-[250px] flex flex-col p-2">
            <div className="md:flex-row flex-col flex md:gap-2 gap-6 my-4">
              <input type="text" id="name" name="name" className="p-2 rounded-full border-2 border-white text-[18px] focus:bg-gray-100 focus:border-blue-600 outline-none focus:border-3" placeholder="Your Name" />
              <input type="email" id="email" name="email" className="p-2 rounded-full border-2 border-white text-[18px] focus:bg-gray-100 focus:border-blue-600 outline-none focus:border-3" placeholder="Your Email" />
            </div>
            <input type="tel" id="phone" name="phone" className="p-2 rounded-full border-2 border-white my-4 text-[18px] focus:bg-gray-100 focus:border-blue-600 outline-none focus:border-3" placeholder="Your Number" />
            <textarea id="message" name="message" placeholder="How can we help you ??" className=" resize-none h-[100px] text-[18px] focus:bg-gray-100 focus:border-blue-600 outline-none focus:border-3 rounded-lg mt-4 p-2"></textarea>
            <button type="submit" className="bg-purple-700 p-2 rounded-md my-8 text-white text-[18px] hover:bg-purple-500 transition">Send Message</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Contact
