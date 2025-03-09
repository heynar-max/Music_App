"use client";

import { playlists, songs as allSongs } from "@/seed/seed";
import { SongIU } from "@/components";
import Image from "next/image";
import { useEffect, useMemo } from "react";

interface AlbumDetailProps {
    albumId: string;
    onClose: () => void;
}

    // Función para convertir duración "minutos:segundos" a segundos
    const durationToSeconds = (duration: string) => {
        const [minutes, seconds] = duration.split(":").map(Number);
        return minutes * 60 + seconds;
    };

    // Función para convertir segundos a formato "horas:minutos"
    const secondsToHoursMinutes = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return hours > 0 ? `${hours} h ${minutes} min` : `${minutes} min`;
    };

export default function AlbumDetail({ albumId, onClose }: AlbumDetailProps) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const album = playlists.find((playlist) => playlist.id === albumId);


    // Se ejecuta siempre, aunque `album` sea undefined
    const albumSongs = useMemo(() => {
        return album ? allSongs.filter((song) => song.albumId === album.albumId) : [];
    }, [album]);

    const totalDuration = useMemo(() => {
        const totalSeconds = albumSongs.reduce((acc, song) => acc + durationToSeconds(song.duration), 0);
        return secondsToHoursMinutes(totalSeconds);
    }, [albumSongs]);

    if (!album) {
        return <p>Álbum no encontrado</p>;
    }

    
    
    return (
        <section className="album-detail">
            <button className="back-button" onClick={onClose}>Volver</button>
                <div className="PageMusic_container">
                    <Image 
                        className="PageMusic_img"
                        src={album.cover} 
                        alt={album.title} 
                        width={300} 
                        height={300} 
                        priority={false}
                    />
                    <div className="pageMusic_rigth">
                    <h2 className="pageMusic_h2">Álbum</h2>
                        <div>
                        <h1 className="pageMusic_h1">{album.title}</h1>
                        <p className="pageMusicP">{album.artists.join(", ")}</p>
                        <span className="pageMusic_span">{albumSongs.length} canciones</span>
                        <p className="pageMusic_span">Duración total: {totalDuration}</p>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="song-list">
                    {albumSongs.map((song) => (
                    <SongIU key={song.id} song={song} />
                    ))}
                </div>
        </section>
    );
}