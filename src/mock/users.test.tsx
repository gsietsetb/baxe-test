import {createUser, UserType} from './users';

const createPartialUser = (partialUser: Partial<UserType>): UserType => {
  const defaultUser: UserType = createUser();
  return {...defaultUser, ...partialUser};
};

describe('createUser', () => {
  test('should create a user with default values', () => {
    const fakeObj = {
      avatar: 'http://fake-image-url.com',
      name: 'John',
    };
    const user: UserType = createPartialUser(fakeObj);

    expect(user.avatar).toBe('http://fake-image-url.com');
    expect(user.name).toBe('John');
  });

  test('should create a user with provided values', () => {
    const inputUser: UserType = {
      avatar: 'http://custom-avatar-url.com',
      name: 'Jane',
    };

    const user: UserType = createUser(inputUser);

    expect(user.avatar).toBe('http://custom-avatar-url.com');
    expect(user.name).toBe('Jane');
  });
});
