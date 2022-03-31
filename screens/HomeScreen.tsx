import { StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import HomePage from '../components/HomePage';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <SafeAreaView style={styles.container}>
      <HomePage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f8',
  },
});
