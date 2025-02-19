"use client";
import { ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useEffect, useRef } from "react";

function SmoothScrolling({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        function update(data) {
            const time = data.timestamp;
            lenisRef.current?.lenis?.raf(time);
        }

        frame.update(update, true);

        return () => cancelFrame(update);
    }, []);

    return (
        <ReactLenis
            root
            options={{
                autoRaf: false,
                duration: 1.5,
            }}
            ref={lenisRef}
        >
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
