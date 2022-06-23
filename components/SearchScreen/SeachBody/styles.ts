import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        padding: 15,
        paddingTop: 10,
        paddingBottom: 5,
    },
    textTitle: {
        textAlign: 'center',
        color: '#415352',
        fontSize: 13,
    },
    textBalance: {
        fontSize: 26,
        color: '#2c2c63',
        fontWeight: 'bold',
    },
    iconsText: {
        textAlign: 'center',
        color: '#1c1a1a',
        fontSize: 15,
        marginTop: 5,
        fontFamily: 'Gilroy-Light'
    },
    shadow: {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 15,
        borderColor: 'lightgray',
        borderWidth: 1,
        height: 170,
        width: '100%',
    },
    button: {
        backgroundColor: '#c7e1ee',
        borderColor: '#32a7e2',
        borderWidth: 1.5,
        borderRadius: 15,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default styles;