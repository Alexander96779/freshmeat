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
        borderWidth: 1.5,
        borderColor: '#1db2c9',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        margin:5,
        color: '#333'
    },
    paragraphText:{
        fontFamily: 'nunito-regular',
        fontSize: 20
    },
    image: {
        width: '100%',
        height: '20%'
    },
    checkboxContainer: {
        marginTop: 5,
        flexDirection: 'row',
        marginBottom: 5,
      },
    checkbox: {
        alignSelf: 'center'
      },
    label: {
        margin: 8,
        fontSize: 18
      },
      errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 6,
        marginTop: 6,
        textAlign: 'center' 
      }
});
