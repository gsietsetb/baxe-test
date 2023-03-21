// user.test.js
import {createUser, UserType} from './users';
import {faker} from '@faker-js/faker';

jest.mock('./users');

describe('createUser', () => {
  test('should create a user with default values', () => {
    const fakeObj = {
      id: (faker.datatype.uuid as jest.Mock).mockReturnValue('12345'),
      avatar: (faker.image.people as jest.Mock).mockReturnValue(
        'http://fake-image-url.com',
      ),
      name: (faker.name.firstName as jest.Mock).mockReturnValue('John'),
    };

    const user: UserType = createUser(fakeObj as UserType);

    expect(user.id).toBe('12345');
    expect(user.avatar).toBe('http://fake-image-url.com');
    expect(user.name).toBe('John');
  });

  test('should create a user with provided values', () => {
    const inputUser: UserType = {
      id: '54321',
      avatar: 'http://custom-avatar-url.com',
      name: 'Jane',
    };

    const user: UserType = createUser(inputUser);

    expect(user.id).toBe('54321');
    expect(user.avatar).toBe('http://custom-avatar-url.com');
    expect(user.name).toBe('Jane');
  });
});
