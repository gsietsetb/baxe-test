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
    icon: 'medal',
    title: '1 More Step to Higher Account Level',
    descr: 'Easy Pay & Free Fee',
  },
];
export const products = [
  {
    icon: 'credit-card',
    title: 'Earn Interest',
    descr: 'With Your BSC',
    bgImg:
      'https://images.contentstack.io/v3/assets/blt38dd155f8beb7337/blt06e3f442d21cbbc4/6231356fbb9a2416314e7a98/Position-trading.jpg',
    name: 'Savings account',
  },
  {
    icon: 'chart-bar',
    bgImg:
      'https://purepng.com/public/uploads/large/purepng.com-gold-coinsflatcoinsroundmetalgoldclipart-1421526479774onbql.png',
    title: '1200.00',
    balance: '+ € 298.00',
    descr: '€ 1,108.00',
    name: 'BMC',
    grad: palette.gradientPurpleOrange.colors,
  },
];
