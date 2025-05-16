import { api } from '../lib/axios';
import type { PhotoGetResponse } from '../types';

export const photoApi = {
  getPhotoDetail: async (id: string) => {
    const response = await api.get<PhotoGetResponse>(`id/${id}/info`);
    return response.data;
  },
};
