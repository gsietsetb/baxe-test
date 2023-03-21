// CreditCard.js
import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import palette, {eColor} from '../ui/colors';
import C from 'consistencss';
import {fonts} from '../ui/typography';
import {IconRow} from './Avatar';

const CreditCard = ({account}) => (
  <>
    <LinearGradient
      colors={palette.gradientGrayBlue.colors}
      style={[C.p6, C.mt3, eColor().border, C.radiustop6, C.mr6]}
      angle={-2}
      useAngle>
      <MatIcon
        style={[C.absolute, C.right3, C.top3]}
        name={'qrcode'}
        color={palette.grayIcon}
        size={28}
      />

      <Text style={[fonts.cta1, eColor(palette.grayText).text]}>Balance</Text>
      <View style={[C.my2, C.row]}>
        <MatIcon
          color={palette.grayText}
          style={[C.selfCenter, C.mr4]}
          name={'currency-eur'}
          size={36}
        />
        <Text style={[fonts.mainTitle, eColor(palette.grayText).text]}>
          {account.balance}
        </Text>
      </View>
      <Text style={[fonts.cta1, eColor(palette.grayText).text]}>
        {account.credit}
      </Text>
    </LinearGradient>
    <View
      style={[
        eColor(palette.darkGrayText).bg,
        C.p3,
        C.mr6,
        C.radiusbottom6,
        C.row,
      ]}>
      <IconRow icon={'bank-transfer-in'} text={'Deposit'} />
      <IconRow icon={'bank-transfer-out'} text={'Transfer'} />

      <Icon
        color={palette.white}
        size={20}
        style={[C.flex, C.selfCenter, C.alignRight, C.mr4]}
        name={'ellipsis-h'}
      />
    </View>
  </>
);

export default CreditCard;
