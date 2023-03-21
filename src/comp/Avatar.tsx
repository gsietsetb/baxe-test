import C from 'consistencss';
import {Image, Text, View} from 'react-native';
import {UserType} from '../mock/users';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Styles} from 'consistencss/lib/typescript/src/types';
import palette, {eColor} from '../ui/colors';
import {fonts} from '../ui/typography';
import React from 'react';

export const Avatar = ({
  avatar,
  name,
  hasPay,
  size = imgSize.big,
  style,
}: Partial<UserType> & {
  hasPay?: boolean;
  size?: Styles[];
  style?: Styles[];
}) => {
  return (
    <View style={[C.itemsCenter, C.mr2, style]}>
      {avatar && (
        <View>
          <Image
            source={{
              uri: avatar,
            }}
            style={[size, C.bgBlue, C.radius20]}
          />
          {hasPay && (
            <View
              style={[
                C.absolute,
                C.bgRed,
                C.radius4,
                C.borderWidth1,
                C.right_1,
                eColor(palette.white, 2).border,
                C.bottom_1,
              ]}>
              <Icon color={palette.white} name={'lightning-bolt'} size={16} />
            </View>
          )}
        </View>
      )}
      {name && <Text style={[fonts.littleText, C.bold, C.m2]}>{name}</Text>}
    </View>
  );
};

export const imgSize = {
  card: [C.h50, C.w70],
  big: [C.h13, C.w13],
  md: [C.h10, C.w10],
  sm: [C.h8, C.w8],
};

export const IconRow = ({icon = '', text = ''}) => {
  return (
    <View style={[C.row, C.m2, C.itemsCenter]}>
      <Icon color={palette.white} name={icon} size={24} />
      <Text style={[C.textWhite, C.ml3, fonts.textBold, C.mr4]}>{text}</Text>
    </View>
  );
};
