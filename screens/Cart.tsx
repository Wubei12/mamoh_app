import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {AccordionCheckout, SameStoreProductContainer} from '../components';

export default function Cart() {
  return (
    <SafeAreaView style={{backgroundColor: '#F8F8F8', height: '100%'}}>
      <ScrollView style={{height: '70%'}} persistentScrollbar>
        <SameStoreProductContainer />
      </ScrollView>
      <AccordionCheckout />
    </SafeAreaView>
  );
}
