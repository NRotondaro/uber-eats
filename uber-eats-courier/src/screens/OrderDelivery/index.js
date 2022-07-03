import { useMemo, useRef } from 'react';
import { View, Text } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const OrderDelivery = () => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['12%', '95%'], []);

  return (
    <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={{ backgroundColor: 'gray', width: 100 }}
      >
        <Text>OrderDelivery</Text>
      </BottomSheet>
    </View>
  );
};

export default OrderDelivery;
