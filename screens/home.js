import React, {useState} from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Footer from '../shared/footer';
import Card from '../shared/card';

export default function home ({ navigation }) {

    const [ categories, setCategories] = useState([
        {key: '1', title: 'Fresh Meat', description: 'Flesh cow meat with no bones.', avatar: require('../assets/inyama.png')},
        {key: '2', title: 'Bone Meat', description: 'Flesh cow meat with bones.', avatar: require('../assets/imvange.jpg')},
        {key: '3', title: 'Chicken', description: 'Whole chicken meat.', avatar: require('../assets/inkoko.png')},
        {key: '4', title: 'Fish', description: 'Fresh fish (Fillet/Tilapia).', avatar: require('../assets/ifi.png')}
    ]);

    return(
        <ImageBackground
        source={require('../assets/game_bg.png')}
        style={styles.container}
        >
        <View style={styles.overlayContainer}>
            <View style={styles.menuContainer}>
                {
                    categories.map((category) =>{
                        return(
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('ItemOrder', category)}
                    style={styles.menuItem}>
                    <Card itemImage={category.avatar} key={category.key}>
                        <Text style={styles.titleText}>{category.title}</Text>
                    </Card>  
                    </TouchableOpacity> 
                        )
                    })
                }
            </View>
        </View>
        <Footer />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(50, 146, 166, 0.2)',
        alignItems: 'center'
    },
    menuContainer: {
        height: '40%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 50
    },
    menuItem: {
        width: '50%',
        height: '70%',
        padding: 20,
        marginTop: 40
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
        color: '#333',
        textAlign: 'center'
    },
})