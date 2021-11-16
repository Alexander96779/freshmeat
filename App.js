import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer';
import { Provider } from 'react-redux';
import configureStore from './store/store';

const getFonts = () => Font.loadAsync({
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf')
});
const store = configureStore();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
    if(fontsLoaded) {
      return (
        <Provider store={ store }>
        <Navigator />
        </Provider>
      );
    } else {
      return(
        <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
        onError={console.warn}
        />
      )
    }
  
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
