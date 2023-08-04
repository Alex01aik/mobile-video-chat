import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/screens/auth';
import Store from './src/shared/store/store';
import HomeScreen from './src/screens/home';
import { RootStackParamList } from './src/shared/types/navTypes';
import StoreContext from './src/shared/store/StoreContext';
import CallScreen from './src/screens/call';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const store = new Store();
  return (
    <StoreContext.Provider value={{ store }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Call" component={CallScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </StoreContext.Provider>
  );
}
