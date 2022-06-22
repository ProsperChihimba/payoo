import axios from "axios";
import { Platform, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable } from 'react-native';
import { Ionicons, FontAwesome5, FontAwesome, Foundation   } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState, useContext } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import SelectDropdown from 'react-native-select-dropdown';
import { AuthContext } from "../context/AuthContext";


const avatar = require('../assets/images/unnamed.jpg');
const { width, height } = Dimensions.get("window")
    

export default function SendMoneyScreen({ navigation, route }: RootTabScreenProps<'Home'>) {

    const { rates } = useContext(AuthContext);

    const [amount, setAmount] = useState('0');
    const { country } = route.params;
    const [coinRate, setCoinRate] = useState(1)

    const carTypes = ["USD", "TZS", "USDT", "BTC", "ETH"];
    const [coin, setCoin] = useState("TZS")

    const clearAmount = () => {
        const amountLength = amount.length;
        const newAmount = amount.substring(0, amountLength - 1);

        setAmount(newAmount);
    }

    let homeCoin = "TZS"

    if (country === "Nigeria") {
        homeCoin = "NGN"
    }

    let [fontsLoaded] = useFonts({
        'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.otf'),
        'Gilroy-Light': require('../assets/fonts/Gilroy-Light.otf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
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

                <Text style={styles.textTitle}>Send Money { country }</Text>

                <View style={styles.receiverProfile}>
                    <View style={styles.profileContainer}>
                        {coin === "TZS" || "USD" || "USDT" ? coin === "BTC" ? 
                            <FontAwesome5 name="bitcoin" size={45} color="#2c2c63" style={{ borderRadius: 45, marginRight: 15, marginLeft: 15, }} />
                            :
                            <Foundation name="dollar" size={45} color="#2c2c63" style={{ borderRadius: 45, marginRight: 15, marginLeft: 15, }} />
                            :
                            <FontAwesome5 name="ethereum" size={24} color="black" />
                        }
                        <View style={styles.profileText}>
                            
                            <Text style={{ paddingTop: 5, color: '#415352', fontFamily: 'Gilroy-Light', }}>Choose payment type</Text>
                            {/* <Text style={{fontFamily: 'Gilroy-ExtraBold',}}>Bitcoin</Text> */}
                            <SelectDropdown
                        data={carTypes}
                            onSelect={(selectedItem, index) => {
                                if (index === 0) {
                                    setCoin("USD")
                                    setCoinRate(rates.usd_tzs.rate)
                                } else if (index === 1) {
                                    setCoin("TZS")
                                    setCoinRate(1)
                                } else if (index === 2) {
                                    setCoin("USDT")
                                    setCoinRate(rates.usd_tzs.rate)
                                } else if (index === 3) {
                                    setCoin("BTC")
                                } else if (index === 4) {
                                    setCoin("ETH")
                                }
                                
                            }}

                        defaultButtonText={'TZS'}

                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem;
                        }}

                        rowTextForSelection={(item, index) => {
                            return item;
                        }}

                        buttonStyle={styles.dropdown1BtnStyle}

                        buttonTextStyle={styles.dropdown1BtnTxtStyle}

                        renderDropdownIcon={isOpened => {
                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#2c2c63'} size={15} />;
                        }}
                        dropdownIconPosition={'right'}

                        dropdownStyle={styles.dropdown1DropdownStyle}

                        rowStyle={styles.dropdown1RowStyle}

                        rowTextStyle={styles.dropdown1RowTxtStyle}
                    />
                        </View>
                        {/* <Ionicons name="md-chevron-down-sharp" size={24} color="#2c2c63" style={{ marginRight: 15 }}/> */}

                    </View>
                </View>
                <Text style={styles.textTitle}>1 {coin} = {Number(coinRate).toFixed(2)} { homeCoin }</Text>
            </View>

            <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', paddingTop: 20}}>
                <Text style={styles.textBalance}>{amount == '' ? '0' : amount}.00</Text>
            </View>

            <View style={styles.inputField}>

                <View style={styles.firstRow}>

                    <View style={{paddingRight: 100}}>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '1')}
                        >
                            <Text style={{ fontFamily: 'Gilroy-ExtraBold',fontSize: 40, color: '#2c2c63' }}>1</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingRight: 100}}>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '2')}
                        >
                            <Text style={{ fontFamily: 'Gilroy-ExtraBold',fontSize: 40, color: '#2c2c63' }}>2</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '3')}
                        >
                            <Text style={{ fontFamily: 'Gilroy-ExtraBold',fontSize: 40, color: '#2c2c63' }}>3</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>


                <View style={styles.firstRow}>

                    <View style={{paddingRight: 100}}>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '4')}
                        >
                            <Text style={{ fontFamily: 'Gilroy-ExtraBold',fontSize: 40, color: '#2c2c63' }}>4</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingRight: 100}}>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '5')}
                        >
                            <Text style={{ fontFamily: 'Gilroy-ExtraBold',fontSize: 40, color: '#2c2c63' }}>5</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '6')}
                        >
                            <Text style={{ fontFamily: 'Gilroy-ExtraBold',fontSize: 40, color: '#2c2c63' }}>6</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>


                <View style={styles.firstRow}>

                    <View style={{paddingRight: 100}}>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '7')}
                        >
                            <Text style={{ fontFamily: 'Gilroy-ExtraBold',fontSize: 40, color: '#2c2c63' }}>7</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingRight: 100}}>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '8')}
                        >
                            <Text style={{ fontFamily: 'Gilroy-ExtraBold',fontSize: 40, color: '#2c2c63' }}>8</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '9')}
                        >
                            <Text style={{ fontFamily: 'Gilroy-ExtraBold',fontSize: 40, color: '#2c2c63' }}>9</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>


                <View style={styles.firstRow}>

                    <View style={{paddingRight: 100}}>
                        <TouchableOpacity
                        >
                            <Text style={{ fontFamily: 'Gilroy-ExtraBold',fontSize: 40, color: '#2c2c63' }}>.</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingRight: 100}}>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '0')}
                        >
                            <Text style={{ fontFamily: 'Gilroy-ExtraBold',fontSize: 40, color: '#2c2c63' }}>0</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity
                            onPress={() => clearAmount()}
                        >
                            <Ionicons name="close-circle-outline" size={25} color="#2c2c63" style={{fontWeight: 'bold',}} />
                        </TouchableOpacity>
                    </View>
                    
                </View>

                
            </View>
            
            <View style={{width: '100%', alignItems: 'center'}}>
                <TouchableOpacity
                    style={styles.payButton}
                    onPress={() => navigation.navigate("Recepeint", {
                        amount: amount,
                        coin: coin,
                        country: country
                    })}
                >
                    {/* <Ionicons name="md-arrow-forward-circle" size={20} color="white" style={{}} /> */}
                    <View style={{ backgroundColor: '#2c2c63', alignItems: 'center', justifyContent: 'center',}}>
                        <Text style={{fontFamily: 'Gilroy-ExtraBold', color: 'white', textAlign: 'center', fontSize: 17}}>Continue </Text>
                    </View>
                </TouchableOpacity>
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
        payButton: {
            width: width * 0.7,
            padding: 10,
            marginLeft: 10,
            backgroundColor: '#2c2c63',
            borderRadius: 30,
            flexDirection: 'row',
            justifyContent: 'center',
            height: 45
        },


        dropdown1BtnStyle: {
            // width: '10%',
            // height: 50,
            backgroundColor: '#e3ebf5',
        },
        dropdown1BtnTxtStyle: {
            color: '#2c2c63',
            textAlign: 'left',
            fontFamily: 'Gilroy-ExtraBold',
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
