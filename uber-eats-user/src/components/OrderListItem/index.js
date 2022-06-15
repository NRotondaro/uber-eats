import { View, Text, Image } from 'react-native';

const OrderLisItem = ({ order }) => {
  return (
    <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{ width: 75, height: 75, marginRight: 5 }}
      />

      <View>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>
          {order.Restaurant.name}
        </Text>
        <Text style={{ marginVertical: 5 }}>3 items · $38.45</Text>
        <Text>2 days ago · {order.status}</Text>
      </View>
    </View>
  );
};

export default OrderLisItem;
