import { View, Text, FlatList } from 'react-native';

import OrderLisItem from '../../components/OrderListItem';
import orders from '../../../assets/data/orders.json';

const OrdersScreen = () => {
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderLisItem order={item} />}
      />
    </View>
  );
};

export default OrdersScreen;
