import React from 'react'
import  logo from  '../Components/logo.png'
import { Link} from  'react-scroll'
export const Navbar = () => {
  return (
    <>

<header className="text-white  body-font bg-black font-poppins ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-end text-gray-900 mb-4 md:mb-0">
      
    <figure>
    {/* <img  src={logo}  className=" bg-white text-white hover:cursor-pointer  object-fill w-full h-7   "/> */}
    <h1 className='text-yellow-200'>Naam Jee</h1>
    </figure>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center  list-none space-x-4 md:space-x-7 lg:space-x-10  z-50 transition-all ">
    <li>
              <Link activeClass="active" smooth spy to="notify" >
                NEWS LETTERS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="Products">
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="steps">
                ORDER
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                CONTACT US
              </Link>
            </li>
    
    </nav>
    <button className="inline-flex items-center    border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
     
      {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg> */}
    </button>
  </div>
</header>

    
    </>
  )
}
