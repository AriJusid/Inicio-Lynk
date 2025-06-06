import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import inicioScreen from './src/screens/incioScreen.js'
import logInScreen from './src/screens/logInScreen.js'
import signUpScreen from './src/screens/signUpScreen.js'

const Stack1 = createNativeStackNavigator();

function Stack1Navigator() {
  return (
    <Stack1.Navigator screenOptions={{ headerShown: false }}>
      <Stack1.Screen name="inicioScreen" component={inicioScreen} />
      <Stack1.Screen name="logInScreen" component={logInScreen} options={{
    headerTransparent: true,  headerTitle: ''}}/>
      <Stack1.Screen name="signUpScreen" component={signUpScreen} />

    </Stack1.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack1Navigator/>
    </NavigationContainer>
  );
}
