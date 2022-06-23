import { StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { RootTabScreenProps } from '../types';
import Search from '../components/SearchScreen';

export default function SearchScreen({ navigation }: RootTabScreenProps<'Home'>) {
    return (
        <SafeAreaView style={styles.container}>
        <Search />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});