import React, { useState, useEffect } from 'react';

function Landing() {
  const [animateText, setAnimateText] = useState(false);
  const [pageTransition, setPageTransition] = useState(true);

  const handleButtonClick = () => {
    // Start animation and scroll to the next section
    setAnimateText(true);
    setTimeout(() => {
      document.documentElement.scrollTo({
        top: window.innerHeight, // Scroll one screen height down
        behavior: 'smooth',
      });
    }, 500); // Delay for animation to start
  };

  // Reset page transition after initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageTransition(false);
    }, 1000); // Matches the fadeIn animation duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`w-full h-screen bg-gray-900 pt-1 ${pageTransition ? 'page-transition' : ''}`}>
      <div className="textstructure mt-20 px-6 md:px-20">
        {/* Heading 1 */}
        <div className={`masker ${animateText ? 'animate-move-right' : ''}`}>
          <h1 className="uppercase text-5xl md:text-7xl lg:text-9xl font-bold leading-tight md:leading-[6vw] tracking-tighter text-yellow-400 text-center md:text-left">
            We create
          </h1>
        </div>

        {/* Heading 2 */}
        <div className={`masker ${animateText ? 'animate-move-right' : ''}`}>
          <h1 className="uppercase text-5xl md:text-7xl lg:text-9xl font-bold leading-tight md:leading-[6vw] tracking-tighter text-orange-600 text-center md:text-left md:ml-28">
            eye opening
          </h1>
        </div>

        {/* Heading 3 */}
        <div className={`masker ${animateText ? 'animate-move-right' : ''}`}>
          <h1 className="uppercase text-5xl md:text-7xl lg:text-9xl font-bold leading-tight md:leading-[6vw] tracking-tighter text-green-500 text-center md:text-left">
            projects
          </h1>
        </div>

        {/* Border Divider */}
        <div className="border-t-[2px] border-zinc-800 mt-16 md:mt-32 w-full"></div>

        {/* Button */}
        <div className="start flex justify-center md:justify-end mt-8">
          <button
            className="px-4 py-2 border-4 border-red-500 rounded-full text-center w-60 md:w-[400px] font-bold text-lg md:text-4xl text-amber-100 uppercase bg-red-500 hover:bg-red-600 transition-all duration-300"
            onClick={handleButtonClick}
          >
            Start the project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
