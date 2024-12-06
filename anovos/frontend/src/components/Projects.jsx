import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Projects() {
  const [hoveredCard, setHoveredCard] = useState('');

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Set duration for animation
      once: true, // Animation happens once per scroll
    });
  }, []);

  return (
    <div className="w-full py-20 relative">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl font-bold uppercase text-center">Our projects</h1>
      </div>

      {/* Hover Text */}
      <div
        className={`absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500 font-extrabold text-8xl z-10 transition-opacity duration-700 ease-in-out ${
          hoveredCard ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {hoveredCard === 'bigvart' && 'Click View bigvart project'}
        {hoveredCard === 'digitalkitab' && 'Click View digital kitab project'}
        {hoveredCard === 'dokans' && 'Click View Dokans project'}
        {hoveredCard === 'iflix' && 'Click View Iflix project'}
      </div>

      <div className="cards w-full flex flex-wrap gap-10 mt-10 px-20 relative">
        {/* Bigvart Card */}
        <div
          className="card w-[48%] h-[40vh] bg-gray-500 rounded-lg relative group overflow-hidden"
          style={{
            backgroundImage: "url('/assets/images/bigtvart.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onMouseEnter={() => setHoveredCard('bigvart')}
          onMouseLeave={() => setHoveredCard('')}
          onClick={() => window.open('https://bigtvart.blogspot.com/?m=1', '_blank')}
          data-aos="fade-up" // AOS animation trigger
        >
          <div className="overlay w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-500"></div>
        </div>

        {/* Digitalkitab Card */}
        <div
          className="card w-[48%] h-[40vh] bg-gray-500 rounded-lg relative group overflow-hidden"
          style={{
            backgroundImage: "url('/assets/images/digitalkitab.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onMouseEnter={() => setHoveredCard('digitalkitab')}
          onMouseLeave={() => setHoveredCard('')}
          onClick={() => window.open('https://digitalkitab.in', '_blank')}
          data-aos="fade-up" // AOS animation trigger
        >
          <div className="overlay w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-500"></div>
        </div>

        {/* Dokans Card */}
        <div
          className="card w-[48%] h-[40vh] bg-gray-500 rounded-lg relative group overflow-hidden"
          style={{
            backgroundImage: "url('/assets/images/dokans.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onMouseEnter={() => setHoveredCard('dokans')}
          onMouseLeave={() => setHoveredCard('')}
          onClick={() => window.open('https://dokans.example.com', '_blank')} // Replace with the actual URL for the Dokans project
          data-aos="fade-up" // AOS animation trigger
        >
          <div className="overlay w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-500"></div>
        </div>

        {/* Iflix Card */}
        <div
          className="card w-[48%] h-[40vh] bg-gray-500 rounded-lg relative group overflow-hidden"
          style={{
            backgroundImage: "url('/assets/images/ifllix.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onMouseEnter={() => setHoveredCard('iflix')}
          onMouseLeave={() => setHoveredCard('')}
          onClick={() => window.open('https://iflix.example.com', '_blank')} // Replace with the actual URL for the Iflix project
          data-aos="fade-up" // AOS animation trigger
        >
          <div className="overlay w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
