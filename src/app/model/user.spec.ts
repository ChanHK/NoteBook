import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('abc', '123', 0)).toBeTruthy();
  });
});
