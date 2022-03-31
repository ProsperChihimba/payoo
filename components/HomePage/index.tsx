import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Header from "./Header";
import HeaderContent from "./HeaderContent";
import Body from "./Body";

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Header />
            <HeaderContent />
            <Body />
        </View>
    )
}

export default HomePage;