import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        padding: 15,
        paddingTop: 100,
        paddingBottom: 30,
    },
    textContainer: {
        marginVertical: 20,
    },
    iconsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },
    textTitle: {
        textAlign: 'center',
        color: '#415352',
        fontSize: 13,
        marginBottom: 5,
    },
    textBalance: {
        fontSize: 26,
        color: '#2c2c63',
        fontWeight: 'bold',
    },
    forwardIconView: {
        marginRight: 30,
    },
    downloadIconView: {
        marginRight: 30,
    },
    walletIconView: {
        marginRight: 30,
    },
    forwardIcon: {
        backgroundColor: '#32a7e2',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
    },
    downloadIcon: {
        backgroundColor: '#b548c6',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
    },
    walletIcon: {
        backgroundColor: '#ff8700',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
    },
    gridIcon: {
        backgroundColor: '#22b07d',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
    },
    iconsText: {
        textAlign: 'center',
        color: '#9d9daf',
    }
})

export default styles;