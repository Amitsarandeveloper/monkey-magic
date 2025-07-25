import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bookImg1 from '../../assets/book1.jpg';
import bookImg2 from '../../assets/book2.jpg';
import bookImg3 from '../../assets/book3.jpg';

const ProductPage = ({ addToCart }) => {
  const navigate = useNavigate();
  const images = [bookImg1, bookImg2, bookImg3];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);

  // Product data
  const product = {
    id: 1,
    name: "Melodies of India",
    description: "A captivating book with stories and photos from the Ganges journey. Dive into the heart of India's culture and landscapes through cinematic storytelling.",
    price: 499,
    image: images[current]
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/cart'); // Redirect to cart page
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 via-red-600 to-red-700 py-12 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-gray-900/80 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left: Image Slider */}
        <div className="relative h-72 md:h-auto min-h-full w-full">
          <img
            src={images[current]}
            alt={`Book Slide ${current + 1}`}
            className="absolute inset-0 w-full h-full object-cover rounded-none md:rounded-l-2xl"
          />
          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900/60 text-white rounded-full p-2 hover:bg-orange-500 transition"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900/60 text-white rounded-full p-2 hover:bg-orange-500 transition"
            aria-label="Next"
          >
            &#8594;
          </button>
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${current === idx ? 'bg-orange-500' : 'bg-gray-400'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Right: Book Details */}
        <div className="flex flex-col justify-center p-8 md:p-12">
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent mb-2">
            {product.name}
          </h2>
          <p className="font-poppins text-lg text-gray-200 mb-4">
            {product.description}
          </p>
          <div className="font-poppins text-xl text-orange-400 font-semibold mb-4">
            ₹{product.price}
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition hover:scale-105"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition hover:scale-105"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;