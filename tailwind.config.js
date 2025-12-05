/** @type {import('tailwindcss').Config} */
import tailwindcssTextStroke from 'tailwindcss-text-stroke';

export default {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
    theme: {
        extend: {
            colors: {
                "hud-bg": "#050816",
                "neon-cyan": "#4AE2FF",
                "neon-pink": "#FF4ECD",
                "neon-yellow": "#FFFF00",
                "neon-blue": "#1DD9FF",
                "neon-purple": "#B055FF",
                "neon-green": "#10FF1F",
                "neon-red": "#FF1035",
                "neon-white": "#FFFFFF",
                "neon-junglegreen": "#1db56c"
            },
            keyframes: {
                neonFlash: {
                    "0%": { opacity: "0", boxShadow: "none" },
                    "50%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
            },
            animation: {
                neonFlash: "neonFlash 2s linear infinite",
            },
        },
    },
    plugins: [
        tailwindcssTextStroke,
    ],
};