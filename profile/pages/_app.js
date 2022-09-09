
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme, useMediaQuery, Switch} from '@mui/material';
import createEmotionCache from '../utility/createEmotionCache';

import { createContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types'
import {Container, makeStyles} from '@mui/system';
import Header from '../component/header/header';
import Footer from "../component/footer/footer";
const clientSideEmotionCache = createEmotionCache();

export const primaryColortext = '#000000'
export const secondaryColortext = '#ff9100'


function MyApp({ Component, pageProps ,emotionCache = clientSideEmotionCache}) {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')


  const [darkMode, setDarkMode] = useState(true)
  const handleDarkMode = darkMode ? secondaryColortext : primaryColortext

  const theme = useMemo(
    () =>
      createTheme({
        
        themeName: 'greenOrange',
        palette: {
          primary: { main: (darkMode ? '#999989' : '#8bb1b7'), },
          
          ///
          error: {
            main: "#fea82f",
          },
          background: {
            default: (darkMode ? '#55675f' : '#a8bdbb'),
          },
          ///////
         
        },
        typography: {
          h1: {
            fontFamily: 'Calistoga',
            color: handleDarkMode,
          },
          h2: {
            fontFamily: 'Calistoga',
            color: handleDarkMode,
          },
          h3: {
            fontFamily: 'Calistoga',
            color: handleDarkMode,
          },
          h4: {
            fontFamily: 'Calistoga',
            color: handleDarkMode,
          },
          h5: {
            fontFamily: 'Calistoga',
            color: handleDarkMode,
          },
          body2: {
            fontFamily: '"Roboto Slab", "Courier New", "serif"', // Main body text
            fontSize: '1rem',
            fontWeight: 400,
            letterSpacing: '0.00938em',
            lineHeight: 1.5,
          },
          
        },
      }),
    [darkMode]
  )


  

  // Checks user settings for dark mode preference
  useEffect(() => {
    prefersDarkMode ? setDarkMode(true) : setDarkMode(false)
  }, [prefersDarkMode])
 
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div style={{marginTop:'70px'}}>
          <Container>
        <Component {...pageProps} />
          </Container>
        </div>
        <Footer/>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};