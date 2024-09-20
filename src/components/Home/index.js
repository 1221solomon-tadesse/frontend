import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Food Menu</title>
        <meta name="description" content="Explore our delicious food menu featuring a variety of burgers and more." />
        <meta name="keywords" content="food, menu, burgers, restaurant" />
      </Helmet>

      <div className="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Cards */}
          <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img src="https://th.bing.com/th/id/OIP.JnUimTk9WEG9Kz7RWBgmhwHaEu?w=260&h=180&c=7&r=0&o=5&pid=1.7" alt="Product 1" className="h-full w-full object-cover object-top" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Burger</h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800">$10</h4>
              </div>
            </div>
          </div>

          <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img src="https://th.bing.com/th/id/OIP.JnUimTk9WEG9Kz7RWBgmhwHaEu?w=260&h=180&c=7&r=0&o=5&pid=1.7" alt="Product 2" className="h-full w-full object-cover object-top" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Burger</h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800">$12</h4>
              </div>
            </div>
          </div>

          <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img src="https://th.bing.com/th/id/OIP.JnUimTk9WEG9Kz7RWBgmhwHaEu?w=260&h=180&c=7&r=0&o=5&pid=1.7" alt="Product 3" className="h-full w-full object-cover object-top" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Burger</h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800">$14</h4>
              </div>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img src="https://th.bing.com/th/id/OIP.JnUimTk9WEG9Kz7RWBgmhwHaEu?w=260&h=180&c=7&r=0&o=5&pid=1.7" alt="Product 3" className="h-full w-full object-cover object-top" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Burger</h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800">$14</h4>
              </div>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img src="https://th.bing.com/th/id/OIP.JnUimTk9WEG9Kz7RWBgmhwHaEu?w=260&h=180&c=7&r=0&o=5&pid=1.7" alt="Product 3" className="h-full w-full object-cover object-top" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Burger</h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800">$14</h4>
              </div>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img src="https://th.bing.com/th/id/OIP.JnUimTk9WEG9Kz7RWBgmhwHaEu?w=260&h=180&c=7&r=0&o=5&pid=1.7" alt="Product 3" className="h-full w-full object-cover object-top" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Burger</h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800">$14</h4>
              </div>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img src="https://th.bing.com/th/id/OIP.JnUimTk9WEG9Kz7RWBgmhwHaEu?w=260&h=180&c=7&r=0&o=5&pid=1.7" alt="Product 3" className="h-full w-full object-cover object-top" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Burger</h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800">$14</h4>
              </div>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img src="https://th.bing.com/th/id/OIP.JnUimTk9WEG9Kz7RWBgmhwHaEu?w=260&h=180&c=7&r=0&o=5&pid=1.7" alt="Product 3" className="h-full w-full object-cover object-top" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Burger</h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800">$14</h4>
              </div>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img src="https://th.bing.com/th/id/OIP.JnUimTk9WEG9Kz7RWBgmhwHaEu?w=260&h=180&c=7&r=0&o=5&pid=1.7" alt="Product 3" className="h-full w-full object-cover object-top" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Burger</h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800">$14</h4>
              </div>
            </div>
          </div>


          {/* Continue adding more product cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;