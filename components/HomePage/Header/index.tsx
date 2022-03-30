import React from "react";
import { View, Text } from "react-native";
import { Ionicons, Entypo } from '@expo/vector-icons';
import styles from "./styles";

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>Your Balance</Text>
                <Text style={styles.textBalance}>Tsh 26500.00</Text>
            </View>
            <View style={styles.iconsContainer}>
                <View style={styles.forwardIconView}>
                    <View style={styles.forwardIcon}>
                        <Ionicons name="ios-caret-forward" size={24} color="white" />
                    </View>
                    <Text style={styles.iconsText}>Transfer</Text>
                </View>
                <View style={styles.downloadIconView}>
                    <View style={styles.downloadIcon}>
                        <Ionicons name="download" size={22} color="white" />
                    </View>
                    <Text style={styles.iconsText}>Top-up</Text>
                </View>
                <View style={styles.walletIconView}>
                    <View style={styles.walletIcon}>
                        <Ionicons name="wallet" size={21} color="white" />
                    </View>
                    <Text style={styles.iconsText}>Bill</Text>
                </View>
                <View>
                    <View style={styles.gridIcon}>
                        <Entypo name="grid" size={24} color="white" />
                    </View>
                    <Text style={styles.iconsText}>More</Text>
                </View>
            </View>
        </View>
    )
}

export default Header;