import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons, Entypo, EvilIcons } from '@expo/vector-icons';

const avatar = require('../../../assets/images/unnamed.jpg');

const Header = () => {
    return (
        <View style={{ flexDirection: 'row', height: 50, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: 15,
                        justifyContent: 'center',
                        marginRight: 10,
                    }}
                >
                    {/* <EvilIcons name="user" size={30} color="black" /> */}
                    <Image source={avatar} style={{ width: 30, height: 30, borderRadius: 30,}} />
                </TouchableOpacity>
                <View style={{  justifyContent: 'center'}}>
                    <Text style={{ fontFamily: 'Gilroy-ExtraBold', color: '#2c2c63' }}>Hello, bleble</Text>
                    <Text style={{color: '#415352', fontSize: 10, fontFamily: 'Gilroy-Light',}}>Welcome</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity>
                    <Ionicons name="notifications" size={24} color="#2c2c63" style={{paddingRight: 15}} />
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

export default Header;