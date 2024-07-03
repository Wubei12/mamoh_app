import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {images} from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface resourceCardInfoItem {
  productName: string;
  productColor: string;
  productSize: string;
  productPrice: number;
  productOPrice: number | null;
  productDiscount: number | null;
  image: string;
}

const ProductItem = ({
  productName,
  productColor,
  productSize,
  productPrice,
  productOPrice,
  productDiscount,
  image,
}: resourceCardInfoItem) => {
  const [disabled, setDisabled] = useState(false);
  const [counter, setCounter] = useState(1);

  const handleAddCounter = () => {
    setCounter(counter + 1);
  };

  const handleSubCounter = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    if (counter <= 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [setDisabled, counter]);

  return (
    <View style={styles.cardContainer}>
      <View style={{flexDirection: 'column'}}>
        <Text style={(styles.productName, {fontWeight: 400})}>
          {productName}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 8,
            marginBottom: 8,
            justifyContent: 'flex-end',
            marginTop: 8,
          }}>
          <Text
            style={{
              width: 40,
              height: 24,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#BBBBBB',
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: 11,
              fontWeight: 400,
              lineHeight: 16,
            }}>
            {productSize}
          </Text>
          <View
            style={{
              backgroundColor: productColor,
              width: 24,
              height: 24,
              borderRadius: 20,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 12,
              marginRight: !productOPrice && !productDiscount ? 114 : 52,
            }}>
            <Pressable
              style={{
                width: 22,
                height: 22,
                borderColor: disabled
                  ? 'rgba(32, 63, 119, 0.4)'
                  : 'rgb(32, 63, 119)',
                borderWidth: 1,
                borderRadius: 4,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              disabled={disabled ? true : false}
              onPress={handleSubCounter}>
              <AntDesign
                name="minus"
                size={18}
                color={disabled ? 'rgba(32, 63, 119, 0.4)' : 'rgb(32, 63, 119)'}
              />
            </Pressable>

            <Text
              style={{
                color: 'rgba(30, 31, 61, 0.7)',
                fontSize: 14,
                fontWeight: 400,
                lineHeight: 16,
                textAlignVertical: 'center',
              }}>
              {counter}
            </Text>

            <Pressable
              style={{
                width: 22,
                height: 22,
                borderColor: '#203F77',
                borderWidth: 1,
                borderRadius: 4,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={handleAddCounter}>
              <AntDesign name="plus" size={18} color="#203F77" />
            </Pressable>
          </View>
          <Text
            style={{
              color: '#EA580C',
              fontSize: 10,
              fontWeight: 400,
              lineHeight: 18,
            }}>
            {productDiscount ? `خصم %${productDiscount}` : ''}
          </Text>
          <Text
            style={{
              marginRight: 4,
              marginLeft: 4,
              color: '#9CA3AF',
              textDecorationLine: 'line-through',
              fontSize: 10,
              fontWeight: 400,
              lineHeight: 18,
            }}>
            {productOPrice ? `$ ${productPrice}` : ''}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 700,
              lineHeight: 21,
              letterSpacing: 0.005,
              color: '#1f2937',
            }}>
            ${productPrice}
          </Text>
        </View>
      </View>
      <Image source={image || images.shirt1} style={styles.productImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 16,
  },
  productImage: {
    width: 68,
    height: 75,
    borderRadius: 8,
    marginVertical: 16,
    marginRight: 8,
  },
  productName: {
    color: '#203F77',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'right',
  },
});

export default ProductItem;
