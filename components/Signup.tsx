import { StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, View, Text, Image } from 'react-native';
import { RootTabScreenProps } from '../types';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
    
// const logo = require('../../../assets/images/logo4.png');

export default function SignupPage({ navigation }: RootTabScreenProps<'Home'>) {

    const [firstname, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const { isLoading, register } = useContext(AuthContext)
    
    return (
        <SafeAreaView style={styles.container}>

            {/* <View style={{width: '100%', alignItems: 'center', paddingTop: 40, paddingBottom: 50}}>
                <Image source={logo} />
            </View>   */}
            <View style={{alignItems: 'center', width: '100%'}}>
                    <Text style={{ paddingBottom: 20, fontFamily: 'Gilroy-ExtraBold', fontSize: 28, textAlign: 'center', paddingTop: 40, }}>Welcome</Text>
            </View>
            <KeyboardAwareScrollView style={styles.headerContainer}>

                <View style={{alignItems: 'center'}}>
                
                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, paddingBottom: 30,}}>
                        <TextInput
                            placeholder='First name'
                            value={firstname}
                            keyboardType="default"
                            onChangeText={(text) => setFirstName(text)}
                            style={{ width: '90%', height: 60, borderRadius: 10, borderWidth: 0.5, fontFamily: 'Gilroy-Light',  paddingLeft: 20, borderColor: 'lightgray' }}
                        />
                    </View>

                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, paddingBottom: 30,}}>
                        <TextInput
                            placeholder='Last name'
                            value={lastName}
                            keyboardType="default"
                            onChangeText={(text) => setLastName(text)}
                            style={{ width: '90%', height: 60, borderRadius: 10, borderWidth: 0.5, fontFamily: 'Gilroy-Light',  paddingLeft: 20, borderColor: 'lightgray' }}
                        />
                    </View>

                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, paddingBottom: 30,}}>
                        <TextInput
                            placeholder='Username'
                            value={username}
                            keyboardType="default"
                            onChangeText={(text) => setUsername(text)}
                            style={{ width: '90%', height: 60, borderRadius: 10, borderWidth: 0.5, fontFamily: 'Gilroy-Light',  paddingLeft: 20, borderColor: 'lightgray' }}
                        />
                    </View>

                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, }}>
                        <TextInput
                            placeholder='Email address'
                            value={email}
                            keyboardType="email-address"
                            onChangeText={(text) => setEmail(text)}
                            style={{ width: '90%', height: 60, borderRadius: 10, borderWidth: 0.5, fontFamily: 'Gilroy-Light',  paddingLeft: 20, borderColor: 'lightgray' }}
                        />
                    </View>
                
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 30}}>
                    <TextInput
                        placeholder='Password'
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry
                        style={{ width: '90%', height: 60, borderRadius: 10, borderWidth: 0.5, fontFamily: 'Gilroy-Light',  paddingLeft: 20, borderColor: 'lightgray' }}
                    />
                </View>
                
                <View style={{width: '90%', alignItems: 'center'}}>
                    <TouchableOpacity
                        style={styles.payButton}
                        onPress={() => register(firstname, lastName, username, email, password)}
                    >
                        {isLoading === true ?  
                            (<ActivityIndicator size="small" color="#fff" />)
                            :
                            (<Text style={{fontWeight: 'bold', color: 'white', textAlign: 'center', fontFamily: 'Gilroy-ExtraBold', fontSize: 16}}>Signup </Text>)
                        }
                            
                    </TouchableOpacity>
                        
                </View>
            <View style={{flexDirection: 'row'}}>
                    <Text style={{ paddingTop: 20, fontFamily: 'Gilroy-ExtraBold', fontSize: 15 }}>Have account? </Text>
                    <Pressable
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{ paddingTop: 20, fontFamily: 'Gilroy-ExtraBold', fontSize: 15, color: '#2c2c63' }}>Login here </Text>
                    </Pressable>
                
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
        }
});