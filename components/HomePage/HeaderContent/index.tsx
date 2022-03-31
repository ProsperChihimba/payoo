import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Ionicons, Entypo } from '@expo/vector-icons';
import styles from "./styles";
import appdata from "../data";
import { useNavigation } from "@react-navigation/native";

export type IconsProps = {
    id: number,
    iconType: string,
    iconName: string,
    iconSize: number,
    iconColor: string,
    backgroundColor: string,
    title: string,
} 

const HeaderContent = () => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('SendMoney');
    }  

    const renderItem = ({item}: {item: IconsProps}) => {
        return (
            <TouchableOpacity
                style={{
                    padding: 10,
                    marginRight: 5, 
                }}
                onPress={onPress}
            >
                <View
                    style={{
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 50,
                        width: 50,
                        backgroundColor: item.backgroundColor,
                    }}
                >
                    <Ionicons name={item.iconName} size={item.iconSize} color="white" />
                </View>
                <Text style={ styles.iconsText } >
                    {item.title}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
        
            <View>
                <Text style={styles.textTitle}>Your Balance</Text>
                <Text style={styles.textBalance}>Tsh 26500.00</Text>
            </View>

            <FlatList
                data={appdata.icons}
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{paddingVertical: 20}}
            />
        </View>
    )
}

export default HeaderContent;