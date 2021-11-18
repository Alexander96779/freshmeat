import React from "react";
import { StyleSheet, View, Text, ImageBackground, TextInput, CheckBox, TouchableWithoutFeedback, 
Keyboard, ScrollView } from 'react-native';
import { globalStyles } from "../styles/global";
import Footer from "../shared/footer";
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import FlatButton from '../shared/button';
import { placeOrder } from '../store/modules/itemOrder/actions';

const reviewSchema = yup.object({
    phone_number: yup.string()
            .required()
            .min(10)
            .max(10),
    quantity: yup.string()
            .required()
            .test('is-num-0', 'Quantity must be a number above 0', (val) =>{
                return parseFloat(val) > 0;
            })
});
export default function ItemOrder ({ navigation }) {
    const dispatch = useDispatch();

    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <ImageBackground
        source={require('../assets/game_bg.png')}
        style={styles.container}
        >
        <ScrollView>
        <View style={styles.top}>
            <Text style={styles.header}>Place Your Order Here</Text>
        </View>
        <View style={styles.bodyContainer}>
            <Text style={styles.titleText}>Name: {navigation.getParam('title')}</Text>
            <Text style={globalStyles.paragraphText}>Description: {navigation.getParam('description')}</Text>
            <Text style={globalStyles.paragraphText}>Unit Price: {navigation.getParam('unit_price')}</Text>
        </View>
        <View style={globalStyles.container}>
        <Formik
            initialValues={{product_id: navigation.getParam('id'), phone_number: '', quantity: '', 
            delivery: false, total_price: 0 }}
            validationSchema={reviewSchema}
            onSubmit={(values, { resetForm }) => {
               const total_price = values.delivery ? values.quantity * navigation.getParam('unit_price') + 1000
                                 : values.quantity * navigation.getParam('unit_price');
                values.total_price = total_price;
                dispatch(placeOrder(values));
                resetForm();
            }}
            >
            {(props) =>(
                <View>
                    <Text style={globalStyles.errorText}>{props.touched.phone_number && props.errors.phone_number}</Text>
                    <TextInput
                    keyboardType='numeric'
                    style={globalStyles.input}
                    placeholder='Your phone number(07**)'
                    onChangeText={props.handleChange('phone_number')}
                    value={props.values.phone_number}
                    onBlur={props.handleBlur('phone_number')}
                    />
                    <Text style={globalStyles.errorText}>{props.touched.quantity && props.errors.quantity}</Text>
                     <TextInput
                     keyboardType='numeric'
                    style={globalStyles.input}
                    placeholder='Quantity (>0 in kgs)'
                    onChangeText={props.handleChange('quantity')}
                    value={props.values.quantity}
                    onBlur={props.handleBlur('quantity')}
                    />
                    <View style={globalStyles.checkboxContainer}>
                    <CheckBox
                    style={globalStyles.checkbox}
                    value={props.values.delivery}
                    onValueChange={nextValue => props.setFieldValue('delivery', nextValue)}
                        />
                    <Text style={globalStyles.label}>Delivery</Text>
                    </View>
                    <View style={styles.total_price_container}>
                        <Text style={styles.total_price}>Total Price: {props.values.delivery ? props.values.quantity * navigation.getParam('unit_price') + 1000 : props.values.quantity * navigation.getParam('unit_price')} Rwf</Text>
                    </View>
                    <FlatButton onPress={props.handleSubmit} text='Place Order' />
                </View>
            )}
            </Formik>
            </View>
            </ScrollView>
        <Footer />
        </ImageBackground>
        </TouchableWithoutFeedback>
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
    },
    total_price_container: {
        margin: 10
    },
    total_price: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
        color: '#333',
        textAlign: 'center'
    }
})