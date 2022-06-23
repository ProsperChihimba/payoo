import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Ionicons, FontAwesome5  } from '@expo/vector-icons';
import styles from "./styles";
import appdata from "./data";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export type IconsProps = {
    id: number,
    title: string,
    navigationName: any,
} 


const SeachBody = () => {

    const navigation = useNavigation();

    const onPress = ({navigationName}: {navigationName?: any}) => {
        navigation.navigate(navigationName);
    }  

    let [fontsLoaded] = useFonts({
        'Gilroy-ExtraBold': require('../../../assets/fonts/Gilroy-ExtraBold.otf'),
        'Gilroy-Light': require('../../../assets/fonts/Gilroy-Light.otf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const renderItem = ({item}: {item: IconsProps}) => {
        return (
            <TouchableOpacity
                style={{
                    padding: 5,
                }}
                onPress={() => navigation.navigate('OrderDetails')}
            >
                <View
                    style={{
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 40,
                        width: 40,
                        backgroundColor: '#a8a9b6',
                    }}
                >
                    <Text style={ styles.iconsText } >
                        {item.title}
                    </Text>
                </View>
                
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.container}>

            <View style={{ marginTop: 10, width: '90%' }}>
                <Text style={{fontWeight: 'bold', fontFamily: 'Gilroy-ExtraBold'}}>Recent people</Text>
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
    )
}

export default SeachBody;