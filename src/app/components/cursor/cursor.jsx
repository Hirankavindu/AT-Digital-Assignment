"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="w-12 h-12 fixed rounded-full z-50 bg-orange-400 max-[680px]:invisible"
      animate={{ x: position.x, y: position.y }}
    ></motion.div>
  );
}

export default Cursor;
