import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function header({navigation}){

    const openMenu = () =>{
        navigation.openDrawer();
    }

    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' onPress={openMenu} style={styles.icon} />
            <View>
            <Text style={globalStyles.titleText}>Fresh Meat</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    },
    icon: {
    position: 'absolute',
    left: 16,
    color: '#fff',
    fontSize: 30,
    }
});