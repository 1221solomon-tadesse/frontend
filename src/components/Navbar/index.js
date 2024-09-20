import { useState } from 'react';
import { Link } from 'react-scroll'; 
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu, AiFillHome, AiFillMail, AiOutlineInfoCircle } from 'react-icons/ai';
import { FaPizzaSlice } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close sidebar on link click
  };

  return (
    <div className="flex justify-between items-center h-20 bg-white sticky top-0 w-full px-4 lg:px-10 z-50">
      {/* Sidebar Button */}
      <button onClick={toggleSidebar} >
        {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-slate-100 transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button onClick={toggleSidebar} className="absolute top-4 right-4 text-black lg:hidden">
          <AiOutlineClose size={30} />
        </button>
        <div className="mt-16 flex flex-col space-y-4 px-6 h-full border-r">
          <Link className="flex items-center text-lg hover:bg-gray-700 cursor-pointer" to="home-section" smooth={true} duration={500} onClick={handleLinkClick}>
            <AiFillHome size={24} className="mr-2" />
            Home
          </Link>
          <Link className="flex items-center text-lg hover:bg-gray-700 cursor-pointer" to="myfood-section" smooth={true} duration={500} onClick={handleLinkClick}>
            <FaPizzaSlice size={24} className="mr-2" />
            MyFood
          </Link>
          <Link className="flex items-center text-lg hover:bg-gray-700 cursor-pointer" to="about-section" smooth={true} duration={500} onClick={handleLinkClick}>
            <AiOutlineInfoCircle size={24} className="mr-2" />
            About
          </Link>
        </div>
      </div>

      {/* Title and Search Bar */}
      <div className="flex flex-grow justify-center items-center">
        <div className="text-2xl font-bold text-gray-800">Food Order</div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="ml-4 p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Navigation Links */}
      <div >
        <NavLink className="flex items-center hover:bg-gray-700 p-2" to="/">
          <AiFillMail size={24} className="mr-2" />
          Mail
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
