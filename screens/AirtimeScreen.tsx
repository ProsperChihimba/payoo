import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
    

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

                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15}}>
                    <TextInput
                        placeholder='Amount'
                        keyboardType="numeric"
                        style={{ width: '90%', height: 50, borderRadius: 10, borderWidth: 1,  paddingLeft: 20 }}
                    />
                </View>
                
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 30}}>
                    <TextInput
                        placeholder='Phone number'
                        keyboardType="numeric"
                        style={{ width: '90%', height: 50, borderRadius: 10, borderWidth: 1,  paddingLeft: 20 }}
                    />
                </View>

                <View style={{width: '90%', alignItems: 'center'}}>
                <TouchableOpacity style={styles.payButton}>
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
