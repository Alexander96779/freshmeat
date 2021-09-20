import React from "react";
import { StyleSheet, View, Image } from 'react-native';

export default function card(props){
    return(
        <View>
           <Image 
                source={props.itemImage}
                style={styles.image}
           /> 
           <View style={styles.cardFooter}>
               {props.children}
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
        borderColor: '#fff',
        borderWidth: 2
    },
    cardFooter: {
       width: '100%',
       height: '20%',
       backgroundColor: '#fff',
       borderColor: '#fff',
       borderWidth: 2
    }
});