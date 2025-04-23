"use client"

import Image from 'next/image'
import React from 'react'
import { RiPauseCircleFill, RiPlayCircleFill } from 'react-icons/ri'
import { usePlayerStore } from '@/store/ui/usePlayerStore'

interface Song {
    id: number;
    title: string;
    image: string;
    artists: string;
    duration: string;
    audioUrl: string;
}

interface SongIUProps {
    song: Song;
    allSongs: Song[];
}

export const SongIU: React.FC<SongIUProps> = ({ song, allSongs }) => {
    const { title, image, artists, duration, audioUrl } = song;
    
    const {
        currentMusic,
        isPlayer,
        setCurrentMusic,
        setIsPlayer
    } = usePlayerStore();

    const playAudio = () => {
        if (currentMusic.song?.audioUrl !== audioUrl) {
            setCurrentMusic({
                playlist: null,
                song: {
                    id: song.id.toString(),
                    title,
                    artists,
                    image,
                    audioUrl,
                },
                songs: allSongs.map(s => ({  // Usa allSongs en lugar de sortedSongs
                    id: s.id.toString(),
                    title: s.title,
                    artists: s.artists,
                    image: s.image,
                    audioUrl: s.audioUrl
                }))
            });
            setIsPlayer(true);
        } else {
            setIsPlayer(!isPlayer);
        }
    };
    
    const isCurrentSongPlaying = currentMusic.song?.audioUrl === audioUrl && isPlayer;
    
    return (
        <section className="card-container">
            <article className="card horizontal">
                <div className="card-inner">
                    <span className="card-pin simple"></span>
                    <div className="card-image">
                        <Image
                            src={image}
                            alt={artists}
                            width={100}
                            height={100}
                            priority
                        />
                    </div>
                    <div className="card-content">
                        <div className="card-meta">
                            <span className="card-meta-artist">
                                {artists}
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