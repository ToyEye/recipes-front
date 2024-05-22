import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "375px",

        md: "768px",

        lg: "1280px",
      },
      height: {
        "mob-calc": "calc(100vh - 64px - 156px - 96px)",
        "tab-calc": "calc(100vh - 64px - 116px - 192px)",
        "desc-calc": "calc(100vh - 64px - 116px)",
        "mob-calc-auth": "calc(100vh - 64px - 156px)",
        "tab-calc-auth": "calc(100vh - 64px - 116px)",
      },
    },
  },
  plugins: [],
};
export default config;
