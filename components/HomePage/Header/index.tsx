import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, Entypo, EvilIcons } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={{ flexDirection: 'row', height: 50, }}>
            <TouchableOpacity
                style={{
                    width: 50,
                    paddingLeft: 20,
                    justifyContent: 'center',
                }}
            >
                <EvilIcons name="user" size={30} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Header;