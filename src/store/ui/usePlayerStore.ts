import { create } from 'zustand';

interface CurrentMusic {
    playlist: string | null;
    song: string | null;
    songs: string[];
}

interface PlayerState {
    isPlayer: boolean;
    currentMusic: CurrentMusic;
    setIsPlayer: (value: boolean) => void;
    toggleIsPlayer: () => void;
    setCurrentMusic: (music: CurrentMusic) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
    isPlayer: false,
    currentMusic: { playlist: null, song: null, songs: [] },
    setIsPlayer: (value) => set({ isPlayer: value }),
    toggleIsPlayer: () => set((state) => ({ isPlayer: !state.isPlayer })),
    setCurrentMusic: (music) => set({ currentMusic: music }),
}));