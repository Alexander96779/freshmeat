import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ItemOrder from '../screens/itemOrder';
import Header from '../shared/header';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation} />
            }
        }
    },
    ItemOrder: {
        screen: ItemOrder,
        navigationOptions: {
            title: 'Item Order'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#1db2c9', height: 60,}
    }
});
export default HomeStack;