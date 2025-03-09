"use client";

import Image from "next/image";
import { useState } from "react";

import { Playlist } from "@/seed/types";
import { RiPauseCircleFill, RiPlayCircleFill } from "react-icons/ri";

const MAX_ARTISTS_LENGTH = 20; // Longitud máxima antes de truncar


interface AlbumIUProps {
    playlist: Playlist;
    index: number;
    onClick: () => void;
}

    // Función para truncar texto
    const truncateText = (text: string, maxLength: number): string => {
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };
export const AlbumIU: React.FC<AlbumIUProps> = ({ playlist, onClick, index }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        console.log(isPlaying ? `Pausar ${playlist.title}` : `Reproducir ${playlist.title}`);
    };

    // Truncar nombres de artistas si es necesario
    const artistsString = truncateText(playlist.artists.join(", "), MAX_ARTISTS_LENGTH);
    
    return (
        <article className="card"
            onClick={onClick} style={
                {
                "--rotation": `${index % 2 === 0 ? "5deg" : "-5deg"}`,
                } as React.CSSProperties}>
            <div className={`card-inner ${index % 2 === 0 ? "even" : "odd"}`}>
            <span
                className="card-pin"
                style={{
                    top: "20px",
                    left: index % 2 === 0 ? "20px" : "calc(50% - 6px)",
                    transform: index % 2 === 0 ? "rotate(-5deg)" : "rotate(0)",
                }}
                ></span>
                <div className="card-image">
                    <Image src={playlist.cover} alt={playlist.title} width={200} height={200} priority />
                </div>
                
                    <h2 className="card-title">{playlist.title}</h2>
                <div className="card-content">
                    <div className="card-meta">
                        <button className="card-meta-button" onClick={(e) => { e.stopPropagation(); togglePlayPause(); }}>
                        {isPlaying ? <RiPauseCircleFill className="player_icon" /> : <RiPlayCircleFill className="player_icon" />}
                        </button>
                    </div>
                    <span className="card-meta-artist">{artistsString}</span>
                </div>
            </div>
        </article>
    );
};
;
