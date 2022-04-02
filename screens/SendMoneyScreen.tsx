import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


const avatar = require('../assets/images/pp.jpg');
const { width, height } = Dimensions.get("window")
    

export default function SendMoneyScreen({ navigation }: RootTabScreenProps<'Home'>) {

    const [amount, setAmount] = useState('');

    const onPostPay = () => {

    }

    const clearAmount = () => {
        const amountLength = amount.length;
        const newAmount = amount.substring(0, amountLength - 1);

        setAmount(newAmount);
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

                <Text style={styles.textTitle}>Send Money</Text>

                <View style={styles.receiverProfile}>
                    <View style={styles.profileContainer}>
                        <Image source={avatar} style={{ width: 45, height: 45, borderRadius: 45, marginRight: 15, marginLeft: 15, }} />
                        <View style={styles.profileText}>
                            <Text style={{fontWeight: 'bold'}}>Annie</Text>
                            <Text style={{paddingTop: 5, color: '#415352'}}>M-Pesa - 255627966485</Text>
                        </View>
                        <Ionicons name="md-chevron-down-sharp" size={24} color="#2c2c63" style={{ marginRight: 15 }}/>
                    </View>
                </View>

            </View>

            <View style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                <Text style={styles.textBalance}>{amount == '' ? '0' : amount}.00</Text>
            </View>

            <View style={styles.inputField}>

                <View style={styles.firstRow}>

                    <View style={{paddingRight: 90}}>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '1')}
                        >
                            <Text style={{ fontSize: 40, color: '#2c2c63' }}>1</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingRight: 90}}>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '2')}
                        >
                            <Text style={{ fontSize: 40, color: '#2c2c63' }}>2</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '3')}
                        >
                            <Text style={{ fontSize: 40, color: '#2c2c63' }}>3</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>


                <View style={styles.firstRow}>

                    <View style={{paddingRight: 90}}>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '4')}
                        >
                            <Text style={{ fontSize: 40, color: '#2c2c63' }}>4</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingRight: 90}}>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '5')}
                        >
                            <Text style={{ fontSize: 40, color: '#2c2c63' }}>5</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '6')}
                        >
                            <Text style={{ fontSize: 40, color: '#2c2c63' }}>6</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>


                <View style={styles.firstRow}>

                    <View style={{paddingRight: 90}}>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '7')}
                        >
                            <Text style={{ fontSize: 40, color: '#2c2c63' }}>7</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingRight: 90}}>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '8')}
                        >
                            <Text style={{ fontSize: 40, color: '#2c2c63' }}>8</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '9')}
                        >
                            <Text style={{ fontSize: 40, color: '#2c2c63' }}>9</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>


                <View style={styles.firstRow}>

                    <View style={{paddingRight: 90}}>
                        <TouchableOpacity
                        >
                            <Text style={{ fontSize: 40, color: '#2c2c63' }}>.</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingRight: 90}}>
                        <TouchableOpacity
                            onPress={() => setAmount(amount + '0')}
                        >
                            <Text style={{ fontSize: 40, color: '#2c2c63' }}>0</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity
                            onPress={() => clearAmount()}
                        >
                            <Ionicons name="close-circle-outline" size={25} color="#2c2c63" />
                        </TouchableOpacity>
                    </View>
                    
                </View>

                
            </View>
            
            <View style={{width: '100%', alignItems: 'center'}}>
                <TouchableOpacity style={styles.payButton}>
                    {/* <Ionicons name="md-arrow-forward-circle" size={20} color="white" style={{}} /> */}
                    <View style={{ backgroundColor: '#2c2c63', alignItems: 'center', justifyContent: 'center',}}>
                        <Text style={{fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Click To Send </Text>
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
            height: 80,
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
            fontWeight: 'bold',
        },
        inputField: {
            paddingTop: 15,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        firstRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            marginBottom: 20,
        },
        payButton: {
            width: width * 0.7,
            padding: 10,
            marginLeft: 10,
            backgroundColor: '#2c2c63',
            borderRadius: 30,
            flexDirection: 'row',
            justifyContent: 'center',
        }
});
