import {Pressable, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home({navigation}: any) {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}>
          <Pressable>
            <AntDesign name="bells" size={20} color="#E46306" />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('سلة المشتريات')}>
            <AntDesign name="shoppingcart" size={24} color="#E46306" />
          </Pressable>
        </View>
        <View style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
          <Pressable>
            <Ionicons name="chevron-down-sharp" size={24} color="#000" />
          </Pressable>
          <Text>فلسطين ,غزة</Text>
          <Pressable>
            <Ionicons name="location-sharp" size={24} color="#E46306" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
