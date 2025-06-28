import { Song as SeedSong } from "@/seed/types";

// Este es el tipo que tu componente SongIU espera
export interface UISong {
    id: string;
    title: string;
    image: string;
    artists: string;
    duration: string;
    audioUrl: string;
    albumId?: number;
    album?: string;
    genre?: string;
}

export function formatSongs(songs: SeedSong[]): UISong[] {
    return songs.map((song) => ({
        ...song,
        id: String(song.id),
        artists: Array.isArray(song.artists) ? song.artists.join(", ") : song.artists,
    }));
}