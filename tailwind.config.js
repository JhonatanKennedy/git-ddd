/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        fontFamily: {
            sans: ["Roboto"],
        },
        colors: {
            primary: "#FFFFFF",
            secondary: "#04D361",
            background: "#F2F2FA",
            title: "#3A3A3A",
            "card-title": "#3D3D4D",
            "card-subtitle": "#737380",
            "light-grey": "#A8A8B3",
        },
        extend: {},
    },
    plugins: [],
};
