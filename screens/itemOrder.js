import React from "react";
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { globalStyles } from "../styles/global";
import Footer from "../shared/footer";

export default function ItemOrder ({ navigation }) {


    return(
        <ImageBackground
        source={require('../assets/game_bg.png')}
        style={styles.container}
        >
        <View style={styles.top}>
            <Text style={styles.header}>Place Your Order Here</Text>
        </View>
        <View style={styles.bodyContainer}>
            <Text style={styles.titleText}>Name: {navigation.getParam('title')}</Text>
            <Text style={globalStyles.paragraphText}>Description: {navigation.getParam('description')}</Text>
        </View>
        <Footer />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    top: {
        alignItems: 'center',
        marginTop: 30
    },
    header: {
        color: '#333',
        fontFamily: 'nunito-bold',
        fontSize: 20,
        borderColor: '#1db2c9',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'rgba(255,255,255, .1)'
    },
    bodyContainer: {
        marginTop: 10,
        marginLeft: 20
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
        color: '#333',
    }
})