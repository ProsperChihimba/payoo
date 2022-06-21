import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlashMessage from "react-native-flash-message";
import { AuthProvider } from './context/AuthContext';
import { ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthProvider>
          <Navigation colorScheme={colorScheme} />
          <FlashMessage position="top" /> 
        </AuthProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
