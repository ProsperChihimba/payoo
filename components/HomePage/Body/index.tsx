import React, {useContext} from "react";
import { View, Text, ScrollView, FlatList, Image } from "react-native";
import { Feather, Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { AuthContext } from "../../../context/AuthContext";

import styles from "./styles";
import appdata from "../data";

export type TransactionProps = {
    amount: string,
    date: string,
    message: string,
    payment_method: string,
    reference: string,
    transaction_type: string,
} 

const empty = require('../../../assets/images/empty.png');

const Body = () => {

    const { isLoadingTransactions, transactionsData } = useContext(AuthContext);

    const renderItem = ({ item }: { item: TransactionProps }) => {
        return (
            <View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 25}}>

                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.bodyIcon}>
                            {item.transaction_type === "Deposit" ? 
                                <Feather name="arrow-down-right" size={15} color="#32a7e2" />
                                :
                                <Feather name="arrow-up-right" size={15} color="#32a7e2" />
                            }
                            
                        </View>
                        <View style={styles.bodySpend}>
                            <Text style={styles.amountText}>Tsh {item.amount}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{ fontSize: 11, color: '#415352', fontFamily: 'Gilroy-ExtraBold', }}>{item.message}</Text>
                                <Text style={styles.dateText}>- {item.date}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center'}}>
                        <View style={{backgroundColor: '#c9efe1', borderRadius: 15, height: 23, width: 23, justifyContent: 'center', alignItems: 'center'}}>
                            <Ionicons name="checkmark-sharp" size={15} color="#22b07d" />
                        </View>
                        
                    </View>
                </View>
                
            </View>
        )
    }

    const myListEmpty = () => {
        return (
            <View style={{ alignItems:"center", width: '80%', justifyContent: 'center', alignSelf: 'center' }}>
                <Text style={{fontFamily: 'Gilroy-Light', paddingBottom: 30, paddingTop: 15, fontSize: 15}}>You haven't made any transaction</Text>
                <Image source={empty} style={{ width: 170, height: 150,}} />
            </View>
        );
        };

    return (
        <View style={styles.container}>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{backgroundColor: '#BECECF', height: 7, width: '15%', borderRadius: 25, marginTop: 5 }}>
                </View>
            </View>

            <Text style={styles.headText}>Transaction History</Text>

                <FlatList
                    data={transactionsData}
                    keyExtractor={item => `${item.reference}`}
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