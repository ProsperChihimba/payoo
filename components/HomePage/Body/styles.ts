import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        height: '100%'
    },
    headText: {
        paddingLeft: 20,
        fontSize: 13,
        color: '#415352',
        paddingBottom: 15,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    bodyIcon: {
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 35,
    },
    bodySpend: {
        marginRight: 100,
        justifyContent: 'center'
    },
    spendCost: {
        alignItems: 'flex-end',
    },
    spendText: {
        fontSize: 14,
        color: '#000',
        fontWeight: '900'
    },
    amountText: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },
    dateText: {
        color: '#415352',
        fontSize: 10,
    }
})

export default styles;