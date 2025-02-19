import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import SmoothScrolling from "@/components/SmoothScrolling";
import Navbar from "@/components/Navbar";

const cg_init = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-cormorant-garamond",
});

const gtSuper = localFont({
    src: [
        {
            path: "../../public/fonts/GT-Super-Display-Light.woff",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/GT-Super-Display-Light-Italic.woff",
            weight: "300",
            style: "italic",
        },
        {
            path: "../../public/fonts/GT-Super-Display-Bold.woff",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/GT-Super-Display-Bold-Italic.woff",
            weight: "700",
            style: "italic",
        },
    ],
    variable: "--font-gt-super", // Optional: Expose as a CSS variable
    display: "swap", // Ensures better performance
});

export const metadata = {
    title: "George Marine",
    description: "Ensuring smooth sailing with 30 years of expertise",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${cg_init.variable} ${gtSuper.variable} antialiased`}
            >
                <SmoothScrolling>
                    <Navbar />
                    {children}
                </SmoothScrolling>
            </body>
        </html>
    );
}
