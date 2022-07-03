import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import OrdersScreen from './src/screens/OrdersScreen';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingTop: 50 }}>
      <OrdersScreen />
      <StatusBar style='auto' />
    </View>
  );
}
