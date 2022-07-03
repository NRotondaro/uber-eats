import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import OrderDelivery from './src/screens/OrderDelivery';
import OrdersScreen from './src/screens/OrdersScreen';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', paddingTop: 50 }}>
        <OrderDelivery />
        <StatusBar style='auto' />
      </View>
    </GestureHandlerRootView>
  );
}
