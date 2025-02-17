import { api } from '@/utils/api/axios/instance';

export type GetPeopleConfig = AxiosRequestConfig;

export const getPeople = async (requestConfig?: GetPeopleConfig) =>
  api.get<PeopleResponse>('/people', requestConfig?.config);
