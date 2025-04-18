"use client"

import Image from 'next/image'
import React from 'react'
import { RiPauseCircleFill, RiPlayCircleFill } from 'react-icons/ri'
import { usePlayerStore } from '@/store/ui/usePlayerStore'

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
    const { title, image, artists, duration, audioUrl } = song;
    
    const {
        currentMusic,
        isPlayer,
        setCurrentMusic,
        setIsPlayer
    } = usePlayerStore();

    const playAudio = () => {
        if (currentMusic.song !== audioUrl) {
            setCurrentMusic({
                playlist: null,
                song: audioUrl,
                songs: []
            });
            setIsPlayer(true);
        } else {
            setIsPlayer(!isPlayer);
        }
    };
    
    const isCurrentSongPlaying = currentMusic.song === audioUrl && isPlayer;
    
    return (
        <section className="card-container">
            <article className="card horizontal">
                <div className="card-inner">
                    <span className="card-pin simple"></span>
                    <div className="card-image">
                        <Image
                            src={image}
                            alt={artists.join(", ")}
                            width={100}
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
            </article>
        </section>
    )
}