import { api } from '../../../instance';

export interface GetPeopleIdParams {
  id: string;
}

export type GetPeopleIdConfig = AxiosRequestConfig<GetPeopleIdParams>;

export const getPeopleId = async ({ params, config }: GetPeopleIdConfig) =>
  api.get<PeopleInfoResponse>(`/people/${params.id}`, config);
