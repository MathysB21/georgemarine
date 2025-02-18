import BoatAnimation from "@/components/BoatAnimation";
import ServiceBlock from "@/components/ServiceBlock";
import Image from "next/image";

export default function Home() {
    const services = [
        {
            imageSrc: "/images/motor-repairs-1.webp",
            imageAlt:
                "A small fishing boat on a dock with a Suzuki outboard engine",
            blockTitle: "Motor Repairs",
            blockBody:
                "Meticulous restoration and servicing of all outboard motor brands, ensuring steadfast performance and enduring reliability upon the water.",
            blockLink: "/service/motor-repairs",
        },
        {
            imageSrc: "/images/routine-maintenance-4.webp",
            imageAlt:
                "A row of boats standing outside a dock on stands ready for maintenance",
            blockTitle: "Routine Maintenance",
            blockBody:
                "Diligent upkeep designed to preserve your outboard’s integrity, ensuring seamless operation through time-honored maintenance practices.",
            blockLink: "/service/routine-maintenance",
        },
        {
            imageSrc: "/images/parts-replacement-1.webp",
            imageAlt:
                "An outboard motor's propellers attached to the motors on the boat on a stand outside the water.",
            blockTitle: "Parts Replacement",
            blockBody:
                "Premium-quality components fitted with precision to enhance your outboard’s endurance and sustain its seafaring longevity.",
            blockLink: "/service/parts-replacement",
        },
    ];

    return (
        <main>
            {/* Landing Section */}
            <section className="relative w-full h-screen z-0 p-[5vw]">
                {/* Image */}
                <Image
                    src={"/svg/top-5-light-blue.svg"}
                    width={750}
                    height={750}
                    // fill={true}
                    className="absolute bottom-0 right-0 -z-10"
                    alt="Image of boat on ocean from a top down view"
                />
                {/* Left Side */}
                <div className="h-full flex flex-col justify-center gt-super text-[#D4A373]">
                    <h1 className="text-[6.9vw] uppercase">George Marine</h1>
                    <h2 className="text-[2vw] pl-[2%] text-wrap w-[50%] tracking-wide uppercase">
                        Premium outboard motor services,{" "}
                        <span className="lowercase italic">ensuring</span>{" "}
                        unwavering reliability{" "}
                        <span className="lowercase italic">for a</span> seamless
                        voyage.
                    </h2>
                </div>
            </section>

            {/* Wave Section */}
            <section className="w-full h-[590px] mb-[2vw] relative overflow-hidden">
                {/* White Wave */}
                <div className="w-full absolute top-0 left-0 wave-animation wave-delay-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 350"
                    >
                        <path
                            fill="#fff"
                            fillOpacity="1"
                            d="M -0.001 312.043 L 29.999 277.371 C 59.999 242.701 180.444 257.146 238.364 285.789 C 315.04 323.709 353.362 356.58 413.362 338.918 C 473.362 321.908 550.038 200.162 650.06 242.453 C 750.082 284.745 730.039 333.522 790.039 345.441 C 850.039 357.359 871.685 295.921 931.685 330.919 C 991.685 365.265 1038.34 235.866 1098.34 281.696 C 1158.34 327.961 1200 312.043 1260 294.707 C 1320 277.371 1380 283.914 1413.34 223.947 L 1440 138.686 L 1440 0 L 1410 0 C 1380 0 1320 0 1260 0 C 1200 0 1140 0 1080 0 C 1020 0 960.001 0 900.001 0 C 840.001 0 780.001 0 720.001 0 C 660.001 0 599.999 0 539.999 0 C 479.999 0 419.999 0 359.999 0 C 299.999 0 239.999 0 179.999 0 C 119.999 0 59.999 0 29.999 0 L -0.001 0 L -0.001 312.043 Z"
                        ></path>
                    </svg>
                </div>

                {/* Light Blue Wave */}
                <div className="w-full absolute top-0 left-0 wave-animation wave-delay-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 350"
                    >
                        <path
                            fill="#669BBC"
                            fillOpacity="1"
                            d="M -0.001 288 L 29.999 256 C 59.999 224 180.444 237.332 238.364 263.769 C 315.04 298.767 353.362 329.105 413.362 312.805 C 473.362 297.105 550.038 184.739 650.06 223.772 C 750.082 262.805 730.039 307.824 790.039 318.824 C 850.039 329.824 871.685 273.121 931.685 305.421 C 991.685 337.121 1038.343 217.692 1098.343 259.992 C 1158.343 302.692 1200 288 1260 272 C 1320 256 1380 262.038 1413.335 206.692 L 1440 128 L 1440 0 L 1410 0 C 1380 0 1320 0 1260 0 C 1200 0 1140 0 1080 0 C 1020 0 960.001 0 900.001 0 C 840.001 0 780.001 0 720.001 0 C 660.001 0 599.999 0 539.999 0 C 479.999 0 419.999 0 359.999 0 C 299.999 0 239.999 0 179.999 0 C 119.999 0 59.999 0 29.999 0 L -0.001 0 L -0.001 288 Z"
                        ></path>
                    </svg>
                </div>

                {/* Dark Blue Wave */}
                <div className="w-full absolute top-0 left-0 wave-animation wave-delay-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 300"
                    >
                        <path
                            fill="#003049"
                            fillOpacity="1"
                            d="M -0.001 128 C -2.883 166.745 51.822 204.849 72.775 196.932 C 121.119 192.596 161.22 125.216 221.22 146.216 C 281.22 167.216 339.446 222.323 388.348 240.992 C 437.25 259.661 464.991 251.676 534.996 206.332 C 605.001 160.988 633.467 125.143 693.317 132.257 C 774.997 141.965 877.5 197.213 937.5 207.913 C 997.5 218.213 1077.554 162.194 1138.365 150.013 C 1191.575 139.355 1220.791 134.578 1269.118 167.257 C 1317.445 199.936 1371.663 176.629 1378.312 171.332 L 1445.003 117.275 L 1440 0 L 1410 0 C 1380 0 1320 0 1260 0 C 1200 0 1140 0 1080 0 C 1020 0 960.001 0 900.001 0 C 840.001 0 780.001 0 720.001 0 C 660.001 0 599.999 0 539.999 0 C 479.999 0 419.999 0 359.999 0 C 299.999 0 239.999 0 179.999 0 C 119.999 0 59.999 0 29.999 0 L -0.001 0 L -0.001 128 Z"
                        ></path>
                    </svg>
                </div>

                {/* Little Boat */}
                <BoatAnimation />

                {/* BG Colour Wave / Light Camel */}
                <div className="w-full absolute top-0 left-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 250"
                    >
                        <path
                            fill="#FDF0D5"
                            fillOpacity="1"
                            d="M 0 41.791 L 30 55.699 C 60 69.868 120 97.294 180 114.924 C 240 132.555 300 139.084 360 128.832 C 420 118.189 480 90.764 540 97.49 C 600 104.476 660 146.267 720 149.728 C 780 153.45 840 118.189 900 90.568 C 960 62.686 1020 41.791 1080 41.791 C 1140 41.791 1200 62.686 1260 62.686 C 1320 62.686 1380 41.791 1410 31.343 L 1440 20.895 L 1440 0 L 1410 0 C 1380 0 1320 0 1260 0 C 1200 0 1140 0 1080 0 C 1020 0 960 0 900 0 C 840 0 780 0 720 0 C 660 0 600 0 540 0 C 480 0 420 0 360 0 C 300 0 240 0 180 0 C 120 0 60 0 30 0 L 0 0 L 0 41.791 Z"
                        ></path>
                    </svg>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="w-full grid grid-cols-12 gap-5 fakt-pro-blond px-[2vw] text-[#D4A373] h-fit">
                {/* Left Side */}
                <div className="col-span-7 h-full relative gt-super uppercase text-[2vw]">
                    {/* Sticky div */}
                    <div className="w-[80%] top-[2vw] sticky">
                        <h2 className="text-[6vw] w-full uppercase">
                            <span className="">Our</span>{" "}
                            <span className="">Services</span>
                        </h2>
                        <p className="w-[80%]">
                            Delivering UNPARALLELED NAUTICAL Service{" "}
                            <span className="lowercase italic">through</span>{" "}
                            KNOW-HOW, PASSION,{" "}
                            <span className="lowercase italic">and</span>{" "}
                            DETERMINATION{" "}
                            <span className="lowercase italic">to</span> GO{" "}
                            <span className="underline">BEYOND</span>.
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="col-span-5 mt-[3vw] flex flex-col justify-start gap-6">
                    {/* <ServiceBlock service={"Motor Repairs"} />
                    <ServiceBlock service={"Routine Maintenance"} />
                    <ServiceBlock service={"Parts Replacement"} /> */}
                    {services.map((service, index) => (
                        <ServiceBlock key={index} {...service} />
                    ))}
                </div>
            </section>

            {/* Greeting Section */}
            <section className="w-full h-[33vh] gt-super text-center flex justify-center items-center">
                <p className="italic text-[2.2vw] text-[#D4A373]">
                    "May your seas be smooth and your sails full of wind"
                </p>
            </section>
        </main>
    );
}
