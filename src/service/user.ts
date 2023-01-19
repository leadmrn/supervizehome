import axios from 'axios';
import { store } from '../redux/store';
import { login } from '../redux/userSlice';

interface userInfoLogin {
  identifier: string;
  password: string;
}

export const userService = {
  login: async (userInfo: userInfoLogin) => {
    const api = `https://fast-citadel-34836.herokuapp.com/api/auth/local`;
    console.log(userInfo);
    await axios
      .post(api, userInfo)
      .then((resp) => {
        console.log(resp.data);
        store.dispatch(login(resp.data));
      })
      .catch((e) => {
        console.log(e);
        throw new Error('Une erreur est survenue.');
      });
  },
};
