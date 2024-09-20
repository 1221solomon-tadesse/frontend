import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (   
    <div>
      <Helmet>
        {/* Title and Description */}
        <title>Food Menu - Delicious Burgers and More</title>
        <meta name="description" content="Explore our delicious food menu featuring a variety of burgers and more." />
        <meta name="keywords" content="food, menu, burgers, restaurant" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Food Menu - Delicious Burgers and More" />
        <meta property="og:description" content="Explore our delicious food menu featuring a variety of burgers and more." />
        <meta property="og:image" content="https://th.bing.com/th/id/OIP.JnUimTk9WEG9Kz7RWBgmhwHaEu?w=260&h=180&c=7&r=0&o=5&pid=1.7" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://foodmenu1234.netlify.app/" />
        <meta property="og:site_name" content="Soll restorant" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Food Menu - Delicious Burgers and More" />
        <meta name="twitter:description" content="Explore our delicious food menu featuring a variety of burgers and more." />
        <meta name="twitter:image" content="https://th.bing.com/th/id/OIP.JnUimTk9WEG9Kz7RWBgmhwHaEu?w=260&h=180&c=7&r=0&o=5&pid=1.7" />
        <meta name="twitter:site" content="@myRestaurantHandle" />
        
        {/* Structured Data (JSON-LD) for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@type": "Restaurant",
            "name": "Soll restorant ",
            "description": "Explore our delicious food menu featuring a variety of burgers and more.",
            "url": "https://foodmenu1234.netlify.app/",
            "image": "https://th.bing.com/th/id/OIP.JnUimTk9WEG9Kz7RWBgmhwHaEu?w=260&h=180&c=7&r=0&o=5&pid=1.7",
            "priceRange": "$10",
            "address": {
              "streetAddress": "123 Burger Lane",
              "addressLocality": "Addis",
              "addressCountry": "Ethiopia"
            },
            "telephone": "0955173329",
            "openingHours": "Mo-Su 11:00-22:00",
          })}
        </script>
      </Helmet>
      <div className="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Cards */}
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="bg-white rounded overflow-hidden shadow-md cursor-pointer transition-all">
              <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                <img src="https://th.bing.com/th/id/OIP.JnUimTk9WEG9Kz7RWBgmhwHaEu?w=260&h=180&c=7&r=0&o=5&pid=1.7" alt={`Product ${index + 1}`} className="h-full w-full object-cover object-top" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">Burger</h3>
                <div className="mt-4 flex items-center flex-wrap gap-2">
                  <h4 className="text-lg font-bold text-gray-800">$10</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* About Section */}
        <div id="about-section" className="mt-10 p-4 bg-gray-200 rounded shadow">
        <div className="relative w-full h-80">
        <img
          src="https://th.bing.com/th/id/OIP.jipa3eXUgyKLStV_3ig4mgHaFP?w=204&h=180&c=7&r=0&o=5&pid=1.7"
          alt="About Us"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
          <h2 className="text-2xl font-bold text-center mb-4">About Us</h2>
          <p className="text-center">
            Welcome to Soll Restaurant! We offer a variety of delicious burgers and other foods. Our mission is to provide a fantastic dining experience for all our customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
