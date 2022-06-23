import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import SearchHead from "./Head";
import SeachBody from "./SeachBody";

const Search = () => {
    return (
        <View style={styles.container}>
            <SearchHead />
            {/* <SeachBody /> */}
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    container: {
    }
})