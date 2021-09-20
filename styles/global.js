import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 30,
        color: '#fff',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
        fontFamily: 'nunito-regular',
        fontSize: 20
    },
    input: {
        borderBottomWidth: 1.5,
        borderColor: '#343a40',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        margin:5
    },
    paragraphText:{
        fontFamily: 'nunito-regular',
        fontSize: 20
    },
    image: {
        width: '100%',
        height: '20%'
    }
});
