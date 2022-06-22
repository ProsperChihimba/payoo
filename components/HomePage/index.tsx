import React, { useContext, useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, TextInput, ActivityIndicator  } from "react-native";
import axios from 'axios';
import BottomSheet from '@gorhom/bottom-sheet';
import { Ionicons, Entypo } from '@expo/vector-icons';
import styles from "./HeaderContent/styles";
import appdata from "./data";
import { useNavigation } from "@react-navigation/native";
import Header from "./Header";
import HeaderContent from "./HeaderContent";
import Body from "./Body";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { showMessage, hideMessage } from "react-native-flash-message";
import { BASE_URL } from "../../config";
import { AuthContext } from "../../context/AuthContext";

export type IconsProps = {
    id: number,
    iconType: string,
    iconName: string,
    iconSize: number,
    iconColor: string,
    backgroundColor: string,
    title: string,
    navigationName: any,
} 

const HomePage = () => {

    const { isLoadingBalance, balance, userInfo } = useContext(AuthContext);

    const navigation = useNavigation();
    const bottomSheetRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [sendCashOpen, setSendCashOpen] = useState(false)
    const [word, setWord] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [phone, setPhone] = useState(null);
    const [amount, setAmount] = useState(null);

    const onPress = ({navigationName}: {navigationName?: any}) => {
        navigation.navigate(navigationName);
    }  

    const headers = {
        'Content-Type': 'application/json'
    }

    const sendRequest = () => {
        setIsLoading(true)
        console.log(amount, phone)
        axios.post(`${BASE_URL}/payment/mobile/`, {
            amount: amount,
            customer_name: "John Doe",
            email: "john@user.com",
            number_used: phone,
            channel: "Tigo",
            user_id: userInfo.user.id.toString()
        },
        {
            headers: headers
        }).then(res => {
            let resp = res.data;
            setIsLoading(false)
            showMessage({
                message: "Wallet push sent to your mobile phone",
                type: "success",
                backgroundColor: '#E8FFFC',
                color: "#000",
                textStyle: {fontWeight: 'bold'},
                style: { paddingTop: 20 },
                duration: 3000,
            });
            setOpen(false)
            
        }).catch(e => {
            console.log(e)
            setIsLoading(false)
            showMessage({
                message: "Error sending a request",
                type: "success",
                backgroundColor: '#FFCCCC',
                color: "#000",
                textStyle: {fontWeight: 'bold'},
                style: { paddingTop: 20 },
                duration: 3000,
            })
            setOpen(false)
        })
    }


    let [fontsLoaded] = useFonts({
        'Gilroy-ExtraBold': require('../../assets/fonts/Gilroy-ExtraBold.otf'),
        'Gilroy-Light': require('../../assets/fonts/Gilroy-Light.otf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }


    const renderItem = ({item}: {item: IconsProps}) => {
        return (
            <TouchableOpacity
                style={{
                    padding: 10,
                    marginRight: 5, 
                }}
                onPress={() => navigation.navigate(item.navigationName)}
            >
                <View
                    style={{
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 45,
                        width: 45,
                        backgroundColor: item.backgroundColor,
                    }}
                >
                    <Ionicons name={item.iconName} size={item.iconSize} color={item.iconColor} />
                </View>
                <Text style={ styles.iconsText } >
                    {item.title}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <Header />
            
            <View style={styles.container}>

            <View style={styles.cardContainer}>
                <View>
                    <View style={{ paddingTop: 20, justifyContent: 'center', flexDirection: 'row', }}>
                        <View style={{ paddingLeft: 15, }}>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text style={{ fontFamily: 'Gilroy-ExtraBold', color: '#2c2c63' }}>TSH</Text>
                                </View>
                                {isLoadingBalance === true ?
                                    (<ActivityIndicator size="small" color="#32a7e2" style={{paddingTop: 12}} />)
                                    :
                                    (<Text style={{paddingTop: 12, color: '#415352', fontFamily: 'Gilroy-ExtraBold',}}> {balance}.00</Text>)
                                }
                        </View>
                    </View>
                    <View style={{paddingTop: 23, paddingHorizontal: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            style={styles.buttonText}
                            onPress={() => (setOpen(true), setWord("Add Cash"))}
                        >
                            <View style={styles.button}>
                                <Ionicons name="ios-add" size={20} color="#32a7e2" style={{ }} />
                            </View>
                            <Text style={{ color: '#415352', fontSize: 12, paddingTop: 5, fontFamily: 'Gilroy-Light',}}>Add Cash</Text>
                        </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonText}
                                onPress={() => (setOpen(true), setWord("Withdraw"))}
                            >
                            <View style={styles.button}>
                                <Ionicons name="arrow-down" size={20} color="#32a7e2" style={{  }} />
                            </View>
                            <Text style={{ color: '#415352', fontSize: 12, fontFamily: 'Gilroy-Light', paddingTop: 5}}>Withdraw</Text>
                        </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => (setSendCashOpen(true), setWord("Withdraw"))}
                                style={styles.buttonText}>
                            <View style={styles.button}>
                                <Ionicons name="ios-rocket-outline" size={20} color="#32a7e2" style={{ }} />
                            </View>
                            <Text style={{ color: '#415352', fontSize: 12, fontFamily: 'Gilroy-Light', paddingTop: 5}}>Send Cash</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <FlatList
                data={appdata.icons}
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{paddingVertical: 10}}
            />
            
        </View>
            
        <Body />
        
        {open ? (
            <BottomSheet ref={bottomSheetRef} snapPoints={["70%", "95%"]} >
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => setOpen(false)}>
                        <View style={{ alignItems: 'center'}}>
                        <Text style={{fontSize: 20, fontFamily: 'Gilroy-ExtraBold', letterSpacing: 0.2, paddingBottom: 20}}>{word}</Text>
                        </View>
                    </TouchableOpacity>
                
                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15}}>
                        <TextInput
                            placeholder='Amount'
                            keyboardType="numeric"
                            value={amount}
                            onChangeText={(text) => setAmount(text)}
                            style={{ width: '90%', height: 50, borderRadius: 10, borderWidth: 1,  paddingLeft: 20, fontFamily: 'Gilroy-Light', }}
                        />
                    </View>
                    
                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 30}}>
                        <TextInput
                            placeholder='Phone number'
                            keyboardType="numeric"
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                            style={{ width: '90%', height: 50, borderRadius: 10, borderWidth: 1,  paddingLeft: 20, fontFamily: 'Gilroy-Light', }}
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
                                    (<Text style={{ fontFamily: 'Gilroy-ExtraBold', color: 'white', textAlign: 'center' }}>{word}</Text>)
                                }
                    </TouchableOpacity>
                        </View>
                </View>
            </BottomSheet>) : <></>
            }
            {sendCashOpen ? (
            <BottomSheet ref={bottomSheetRef} snapPoints={["70%", "95%"]} >
                <View style={styles.headerContainer}>
                    <View style={{ alignItems: 'center'}}>
                        <Text style={{fontSize: 18, fontFamily: 'Gilroy-ExtraBold', letterSpacing: 0.2, paddingBottom: 50}}>Choose country</Text>
                    </View>

                    <View style={{width: '80%', alignItems: 'center', paddingBottom: 30}}>
                        <TouchableOpacity
                                style={styles.payButton2}
                                onPress={() => (navigation.navigate("SendMoney", {country: "Tanzania"}), setSendCashOpen(false))}
                            >
                                {isLoading === true ?
                                    (<ActivityIndicator size="small" color="#fff" />)
                                    :
                                    (<Text style={{ fontFamily: 'Gilroy-ExtraBold', color: '#2c2c63', textAlign: 'center' }}>Tanzania</Text>)
                                }
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{width: '80%', alignItems: 'center'}}>
                        <TouchableOpacity
                                style={styles.payButton2}
                                onPress={() => (navigation.navigate("SendMoney", {country: "Nigeria"}), setSendCashOpen(false))}
                            >
                                {isLoading === true ?
                                    (<ActivityIndicator size="small" color="#fff" />)
                                    :
                                    (<Text style={{ fontFamily: 'Gilroy-ExtraBold', color: '#2c2c63', textAlign: 'center' }}>Nigeria</Text>)
                                }
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheet>) : <></>
        }
        </View>
    )
}

export default HomePage;