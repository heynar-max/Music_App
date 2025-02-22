"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { songs as allSongs } from "@/seed/seed"; // Importar todas las canciones
import { Song } from "@/seed/types";
import { RiPlayCircleFill } from "react-icons/ri";

const MAX_ARTISTS_LENGTH = 20; // Longitud máxima antes de truncar

interface Playlist {
    id: string;
    cover: string;
    title: string;
    artists: string[];
    albumId: number;
}

interface AlbumIUProps {
    playlist: Playlist ; // Aceptar playlist como null
    index: number;
}

export const AlbumIU: React.FC<AlbumIUProps> = ({ playlist, index }) => {
  // Llamar a los Hooks siempre en el mismo orden
  const [songs, setSongs] = useState<Song[]>([]); // Especificar el tipo Song[]


    const { id, cover, title, artists, albumId } = playlist;

useEffect(() => {
      // Filtrar las canciones por albumId
    const filteredSongs = allSongs.filter((song) => song.albumId === albumId);
    setSongs(filteredSongs);
}, [albumId]);
    
    const isEvenIndex = index % 2 === 0;
    const playListSongs = songs.filter((song) => song.albumId === albumId);

  // Función para truncar el texto si es demasiado largo
    const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

    const artistsString = truncateText(artists.join(", "), MAX_ARTISTS_LENGTH);

    return (
    <article
        className="card"
        style={
            {
            "--rotation": `${index % 2 === 0 ? "5deg" : "-5deg"}`,
            } as React.CSSProperties
        }
        >
        <div className={`card-inner ${isEvenIndex ? "even" : "odd"}`}>
            <span
            className="card-pin"
            style={{
                top: "20px",
                left: index % 2 === 0 ? "20px" : "calc(50% - 6px)",
                transform: index % 2 === 0 ? "rotate(-5deg)" : "rotate(0)",
            }}
            ></span>

            <div className="card-image">
            <Link href={`/${id}`} className="card_link">
                <Image
                src={cover}
                alt={artists.join(", ")}
                width={200}
                height={200}
                priority
                />
            </Link>
            </div>

            <div className="card-content">
            <div className="card-meta">
                <span className="card-meta-number">
                {playListSongs.length} canciones
                </span>
                <div className="card-meta-button">
                <PlayButton id={id} />
                </div>
            </div>
            <h2 className="card-title">{artistsString}</h2>
            <div className="card-meta-ti">
                <h2 className="card-meta-title">{title}</h2>
            </div>
            </div>
        </div>
        </article>
    );
};

// Componente de botón de reproducción (simulado)
const PlayButton = ({ id }: { id: string }) => {
    return <button onClick={() => console.log(`Reproducir ${id}`)}><RiPlayCircleFill className="iplay" /></button>;
};