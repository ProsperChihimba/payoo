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
        paddingBottom: 20,
        paddingTop: 20,
        fontWeight: 'bold'
    },
    bodyContainer: {
        flexDirection: 'row',
        marginHorizontal: 5,
        marginBottom: 25,
    },
    bodyIcon: {
        marginRight: 20,
        backgroundColor: '#f3f3f8',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 35,
    },
    bodySpend: {
        marginRight: 100,
    },
    spendCost: {
        alignItems: 'flex-end',
    },
    spendText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000',
        fontFamily: 'Roboto'
    },
    dateText: {
        color: '#415352'
    }
})

export default styles;