import C from 'consistencss';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import palette, {eColor} from '../ui/colors';
import React from 'react';
import {ImageBackground, Text} from 'react-native';
import {fonts} from '../ui/typography';
import {imgSize} from './Avatar';

export const Product = ({
  grad = palette.gradientPurpleBlue.colors,
  icon = '',
  bgImg = 'https://images.contentstack.io/v3/assets/blt38dd155f8beb7337/blt06e3f442d21cbbc4/6231356fbb9a2416314e7a98/Position-trading.jpg',
  name = '',
  title = '',
  descr = '',
}) => {
  return (
    <LinearGradient
      style={[
        C.p5,
        imgSize.card,
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
        <Text style={[fonts.body1, C.my2, eColor(palette.white).text]}>
          {name}
        </Text>
      )}

      {title && (
        <Text style={[fonts.cta1, C.my2, eColor(palette.white).text]}>
          {title}
        </Text>
      )}
      {descr && (
        <Text style={[fonts.textBold, eColor(palette.white).text]}>
          {descr}
        </Text>
      )}
      {/* </ImageBackground>*/}
    </LinearGradient>
  );
};
