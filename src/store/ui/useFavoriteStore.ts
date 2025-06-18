import { create } from 'zustand';

interface FavoriteStore {
    favorites: number[];
    setFavorites: (favorites: number[]) => void;
    addFavorite: (id: number) => void;
    removeFavorite: (id: number) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
    favorites: [],

    setFavorites: (favorites) => set({ favorites }),

    addFavorite: (id) =>
        set((state) => ({
            favorites: [...state.favorites, id],
        })),

    removeFavorite: (id) =>
        set((state) => ({
            favorites: state.favorites.filter((favId) => favId !== id),
        })),
}));