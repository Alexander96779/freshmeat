import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function footer() {
    return(
        <View style={styles.footer}>
            <Text style={styles.footerText}>Fresh Meat &copy; 2021</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        display: 'flex', 
        width: '100%'
    },
    footerText: {
        color: '#333',
        fontFamily: 'nunito-regular',
        fontSize: 15,
    }
})