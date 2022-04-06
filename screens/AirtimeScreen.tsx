import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { showMessage, hideMessage } from "react-native-flash-message";

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
    

export default function AirtimeScreen({ navigation }: RootTabScreenProps<'Home'>) {


    const [number, setNumber] = useState('');
    const [amount, setAmount] = useState('');

    const  buyAirtime = async ({amount, number}: {amount: number, number: string }) => {
    try {

        const response = await fetch('http://ec2-18-222-127-236.us-east-2.compute.amazonaws.com/airtime/', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client_email: "prosperchihimba@gmail.com",
                phone_number: number,
                amount: amount,
            })
        });
        const content = await response.json();


        // if (content.Status === 'Missing Parameter') {
        //     showMessage({
        //         message: "There were an issue buying airtime",
        //         type: "danger",
        //         color: "#000",
        //         textStyle: {fontWeight: 'bold'},
        //         style: { paddingTop: 30 },
        //     });
        // }

        console.log(content)

        // if (content.code === 200) {
        //     console.warn(content.code)
        //     showMessage({
        //         message: "Successful bought airtime, check your phone",
        //         type: 'success',
        //         color: "#000",
        //         textStyle: {fontWeight: 'bold'},
        //         style: { paddingTop: 30 },
        //     });
        //     setAmount('');
        //     setNumber('');
        // }
        
    } catch (error) {
        console.log(error)
    }
}

    const sendRequest = () => {
        if (parseInt(amount) < 500) {
            showMessage({
                message: "Amount should be greater than 400",
                type: "warning",
                backgroundColor: '#ffc12e',
                color: "#000",
                textStyle: {fontWeight: 'bold'},
                style: { paddingTop: 30 },
            });
            return
        } else {
            const data = {
                amount: parseInt(amount),
                number: number,
            }
            buyAirtime(data)
        }
    }


    
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headerAllow}>
                <View style={{flexDirection: 'row'}}>
                    <Pressable
                        onPress={() => navigation.navigate('Home')}
                        style={({ pressed }) => ({
                            opacity: pressed ? 0.5 : 1,
                        })}>
                        <Ionicons name="ios-arrow-back" size={24} color="black" />
                    </Pressable>
                </View>
            </View>

            <View style={styles.headerContainer}>

                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15}}>
                    <TextInput
                        placeholder='Amount'
                        value={amount}
                        onChangeText={amount => setAmount(amount)}
                        keyboardType="numeric"
                        style={{ width: '90%', height: 50, borderRadius: 10, borderWidth: 1,  paddingLeft: 20 }}
                    />
                </View>
                
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 30}}>
                    <TextInput
                        placeholder='Phone number'
                        value={number}
                        onChangeText={number => setNumber(number)}
                        keyboardType="numeric"
                        style={{ width: '90%', height: 50, borderRadius: 10, borderWidth: 1,  paddingLeft: 20 }}
                    />
                </View>

                <View style={{width: '90%', alignItems: 'center'}}>
                    <TouchableOpacity
                        style={styles.payButton}
                        onPress={() => sendRequest()}
                    >
                        <Text style={{fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Buy Airtime </Text>
                </TouchableOpacity>
            </View>
            </View>
            

        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'flex-start',
            backgroundColor: 'white',
        },
        headerAllow: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingTop: 10,
            paddingBottom: 8,
        },
        headerContainer: {
            width: '100%',
            alignItems: 'center',
            paddingTop: 15,
        },
        payButton: {
            width: '90%',
            height: 50,
            padding: 10,
            backgroundColor: '#2c2c63',
            borderRadius: 30,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }
});
