// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        colors: {
          // Primary Colors (Light & Dark)
          primary: {
            light: '#2C7EF8',       // Base primary
            dark: '#3A86F8',
            hover: {
              light: '#075CD9',       // Light mode hover
              dark: '#6BA4FA'         // Dark mode hover
            },
            'on-light': '#FFFFFF'     // Text on primary-light
          },
  
          // Background & Surface (Light & Dark)
          background: {
            light: '#FFFFFF',         // Light background
            dark: '#040810'           // Dark background
          },
          surface: {
            light: '#FFFFFF',         // Light surface (cards)
            dark: '#E6E9EF'           // Dark surface (cards)
          },
          'on-background': {
            light: '#191C1E',         // Text on light bg
            dark:  '#E6E9EF'           // Text on dark bg
          },
          "custom-border": {
                light: "#E1E0E5"
              }
        },
        fontFamily: {
          // Custom Fonts
          vazir: "Vazir",
          
        },

      }
    },
    // Enable dark mode variants
    darkMode: 'class', // or 'media' based on your preference
  }