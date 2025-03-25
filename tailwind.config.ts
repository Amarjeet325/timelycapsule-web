import type { Config } from "tailwindcss";
import { PluginUtils } from "tailwindcss/types/config";

const gradientVariations = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left",
};

const gradientColors: { [key: string]: [string, string] } = {
  primary: ["colors.primary", "colors.primary-light"],
  "primary-dark": ["colors.primary", "colors.primary-dark"],
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/globals.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#48BB78",
        "primary-dark": "#215537",
        "primary-light": "#48BB7880",
      },
      fontFamily: {
        kumbhSans: ["var(--font-kumbh-sans)"],
        caveat: ["var(--font-caveat)"],
        inter: ["var(--font-inter)"],
        dmSans: ["var(--font-dm-sans)"],
        ibmPlexSans: ["var(--font-ibm-plex-sans)"],
      },
      backgroundImage: ({ theme }: PluginUtils) => {
        return {
          none: "none",
          ...Object.entries(gradientColors).reduce(
            (output, [colorName, colors]) => {
              return {
                ...output,
                ...Object.entries(gradientVariations).reduce(
                  (variations, [variationName, variationValue]) => {
                    return {
                      ...variations,
                      [`gradient-${variationName}-${colorName}`]: `linear-gradient(${variationValue}, ${theme(colors[0])}, ${theme(colors[1])})`,
                    };
                  },
                  {},
                ),
              };
            },
            {},
          ),
        };
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|border)-.*/,
    },
  ],
  plugins: [],
  darkMode: "class",
};

export default config;
