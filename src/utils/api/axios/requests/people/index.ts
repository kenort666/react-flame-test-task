import { api } from '../../instance';

export type GetPeopleConfig = AxiosRequestConfig;

export const getPeople = async (requestConfig?: GetPeopleConfig) =>
  api.get('/people', requestConfig?.config);
