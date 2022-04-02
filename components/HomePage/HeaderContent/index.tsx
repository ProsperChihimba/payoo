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
                    <Ionicons name={item.iconName} size={item.iconSize} color={item.iconColor} />
                </View>
                <Text style={ styles.iconsText } >
                    {item.title}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>

            <View style={styles.cardContainer}>
                <View>
                    <View style={{ paddingTop: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{paddingLeft: 15, }}>
                            <Text style={{fontWeight: 'bold', color: 'white'}}>USD</Text>
                            <Text style={{paddingTop: 5, color: 'white'}}>$ 26500.00</Text>
                        </View>
                        <View style={{ marginRight: 15, justifyContent: 'center' }}>
                            <Ionicons name="md-chevron-down-sharp" size={24} color="white"/>
                        </View>
                    </View>
                    <View style={{paddingTop: 25, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={styles.button}>
                            <View style={styles.buttonText}>
                                <Ionicons name="ios-add-circle-sharp" size={20} color="white" style={{ paddingRight: 5 }} />
                                <Text style={{ color: 'white', fontSize: 16}}>Add Money</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <View style={styles.buttonText}>
                                <Ionicons name="ios-rocket-outline" size={20} color="white" style={{ paddingRight: 5 }} />
                                <Text style={{ color: 'white', fontSize: 16}}>Send Money</Text>
                            </View>
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
    )
}

export default HeaderContent;