import { useState } from 'react';
// import { Link } from 'react-scroll';
import {  AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close sidebar on link click
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-white'>


      <div className='flex sm:text-2xl p-6 justify-around'>
        <button onClick={toggleSidebar}>
          <AiOutlineMenu size={30} />
        </button>
        <div>My Food</div>
        <div>Mail</div>
      </div>



      {/* Sidebar */}
      <div className={`absolute py-5 top-0 h-screen bg-white transition-transform duration-300 ease-in-out z-40 shadow-lg ${isOpen ? 'translate-x-0 max-md:w-1/2 md:w-1/4' : '-translate-x-full w-1/4'} `}>

        <a href="/" className="flex items-center sm:text-2xl hover:bg-slate-300 cursor-pointer p-4" to="home-section" smooth={true} duration={500} onClick={handleLinkClick}>
          Close Menu
        </a>
        <a href="#my-food" className="flex items-center sm:text-2xl hover:bg-slate-300 cursor-pointer p-4" to="myfood-section" smooth={true} duration={500} onClick={handleLinkClick}>
          Food
        </a>
        <a href="#about-us" className="flex items-center sm:text-2xl hover:bg-slate-300 cursor-pointer p-4" to="about-section" smooth={true} duration={500} onClick={handleLinkClick}>
          About
        </a>

      </div>
    </div>
  );
};

export default Navbar;
