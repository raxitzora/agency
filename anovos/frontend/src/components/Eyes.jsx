import React, { useEffect, useRef, useState } from "react";

function Eyes() {
  const leftWhiteRef = useRef(null); // White pupil (left)
  const rightWhiteRef = useRef(null); // White pupil (right)
  const leftBlackRef = useRef(null); // Black pupil (left)
  const rightBlackRef = useRef(null); // Black pupil (right)

  const [isCircular, setIsCircular] = useState(false);
  const [isRainbow, setIsRainbow] = useState(false);
  const [rainbowClass, setRainbowClass] = useState("");

  useEffect(() => {
    let path = [];
    let timeout;
    let lastMouseMoveTime = Date.now();

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const now = Date.now();
      const speed = Math.sqrt(
        e.movementX ** 2 + e.movementY ** 2
      ) / (now - lastMouseMoveTime || 1);
      lastMouseMoveTime = now;

      // Enable rainbow effect if speed exceeds threshold
      if (speed > 0.5) {
        setIsRainbow(true);
        setRainbowClass("animate-rainbow");
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setIsRainbow(false);
          setRainbowClass("");
        }, 100);
      }

      // Save mouse positions
      path.push({ x: mouseX, y: mouseY });

      if (path.length > 20) path.shift(); // Limit the number of points tracked

      // Detect circular motion using simple heuristic
      if (path.length > 10) {
        const firstPoint = path[0];
        const lastPoint = path[path.length - 1];

        const distance = Math.sqrt(
          (lastPoint.x - firstPoint.x) ** 2 + (lastPoint.y - firstPoint.y) ** 2
        );

        // Check if the points form a circular motion (distance close to starting point)
        if (distance < 50) {
          setIsCircular(true);
          clearTimeout(timeout);
          timeout = setTimeout(() => setIsCircular(false), 3000); // Reset after 3 seconds
        }
      }

      // Calculate offsets for each eye
      const calculateOffset = (blackRef, whiteRef) => {
        if (!blackRef.current || !whiteRef.current) return;

        const blackRect = blackRef.current.getBoundingClientRect();
        const blackCenterX = blackRect.left + blackRect.width / 2;
        const blackCenterY = blackRect.top + blackRect.height / 2;

        const deltaX = mouseX - blackCenterX;
        const deltaY = mouseY - blackCenterY;

        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(20, Math.sqrt(deltaX ** 2 + deltaY ** 2)); // Limit movement to 20px

        const offsetX = Math.cos(angle) * distance;
        const offsetY = Math.sin(angle) * distance;

        whiteRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      };

      calculateOffset(leftBlackRef, leftWhiteRef);
      calculateOffset(rightBlackRef, rightWhiteRef);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`eyes w-full h-screen overflow-hidden mt-5 relative ${
        isRainbow ? "bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-pulse" : "bg-blue-400"
      }`}
    >
      <h1 className="ml-[700px] text-black text-7xl font-bold uppercase">
        Fun time
      </h1>
      <div className="border-2 border-solid mt-24 rounded-full bg-gray-800">
        <div className="border-2 border-blue-900 border-y-[200px] ml-[100px] mr-[100px] flex gap-x-36 rounded-3xl">
          <div
            className={`border-2 rounded-full h-[15vw] w-[15vw] ml-[400px] ${
              isRainbow ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-red-700"
            }`}
          >
            {/* Left black pupil */}
            <div
              ref={leftBlackRef}
              className={`border-2 rounded-full h-[8vw] w-[8vw] ml-14 mt-14 ${
                isRainbow ? "bg-gradient-to-r from-yellow-500 to-green-500" : "bg-black"
              } flex items-center justify-center`}
            >
              {/* Left white pupil */}
              <div
                ref={leftWhiteRef}
                className={`line border-2 rounded-full h-[2vw] w-[2vw] ${
                  isRainbow ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-white"
                }`}
              ></div>
            </div>
          </div>
          <div
            className={`border-2 rounded-full h-[15vw] w-[15vw] ${
              isRainbow ? "bg-gradient-to-r from-green-500 to-yellow-500" : "bg-red-700"
            }`}
          >
            {/* Right black pupil */}
            <div
              ref={rightBlackRef}
              className={`border-2 rounded-full h-[8vw] w-[8vw] ml-14 mt-14 ${
                isRainbow ? "bg-gradient-to-r from-red-500 to-orange-500" : "bg-black"
              } flex items-center justify-center`}
            >
              {/* Right white pupil */}
              <div
                ref={rightWhiteRef}
                className={`line border-2 rounded-full h-[2vw] w-[2vw] ${
                  isRainbow ? "bg-gradient-to-r from-blue-500 to-indigo-500" : "bg-white"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Circular Motion Effect */}
      {isCircular && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className={`text-7xl font-bold animate-pulse rainbow-text`}>
            WE ARE ANOVOS ❤️
          </div>
          <div className="mt-[400px] text-red-500 text-6xl font-bold">
            Keep Moving in Circles! You're Amazing!
          </div>
        </div>
      )}
    </div>
  );
}

export default Eyes;
