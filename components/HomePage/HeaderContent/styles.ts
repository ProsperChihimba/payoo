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
        color: '#415352',
        marginTop: 5,
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
        backgroundColor: '#18206F',
        borderRadius: 15,
        height: 140,
        width: '100%',
    },
    button: {
        backgroundColor: '#32a7e2',
        borderRadius: 12,
        flexDirection: 'row',
    },
    buttonText: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
})

export default styles;