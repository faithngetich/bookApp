/**
 * Created by adebayooluwadamilola on 2/1/19.
 */
import AuthStore from '../authentication';
import FlushPromises from 'flush-promises';

jest.mock('../../../services/authentication.js');

describe('Authentication Store', () => {
  const state = {
    isLoggedIn: false,
    user: {},
  };

  const user = {
    name: 'Test_01',
  };

  const userPayLoad = {
    email: 'test@test.com',
    password: 'test12345',
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

    test('should set user logged in status', () => {
      AuthStore.mutations.setIsLoggedIn(state);
      expect(state.isLoggedIn).toEqual(true);
    });
  });

  describe('Authentication Actions', () => {
    test('make api call to fire-base', async () => {
      expect.assertions(1);

      const context = {
        commit: jest.fn(),
      };

      AuthStore.actions.actionRegisterUser(context, userPayLoad);
      await FlushPromises();
      expect(context.commit).toHaveBeenCalledWith('setUserData', {});

    });
  });

});
