import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';
import Footer from '../shared/footer';

export default function about () {
    return(
        <ImageBackground
        source={require('../assets/game_bg.png')}
        style={styles.container}
        >
            <View style={styles.top}>
                <Text style={styles.header}>About Us</Text>
            </View>
            <View style={styles.paragraph1}>
            <Text style={globalStyles.paragraphText}>Fresh Meat is a buthcer's shop located in kimironko market. 
                We specialize in selling meat products such as white or red meat, poultry and Fresh
                fish.
            </Text>
            </View>
            <View style={styles.paragraph2}>
            <Text style={globalStyles.paragraphText}>We accept orders anytime and we can even deliver at your doorstep.</Text>
            </View>
            <View style={styles.paragraph3}>
                <Text style={globalStyles.paragraphText}>Call or Text us on: +250788885200</Text>
            </View>
            <View style={styles.paragraph4}>
                <Text style={styles.paragraph4Text}>Shop closes at 8 pm!!</Text>
            </View>
            <Footer />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    width: '100%',
    height: '100%',
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
    paragraph1: {
        marginLeft: 10,
        fontFamily: 'nunito-regular',
        marginTop: 20
    },
    paragraph2:{
        marginTop: 5,
        fontFamily: 'nunito-regular',
        marginLeft: 10
    },
    paragraph3:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    fontFamily: 'nunito-regular',
    },
    paragraph4:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    paragraph4Text: {
        fontFamily: 'nunito-bold',
        fontSize: 20
    }
})