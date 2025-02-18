"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const BoatAnimation = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            // console.log("Scroll Y: ", window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Adjust these values based on your section height
    const startScroll = 300; // When the boat starts coming into view
    const stopScroll = 560; // When the boat stops moving
    const maxTranslation = 130; // Max movement down

    // Calculate boat movement
    const translateY =
        scrollY < startScroll
            ? -350 // Boat is out of view
            : scrollY > stopScroll
            ? maxTranslation // Boat is stranded
            : ((scrollY - startScroll) / (stopScroll - startScroll)) *
              maxTranslation;

    return (
        <div className="w-full absolute top-0 flex justify-center">
            <div
                className="absolute transition-transform duration-1000 ease-in-out mr-[150px]"
                style={{
                    transform: `translateY(${translateY}px)`,
                    position: "sticky",
                    top: "0px", // Ensures it moves with scroll
                }}
            >
                <Image
                    src={"/svg/little-boat-camel.svg"}
                    width={140}
                    height={404}
                    // fill={true}
                    className=""
                    alt="Image of boat on ocean from a top down view"
                />
            </div>
        </div>
    );
};

export default BoatAnimation;
