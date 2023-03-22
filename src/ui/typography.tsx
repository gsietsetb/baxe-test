import {Platform} from 'react-native';

const systemFont = Platform.OS === 'ios' ? 'System' : 'Roboto';
const systemFontBold = Platform.OS === 'ios' ? 'Mons-Bold' : 'Roboto-Bold';

export const fontsMap = {
  title: systemFont,
  titleBold: systemFontBold,
  body: systemFont,
  bodyBold: systemFontBold,
  link: systemFont,
};

export const fonts = {
  mainTitle: {
    fontSize: 36,
    fontWeight: '500',
    lineHeight: 43.2,
  },
  cta1: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
  },
  title1: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
  },
  highlight: {
    fontSize: 20,
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body1: {
    fontSize: 14,
    lineHeight: 22.4,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 19.6,
  },
  littleText: {
    fontSize: 14,
    /*fontWeight: 'bold',*/
    lineHeight: 14,
  },
} as const;
