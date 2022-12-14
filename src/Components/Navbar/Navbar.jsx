import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='Navbar'>
      

      <nav class="bg-transparent  border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container  flex flex-wrap justify-between items-center mx-auto">
    <a href="#" class="flex items-center">
        
        <span class="self-center text-white text-3xl font-extrabold tracking-tighter whitespace-nowrap dark:text-white">Wapo</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto nav-items " id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 bg-transparent rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
        <li>
          <a href="#" class="block py-2 pr-4 pl-3   text-white rounded md:bg-transparent  md:p-0 md:hover:text-orange-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 ">Pages</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 ">About Us</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 ">Our Teams</a>
        </li>
        
        
        <li>
        <a className='block border-solid border border-gray-300 tracking-wider bg-transparent text-gray-200 ring-blue-500 rounded-full leading-7 px-5 hover:bg-white hover:text-black'>Buy Now</a>
        </li>
      </ul>
  
          
       
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar