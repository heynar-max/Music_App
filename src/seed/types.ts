// Definición de interfaces
export interface Playlist {
    id: string;
    albumId: number;
    title: string;
    cover: string;
    artists: string[];
    genre?: string;
}

export interface Song {
    id: number;
    albumId: number;
    title: string;
    image: string;
    artists: string[];
    album: string;
    duration: string;
    genre?: string;
    audioUrl: string;
}