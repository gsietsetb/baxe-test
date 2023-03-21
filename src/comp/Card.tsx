import C from 'consistencss';
import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {imgSize} from './Avatar';
import palette, {eColor} from '../ui/colors';
import React from 'react';
import {fonts} from '../ui/typography';

export const Card = ({icon = 'card', title = '', descr = ''}) => {
  return (
    <View style={[C.bgLightGray, C.mr4, C.row, C.p4, C.radius4]}>
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
      <View style={[C.mx2, C.justifyBetween, C.maxw30]}>
        <Text numberOfLines={2} style={[C.bold]}>
          {title}
        </Text>
        <Text
          style={[fonts.littleText, eColor(palette.mediumGray).text, C.mt2]}>
          {descr}
        </Text>
      </View>
      <Pressable style={[C.right0, C.selfStart, C.bgGray, C.radius4, C.top1]}>
        <Icon name={'close'} size={12} color={palette.white} />
      </Pressable>
    </View>
  );
};
