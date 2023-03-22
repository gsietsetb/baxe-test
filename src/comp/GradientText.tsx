import C from 'consistencss';
import React from 'react';
import {TextProps, View} from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Text,
  TextAnchor,
} from 'react-native-svg';

export enum Alignment {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export const BASE_PIXEL = 4;

export interface GradientTextProps extends TextProps {
  text: string;
  gradient: [string, string];
  fontSize?: number;
  lineHeight?: number;
  fontFamily?: string;
  fontWeight?: string;
  alignment?: Alignment;
}

export function GradientText({
  text,
  gradient,
  fontSize = BASE_PIXEL * 3,
  lineHeight = fontSize * 1.1,
  fontFamily,
  fontWeight,
  alignment = Alignment.Center,
  style,
  ...rest
}: GradientTextProps) {
  const textAnchor: Record<Alignment, TextAnchor> = {
    [Alignment.Center]: 'middle',
    [Alignment.Left]: 'start',
    [Alignment.Right]: 'end',
  };
  return (
    <View
      style={[
        {
          height: lineHeight,
        },
        C.absolute,
        C.left0,
        C.wFull,
        C.itemsCenter,
        style,
      ]}
      {...rest}>
      <Svg width="100%" height="100%">
        <Defs>
          <LinearGradient id="Gradient" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor={gradient[0]} />
            <Stop offset="1" stopColor={gradient[1]} />
          </LinearGradient>
        </Defs>
        <Text
          id="Text"
          x="50%"
          fill="url(#Gradient)"
          fillRule="evenodd"
          y={`${0.75 * lineHeight}`}
          fontFamily={fontFamily}
          fontWeight={fontWeight}
          fontSize={fontSize}
          textAnchor={textAnchor[alignment]}>
          {text}
        </Text>
      </Svg>
    </View>
  );
}

export default GradientText;
