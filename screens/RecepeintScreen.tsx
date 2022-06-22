import { StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, View, Text, Image } from 'react-native';
import { RootTabScreenProps } from '../types';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons, FontAwesome5, FontAwesome, Foundation } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import { BASE_URL } from "../config";
import axios from 'axios';
import { addressNavigate } from "../RootNavigation";
    
// const logo = require('../../../assets/images/logo4.png');

const carTypes = ["Vodacom", "Halotel", "Aitel", "Tigo"]

export default function RecepeintScreen({ navigation, route }: RootTabScreenProps<'Home'>) {

    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [number, setNumber] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [provider, setProvider] = useState("")
    const { amount, coin, country } = route.params;

    const headers = {
        'Content-Type': 'application/json'
    }

    const sendRequest = () => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/payment/`, {
            payment_method: "Crypto",
            amount: "5000", 
            sender_currency: "TZS",
            receiver_currency: "TZS",
            currency_rate: "2325",
            withdraw_type: "Mobile_Money",
            sender: {
                first_name: "Proc",
                last_name: "Absa",
                email_address: "proc@gmail.com",
                phone_number: "0627966485"
            },
            receiver: {
                email_address: "pros@gmail.com",
                mobile_number: "0627966485",
                provider: "Vodacom"
            },
            network_type: "ERC20"
        },
        {
            headers: headers
        }).then(res => {
            let resp = res.data;
            setIsLoading(false)
            addressNavigate(amount,coin,country,res.data.cypto_token);
        }).catch(e => {
            console.log(e)
            setIsLoading(false)
        })
    }
    
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headerAllow}>
                <Pressable
                    onPress={() => navigation.navigate('Home')}
                    style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}>
                    <Ionicons name="ios-arrow-back" size={24} color="black" />
                </Pressable>
            </View>

            <View style={styles.headerContainer}>

                <Text style={styles.textTitle}>Recepeint details </Text>

                <View style={styles.receiverProfile}>
                    <View style={styles.profileContainer}>
                        {coin === "TZS" || "USD" || "USDT" ? coin === "BTC" ? 
                            <FontAwesome5 name="bitcoin" size={40} color="#2c2c63" style={{ borderRadius: 45, marginRight: 15, marginLeft: 15, }} />
                            :
                            <Foundation name="dollar" size={40} color="#2c2c63" style={{ borderRadius: 45, marginRight: 15, marginLeft: 15, }} />
                            :
                            <FontAwesome5 name="ethereum" size={24} color="black" />
                        }
                        <View style={styles.profileText}>
                            
                            {/* <Text style={{ paddingTop: 5, color: '#415352', fontFamily: 'Gilroy-Light', }}>Choose payment type</Text> */}
                            <Text style={{ fontFamily: 'Gilroy-ExtraBold', }}>Sending {amount} {coin} to { country }</Text>
                        </View>
                    </View>
                </View>

            </View>

            <KeyboardAwareScrollView style={styles.headerContainer}>

                <View style={{alignItems: 'center'}}>
                
                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15}}>
                        <TextInput
                            placeholder="Receipients's email"
                            value={email}
                            keyboardType="email-address"
                            onChangeText={(text) => setEmail(text)}
                            style={{ width: '90%', height: 60, borderRadius: 10, borderWidth: 0.5, fontFamily: 'Gilroy-Light',  paddingLeft: 20, borderColor: 'lightgray' }}
                        />
                    </View>
                    
                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 30}}>
                        <TextInput
                            placeholder="Receipient's name"
                            value={name}
                            keyboardType="ascii-capable"
                            onChangeText={text => setName(text)}
                            style={{ width: '90%', height: 60, borderRadius: 10, borderWidth: 0.5, fontFamily: 'Gilroy-Light',  paddingLeft: 20, borderColor: 'lightgray' }}
                        />
                    </View>

                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15}}>
                        <TextInput
                            placeholder='Phone number'
                            value={number}
                            keyboardType="phone-pad"
                            onChangeText={(text) => setNumber(text)}
                            style={{ width: '90%', height: 60, borderRadius: 10, borderWidth: 0.5, fontFamily: 'Gilroy-Light',  paddingLeft: 20, borderColor: 'lightgray' }}
                        />
                    </View>
                    
                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 30}}>
                        <SelectDropdown
                        data={carTypes}
                            onSelect={(selectedItem, index) => {
                                if (index === 0) {
                                    setProvider("Vodacom")
                                } else if (index === 1) {
                                    setProvider("Halotel")
                                } else if (index === 2) {
                                    setProvider("Airtel")
                                } else if (index === 3) {
                                    setProvider("Tigo")
                                } 
                                
                            }}

                        defaultButtonText={'Choose provider'}

                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem;
                        }}

                        rowTextForSelection={(item, index) => {
                            return item;
                        }}

                        buttonStyle={styles.dropdown1BtnStyle}

                        buttonTextStyle={styles.dropdown1BtnTxtStyle}

                        renderDropdownIcon={isOpened => {
                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'lightgray'} size={15} />;
                        }}
                        dropdownIconPosition={'right'}

                        dropdownStyle={styles.dropdown1DropdownStyle}

                        rowStyle={styles.dropdown1RowStyle}

                        rowTextStyle={styles.dropdown1RowTxtStyle}
                    />
                    </View>
                    
                    <View style={{width: '90%', alignItems: 'center'}}>
                        <TouchableOpacity
                            style={styles.payButton}
                            onPress={() => sendRequest()}
                        >
                            {isLoading === true ?  
                                (<ActivityIndicator size="small" color="#fff" />)
                                :
                                (<Text style={{fontWeight: 'bold', color: 'white', textAlign: 'center', fontFamily: 'Gilroy-ExtraBold', fontSize: 16}}>Continue </Text>)
                            }
                                
                        </TouchableOpacity>
                            
                    </View>
                
                </View>
        </KeyboardAwareScrollView>
            

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
            // alignItems: 'center',
            paddingTop: 15,
        },
        payButton: {
            width: '90%',
            height: 50,
            padding: 10,
            backgroundColor: '#2c2c63',
            borderRadius: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },

        headerAllow1: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingTop: 10,
            paddingBottom: 8,
        },
        headerContainer1: {
            width: '100%',
            alignItems: 'center',
        },
        textTitle: {
            textAlign: 'center',
            color: '#415352',
            fontSize: 15,
            fontFamily: 'Gilroy-ExtraBold',
        },
        receiverProfile: {
            flexDirection: 'row',
            paddingVertical: 15,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            
        },
        profileContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#e3ebf5',
            borderRadius: 15,
            height: 100,
            width: '90%',
        },
        profileText: {
            backgroundColor: '#e3ebf5',
            marginRight: 35,
        },
        textBalance: {
            textAlign: 'center',
            fontSize: 30,
            color: '#2c2c63',
            fontFamily: 'Gilroy-ExtraBold',
        },
        inputField: {
            paddingTop: 30,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        firstRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            marginBottom: 35,
        },


        dropdown1BtnStyle: {
            width: '90%',
            height: 50,
            backgroundColor: '#FFF',
            borderRadius: 8,
            borderWidth: 0.5,
            borderColor: 'lightgray',
        },
        dropdown1BtnTxtStyle: {
            color: '#444',
            textAlign: 'left',
            fontFamily: 'Gilroy-Light',
            fontSize: 14
        },
        dropdown1DropdownStyle: {
            backgroundColor: '#EFEFEF',
            borderRadius: 10,
        },
        dropdown1RowStyle: {
            backgroundColor: '#EFEFEF',
            borderBottomColor: '#C5C5C5'
        },
        dropdown1RowTxtStyle: {
            color: '#444',
            textAlign: 'center',
            fontFamily: 'Gilroy-Light',
            fontSize: 15
        },

});