import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import SplashScreen from './SplashScreen';
import AppContainer from './AppContainer';

const App = () => {
  const [isSplash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      {isSplash ? <SplashScreen /> : <AppContainer />}
    </React.Fragment>
  );
};

export default App;
