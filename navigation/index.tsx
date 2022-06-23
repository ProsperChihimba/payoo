/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Foundation, Entypo, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import SendMoneyScreen from '../screens/SendMoneyScreen';
import AirtimeScreen from '../screens/AirtimeScreen';
import CardScreen from '../screens/CardScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginPage from '../components/Login';
import SplashScreen from '../screens/SplashScreen';
import { AuthContext } from '../context/AuthContext';
import { navigationRef } from '../RootNavigation';
import RecepeintScreen from '../screens/RecepeintScreen';
import PaymentScreen from '../screens/PaymentDetails';
import SearchScreen from '../screens/SearchScreen';
import SignupPage from '../components/Signup';
import RegisterSuccess from '../screens/RegisterSuccess';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { userInfo, splashLoading } = React.useContext(AuthContext)
  return (
    <Stack.Navigator>
      {splashLoading ? 
        (<Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />)
        : userInfo.message === 'Login success' ?
        (
          <>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen
        name="Recepeint"
        component={RecepeintScreen}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SendMoney"
        component={SendMoneyScreen}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Airtime"
        component={AirtimeScreen}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      </>
      ) 
      : 
      (
        <>
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name="Signin" component={SignupPage} options={{ headerShown: false }} />
          <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} options={{ headerShown: false }} />
        </>
      )
      }
      
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        }
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => <Foundation name="home" color={color} size={25} />,
        })}
      />
      <BottomTab.Screen
        name="Cards"
        component={CardScreen}
        options={{
          headerShadowVisible: false,
          headerShown: false,
          title: 'Virtual Card',
          tabBarIcon: ({ color }) => <Ionicons name="ios-card" color={color} size={ 23 }/>,
        }}
      />
      <BottomTab.Screen
        name="Charts"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <Foundation name="graph-pie" color={color} size={25} />,
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <Ionicons name="ios-settings" color={color} size={22} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
