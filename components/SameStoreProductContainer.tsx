import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductItem from './ProductItem';
import {productCardInfo} from '../constants';
import {productCardInfoItem} from '../constants/Products';

interface GroupedProducts {
  [storeName: string]: {
    deliveryCost: number | null;
    products: productCardInfoItem[];
  };
}

interface ProductVisibility {
  [productName: string]: boolean;
}

interface StoreVisibility {
  [storeName: string]: boolean;
}
const groupProductsByStore = (
  products: productCardInfoItem[],
): GroupedProducts => {
  return products.reduce((acc, product) => {
    product.store.forEach(store => {
      if (!acc[store.name]) {
        acc[store.name] = {
          deliveryCost: store.deliveryCost,
          products: [],
        };
      }
      acc[store.name].products.push(product);
    });
    return acc;
  }, {} as GroupedProducts);
};

export default function SameStoreProductContainer() {
  const groupedProducts = groupProductsByStore(productCardInfo);

  const [productVisibility, setProductVisibility] = useState<ProductVisibility>(
    productCardInfo.reduce((acc, product) => {
      acc[product.productName] = true; // Initially, all products are visible
      return acc;
    }, {} as ProductVisibility),
  );

  const [storeVisibility, setStoreVisibility] = useState<StoreVisibility>(
    Object.keys(groupedProducts).reduce((acc, store) => {
      acc[store] = true; // Initially, all stores are visible
      return acc;
    }, {} as StoreVisibility),
  );

  const toggleProductVisibility = (productName: string) => {
    setProductVisibility(prevState => ({
      ...prevState,
      [productName]: !prevState[productName],
    }));
  };

  const toggleStoreVisibility = (storeName: string) => {
    setStoreVisibility(prevState => {
      const newState = !prevState[storeName];
      const updatedProductVisibility = {...productVisibility};
      groupedProducts[storeName].products.forEach(product => {
        updatedProductVisibility[product.productName] = newState;
      });
      setProductVisibility(updatedProductVisibility);
      return {
        ...prevState,
        [storeName]: newState,
      };
    });
  };

  return (
    <View style={{borderWidth: 1, borderColor: '#f8f8f8'}}>
      {Object.keys(groupedProducts).map(store => (
        <View key={store} style={{marginBottom: 16, backgroundColor: '#fff'}}>
          <View
            style={{
              flexDirection: 'row',
              gap: 4,
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginVertical: 8,
            }}>
            <Pressable>
              <Ionicons name="storefront-outline" size={14} color="#000" />
            </Pressable>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 14,
                color: '#333333',
              }}>
              متجر {store}
            </Text>
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: '#203F77',
                width: 16,
                height: 16,
                borderRadius: 16,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => toggleStoreVisibility(store)}>
              {storeVisibility[store] && (
                <AntDesign name="check" size={10} color="#203F77" />
              )}
            </Pressable>
          </View>
          {groupedProducts[store].products.map((item, idx) => (
            <View
              key={item.productName}
              style={{
                flexDirection: 'row',
                gap: 8,
                alignItems: 'center',
                left: 16,
                marginBottom: groupedProducts[store].deliveryCost ? 0 : 16,
              }}>
              <ProductItem
                key={idx}
                productName={item.productName}
                productColor={item.productColor}
                image={item.image}
                productDiscount={item.productDiscount}
                productOPrice={item.productOPrice}
                productPrice={item.productPrice}
                productSize={item.productSize}
              />

              <Pressable
                style={{
                  borderWidth: 1,
                  borderColor: '#203F77',
                  width: 16,
                  height: 16,
                  borderRadius: 16,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}
                key={item.productName}
                onPress={() => toggleProductVisibility(item.productName)}>
                {productVisibility[item.productName] && (
                  <AntDesign name="check" size={10} color="#203F77" />
                )}
              </Pressable>
            </View>
          ))}
          {groupedProducts[store].deliveryCost !== null && (
            <View
              style={{
                flexDirection: 'row',
                gap: 8,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#04ACD6',
                  fontSize: 11,
                  fontWeight: 400,
                  lineHeight: 20,
                }}>
                رسوم التوصيل: {groupedProducts[store].deliveryCost}$
              </Text>
              <MaterialCommunityIcons
                name="truck-outline"
                size={14}
                color="#04ACD6"
              />
            </View>
          )}
        </View>
      ))}
    </View>
  );
}
