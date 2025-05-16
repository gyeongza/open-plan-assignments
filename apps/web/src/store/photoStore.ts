import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PhotoDetail } from '../types';

interface PhotoStore {
  photoDetail: PhotoDetail | null;
  hasViewed: boolean;
  canAccessResult: boolean;
  setPhotoDetail: (photoDetail: PhotoDetail) => void;
  clearPhotoDetail: () => void;
  allowResultAccess: () => Promise<void>;
}

export const usePhotoStore = create<PhotoStore>()(
  persist(
    set => ({
      photoDetail: null,
      hasViewed: false,
      canAccessResult: false,
      setPhotoDetail: photoDetail => set({ photoDetail, hasViewed: true }),
      clearPhotoDetail: () => set({ photoDetail: null, hasViewed: false, canAccessResult: false }),
      allowResultAccess: async () => set({ canAccessResult: true }),
    }),
    {
      name: 'photo-storage',
    },
  ),
);
