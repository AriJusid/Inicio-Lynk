import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import inicioScreen from './src/screens/incioScreen'
import loginScreen from './src/screens/loginScreen'


const Stack1 = createNativeStackNavigator();

function Stack1Navigator() {
  return (
    <Stack1.Navigator screenOptions={{ headerShown: false }}>
      <Stack1.Screen name="inicioScreen" component={inicioScreen} />
      <Stack1.Screen name="loginScreen" component={loginScreen} options={{
    headerTransparent: true,  headerTitle: ''}}/>
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
