import { StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


const avatar = require('../assets/images/pp.jpg');
    

export default function AirtimeScreen({ navigation }: RootTabScreenProps<'Home'>) {


    
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
                
                <View style={{width: '90%', paddingLeft: 10, paddingTop: 20}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>
                        Choose Package
                    </Text>
                </View>

                <View style={styles.airtimePackages}>

                    <View style={styles.airtimeContainer}>
                        <View style={styles.airtimeTextImage}>
                            <View
                                style={{
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 35,
                                    width: 35,
                                    backgroundColor: '#32a7e2',
                                    marginRight: 10,
                                    marginLeft: 15,
                                }}
                            >
                                <AntDesign name="star" size={20} color="white" />
                            </View>
                            <Text style={{fontWeight: 'bold'}}>Mega Bando</Text>
                        </View>
                        <Text style={{ paddingRight: 10, fontWeight: 'bold', }}>Tsh 2000</Text>
                    </View>
                    

                    <View style={{}}>
                        <View style={{ height: 2,}}></View>
                    </View>

                    <View style={styles.airtimeDownContainer}>
                        <Text style={{ paddingRight: 10, paddingTop: 13, fontWeight: '900', fontSize: 12, color: '#415352' }}>
                            1 GB internet, dk 30, sms 300 . Active for 7 days
                        </Text>
                    </View>



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
        airtimePackages: {
            paddingVertical: 15,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
        },
        airtimeContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#e3ebf5',
            // borderRadius: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            height: 80,
            width: '90%',
        }, 
        airtimeDownContainer: {
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            backgroundColor: '#e3ebf5',
            width: '90%',
            paddingLeft: 15,
            paddingBottom: 15,
        },
        airtimeTextImage: {
            backgroundColor: '#e3ebf5',
            marginRight: 35,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        }
});
