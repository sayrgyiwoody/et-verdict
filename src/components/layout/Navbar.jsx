"use client";

// import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import "../../../node_modules/@theme-toggles/react/css/Expand.css"
import { Expand } from '@theme-toggles/react';
import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function Navbar() {
    // darkMode 
    const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', false);

    const handleToggle = () => {
        setIsDarkMode((pre) => !pre);
    };

    useEffect(() => {
        isDarkMode ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, [isDarkMode])


    return (
        <header className="sticky bg-white dark:bg-gray-800 px-3 md:px-6 dark:border-b dark:border-b-neutral-700 shadow top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <a href="/" className="font-bold text-xl md:text-2xl">
                        ET.Verdict
                    </a>
                </div>

                <div onClick={handleToggle} className="cursor-pointer bg-slate-50 border border-gray-300 shadow dark:bg-gray-700 dark:border-gray-700 text-gray-900 dark:text-white w-10 h-10 flex items-center justify-center  rounded-full">
                    <Expand toggled={isDarkMode} className=' text-xl' />
                </div>
            </div>
        </header>
    );
}
