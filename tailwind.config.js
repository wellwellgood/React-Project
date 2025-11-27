/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "hud-bg": "#050816",
                "neon-cyan": "#4ef2ff",
                "neon-pink": "#ff4ecd",
                "neon-yellow": "#ffe66d",
                "neon-blue": "#111dfc",
                "neon-purple": "#9b5eff",
                "neon-green": "#10ee1f",
                "neon-red": "#ee1010",
                "neon-white": "#ffffff",

            },
            boxShadow: {
                neon: "0 0 20px rgba(78,242,255,0.45)",
            },
            fontFamily: {
                pixel: ['"Press Start 2P"', "system-ui", "sans-serif"],
            },
            backgroundImage: {
                "grid-dark":
                    "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            },
            backgroundSize: {
                grid: "24px 24px",
            },
        },
    },
    plugins: [],
};
