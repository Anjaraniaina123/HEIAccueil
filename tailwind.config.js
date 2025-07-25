/**@type{import ('tailwindcss').Config}*/

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
    extend: {
        fontFamily : {
            'garamond' :["EB Garamond", 'serif'],
            'poppins' : ['Poppins', 'sans-serif'],
        },
    },
};
export const plugins = [];