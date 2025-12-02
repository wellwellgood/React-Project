export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "hud-bg": "#050816",
                "neon-cyan": "#4EF2FF",
                "neon-pink": "#FF4ECD",
                "neon-yellow": "#FFF900",
                "neon-blue": "#111DFC",
                "neon-purple": "#9B5EFF",
                "neon-green": "#10EE1F",
                "neon-red": "#EE1010",
                "neon-white": "#FFFFFF",
            },
            keyframes: {
                neonFlash: {
                    "0%": {
                        opacity: "0",
                        boxShadow: "none",
                    },
                    "50%": {
                        opacity: "1",
                    },
                    "100%":{
                        opacity: "0",
                    }
                },
            },
            animation: {
                neonFlash: "neonFlash 2s linear infinite",
            },
        },
    },
    plugins: [],
};