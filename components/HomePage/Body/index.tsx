import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Feather, Ionicons, Entypo, MaterialCommunityIcons  } from '@expo/vector-icons';

import styles from "./styles";

const Body = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerLine}></View>
            <Text style={styles.headText}>Transactions</Text>
            <ScrollView>
                <View style={styles.bodyContainer}>
                    <View style={styles.bodyIcon}>
                        <Feather name="shopping-cart" size={18} color="#4D9FEC" />
                        </View>
                    <View style={styles.bodySpend}>
                        <Text style={styles.spendText}>Grocery</Text>
                        <Text style={styles.dateText}>Nov 17</Text>
                    </View>
                    <View>
                        <Text style={styles.spendText}>3400.00</Text>
                        <Text style={styles.dateText}>Uhuru Mall</Text>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.bodyIcon}>
                        <Ionicons name="md-fast-food" size={18} color="#b548c6" />
                    </View>
                    <View style={styles.bodySpend}>
                        <Text style={styles.spendText}>Launch</Text>
                        <Text style={styles.dateText}>Nov 18</Text>
                    </View>
                    <View>
                        <Text style={styles.spendText}>5000.00</Text>
                        <Text style={styles.dateText}>Unit One</Text>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.bodyIcon}>
                        <Entypo  name="laptop" size={18} color="#ff8700" />
                    </View>
                    <View style={styles.bodySpend}>
                        <Text style={styles.spendText}>Repair</Text>
                        <Text style={styles.dateText}>Nov 18</Text>
                    </View>
                    <View>
                        <Text style={styles.spendText}>50000.00</Text>
                        <Text style={styles.dateText}>Jumiz</Text>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.bodyIcon}>
                        <MaterialCommunityIcons name="shoe-formal" size={18} color="#22b07d" />
                    </View>
                    <View style={styles.bodySpend}>
                        <Text style={styles.spendText}>Shoes</Text>
                        <Text style={styles.dateText}>Nov 18</Text>
                    </View>
                    <View>
                        <Text style={styles.spendText}>30000.00</Text>
                        <Text style={styles.dateText}>Kariakoo</Text>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.bodyIcon}>
                        <Ionicons name="md-phone-portrait" size={18} color="#4D9FEC" />
                    </View>
                    <View style={styles.bodySpend}>
                        <Text style={styles.spendText}>Bando</Text>
                        <Text style={styles.dateText}>Nov 18</Text>
                    </View>
                    <View>
                        <Text style={styles.spendText}>3000.00</Text>
                        <Text style={styles.dateText}>Halotel</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Body;