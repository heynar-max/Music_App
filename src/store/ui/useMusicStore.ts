import { create } from 'zustand';
import { Song, Playlist } from '@/seed/types'; // Importar las interfaces

interface MusicState {
    currentMusic: {
        songs: Song[]; // Especificar el tipo Song[]
        playlist: Playlist | null; // Especificar el tipo Playlist o null
        songId: number | null;
    };
    isPlayer: boolean;
    setCurrentMusic: (currentMusic: { songs: Song[]; playlist: Playlist | null; songId: number }) => void;
    toggleIsPlayer: () => void;
    }

    export const useMusicStore = create<MusicState>((set) => ({
    currentMusic: {
        songs: [],
        playlist: null,
        songId: null,
    },
    isPlayer: false,
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
    toggleIsPlayer: () => set((state) => ({ isPlayer: !state.isPlayer })),
}));