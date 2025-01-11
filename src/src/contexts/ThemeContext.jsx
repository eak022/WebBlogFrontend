// contexts/ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

// สร้าง Context
const ThemeContext = createContext();

// สร้าง ThemeProvider
const ThemeProvider = ({ children }) => {
  // ตั้งค่าเริ่มต้นธีม
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // ฟังก์ชันสำหรับการเปลี่ยนธีม
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    console.log("Theme changed to:", newTheme); // เพิ่มการพิมพ์ค่าใน console
  };

  // เมื่อธีมเปลี่ยนแปลงให้ปรับเปลี่ยนใน <body>
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
