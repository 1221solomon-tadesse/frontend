import React from 'react';
import { Helmet } from 'react-helmet';
import ProductCard from '../Global/productCard';
import AboutUs from '../Global/aboutUs';

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
        <meta property="og:url" content="https://burgermenu321.netlify.app/" />
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
            "url": "https://burgermenu321.netlify.app/",
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
      <div>
        <ProductCard />
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;