import Image from "next/image";
import React from "react";

// Icons Import
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const ServiceBlock = ({
    imageSrc,
    imageAlt,
    blockTitle,
    blockBody,
    blockLink,
}) => {
    return (
        // Container
        <div className="h-[80vh] flex flex-col mb-32 group/image-container">
            {/* Image Div */}
            <div className="w-full h-[65%] rounded-[12px] overflow-hidden relative mb-6">
                <Image
                    src={imageSrc}
                    fill={true}
                    alt={imageAlt}
                    className="object-cover object-center grayscale scale-100 origin-center group-hover/image-container:filter-none group-hover/image-container:scale-105 transition-all duration-700 ease-in-out"
                />
            </div>
            {/* Content Div */}
            <div className="border-2 border-[#D4A373] rounded-[12px] grid grid-cols-5 gap-16 md:gap-20 fakt-pro-blond p-4">
                <div className="col-span-5 md:col-span-4 flex flex-col gap-[1.5vw]">
                    <div className="text-[1.6vw] uppercase">
                        <p>{blockTitle}</p>
                    </div>
                    <div className="text-[1.2vw] text-indent">
                        <p>{blockBody}</p>
                    </div>
                    <a
                        aria-label={blockTitle}
                        className="border border-[#D4A373] bg-[#FDF0D5] transition-all duration-300 ease-out rounded-full px-2.5 py-1 cursor-pointer flex items-center justify-between w-[130px] hover:w-[150px] shadow-[0px_0px_0px_#D4A373] hover:shadow-[-3px_3px_0px_#D4A373] group/button"
                        href={blockLink}
                    >
                        <span className="text-[1vw]">READ MORE</span>{" "}
                        <ChevronRightIcon className="size-4 opacity-0 group-hover/button:opacity-100" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServiceBlock;
