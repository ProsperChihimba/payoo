import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { Feather, Ionicons, Entypo, MaterialCommunityIcons  } from '@expo/vector-icons';

import styles from "./styles";
import appdata from "../data";

export type TransactionProps = {
    id: number,
    spendType: string,
    date: string,
    amount: string,
    iconName: string,
    iconColor: string,
    from?: string,
} 

const Body = () => {

    const renderItem = ({ item }: { item: TransactionProps }) => {
        return (
            <View style={styles.bodyContainer}>

                <View style={styles.bodyIcon}>
                    <Ionicons  name={item.iconName} size={18} color={item.iconColor} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={styles.bodySpend}>
                        <Text style={styles.spendText}>{ item.spendType }</Text>
                        <Text style={styles.dateText}>{item.date}</Text>
                    </View>

                    <View>
                        <Text style={styles.spendText}>{item.amount}</Text>
                        <Text style={styles.dateText}>{item.from}</Text>
                    </View>

                </View>
                
            </View>
        )
    }

    const myListEmpty = () => {
        return (
            <View style={{ alignItems:"center" }}>
                <Text>No data found</Text>
            </View>
        );
        };

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.headerLine}></Text>
            </View>

            <Text style={styles.headText}>Transactions</Text>


                <FlatList
                    data={appdata.transactions}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    ListEmptyComponent={myListEmpty}
                    contentContainerStyle={{
                        paddingHorizontal: 20,
                        paddingBottom: 30,
                    }}
                />


        </View>
    )
}

export default Body;