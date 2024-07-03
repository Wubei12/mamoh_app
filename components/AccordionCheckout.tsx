import {View, Text, Pressable, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function AccordionCheckout() {
  const [open, setOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  function toggleAccordion() {
    if (!open) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
    setOpen(!open);
  }

  const heightAnimationInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });

  const widthAnimationInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [237, 370],
  });

  return (
    <View
      style={{
        width: '100%',
        height: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        alignSelf: 'flex-end',
      }}>
      <Animated.View style={{height: heightAnimationInterpolation}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Pressable onPress={toggleAccordion}>
            <Ionicons name="chevron-down-sharp" size={13} color="#333333" />
          </Pressable>
          <Text style={{fontSize: 16, fontWeight: 700, letterSpacing: 0.02}}>
            ملاحظة
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 8,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#EBEBEB',
            display: open ? 'flex' : 'none',
          }}>
          <Text
            style={{
              textAlign: 'right',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 18,
            }}>
            السعر الخاص بالتوصيل يتم حسابه حسب العنوان التي تم تحديده عند تحميل
            التطبيق ويمكن تغيره من الصفحة القادمة:
            <Text
              style={{
                color: '#203F77',
                fontSize: 12,
                fontWeight: 400,
                lineHeight: 18,
              }}>
              {' '}
              فلسطين - رفح - رفح الغربية{' '}
            </Text>
          </Text>
          <Octicons name="shield-lock" size={16} color="#808080" />
        </View>
        <View
          style={{
            flexDirection: 'column',
            gap: 20,
            marginBottom: 20,
            borderBottomColor: '#EBEBEB',
            borderStyle: 'dashed',
            borderBottomWidth: 1,
            display: open ? 'flex' : 'none',
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: '#808080',
              }}>
              2
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: '#808080',
              }}>
              عدد العناصر
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: '#808080',
              }}>
              $70
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: '#808080',
              }}>
              السعر{' '}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: '#808080',
              }}>
              $10
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: '#808080',
              }}>
              التوصيل{' '}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: '#808080',
              }}>
              $3
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: '#808080',
              }}>
              عمولة مامو
            </Text>
          </View>
          <Animated.View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 8,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: '#333333',
              }}>
              $80
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: '#000',
              }}>
              الإجمالي
            </Text>
          </Animated.View>
        </View>
      </Animated.View>
      <View style={{flexDirection: 'row', gap: 24, justifyContent: 'center'}}>
        {!open && (
          <Pressable
            style={{
              flexDirection: 'row',
              gap: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={toggleAccordion}>
            <Ionicons name="chevron-up-sharp" size={13} color="#333333" />
            <View style={{flexDirection: 'column', gap: 8}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  textAlign: 'center',
                }}>
                الإجمالي
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  textAlign: 'center',
                }}>
                80
              </Text>
            </View>
          </Pressable>
        )}
        <AnimatedPressable
          style={[
            {
              margin: open ? 0 : 16,
              padding: 16,
              backgroundColor: '#203F77',
              borderRadius: 6,
            },
            {width: widthAnimationInterpolation},
          ]}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 18,
              textAlign: 'center',
              color: '#ffffff',
            }}>
            اتمام عملية الشراء (2)
          </Text>
        </AnimatedPressable>
      </View>
    </View>
  );
}
