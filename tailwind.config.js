/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "hud-bg": "oklch(0.1395 0.0317 270.28)",
                "neon-cyan": "oklch(0.8834 0.1327 202.82)",
                "neon-pink": "oklch(0.7101 0.2456 341.35)",
                "neon-yellow": "oklch(0.9556 0.205983 107.9555)",
                "neon-blue": "oklch(0.4634 0.2998 265.35)",
                "neon-purple": "oklch(0.6303 0.2278 296.75)",
                "neon-green": "oklch(0.8236 0.2737 142.9)",
                "neon-red": "oklch(0.5997 0.2408 28.75)",
                "neon-white": "oklch(1 0 0)",

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
