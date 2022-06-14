import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable } from 'react-native';
import { Ionicons, Fontisto  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const { width, height } = Dimensions.get("window")

const icons = [
    {
        id: 1,
        iconType: 'Ionicons',
        iconName: 'ios-card-outline',
        iconSize: 24,
        iconColor: '#32a7e2',
        backgroundColor: '#c7e1ee',
        title: 'New Card',
        navigationName: 'SendMoney',
    },
    {
        id: 2,
        iconType: 'Ionicons',
        iconName: 'ios-add-circle-outline',
        iconSize: 24,
        iconColor: '#0dce0c',
        backgroundColor: '#d3fcd3',
        title: 'Fund',
        navigationName: 'Airtime',
    },
    {
        id: 3,
        iconType: 'Ionicons',
        iconName: 'arrow-down',
        iconSize: 21,
        iconColor: '#32a7e2',
        backgroundColor: '#c7e1ee',
        title: 'Withdraw',
        navigationName: 'SendMoney',
    },
    {
        id: 4,
        iconType: 'Entypo',
        iconName: 'ios-lock-closed-outline',
        iconSize: 20,
        iconColor: '#f80936',
        backgroundColor: '#fdc3ce',
        title: 'Disable',
        navigationName: 'SendMoney',
    }
]

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
    

const CardScreen = () => {

    const navigation = useNavigation();

    const onPress = ({navigationName}: {navigationName?: any}) => {
        navigation.navigate(navigationName);
    }

    let [fontsLoaded] = useFonts({
        'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.otf'),
        'Gilroy-Light': require('../assets/fonts/Gilroy-Light.otf'),
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
                // onPress={() => navigation.navigate(item.navigationName)}
            >
                <View
                    style={{
                        borderRadius: 22,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 45,
                        width: 45,
                        backgroundColor: item.backgroundColor,
                    }}
                >
                    <Ionicons name={item.iconName} size={item.iconSize} color={item.iconColor} />
                </View>
                <Text style={{textAlign: 'center', color: '#415352', fontSize: 10.5, marginTop: 5, fontFamily: 'Gilroy-Light',}} >
                    {item.title}
                </Text>
            </TouchableOpacity>
        )
    }

    
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headerText}>
                <Text style={{ fontFamily: 'Gilroy-ExtraBold', color: '#000' }}>Virtual Card</Text>
            </View>

            <View style={styles.headerContainer}>

                <View style={styles.CardBody}>
                    <View style={styles.mainCardBody}>
                        <View style={{width: '85%', backgroundColor: '#07070A',  }}>
                            <View style={{ backgroundColor: '#07070A', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{fontFamily: 'Gilroy-Light',color: 'white'}}>Tsh 10200.20</Text>
                                <Ionicons name="ios-radio" size={24} color="white" />
                            </View>
                            <View style={{ backgroundColor: '#07070A', paddingTop: 14 }}>
                                <Text style={{color: 'white', fontSize: 20, fontFamily: 'Gilroy-ExtraBold',}}>**************2966</Text>
                            </View>
                            <View style={{ backgroundColor: '#07070A', paddingTop: 13 }}>
                                <Text style={{color: 'white', fontSize: 10, fontFamily: 'Gilroy-Light',}}>Exp 04/23</Text>
                            </View>
                            <View style={{ backgroundColor: '#07070A', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 9 }}>
                                <Text style={{color: 'white', fontFamily: 'Gilroy-ExtraBold',}}>Shoket HQ</Text>
                                <Fontisto name="visa" size={20} color="#1A1F71" style={{backgroundColor: 'white'}} />
                            </View>
                        </View>
                    </View>
                </View>

                <FlatList
                    data={icons}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{paddingVertical: 10, backgroundColor: '#f3f3f8', marginBottom: 10}}
                />

                <View style={{width: '85%', backgroundColor: '#f3f3f8', marginBottom: 10, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Text style={{ fontFamily: 'Gilroy-ExtraBold', color: '#000' }}>Card Details</Text>
                    <Text style={{color: '#415352', fontSize: 13, fontFamily: 'Gilroy-Light', }}>Show</Text>
                </View>
                
                <View style={{width: '85%', borderRadius: 15, marginBottom: 10}}>
                    <View style={{
                        borderRadius: 40,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: 45,
                        alignItems: 'center',
                        paddingHorizontal: 15,
                    }}>
                        <Text style={{fontFamily: 'Gilroy-ExtraBold', fontSize: 15}}>**** **** **** 2966</Text>
                        <Ionicons name="ios-copy-outline" size={20} color="black" />
                    </View>
                </View>

                <View style={{width: '85%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f3f3f8'}}>
                    <View style={{
                        borderRadius: 15,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: 45,
                        alignItems: 'center',
                        paddingHorizontal: 15,
                        width: '50%'
                    }}>
                        <Text style={{fontWeight: 'bold'}}>**/**</Text>
                        <Ionicons name="ios-copy-outline" size={18} color="black" />
                    </View>

                    <View style={{
                        borderRadius: 15,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: 45,
                        alignItems: 'center',
                        paddingHorizontal: 15,
                        width: '45%'
                    }}>
                        <Text style={{fontWeight: 'bold'}}>***</Text>
                        <Ionicons name="ios-copy-outline" size={18} color="black" />
                    </View>
                </View>

            </View>
            

        </SafeAreaView>
    );
}
    
export default CardScreen;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'flex-start',
            backgroundColor: '#f3f3f8',
        },
        headerText: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingTop: 13,
            paddingBottom: 8,
            backgroundColor: '#f3f3f8',
        },
        headerContainer: {
            width: '100%',
            alignItems: 'center',
            backgroundColor: '#f3f3f8',
        },
        CardBody: {
            flexDirection: 'row',
            paddingVertical: 15,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            backgroundColor: '#f3f3f8',
        },
        mainCardBody: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#07070A',
            borderRadius: 15,
            height: 150,
            width: '90%',
        }
});
