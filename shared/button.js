import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function FlatButton({ text, onPress }) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
button: {
marginTop: 20,
paddingVertical: 14,
paddingHorizontal: 10,
backgroundColor: '#1db2c9',
margin: 15
},
buttonText: {
color: 'white',
fontFamily: 'nunito-bold',
fontSize: 16,
textAlign: 'center'
}
});