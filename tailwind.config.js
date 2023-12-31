/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
      "colors": {
        'accent-red-100': 'var( --accent-red-100 )',
        'accent-red-200': 'var( --accent-red-200 )',
        'accent-red-300': 'var( --accent-red-300 )',
        'accent-red-400': 'var( --accent-red-400 )',
        'accent-red-500': 'var( --accent-red-500 )',
        'accent-red-600': 'var( --accent-red-600 )',
        'accent-red-700': 'var( --accent-red-700 )',
        'accent-red-800': 'var( --accent-red-800 )',
        'accent-red-900': 'var( --accent-red-900 )',
        'accent-cyan-100': 'var( --accent-cyan-100 )',
        'accent-cyan-400': 'var( --accent-cyan-400 )',
        'accent-cyan-700': 'var( --accent-cyan-700 )',
        'accent-cyan-200': 'var( --accent-cyan-200 )',
        'accent-cyan-500': 'var( --accent-cyan-500 )',
        'accent-cyan-800': 'var( --accent-cyan-800 )',
        'accent-cyan-300': 'var( --accent-cyan-300 )',
        'accent-cyan-600': 'var( --accent-cyan-600 )',
        'accent-cyan-900': 'var( --accent-cyan-900 )',
        'primary-orange-100': 'var( --primary-orange-100 )',
        'primary-orange-200': 'var( --primary-orange-200 )',
        'primary-orange-300': 'var( --primary-orange-300 )',
        'primary-orange-400': 'var( --primary-orange-400 )',
        'primary-orange-500': 'var( --primary-orange-500 )',
        'primary-orange-600': 'var( --primary-orange-600 )',
        'primary-orange-700': 'var( --primary-orange-700 )',
        'primary-orange-800': 'var( --primary-orange-800 )',
        'primary-orange-900': 'var( --primary-orange-900 )',
        'natural-grey-100': 'var( --natural-grey-100 )',
        'natural-grey-200': 'var( --natural-grey-200 )',
        'natural-grey-300': 'var( --natural-grey-300 )',
        'natural-grey-400': 'var( --natural-grey-400 )',
        'natural-grey-500': 'var( --natural-grey-500 )',
        'natural-grey-600': 'var( --natural-grey-600 )',
        'natural-grey-700': 'var( --natural-grey-700 )',
        'natural-grey-800': 'var( --natural-grey-800 )',
        'natural-grey-900': 'var( --natural-grey-900 )',
        'accent-yellow-100': 'var( --accent-yellow-100 )',
        'accent-yellow-200': 'var( --accent-yellow-200 )',
        'accent-yellow-300': 'var( --accent-yellow-300 )',
        'accent-yellow-400': 'var( --accent-yellow-400 )',
        'accent-yellow-500': 'var( --accent-yellow-500 )',
        'accent-yellow-600': 'var( --accent-yellow-600 )',
        'accent-yellow-700': 'var( --accent-yellow-700 )',
        'accent-yellow-800': 'var( --accent-yellow-800 )',
        'accent-yellow-900': 'var( --accent-yellow-900 )',
        'primary-blue-100': 'var( --primary-blue-100 )',
        'primary-blue-200': 'var( --primary-blue-200 )',
        'primary-blue-300': 'var( --primary-blue-300 )',
        'primary-blue-500': 'var( --primary-blue-500 )',
        'primary-blue-600': 'var( --primary-blue-600 )',
        'primary-blue-700': 'var( --primary-blue-700 )',
        'primary-blue-800': 'var( --primary-blue-800 )',
        'primary-blue-900': 'var( --primary-blue-900 )',
        'natural-black': "var( --natural-black )",
        'natural-white': "var( --natural-white )",
      },
      spacing: {
        px: '1px',
        0: '0px',
        "space--1": 'var(--space-2xs)',
        "space-0": 'var(--space-xs)',
        "space-1": 'var(--space-s)',
        "space-2": 'var(--space-m)',
        "space-3": 'var(--space-l)',
        "space-4": 'var(--space-xl)',
        "space-5": 'var(--space-2xl)',
        "space-6": 'var(--space-3xl)',
        "space-7": 'var(--space-4xl)',
        "space-8": 'var(--space-5xl)',
        "space-9": 'var(--space-6xl)',
        "space-10": 'var(--space-7xl)',
      },
      "fontSize": {
      "xs": "var(--step--2)",   
      "sm": "var(--step--1)", 
      "base": "var(--step-0)", 
      "lg": "var(--step-1)", 
      "h6": "var(--step-2)", 
      "h5": "var(--step-3)", 
      "h4": "var(--step-4)",  
      "h3": "var(--step-5)", 
      "h2": "var(--step-6)", 
      "h1": "var(--step-7)", 
      "d3": "var(--step-8)",
      "d2": "var(--step-9)",
      "d1": "var(--step-10)",
      },
      "fontFamily": {
      "vollkorn": "var( --font-secondary )",
      "montserrat": "var( --font-main )",
      },
      "boxShadow": {
      "shadow-3": "0px 9px 25px 0px rgba(0,0,0,0.3)",
      "inner-shadow-traits": "inset 7px 9px 12px 0px rgba(0,0,0,0.09)",
      "card": "6px 11px 41px 0px rgba(0, 0, 0, 0.15)",
      "h-section": "var(--text-shadow-h-section)",
      "project-mobile": "",
      "project-tablet": "",
      "project-desktop":"",
      },
      "borderRadius": {
      "none": "0",
      "xs": "5px",
      "ss": "8px",
      "sm": "15px",
      "md": "25px",
      },
    screens: {
      "xs": "576px",
      "ss": "768px",
      "sm": "1024px",
      "md": "1280px",
      "lg": "1400px",
      "xl": "1920px",
      
    },
    gap: ({theme}) => theme('spacing'),
    extend: {
    
    },
  },
  plugins: [],
}
