import {text} from "stream/consumers";
import {fontFamily} from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const {nextui} = require("@nextui-org/react");

module.exports = {
    content: [
        "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'custom': '0px 20px 48px 0px rgba(0, 0, 0, 0.08)',
            },
            fontFamily: {
                sans: ["var(--font-sora)", ...fontFamily.sans],
                code: "var(--font-code)",
                grotesk: "var(--font-grotesk)",
            },
            letterSpacing: {
                tagline: ".15em",
            },
            spacing: {
                0.25: "0.0625rem",
                7.5: "1.875rem",
                15: "3.75rem",
            },
            opacity: {
                15: ".15",
            },
            transitionDuration: {
                DEFAULT: "200ms",
            },
            transitionTimingFunction: {
                DEFAULT: "linear",
            },
            zIndex: {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
            },
            borderWidth: {
                DEFAULT: "0.0625rem",
            },
            backgroundImage: {
                "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
                "conic-gradient":
                    "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
            },
            colors: {
                app: {
                    main: "#F13792",
                    secondary: '#19052f99',
                    primary: '#19052ff2',
                    success: '#22C55E',
                    error: '#FF3B30',
                    gray: '#19052f08',
                }
            },
            borderColor: {
                error: '#FF3B30',
                primary: '#19052f0d'
            },
            flex: {
                '2': '2 2 0%',
            },
            backgroundSize: {
                'size-100': '100% 100%',
            },
            backgroundRepeat: {
                'no-repeat': 'no-repeat',
            },
        },
    },
    plugins: [
        nextui(),
        plugin(function ({addBase, addComponents, addUtilities}) {
            addBase({});
            addComponents({
                ".container": {
                    "@apply max-w-[77.5rem] mx-auto px-4 md:px-10 lg:px-15 xl:max-w-[87.5rem] 2xl:max-w-[117.5rem]":
                        {},
                },
                ".h1": {
                    "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
                        {},
                },
                ".h2": {
                    "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
                        {},
                },
                ".h3": {
                    "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
                },
                ".h4": {
                    "@apply text-[2rem] leading-normal": {},
                },
                ".h5": {
                    "@apply text-2xl leading-normal": {},
                },
                ".h6": {
                    "@apply font-semibold text-lg leading-8": {},
                },
                ".caption": {
                    "@apply text-sm": {},
                },
                ".tagline": {
                    "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
                        {},
                },
                ".quote": {
                    "@apply font-code text-lg leading-normal": {},
                },
                ".button": {
                    "@apply font-code text-xs font-bold uppercase tracking-wider":
                        {},
                },
            });
            addUtilities({
                ".tap-highlight-color": {
                    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
                },
            });
        }),
        function({ addUtilities }) {
            addUtilities({
                '.bg-size-100': {
                    'background-size': '100% 100%',
                    'background-repeat': 'no-repeat',
                },
            });
        }
    ],
};