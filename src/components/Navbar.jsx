import logoBlack from '../assets/logo.png'
import logoWhite from '../assets/logo-white.png'
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // dynamic menu items
  const menu = (
    <>
      <li>
        <a
          className='hover:text-hoverColor hover:bg-transparent'
          href='https://everythinggreen.org/sustainable-website-hong-kong'
        >
          Sustainable Website
        </a>
      </li>
      <li>
        <a
          className='hover:text-hoverColor hover:bg-transparent'
          href='https://blog.everythinggreen.org'
        >
          Blog
        </a>
      </li>
      <li>
        <a
          className='hover:text-hoverColor hover:bg-transparent'
          href='https://everythinggreen.org/contact-us'
        >
          Contact Us
        </a>
      </li>
      <li>
        <a
          className='hover:text-hoverColor hover:bg-transparent'
          href='https://everythinggreen.org/login'
        >
          Login
        </a>
      </li>
    </>
  );

  return (
    <div>
      <div className='navbar bg-white lg:bg-custom-gradient pt-4 lg:pt-6 px-4 flex justify-between items-center gap-'>
        <div className='navbar-start lg:w-[53%] xl:w-[65%]'>
          {/* logo for large screen */}
          <a href='/' className='cursor-pointer text-xl'>
            <img
              src={logoWhite}
              alt='Everything Green'
              className='h-14 hidden lg:block'
            />
          </a>

          {/* logo for medium and small screen */}
          <a href='/' className='cursor-pointer text-xl'>
            <img
              src={logoBlack}
              alt='Everything Green'
              className='h-14 lg:hidden md:ml-4'
            />
          </a>

          {/* line */}
          <div className='border border-white ml-4 hidden lg:block flex-grow'></div>
        </div>

        {/* menu large screen & toggle btn */}
        <div className='navbar-end flex '>
          <ul className='menu menu-horizontal px-1 hidden text-white xl:text-base lg:flex lg:items-center'>
            {menu}
            <span className='border border-white w-12 xl:w-16'></span>
          </ul>

          {/* toggle btn */}
          <div
            onClick={toggleMenu}
            className='rounded-md lg:hidden border border-black border-opacity-45 px-2 pt-6 h-14 w-12 -mt-2'
          >
            <FaBars color='black' size={28} />
          </div>
        </div>
      </div>
      {/* menu small and medium screen */}
      {/* menu */}
      <div className='bg-white -mt-12 lg:-mt-0'>
        <ul
          className={` lg:hidden mt-8 p-2  w-full text-black flex flex-col items-center transition-all space-y-2 pt-8 duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {menu}
        </ul>
      </div>
    </div>
  );
}
export default Navbar