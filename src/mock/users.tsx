import {faker} from '@faker-js/faker';

export type UserType = {
  name?: string;
  id: string;
  avatar?: string;
};

export const createUser: (user?: UserType) => UserType = (user?: UserType) =>
  ({
    id: faker.datatype.uuid(),
    avatar: user?.avatar || faker.image.people() || faker.image.avatar(),
    name: user?.name || faker.name.firstName(),
  } as UserType);
