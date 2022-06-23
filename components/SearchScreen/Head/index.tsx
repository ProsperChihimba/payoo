import React, {useState} from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function SearchHead() {

    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState("");

    let [fontsLoaded] = useFonts({
        'Gilroy-ExtraBold': require('../../../assets/fonts/Gilroy-ExtraBold.otf'),
        'Gilroy-Light': require('../../../assets/fonts/Gilroy-Light.otf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

return (
    <View style={styles.container}>
        <View
            style={
            clicked
                ? styles.searchBar__clicked
                : styles.searchBar__unclicked
            }
        >
            {/* search Icon */}
            <Ionicons 
                name="ios-search"
                size={20}
                color="black"
                style={{ marginLeft: 1 }}
            />
            {/* Input field */}
            <TextInput
                style={styles.input}
                placeholder="Search"
                value={searchPhrase}
                onChangeText={setSearchPhrase}
                onFocus={() => {
                    setClicked(true);
                }}
            />
            {/* cross Icon, depending on whether the search bar is clicked or not */}
            {clicked && (
                <Ionicons  name="ios-close" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                    setSearchPhrase("")
                }}/>
            )}
        </View>
        {/* cancel button, depending on whether the search bar is clicked or not */}
        {clicked && (
            <View>
                <Button
                    title="Cancel"
                    onPress={() => {
                    Keyboard.dismiss();
                    setClicked(false);
                    }}
                ></Button>
            </View>
        )}
    </View>
    );
};


// styles
const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 20,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
        fontFamily: 'Gilroy-Light'
    },
});