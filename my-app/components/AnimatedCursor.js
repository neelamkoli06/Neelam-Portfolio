import React, { useEffect, useState } from "react";

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom Cursor with shadow below the cursor */}
      <div
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        className="fixed w-8 h-8 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 animate-blink shadow-[0px_10px_15px_rgba(0,0,0,0.2)]"
      ></div>
    </>
  );
}
