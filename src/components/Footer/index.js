import React from 'react';
import {Link }from 'react-router-dom'
const Footer = () => {
  return (
    <footer >
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Footer Section */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-light text-2xl mb-4">FOOTER</h3>
            <p className="mb-2">Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            Powered by 
              <Link href='https://www.w3schools.com/w3css/default.asp' >W3.css</Link>          
          </div>
          {/* Blog Post Section */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-light text-2xl mb-4">Blog Post</h3>
            <ul >
              <div className='hover:bg-slate-300'>
              <li className="flex items-center mb-2 ">
                <img src="https://www.w3schools.com/w3images/workshop.jpg" className="w-16 h-16 object-cover mr-2" alt="5 Delicious Burger Recipes" />
                <p> Lorem
                Sed mattis nunc</p >
              </li>
              </div>
              
              <li className="flex items-center mb-2 hover:bg-slate-300">
                <img src="https://www.w3schools.com/w3images/gondol.jpg" className="w-16 h-16 object-cover mr-2" alt="Why Fresh Ingredients Matter" />
                <p>  Ipsum
              Praes tinci sed</p>
              </li>
            </ul>
          </div>

          {/* Popular Tags Section */}
          <div className="w-full md:w-1/3">
            <h3 className="font-light text-2xl mb-4">Popular Tags</h3>
            <div className="flex flex-wrap text-white">
              {["Travel", 'New York' ,'Dinner' ,'Salmon ','France' ,'Drinks' ,'Ideas' ,'Flavors' ,'Cuisine' ,'Chicken', 'Dressing' ,'Fried' ,'Fish' ,'Duck'].map(tag => (
                <span key={tag} className={`bg-stone-700 text-xs px-3 py-1 mr-2 mb-1  ${tag==="Travle" ? "bg-black text-white ": "bg-gray-700 bold"}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
