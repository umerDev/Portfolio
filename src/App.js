import React from 'react';
import Navigation from './components/navigation';
import Footer from '../src/components/props/footer';
import { useMediaQuery, Context as ResponsiveContext } from 'react-responsive'
import '../src/css/App.css';
import '../src/css/Navigation.css';


function App() {

  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 500 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isRetina = useMediaQuery({ minResolution: '2dppx' })

  return (
      
    <div id = "App">
      { isDesktopOrLaptop &&
        <ResponsiveContext.Provider value={{ width: 1200 }}>
          <Navigation/>
          <Footer/>
        </ResponsiveContext.Provider>
      }
      { isTabletOrMobileDevice &&
        <ResponsiveContext.Provider value={{ width: 500 }}>
          <Navigation/>
          <Footer/>
        </ResponsiveContext.Provider>
      }
    </div>
  );
}

export default App;

//https://www.framer.com/blog/posts/react-portfolio/
//https://www.framer.com/api/motion/examples/