"use client";

// import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isDarkMode, setIsDarkMode] = useState(
    //     typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
    // );

    // useEffect(() => {
    //     if (isDarkMode) {
    //         document.documentElement.classList.add("dark");
    //     } else {
    //         document.documentElement.classList.remove("dark");
    //     }
    // }, [isDarkMode]);

    // const toggleTheme = () => {
    //     setIsDarkMode((prev) => !prev);
    // };

    return (
        <header className="sticky bg-white dark:bg-gray-800 px-4 dark:border-b dark:border-b-neutral-700 shadow top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <a href="/" className="font-bold text-xl md:text-2xl">
                        ET.Verdict
                    </a>
                </div>

            </div>
        </header>
    );
}
