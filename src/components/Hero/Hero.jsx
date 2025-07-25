import React, { useEffect } from 'react';
import heroImage from '../../assets/Monkey-magic-hero.png';

// HeroSection: Cinematic, vibrant hero split into left (text) and right (image)
const Hero = () => {
    useEffect(() => {
        // Smooth scroll for CTA button
        const cta = document.getElementById('hero-cta');
        if (cta) {
            cta.onclick = (e) => {
                e.preventDefault();
                const adventures = document.getElementById('adventures');
                if (adventures) {
                    adventures.scrollIntoView({ behavior: 'smooth' });
                }
            };
        }
    }, []);

    return (
        <section className="w-full h-screen bg-gradient-to-r from-red-500 via-red-600 to-red-700 flex flex-col md:flex-row">
            {/* Left Section: Headline, Subheadline, CTA */}
            <div className="flex flex-1 flex-col justify-center items-center md:items-start px-6 md:px-16 z-10">
                <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6 animate-fadeInUp">
                    Embark on a Journey with Monkey Magic
                </h1>
                <p className="font-poppins text-lg md:text-xl text-gray-100 mb-8 animate-fadeInUp delay-200">
                    Discover India’s stories, culture, and landscapes through cinematic travel adventures
                </p>
                <a
                    href="#adventures"
                    id="hero-cta"
                    className="bg-white text-red-600 font-semibold rounded-lg px-8 py-3 text-lg shadow-lg transition-all duration-200 hover:bg-red-200 hover:scale-105 animate-fadeInUp delay-400"
                >
                    Explore Now
                </a>
            </div>
            {/* Right Section: Background Image with Overlay */}
            <div className="flex-1 relative h-64 md:h-auto">
                {/* Background Image from assets */}
                <img
                    src={heroImage}
                    alt="Monkey Magic Hero"
                    className="w-full h-full object-cover absolute inset-0"
                />
                {/* Overlay */}
                <div className="absolute inset-0 opacity-30"></div>
            </div>
            
        </section>
        
    );
};
export default Hero;