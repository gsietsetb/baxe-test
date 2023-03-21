import {faker} from '@faker-js/faker';
import palette from '../ui/colors';

export type UserType = {
  name?: string;
  id?: string;
  avatar?: string;
};

export const createUser: (user?: UserType) => UserType = (user?: UserType) =>
  ({
    id: faker.datatype.uuid(),
    avatar: user?.avatar || faker.image.people() || faker.image.avatar(),
    name: user?.name || faker.name.firstName(),
  } as UserType);

export const cards = [
  {
    icon: 'credit-card',
    title: 'Pay Offline With BAXE Card',
    descr: 'Easy Pay & Free Fee',
  },
  {
    icon: 'police-badge',
    title: '1 More Step to Higher Account Level',
    descr: 'Easy Pay & Free Fee',
  },
];
export const products = [
  {
    icon: 'credit-card',
    title: 'Pay Offline With BAXE Card',
    descr: 'Easy Pay & Free Fee',
    name: 'Savings account',
  },
  {
    icon: 'chart-bar',
    bgImg:
      'https://purepng.com/public/uploads/large/purepng.com-gold-coinsflatcoinsroundmetalgoldclipart-1421526479774onbql.png',
    title: '1200.00',
    balance: '+ € 298.00',
    descr: 'Easy Pay & Free Fee',
    name: 'BMC',
    grad: palette.gradientPurpleOrange.colors,
  },
];
