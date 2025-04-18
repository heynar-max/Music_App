import { create } from 'zustand';

interface CurrentMusic {
    playlist: string | null;
    song: string | null;
    songs: string[];
}

interface PlayerState {
    isPlayer: boolean;
    currentMusic: CurrentMusic;
    audioElement: HTMLAudioElement | null;
    setIsPlayer: (value: boolean) => void;
    toggleIsPlayer: () => void;
    setCurrentMusic: (music: CurrentMusic) => void;
    setAudioElement: (element: HTMLAudioElement) => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
    isPlayer: false,
    currentMusic: { playlist: null, song: null, songs: [] },
    audioElement: null,

    setIsPlayer: (value) => set({ isPlayer: value }),

    toggleIsPlayer: () => {
        const { isPlayer, audioElement } = get();
        if (!audioElement) return;

        set({ isPlayer: !isPlayer });
    },
    
    setCurrentMusic: (music) => set({ currentMusic: music }),
    
    setAudioElement: (element) => set({ audioElement: element }),
}));