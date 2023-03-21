type Gradient = {
  angle: number;
  colors: [string, string];
};

const palette = {
  black: '#000000',
  white: '#FFFFFF',
  lightGray: '#F4F4F5',
  mediumGray: '#91969F',
  darkGray: '#5B6370',
  grayBorder: '#EEEFF0',
  lightestGray: '#FBFBFB',
  grayBackground: '#D8D8D8B2',
  lightestGrayBackground: '#FFFFFFB2',
  grayText: '#979797',
  darkGrayText: '#B7BDCD',
  grayIcon: '#C4C4C4',
  grayDivider: '#DEE0E2',
  lightGrayDivider: '#E6E6E6',
  red: '#FF3B61',
  gradientRedPurple: {
    angle: 135.35,
    colors: ['#FF3B61', '#520D8C'],
  } as Gradient,
  gradientPurpleOrange: {
    angle: 135,
    colors: ['#FF3B61', '#FF9921'],
  } as Gradient,
  gradientPurpleBlue: {
    angle: 135,
    colors: ['#520D8C', '#31C9B1'],
  } as Gradient,
  gradientWhiteLightGray: {
    angle: 180,
    colors: ['#FFFFFF', '#F4F4F5'],
  } as Gradient,
  gradientWhiteGray: {
    angle: 180,
    colors: ['#FFFFFF', '#EBEBEB'],
  } as Gradient,
  gradientLightPurpleBlue: {
    angle: 90,
    colors: ['#D7D0E6', '#A2B3CA'],
  } as Gradient,
  gradientGrayBlue: {
    angle: 90,
    colors: ['#C4CEE0', '#FAFBFF'],
  } as Gradient,
};

export default palette;

export const eColor = (
  color = palette.grayBackground,
  width = 1,
) => /*StyleSheet.create*/ ({
  border: {
    borderWidth: width,
    borderColor: color,
  },
  borderBottom: {
    borderBottomWidth: width,
    borderColor: color,
  },
  bg: {backgroundColor: color},
  tint: {tintColor: color},
  text: {color: color},
});
