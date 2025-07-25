import React from 'react';
import monkey from '../../assets/monkey magic about.jpg';

const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-r from-red-500 via-red-600 to-red-700 py-12 px-4 flex items-center justify-center">
    <div className="max-w-5xl w-full bg-gray-900/80 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      {/* Left: Full-cover Image */}
      <div className="relative h-72 md:h-auto min-h-full">
        <img
          src={monkey}
          alt="Monkey Magic Adventure"
          className="absolute inset-0 w-full h-full object-cover rounded-none md:rounded-l-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-yellow-300 to-red-500 opacity-30 md:rounded-l-2xl"></div>
      </div>
      {/* Right: Content */}
      <div className="flex flex-col justify-center p-8 md:p-12">
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent mb-4">
          About Monkey Magic
        </h2>
        <p className="font-poppins text-lg text-gray-200 mb-4">
          Monkey Magic is a cinematic travel storytelling channel, sharing immersive journeys across India and beyond. Our adventures blend culture, landscapes, and personal stories, inspiring viewers to explore the world with wonder.
        </p>
        <ul className="font-poppins text-md text-gray-300 mb-6 space-y-2">
          <li>🌏 Cinematic travel vlogs from the heart of India</li>
          <li>📖 Inspiring stories & books like <span className="text-orange-400 font-semibold">Melodies of India</span></li>
          <li>🚗 Upcoming epic journeys (London road trip & more!)</li>
        </ul>
        <div className="flex gap-4 mt-2">
          <a href="https://www.youtube.com/@monkeyxmagic" target="_blank" rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition hover:scale-105">
            Watch on YouTube
          </a>
          <a href="/products"
            className="bg-gray-800 text-orange-400 px-4 py-2 rounded-full font-semibold hover:bg-orange-700 transition hover:scale-105">
            Explore Offerings
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;