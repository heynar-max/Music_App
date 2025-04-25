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
    isShuffle: boolean;
    isRepeat: boolean;
    currentMusic: CurrentMusic;
    audioElement: HTMLAudioElement | null;
    setIsPlayer: (value: boolean) => void;
    toggleIsPlayer: () => void;
    toggleShuffle: () => void;
    toggleRepeat: () => void;
    setCurrentMusic: (music: CurrentMusic) => void;
    setAudioElement: (element: HTMLAudioElement) => void;
    playNextSong: () => void;
    playPreviousSong: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
    isPlayer: false,
    isShuffle: false,
    isRepeat: false,
    currentMusic: { playlist: null, song: null, songs: [] },
    audioElement: null,

    setIsPlayer: (value) => set({ isPlayer: value }),

    toggleIsPlayer: () => {
        const { isPlayer, audioElement } = get();
        if (!audioElement) return;

        set({ isPlayer: !isPlayer });
    },

    toggleShuffle: () => set((state) => ({ isShuffle: !state.isShuffle })),
    toggleRepeat: () => set((state) => ({ isRepeat: !state.isRepeat })),
    
    setCurrentMusic: (music) => set({ currentMusic: music }),
    
    setAudioElement: (element) => set({ audioElement: element }),

    playNextSong: () => {
        const { currentMusic, audioElement, isShuffle, isRepeat } = get();
        const { songs, song } = currentMusic;

        if (!song || songs.length === 0) return;

        const currentIndex = songs.findIndex(s => s.audioUrl === song.audioUrl);

        let nextSong: Song | null = null;

        if (isRepeat) {
            nextSong = song; // repetir misma canción
        } else if (isShuffle) {
            const remainingSongs = songs.filter(s => s.audioUrl !== song.audioUrl);
            nextSong = remainingSongs[Math.floor(Math.random() * remainingSongs.length)];
        } else {
            if (currentIndex === -1 || currentIndex === songs.length - 1) {
                set({ isPlayer: false });
                return;
            }
            nextSong = songs[currentIndex + 1];
        }

        set({
            currentMusic: { ...currentMusic, song: nextSong },
            isPlayer: true
        });

        setTimeout(() => {
            audioElement?.play().catch(e => console.error("Error al reproducir:", e));
        }, 100);
    },

    playPreviousSong: () => {
        const { currentMusic, audioElement } = get();
        if (!currentMusic.song || currentMusic.songs.length === 0) return;

        const currentIndex = currentMusic.songs.findIndex(
            song => song.audioUrl === currentMusic.song?.audioUrl
        );

        if (currentIndex <= 0) return;

        const prevSong = currentMusic.songs[currentIndex - 1];
        set({
            currentMusic: { ...currentMusic, song: prevSong },
            isPlayer: true
        });

        setTimeout(() => {
            if (audioElement) {
                audioElement.play().catch(e => console.error("Error al reproducir:", e));
            }
        }, 100);
    }
    
}));