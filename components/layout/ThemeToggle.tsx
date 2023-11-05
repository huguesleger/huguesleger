"use client";

import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { useState } from "react";
import Switch from "rc-switch";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    // <button
    //   className="btn btn-effect btn-theme-mode"
    //   onClick={() =>
    //     setTheme(theme === "light" || theme === "system" ? "dark" : "light")
    //   }
    // >
    //   <span>
    //     {theme === "light" || theme === "system" ? (
    //       <span>mode sombre</span>
    //     ) : (
    //       <span>mode lumière</span>
    //     )}
    //   </span>
    // </button>

    <Switch
      checked={theme === "light" || theme === "system" ? false : true}
      onChange={() =>
        setTheme(theme === "light" || theme === "system" ? "dark" : "light")
      }
      prefixCls="btn-switch-mode"
      checkedChildren={<Sun color="#fff" />}
      unCheckedChildren={<Moon color="#fff" />}
    />
  );
};

export default ThemeToggle;
