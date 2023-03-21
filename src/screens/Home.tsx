import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {createUser} from '../mock/users';
import React from 'react';
import {Avatar, imgSize} from '../comp/Avatar';
import C from 'consistencss';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import palette, {eColor} from '../ui/colors';
import {Card} from '../comp/Card';
import {fonts} from '../ui/typography';

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
  const contacts = [createUser(), createUser(), createUser(), createUser()];
  return (
    <SafeAreaView>
      <View style={[C.row, C.p2, C.justifyBetween, C.itemsCenter, C.m2]}>
        <Avatar size={imgSize.sm} {...currUser} name={undefined} />
        <Icon name={'line-scan'} color={palette.grayIcon} size={20} />
      </View>
      <ScrollView style={[C.bgWhite, C.p4, C.radiustop4, C.hFull]}>
        <FlatList
          horizontal
          data={cards}
          keyExtractor={({icon}) => icon}
          renderItem={({item}) => <Card {...item} />}
        />

        <View style={[C.bgWhite, eColor().border, C.my3, C.radius4, C.p4]}>
          <Text style={[fonts.cta1, C.m2]}>Quick pay</Text>
          {contacts && (
            <FlatList
              horizontal
              data={contacts}
              keyExtractor={({id}) => id}
              renderItem={({item}) => <Avatar hasPay {...item} />}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
