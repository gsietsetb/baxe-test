import C from 'consistencss';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import palette, {eColor} from '../ui/colors';
import React from 'react';
import {ImageBackground, Pressable, Text} from 'react-native';
import {fonts} from '../ui/typography';
import {imgSize} from './Avatar';

export const Product = ({
  grad = palette.gradientPurpleBlue.colors,
  icon = '',
  bgImg = '',
  name = '',
  title = '',
  descr = '',
  balance = '',
}) => {
  return (
    <LinearGradient
      style={[
        C.p5,
        imgSize.card,
        C.flex,
        C.mr2,
        C.radius4,
        C.justifyStart,
        C.itemsStart,
      ]}
      colors={grad}>
      <ImageBackground
        style={[C.opacity30, imgSize.card, C.absolute]}
        source={{uri: bgImg}}
      />
      <Icon name={icon} size={24} color={palette.white} />
      {name && (
        <Text style={[fonts.body1, C.mt2, eColor(palette.white).text]}>
          {name}
        </Text>
      )}

      {title && (
        <Text
          numberOfLines={1}
          style={[fonts.cta1, C.mt2, eColor(palette.white).text]}>
          {title}
        </Text>
      )}
      {descr && (
        <Text style={[fonts.body1, eColor(palette.white).text]}>{descr}</Text>
      )}
      <Pressable
        style={[
          eColor(palette.white + '90').bg,
          C.p4,
          imgSize.card[1],
          C.absolute,
          C.bottom0,
        ]}>
        {balance ? (
          <Text style={[eColor(palette.red).text]}>{balance}</Text>
        ) : (
          <Icon
            name={'plus'}
            size={16}
            style={[C.selfCenter]}
            color={palette.red}
          />
        )}
      </Pressable>
    </LinearGradient>
  );
};
