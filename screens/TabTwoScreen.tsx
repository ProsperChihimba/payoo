import React, { useRef, useState } from "react";
import { StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const bottomSheetRef = useRef(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
      <BottomSheet ref={bottomSheetRef} snapPoints={["12%", "95%"]}>
                <View style={{ alignItems: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: '600', letterSpacing: 0.2, paddingBottom: 5}}>Your online</Text>
                </View>
            </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
