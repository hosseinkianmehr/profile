import React from 'react'
export const primaryColor = '#144d53'
export const secondaryColor = '#ff9100'

const Theme = (color ) => ({
    
    palette: {
        primary: { main: primaryColor },
        secondary: { main: secondaryColor },
        common: {
          defaultDarkBackground: '#ffc',
          defaultLightBackground: '#eee',
        },
        type: color ? 'dark' : 'light',
      },
      typography: {
        h1: {
          fontFamily: 'Calistoga',
          color: color ? primaryColor : secondaryColor,
        },
        h2: {
          fontFamily: 'Calistoga',
          color: color ? primaryColor : secondaryColor,
        },
        h3: {
          fontFamily: 'Calistoga',
          color: color ? primaryColor : secondaryColor,
        },
        h4: {
          fontFamily: 'Calistoga',
          color: color ? primaryColor : secondaryColor,
        },
        h5: {
          fontFamily: 'Calistoga',
          color: color ? primaryColor : secondaryColor,
        },
        body2: {
          fontFamily: '"Roboto Slab", "Courier New", "serif"', // Main body text
          fontSize: '1rem',
          fontWeight: 400,
          letterSpacing: '0.00938em',
          lineHeight: 1.5,
        },
      },
    
})
    export default Theme
