import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation} />
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#1db2c9', height: 60}
    }
});

export default AboutStack;