/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Cart from './screens/Cart';
import Home from './screens/Home';
import {Pressable, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="سلة المشتريات"
          component={Cart}
          options={{
            header: ({navigation}: any) => (
              <View
                style={{
                  height: 50,
                  padding: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 4,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}>
                  <Pressable>
                    <AntDesign name="delete" size={16} color="#000" />
                  </Pressable>
                  <Text
                    style={{
                      fontWeight: 700,
                      fontSize: 12,
                      lineHeight: 14,
                      color: '#333333',
                    }}>
                    حذف
                  </Text>
                </View>
                <Text
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    lineHeight: 16,
                    color: '#333333',
                  }}>
                  سلة المشتريات
                </Text>
                <Pressable onPress={() => navigation.goBack()}>
                  <AntDesign name="arrowright" size={24} color="#000" />
                </Pressable>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
