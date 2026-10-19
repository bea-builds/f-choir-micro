import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        // colors: {
        //     black: '#2a2a2a',
        //     blue: '#5e7ae3',
        //     green: '#99fc7c',
        //     orange: '#f09546',
        //     pink: '#e33193',
        //     white: '#fffef0',
        // },
        screens: {
            s: '360px',
            m: '640px',
            l: '1024px',
            xl: '1280px',
        },
        // extend: {
        //     fontFamily: {
        //         inclusiveSans: ['inclusivesans_2bcba358-module__esYx-W__className', ...defaultTheme.fontFamily.sans],
        //         bastardoSemi: ['bastardosemibold_54abe4bd-module__mhFygW__className', ...defaultTheme.fontFamily.sans],
        //         nanHolo: ['nanholomono_633d4308-module__4QxNza__className', ...defaultTheme.fontFamily.sans],
        //         seaSummer: ['seasummer_29edce36-module__1Sd1rW__className {', ...defaultTheme.fontFamily.sans],
        //         seaSummerCalm: ['seasummercalm_2b252c5e-module__ShS9oq__className', ...defaultTheme.fontFamily.sans],
        //     },
        // },
    },
}

// This config doesn't seem to be loading
export default config;