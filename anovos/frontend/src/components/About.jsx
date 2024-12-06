import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function About() {
  const [showPopup, setShowPopup] = useState(false);

  const handleReadMoreClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({ 
      duration: 1000,
      once: true, // Animation triggers once per element
      disable: 'mobile', // Optional: Disable AOS on mobile to improve performance
    });

    // Handle scroll event to trigger AOS animations on scroll up/down
    const handleScroll = () => {
      AOS.refresh(); // Refresh AOS to re-trigger animations
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, []);

  return (
    <div className="w-full py-20 bg-[#CDEA68] rounded-tl-3xl text-black">
      <h1
        className="font-extrabold text-[3vw] leading-[3.1vw] tracking-tight ml-24"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" // Trigger when the element is at the top of the viewport
      >
        ANOVAS, a dedicated team specializing in web and app development. Our mission is to deliver cutting-edge digital solutions that enhance efficiency, drive profitability, and elevate client satisfaction.
      </h1>
      <div className="w-full border-t border-black mt-20 flex gap-5">
        {/* Left Section */}
        <div className="w-1/2">
          <h1 className="text-7xl pt-10 ml-11 font-bold" data-aos="fade-right">
            Our Approach
          </h1>
          <button
            className="w-40 bg-black text-white font-bold py-4 mt-12 ml-11 flex items-center justify-center gap-2 uppercase rounded-full transition hover:bg-gray-800 relative group"
            onClick={handleReadMoreClick}
            data-aos="zoom-in"
          >
            <span>Read More</span>
            <div className="hidden group-hover:inline-block w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
          </button>
        </div>

        {/* Right Section */}
        <div
          className="w-1/2 h-[60vh] bg-[#e2f1ab] rounded-3xl mt-8 mr-14 relative overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom" // Animation on scroll up or down
        >
          <img
            src="/assets/images/founder.png"
            alt="Founder"
            className="w-full h-full object-cover rounded-3xl opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-2xl text-center" data-aos="fade-up">
            <h2 className="text-5xl font-bold mb-4">We are ANOVOS</h2>
            <p className="text-2xl leading-relaxed text-gray-700">
              We are anovos, a dedicated team specializing in web and app development. Our mission is to deliver cutting-edge digital solutions that enhance efficiency, drive profitability, and elevate client satisfaction.
              <br />
              <br />
              We recognize that your company/agency also provides similar services, and we propose a mutually beneficial partnership. By working with ANOVAS as your third-party service provider, you can maximize your profit margins while delivering high-quality solutions effortlessly.
            </p>
            <button
              className="mt-6 px-6 py-2 bg-black text-white font-bold rounded-full uppercase hover:bg-gray-800"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
