import React from 'react';

const Footer = () => {
  return (
    <footer >
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Footer Section */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-4">FOOTER</h3>
            <p className="mb-2">© 2024 Soll Restaurant. All rights reserved.</p>
            <p>Contact us: info@sollrestaurant.com</p>
          </div>
          {/* Blog Post Section */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Blog Post</h3>
            <ul>
              <li className="flex items-center mb-2">
                <img src="https://th.bing.com/th/id/OIP.yQWKrcsv4B0EUukVirfHIAHaEK?w=264&h=180&c=7&r=0&o=5&pid=1.7" className="w-16 h-16 object-cover mr-2" alt="5 Delicious Burger Recipes" />
                <a href="/blog/1" className="hover:underline">5 Delicious Burger Recipes</a>
              </li>
              <li className="flex items-center mb-2">
                <img src="https://th.bing.com/th/id/OIP.yQWKrcsv4B0EUukVirfHIAHaEK?w=264&h=180&c=7&r=0&o=5&pid=1.7" className="w-16 h-16 object-cover mr-2" alt="Why Fresh Ingredients Matter" />
                <a href="/blog/2" className="hover:underline">Why Fresh Ingredients Matter</a>
              </li>
            </ul>
          </div>

          {/* Popular Tags Section */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap">
              {['Burgers', 'Desserts', 'Healthy Eating', 'Recipes', 'Food Trends'].map(tag => (
                <span key={tag} className="bg-gray-700 text-sm rounded-full px-3 py-1 mr-2 mb-2 cursor-pointer hover:bg-gray-600">
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
