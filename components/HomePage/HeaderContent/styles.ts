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
    }
})

export default styles;