// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // 기본은 OKLCH 유지, -hex 서브키로 fallback 세트 제공
                "hud-bg": {
                    DEFAULT: "oklch(0.1395 0.0317 270.28)",
                    hex: "#050816",
                },
                "neon-cyan": {
                    DEFAULT: "oklch(0.8834 0.1327 202.82)",
                    hex: "#4EF2FF",
                },
                "neon-pink": {
                    DEFAULT: "oklch(0.7101 0.2456 341.35)",
                    hex: "#FF4ECD",
                },
                "neon-yellow": {
                    DEFAULT: "oklch(0.9556 0.205983 107.9555)",
                    hex: "#FFF900",
                },
                "neon-blue": {
                    DEFAULT: "oklch(0.4634 0.2998 265.35)",
                    hex: "#111DFC",
                },
                "neon-purple": {
                    DEFAULT: "oklch(0.6303 0.2278 296.75)",
                    hex: "#9B5EFF",
                },
                "neon-green": {
                    DEFAULT: "oklch(0.8236 0.2737 142.9)",
                    hex: "#10EE1F",
                },
                "neon-red": {
                    DEFAULT: "oklch(0.5997 0.2408 28.75)",
                    hex: "#EE1010",
                },
                "neon-white": {
                    DEFAULT: "oklch(1 0 0)",
                    hex: "#FFFFFF",
                },
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
