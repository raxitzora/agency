import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function Marquee() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true, // Animation triggers once per element
    });
  }, []);

  return (
    <div className="w-full bg-green-900 py-10 rounded-3xl rounded-tl-3xl rounded-tr-3xl">
      <div
        className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden hover:border-animation"
        data-aos="fade-up" // Scroll-triggered animation
        data-aos-offset="200" // Trigger animation when element is 200px from the top of the viewport
        data-aos-anchor-placement="top-bottom" // Optional: Animation triggers when the element is near the bottom of the viewport
      >
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-90%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[14vw] leading-none font-semibold uppercase -mt-6 pt-5 text-white hover:text-rainbow"
        >
          We are ANOVOS
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-90%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[14vw] leading-none font-semibold uppercase -mt-6 pt-5 text-white hover:text-rainbow"
        >
          We are ANOVOS
        </motion.h1>
      </div>

      {/* Reverse Scroll Trigger */}
      <div
        className="reverse-trigger w-full h-[50px] mt-20"
        data-aos="fade-up" // Scroll-triggered animation
        data-aos-reverse="true" // Reverse scroll trigger effect
        data-aos-duration="1500"
      >
        {/* This is an empty div used to apply reverse scroll trigger */}
      </div>
    </div>
  );
}

export default Marquee;
