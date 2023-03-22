import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {cards, createUser, products, UserType} from '../mock/users';
import React, {useEffect, useState} from 'react';
import {Avatar, imgSize} from '../comp/Avatar';
import C from 'consistencss';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import palette, {eColor} from '../ui/colors';
import {Card} from '../comp/Card';
import {fonts} from '../ui/typography';
import {Product} from '../comp/Product';
import CreditCard from '../comp/CreditCard';
import LinearGradient from 'react-native-linear-gradient';

export default () => {
  const currUser = createUser({
    avatar: 'https://www.guillesierra.com/img/about/sierra.JPG',
  });
  const account = {balance: '5.641', credit: '€ 0.00'};
  const [contacts, setContacts] = useState<UserType[]>([]);

  useEffect(() => {
    const numContacts = 6;
    const newContacts = [];
    for (let i = 0; i < numContacts; i++) {
      newContacts.push(createUser());
    }
    setContacts(newContacts);
  }, []);

  return (
    <SafeAreaView style={C.flex}>
      <View style={[C.row, C.justifyBetween, C.itemsCenter, C.m5]}>
        <Avatar size={imgSize.sm} {...currUser} name={undefined} />
        <MatIcon name={'line-scan'} color={palette.grayIcon} size={20} />
      </View>
      <ScrollView style={[C.bgWhite, C.flex, C.minhFull, C.radiustop4]}>
        <LinearGradient
          style={[C.pb12, C.pl6, C.pt6]}
          colors={palette.gradientWhiteGray.colors}>
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
          <CreditCard account={account} />

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

          {/** Products*/}
          <Text style={[fonts.title1, C.m2, C.mb4]}>Products </Text>
          <FlatList
            horizontal
            data={products}
            style={C.mb30}
            keyExtractor={({icon}) => icon}
            renderItem={({item}) => <Product {...item} />}
          />
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};
