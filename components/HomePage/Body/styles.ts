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
        fontSize: 15,
        color: '#415352',
        paddingBottom: 15,
        paddingTop: 10,
        fontFamily: 'Gilroy-ExtraBold',
    },
    bodyIcon: {
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 28,
        width: 28,
        backgroundColor: '#f3fbff',
        borderColor: '#32a7e2',
        borderRadius: 15,
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
        fontSize: 13,
        color: '#2c2c63',
        fontFamily: 'Gilroy-ExtraBold',
    },
    dateText: {
        color: '#415352',
        fontSize: 10,
        fontFamily: 'Gilroy-Light',
    }
})

export default styles;