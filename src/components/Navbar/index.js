import { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close sidebar on link click
  };

  return (
    <div className="flex justify-between items-center h-14 bg-white sticky top-0 w-full px-4 lg:px-10 z-50 ">
      {/* Sidebar Button */}
      <div className='absolute left-[210px]'>
      <button onClick={toggleSidebar}className={'ml-auto'} >
        {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>

      </div>
     
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white transition-transform duration-300 ease-in-out z-40 shadow-lg ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 sm:w-3/4 md:w-[606px]`}>

          <Link className="flex items-center text-lg hover:bg-slate-300 cursor-pointer p-4" to="home-section" smooth={true} duration={500} onClick={handleLinkClick}>
            Home
          </Link>
          <Link className="flex items-center text-lg hover:bg-slate-300 cursor-pointer p-4" to="myfood-section" smooth={true} duration={500} onClick={handleLinkClick}>
            MyFood
          </Link>
          <Link className="flex items-center text-lg hover:bg-slate-300 cursor-pointer p-4" to="about-section" smooth={true} duration={500} onClick={handleLinkClick}>
            About
          </Link>
       
      </div>

      {/* Title */}
      <div className="flex flex-grow justify-center items-center">
        <div className="text-2xl  text-gray-800 absolute left-[750px]">My Food</div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-grow justify-center items-center absolute left-[1344px]">
        <div className="text-2xl  text-gray-800">Mail</div>
      </div>
    </div>
  );
};

export default Navbar;
