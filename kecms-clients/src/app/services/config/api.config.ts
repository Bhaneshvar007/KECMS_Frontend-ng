import { ENVIRONMENT } from './environment.config';

const BASE_URL = ENVIRONMENT.BASE_API_URL;
export const API = {

  AUTH: {
    LOGIN: `${BASE_URL}/Login`
  },

  USER: {
    GET_ALL: `${BASE_URL}/user`,
    GET_BY_ID: (id: number) => `${BASE_URL}/user/${id}`,
    CREATE: `${BASE_URL}/user`,
    UPDATE: `${BASE_URL}/user`,
    DELETE: (id: number) => `${BASE_URL}/user/${id}`
  },


  ROLE: {
    GET_ALL: `${BASE_URL}/Roles`,
    GET_BY_ID: (id: number) => `${BASE_URL}/Roles/${id}`,
    CREATE: `${BASE_URL}/Roles`,
    UPDATE: `${BASE_URL}/Roles`,
    DELETE: (id: number) => `${BASE_URL}/Roles/${id}`
  }

};
