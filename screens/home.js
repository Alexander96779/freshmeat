import React, {useEffect} from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Footer from '../shared/footer';
import Card from '../shared/card';
import { useDispatch, useSelector, shallowEqual} from 'react-redux';
import { viewProducts } from '../store/modules/AllProducts/actions';

export default function home ({ navigation }) {
     const dispatch = useDispatch();
     const productList = useSelector(state => state.getAllProducts, shallowEqual);
     let products = [];
     products = productList.payload.data;

     useEffect(() =>{
         dispatch(viewProducts());     
     }, [dispatch]);

    return(
        <ImageBackground
        source={require('../assets/game_bg.png')}
        style={styles.container}
        >
        <View style={styles.overlayContainer}>
            <View style={styles.menuContainer}>
                {   products && products.length > 0 ?
                    products.map((product) =>{
                        return(
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('ItemOrder', product)}
                    style={styles.menuItem}
                    key={product.id}>
                    <Card itemImage={product.img_url}>
                        <Text style={styles.titleText}>{product.title}</Text>
                    </Card>  
                    </TouchableOpacity> 
                        )
                    })
                    : null
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