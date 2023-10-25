/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                searchInput: "inset 0 0 5px rgba(0,0,255,0.3)",
            },
        },
    },
    plugins: [],
};
