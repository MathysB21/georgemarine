"use client";

import React from "react";

import { useEffect, useState } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Set the threshold for when the background should change
            const scrollY = window.scrollY;
            if (scrollY > 255) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Add event listener on scroll
        window.addEventListener("scroll", handleScroll);

        return () => {
            // Clean up event listener on component unmount
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav className="fixed w-full h-20 px-[4vw] bg-[#FDF0D5] z-20 flex items-center justify-between fakt-pro-blond uppercase text-[#D4A373] font-semibold">
            {/* Left Side */}
            <div className="flex items-center gap-[3vw]">
                <a href="#">Menu</a>
                <a href="#">About</a>
            </div>
            {/* Center */}
            <div
                className={`transition-all duration-500 ${
                    scrolled
                        ? "visible blur-none text-[#D4A373]"
                        : "invisible blur-sm text-[#FDF0D5]"
                }`}
            >
                George Marine
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-[3vw]">
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
