import C from 'consistencss';
import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {imgSize} from './Avatar';
import palette from '../ui/colors';
import React from 'react';

export const Card = ({icon = 'card', title = '', descr = ''}) => {
  return (
    <View style={[C.bgLightGray, C.mr2, C.row, C.p4, C.radius4]}>
      <LinearGradient
        style={[
          C.p1,
          C.mr2,
          C.radius4,
          C.justifyCenter,
          C.itemsCenter,
          imgSize.md,
        ]}
        colors={palette.gradientRedPurple.colors}>
        <Icon name={icon} size={24} color={palette.white} />
      </LinearGradient>
      <View>
        <Text style={[C.bold]}>{title}</Text>
        <Text style={[C.textGrey]}>{descr}</Text>

        <Pressable style={[C.right0, C.bgGray, C.radius4, C.absolute, C.top1]}>
          <Icon name={'close'} color={palette.white} />
        </Pressable>
      </View>
    </View>
  );
};
