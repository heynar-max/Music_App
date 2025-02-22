import { Song } from "@/seed/types";


export const filterSongs = (songs: Song[], albumId: number): Song[] => {
    return songs.filter((song) => song.albumId === albumId);
};