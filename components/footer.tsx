import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white body-font">
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
     
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white text-xl font-Bold tracking-widest  mb-6">MENU</h2>
        <nav className="list-none mb-6">
          <li className=" mb-3">
            <a className="text-gray-300 font-medium cursor-pointer hover:text-gray-600">Home</a>
          </li>
          <li className=" mb-3">
            <a className="text-gray-300 font-medium cursor-pointer hover:text-gray-600">About</a>
          </li>
          <li className=" mb-3">
            <a className="text-gray-300 font-medium cursor-pointer hover:text-gray-600">Skills</a>
          </li>
          <li className=" mb-3">
            <a className="text-gray-300 font-medium cursor-pointer hover:text-gray-600">Projects</a>
          </li>
        </nav>
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white text-xl font-Bold tracking-widest  mb-6">GET IN TOUCH</h2>
        <nav className="list-none mb-6">
          <li className=" mb-3">
            <a className="text-gray-300 font-medium cursor-pointer hover:text-gray-600">Home</a>
          </li>
          <li className=" mb-3">
            <a className="text-gray-300 font-medium cursor-pointer hover:text-gray-600">About</a>
          </li>
          <li className=" mb-3">
            <a className="text-gray-300 font-medium cursor-pointer hover:text-gray-600">Skills</a>
          </li>
          <li className=" mb-3">
            <a className="text-gray-300 font-medium cursor-pointer hover:text-gray-600">Projects</a>
          </li>
        </nav>
      </div>
      <div className="w-full max-w-xs mx-auto lg:ml-80 mt-4">
  <p className="text-[#ecd553] text-md font-bold mb-4">
    Get the latest updates on my projects and articles directly in your inbox.
  </p>
  <form action="/subscribe" method="POST">
    <input type="email" name="email" placeholder="Enter your email" className="p-2 w-full border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500" required/>
    <button type="submit" className="w-full bg-[#EA9A96] text-white py-2 px-4 rounded hover:bg-gray-400 transition duration-300">
      Subscribe
    </button>
  </form>
</div>

    </div>
  </div>
  <div className="container mx-auto text-center ">
    <p className="text-sm pb-10">
      &copy; 2024 Yusra Saleem — All Rights Reserved
    </p>
  </div>
</footer>
  )
}

export default Footer

