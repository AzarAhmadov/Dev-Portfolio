"use client";

import React, { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { FiMoon } from "react-icons/fi";

const Theme = () => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "light";
  });

  const handleChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = (e: any) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [theme]);

  return (
    <button
      className="fixed border right-4 bottom-4 border-[#fff]/40 border-dashed w-max rounded-full bg-black text-white text-[30px] cursor-pointer p-2"
      onClick={handleChange}
    >
      {theme === "light" ? <FiMoon /> : <CiLight />}
    </button>
  );
};

export default Theme;
