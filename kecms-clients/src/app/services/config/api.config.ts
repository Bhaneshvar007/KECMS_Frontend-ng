import { ENVIRONMENT } from './environment.config';

export const API = {
  AUTH: {
    LOGIN: `${ENVIRONMENT.BASE_API_URL}/Login`
  },

  USER: {
    GET_ALL: `${ENVIRONMENT.BASE_API_URL}/User/GetAll`
  }
};
