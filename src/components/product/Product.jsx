import React, { useEffect } from 'react';
import { FaVideo, FaBook, FaMap } from 'react-icons/fa';

// Products/services data
const products = [
  {
    icon: <FaVideo className="text-4xl text-orange-400 mb-3" />,
    title: 'Cinematic Travel Vlogs',
    desc: "Immersive stories of India’s culture and landscapes.",
    link: '/vlogs',
    id: 'vlogs',
  },
  {
    icon: <FaBook className="text-4xl text-orange-400 mb-3" />,
    title: 'Melodies of India Book',
    desc: "A captivating book with stories and photos from the Ganges journey.",
    link: '/book',
    id: 'book',
  },
  {
    icon: <FaMap className="text-4xl text-orange-400 mb-3" />,
    title: 'Epic Travel Experiences',
    desc: "Join our upcoming road trip to London and more.",
    link: '/experiences',
    id: 'experiences',
  },
];

const ProductsServicesSection = () => {
  // Smooth scroll for "Learn More" buttons (if linking to same-page sections)
  useEffect(() => {
    const buttons = document.querySelectorAll('.product-learnmore');
    buttons.forEach(btn => {
      btn.onclick = (e) => {
        const href = btn.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
      };
    });
  }, []);

  return (
    <section className="w-full py-12 bg-gradient-to-r from-red-500 via-red-600 to-red-700">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-white text-center mb-10">
        Explore Monkey Magic’s Offerings
      </h2>
      {/* Cards */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((prod, idx) => (
            <div
              key={prod.title}
              className={`flex flex-col items-center justify-center bg-gray-800/80 rounded-xl border-2 border-orange-500 p-8 shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-orange-500/50 animate-fadeIn${idx === 1 ? ' delay-200' : idx === 2 ? ' delay-400' : ''}`}
            >
              {prod.icon}
              <span className="font-montserrat text-lg text-white mb-2">{prod.title}</span>
              <span className="font-poppins text-base text-gray-300 mb-6 text-center">{prod.desc}</span>
              <a
                href={prod.link}
                className="product-learnmore bg-orange-500 text-white font-semibold rounded-full px-6 py-2 text-base shadow-md transition-all duration-200 hover:bg-orange-600 hover:scale-110"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsServicesSection;