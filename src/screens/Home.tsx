import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {createUser} from '../mock/users';
import React from 'react';
import {Avatar, IconRow, imgSize} from '../comp/Avatar';
import C from 'consistencss';
import Icon from 'react-native-vector-icons/FontAwesome';
import palette, {eColor} from '../ui/colors';
import {Card} from '../comp/Card';
import {fonts} from '../ui/typography';
import LinearGradient from 'react-native-linear-gradient';

export const cards = [
  {
    icon: 'credit-card',
    title: 'Pay Offline With \n' + 'BAXE Card',
    descr: 'Easy Pay & Free Fee',
  },
  {
    icon: 'police-badge',
    title: '1 More Step to Higher Account Level',
    descr: 'Easy Pay & Free Fee',
  },
];
export default () => {
  const currUser = createUser({
    avatar: 'https://www.guillesierra.com/img/about/sierra.JPG',
  });
  const account = {balance: '5.641', credit: '€ 0.00'};
  const contacts = [createUser(), createUser(), createUser(), createUser()];
  return (
    <SafeAreaView>
      <View style={[C.row, C.justifyBetween, C.itemsCenter, C.m5]}>
        <Avatar size={imgSize.sm} {...currUser} name={undefined} />
        <Icon name={'line-scan'} color={palette.grayIcon} size={20} />
      </View>
      <ScrollView style={[C.bgWhite, C.pl6, C.pt6, C.radiustop4, C.hFull]}>
        <Text style={fonts.title1}>Hi there</Text>
        <Text style={[fonts.subtitle, C.mt1, C.mb4]}>
          Fund your account to start investing
        </Text>
        <FlatList
          horizontal
          data={cards}
          keyExtractor={({icon}) => icon}
          renderItem={({item}) => <Card {...item} />}
        />

        {/** Card*/}
        <LinearGradient
          colors={palette.gradientGrayBlue.colors}
          style={[C.p6, C.mt3, eColor().border, C.radiustop6, C.mr6]}
          angle={-2}
          useAngle>
          <Text style={[fonts.cta1, eColor(palette.grayText).text]}>
            Balance
          </Text>
          <View style={[C.my2, C.row]}>
            <Icon
              color={palette.grayText}
              style={[C.selfCenter, C.mr4]}
              name={'euro'}
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

        {/** Quick Pay*/}
        <View
          style={[C.bgWhite, eColor().border, C.my4, C.mr6, C.radius4, C.p4]}>
          <Text style={[fonts.cta1, C.mb2]}>Quick pay</Text>
          {contacts && (
            <FlatList
              horizontal
              data={contacts}
              keyExtractor={({id}) => id}
              renderItem={({item}) => (
                <Avatar style={[C.mr3]} hasPay {...item} />
              )}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
