import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        height: '60%',
    },
    headerLine: {
        width: 100,
        height: 5,
        marginTop: 10,
        backgroundColor: '#e9e9f4',
        marginLeft: '30%',
        borderRadius: 15,
    },
    headText: {
        paddingLeft: 15,
        fontSize: 15,
        color: '#839197',
        paddingBottom: 25,
        paddingTop: 15,
    },
    bodyContainer: {
        flexDirection: 'row',
        marginHorizontal: 15,
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
        color: '#787e88'
    },
    dateText: {
        color: '#d5d5e1'
    }
})

export default styles;