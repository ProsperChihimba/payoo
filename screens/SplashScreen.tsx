import React from "react";
import { View, ActivityIndicator } from "react-native";


const SplashScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )
}

export default SplashScreen;