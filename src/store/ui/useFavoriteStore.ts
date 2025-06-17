import { Playlist } from '@prisma/client';
import { create } from 'zustand';


interface FavoriteStoreState {
    favorites: Playlist[];
    setFavorites: (favorites: Playlist[]) => void;
    addFavorite: (playlist: Playlist) => void;
    removeFavorite: (playlistId: string) => void;
}

export const useFavoriteStore = create<FavoriteStoreState>((set) => ({
    favorites: [],

    setFavorites: (favorites) => set({ favorites }),

    addFavorite: (playlist) =>
        set((state) => ({
        favorites: [...state.favorites, playlist],
        })),

    removeFavorite: (playlistId) =>
        set((state) => ({
        favorites: state.favorites.filter((fav) => fav.id !== playlistId),
        })),
}));