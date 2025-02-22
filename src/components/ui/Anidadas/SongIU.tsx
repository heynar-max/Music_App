"use client"

import { useMusicStore } from '@/store/ui/useMusicStore';
import Image from 'next/image'
import React, { useRef } from 'react'
import { RiPauseCircleFill, RiPlayCircleFill } from 'react-icons/ri'

interface Song {
    id: number;
    title: string;
    image: string;
    artists: string[];
    duration: string;
    audioUrl: string;
}

interface SongIUProps {
    song: Song;
}

    export const SongIU: React.FC<SongIUProps> = ({ song }) => {
        const { id, title, image, artists, duration, audioUrl } = song;
    
        const audioRef = useRef<HTMLAudioElement>(null);
    
        // Usa Zustand para manejar el estado
        const { currentMusic, isPlayer, setCurrentMusic, toggleIsPlayer } = useMusicStore();
    
        const playAudio = () => {
        if (currentMusic.songId !== id) {
            setCurrentMusic({
            songs: currentMusic.songs,
            playlist: currentMusic.playlist,
            songId: id,
            });
        }
        toggleIsPlayer();
    
        // Controlar la reproducción del audio
        if (audioRef.current) {
            if (isCurrentSongPlaying) {
            audioRef.current.pause();
            } else {
            audioRef.current.play();
            }
        }
        };
    
        const isCurrentSongPlaying = currentMusic.songId === id && isPlayer;
        return (
            <section className="card-container">
        <article className="card horizontal">
            <div className="card-inner">
            <span className="card-pin simple"></span>
            <div className="card-image">
                <Image
                src={image}
                alt={artists.join(", ")}
                width={100} // Ajusta el tamaño según tus necesidades
                height={100}
                priority
                />
            </div>
            <div className="card-content">
                <div className="card-meta">
                <span className="card-meta-artist">
                    {artists.join(", ")}
                </span>
                <button className="card-meta-button" onClick={playAudio}>
                    {isCurrentSongPlaying ? (
                    <RiPauseCircleFill className="player_icon" />
                    ) : (
                    <RiPlayCircleFill className="player_icon" />
                    )}
                </button>
                </div>
                <h2 className="card-title">
                {title}
                <span className="card-time">{duration}</span>
                </h2>
            </div>
            <span className="card-pin simple"></span>
            </div>
            <audio ref={audioRef} src={audioUrl}></audio>
        </article>
        </section>
    )
}
