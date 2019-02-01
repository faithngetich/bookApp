/**
 * Created by adebayooluwadamilola on 2/1/19.
 */
import AuthStore from '../authentication';

jest.mock('../../../services/authentication.js');

describe('Authentication Store', () => {
  const state = {
    isLoggedIn: false,
    user: {},
  };

  const user = {
    name: 'Test_01',
  };

  describe('Authentication Getters', () => {
    test('should return user data', () => {
      const response = AuthStore.getters.getUserData(state);
      expect(response).toEqual(state.user);
    });

    test('should return logged in status', () => {
      const response = AuthStore.getters.getIsLoggedIn(state);
      expect(response).toEqual(state.isLoggedIn);
    });
  });

  describe('Authentication Mutations', () => {
    test('should set user data', () => {
      AuthStore.mutations.setUserData(state, user);
      expect(state.user).toEqual(user);
    });

    xtest('should set user logged in status', () => {
      // TODO for faith
    });
  });

  describe('Authentication Actions', () => {
    xtest('make api call to fire-base', () => {

    });
  })

});
