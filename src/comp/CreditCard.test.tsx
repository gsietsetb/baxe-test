// CreditCard.test.js
import React from 'react';
import {render} from 'jest';
import CreditCard from './CreditCard';

describe('CreditCard', () => {
  const account = {
    balance: '1000',
    credit: '500',
  };

  test('renders correctly', () => {
    const {getByText} = render(<CreditCard account={account} />);

    expect(getByText('Balance')).toBeTruthy();
    expect(getByText('1000')).toBeTruthy();
    expect(getByText('500')).toBeTruthy();
  });
});
