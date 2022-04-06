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
    navigationName: any,
} 

const HeaderContent = () => {

    const navigation = useNavigation();

    const onPress = ({navigationName}: {navigationName?: any}) => {
        navigation.navigate(navigationName);
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
        <View style={styles.container}>

            <View style={styles.cardContainer}>
                <View>
                    <View style={{ paddingTop: 20, justifyContent: 'center', flexDirection: 'row', }}>
                        <View style={{ paddingLeft: 15, }}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={{ fontWeight: 'bold', color: '#2c2c63' }}>USD</Text>
                                <Text style={{fontWeight: '500', color: '#415352', fontSize: 13,}}>TSH</Text>
                            </View>
                            <Text style={{paddingTop: 12, color: '#415352', fontWeight: 'bold'}}>$ 26500.00</Text>
                        </View>
                    </View>
                    <View style={{paddingTop: 23, paddingHorizontal: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={styles.buttonText}>
                            <View style={styles.button}>
                                <Ionicons name="ios-add" size={20} color="#32a7e2" style={{ }} />
                            </View>
                            <Text style={{ color: '#415352', fontSize: 12, paddingTop: 5}}>Add Cash</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonText}>
                            <View style={styles.button}>
                                <Ionicons name="arrow-down" size={20} color="#32a7e2" style={{  }} />
                            </View>
                            <Text style={{ color: '#415352', fontSize: 12, paddingTop: 5}}>Withdraw</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonText}>
                            <View style={styles.button}>
                                <Ionicons name="ios-rocket-outline" size={20} color="#32a7e2" style={{ }} />
                            </View>
                            <Text style={{ color: '#415352', fontSize: 12, paddingTop: 5}}>Send Cash</Text>
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