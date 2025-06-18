
import { Playlist } from '@prisma/client';
import { create } from 'zustand';
import axios from 'axios';

interface FavoriteStoreState {
    favorites: Playlist[];
    setFavorites: (favorites: Playlist[]) => void;
    fetchFavorites: () => Promise<void>;
    addFavorite: (playlist: Playlist) => Promise<void>;
    removeFavorite: (playlistId: string) => Promise<void>;
}

export const useFavoriteStore = create<FavoriteStoreState>((set) => ({
    favorites: [],

    setFavorites: (favorites) => set({ favorites }),

    fetchFavorites: async () => {
        try {
            const res = await axios.get('/api/user/favorites'); // crea endpoint GET
            set({ favorites: res.data });
        } catch (error) {
            console.error('Error fetching favorites:', error);
        }
    },

    addFavorite: async (playlist) => {
        try {
            await axios.post('/api/favorites', { playlistId: playlist.id });
            set((state) => ({
                favorites: [...state.favorites, playlist],
            }));
        } catch (error) {
            console.error('Error adding favorite:', error);
        }
    },

    removeFavorite: async (playlistId) => {
        try {
            await axios.delete('/api/favorites', { data: { playlistId } });
            set((state) => ({
                favorites: state.favorites.filter((fav) => fav.id !== playlistId),
            }));
        } catch (error) {
            console.error('Error removing favorite:', error);
        }
    },
}));