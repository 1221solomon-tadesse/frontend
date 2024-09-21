import React from 'react';
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer >
      <div className="max-w-6xl max-sm:mx-5 mx-auto px-10 mb-10">
        {/* Footer Section */}
        <div className="flex justify-between max-sm:gap-8 max-sm:flex-col">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-light text-2xl mb-4">FOOTER</h3>
            <p className="mb-2 font-light">Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            Powered by
            <Link href='https://www.w3schools.com/w3css/default.asp' >W3.css</Link>
          </div>
          {/* Blog Post Section */}
          <div className="w-full md:w-1/3 mb-4 max-sm:m-auto md:mb-0">
            <h3 className="font-light text-2xl mb-4">Blog Post</h3>
            <ul className='flex flex-col gap-4 mx-5' >
              <div className='hover:bg-slate-300'>
                <li className="flex">
                  <img src="https://www.w3schools.com/w3images/workshop.jpg" className="w-16 h-16 object-cover mr-2" alt="5 Delicious Burger Recipes" />
                  <p className='font-light mt-8'> Lorem
                    Sed mattis nunc</p >
                </li>
              </div>
              <hr className='max-sm:hidden w-3/4' />

              <li className="hover:bg-slate-300 flex align-middle">
                <img src="https://www.w3schools.com/w3images/gondol.jpg" className="w-16 h-16 object-cover mr-2" alt="Why Fresh Ingredients Matter" />
                <p className='font-light mt-8'>  Ipsum
                  Praes tinci sed</p>
              </li>
            </ul>
          </div>

          {/* Popular Tags Section */}
          <div className="w-full md:w-1/3 font-light">
            <h3 className="font-light text-2xl mb-4">Popular Tags</h3>
            <div className="flex flex-wrap mx-5 text-white items-center">
              {["Travel", 'New York', 'Dinner', 'Salmon ', 'France', 'Drinks', 'Ideas', 'Flavors', 'Cuisine', 'Chicken', 'Dressing', 'Fried', 'Fish', 'Duck'].map(tag => (
                <span key={tag} className={`bg-gray-700 text-sm px-3 py-1 mr-2 mb-2  ${tag === "Travel" ? "bg-slate-950 text-white font-bold" : "bg-gray-700"}`}>
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
