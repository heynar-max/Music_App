import { create } from 'zustand';

interface Song {
    id: string;
    title: string;
    artists: string;
    image: string;
    audioUrl: string;
    duration?: number;
}

interface CurrentMusic {
    playlist: string | null;
    song: Song | null;
    songs: Song[];
}

interface PlayerState {
    isPlayer: boolean;
    currentMusic: CurrentMusic;
    audioElement: HTMLAudioElement | null;
    setIsPlayer: (value: boolean) => void;
    toggleIsPlayer: () => void;
    setCurrentMusic: (music: CurrentMusic) => void;
    setAudioElement: (element: HTMLAudioElement) => void;
    playNextSong: () => void;
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

    playNextSong: () => {
        const { currentMusic, audioElement } = get();
        if (!currentMusic.song || currentMusic.songs.length === 0) return;

        const currentIndex = currentMusic.songs.findIndex(
            song => song.audioUrl === currentMusic.song?.audioUrl
        );

        if (currentIndex === -1 || currentIndex === currentMusic.songs.length - 1) {
            // Si no hay más canciones o es la última, simplemente pausa
            set({ isPlayer: false });
            return;
        }

        const nextSong = currentMusic.songs[currentIndex + 1];
        set({
            currentMusic: {
                ...currentMusic,
                song: nextSong
            },
            isPlayer: true
        });

        // Necesitamos un pequeño retraso para asegurar que el audio element tenga la nueva URL
        setTimeout(() => {
            if (audioElement) {
                audioElement.play().catch(e => console.error("Error al reproducir:", e));
            }
        }, 100);
    },
}));