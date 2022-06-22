import { StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, View, Text, Image } from 'react-native';
import { RootTabScreenProps } from '../types';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons, FontAwesome5, FontAwesome, Foundation } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';

export default function PaymentScreen({ navigation, route }: RootTabScreenProps<'Home'>) {

    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [number, setNumber] = useState(null)
    const { isLoading, login } = useContext(AuthContext)
    const [provider, setProvider] = useState("")
    const { amount, coin, country } = route.params;
    const [copy1, setCopy1] = useState("Copy")

    const [conAddress, setConAddress] = useState("")


    const truncate = (adr) =>
        adr?.substring(0, 8) + "..." + adr?.substring(adr?.length - 9, adr?.length);
    
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

                <Text style={styles.textTitle}>Payment details </Text>

                <View style={styles.receiverProfile}>
                    <View style={styles.profileContainer}>
                        <View style={styles.profileText}>
                            <Text style={{ fontFamily: 'Gilroy-ExtraBold', }}>Send only {amount} {coin} to the wallet address below</Text>
                            <Text style={{ paddingTop: 10, color: '#415352', fontFamily: 'Gilroy-Light', }}>Scan code or copy address</Text>
                        </View>
                    </View>
                </View>

            </View>

            <KeyboardAwareScrollView style={styles.headerContainer}>

                <View style={{ alignItems: 'center' }}>
                    
                    <View style={{ paddingBottom: 30 }}>
                        <QRCode
                            value="0xAe95f88B1604C6E2d0c3bfdE113712E81aB3F338"
                            size={180}
                        />
                    </View>

                    <View style={{width: '90%', alignItems: 'center', paddingBottom: 30}}>
                        <View
                            style={styles.CopyButton}
                        >
                            <View style={{paddingHorizontal: 10}}>
                                <Text style={{ color: 'white', paddingBottom: 13, fontFamily: 'Gilroy-ExtraBold' }}>{ coin } Address</Text>
                                <Text style={{color: 'white', fontFamily: 'Gilroy-Light'}}>0xAe95f88B1604C6E2d0c3bfdE113712E81aB3F338</Text>
                            </View>
                        </View>
                            
                    </View>

                    
                    
                    
                    <View style={{width: '90%', alignItems: 'center'}}>
                        <TouchableOpacity
                            style={styles.payButton}
                            
                        >
                            {isLoading === true ?  
                                (<ActivityIndicator size="small" color="#fff" />)
                                :
                                (<Text style={{fontWeight: 'bold', color: 'white', textAlign: 'center', fontFamily: 'Gilroy-ExtraBold', fontSize: 16}}>I have made transfer </Text>)
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
            backgroundColor: '#001666',
            borderRadius: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },

        CopyButton: {
            width: '90%',
            height: 80,
            padding: 10,
            backgroundColor: '#2c2c63',
            borderRadius: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
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


});