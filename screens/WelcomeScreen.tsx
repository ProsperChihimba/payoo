import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from '../components/Themed';
import { Image, useWindowDimensions, View, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const success = require('../assets/images/pay.png')


export default function WelcomeScreen() {

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.otf'),
        'Gilroy-Light': require('../assets/fonts/Gilroy-Light.otf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center', paddingTop: 0 }}>
                <Image source={success} style={{ width: '65%', height: '65%'}} />
                <View style={{width: '70%', alignItems: 'center', paddingTop: 0}}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Gilroy-ExtraBold', fontSize: 25 }}>Welcome Payoo</Text>
                    <Text style={{ textAlign: 'center', paddingBottom: 25, fontFamily: 'Gilroy-ExtraBold', fontSize: 25 }}>Send money with an ease</Text>
                    <Text style={{textAlign: 'center', fontFamily: 'Gilroy-Light', fontSize: 15, paddingBottom: 0,}}>Send and receive money easily and cheaply from your friends</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', paddingBottom: 30 }}>
                
                <View style={{width: '60%', alignItems: 'center'}}>
                    <TouchableOpacity
                        style={styles.Button}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{ fontWeight: 'bold', color: 'white', textAlign: 'center', fontFamily: 'Gilroy-ExtraBold' }}> Start </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'white',
    },
    Button: {
        width: '90%',
        height: 50,
        padding: 10,
        backgroundColor: '#2c2c63',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});