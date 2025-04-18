"use client"

import { useEffect, useRef } from 'react';
import '../../../style/player.css'
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";
import { usePlayerStore } from '@/store/ui/usePlayerStore';
import Image from 'next/image';

export const Player = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    
    const {
        isPlayer,
        toggleIsPlayer,
        setAudioElement,
        currentMusic
    } = usePlayerStore();

    useEffect(() => {
        if (audioRef.current) {
            setAudioElement(audioRef.current);
        }
    }, [setAudioElement]);

    useEffect(() => {
        if (audioRef.current && currentMusic.song) {
            audioRef.current.src = currentMusic.song.audioUrl;
            if (isPlayer) {
                audioRef.current.play().catch(e => console.error("Error al reproducir:", e));
            } else {
                audioRef.current.pause();
            }
        }
    }, [currentMusic, isPlayer]);

    return (
        <div className="player_container">
            <div className='player_content'>
                <div className='player_image-container'>
                    {currentMusic.song ? (
                            <>
                                <Image
                                    src={currentMusic.song.image}
                                    alt={`Portada de ${currentMusic.song.title}`}
                                    width={40}
                                    height={40}
                                    className='player_image'
                                />
                                <div className='player_track-info'>
                                    <span className='player_title'>{currentMusic.song.title}</span>
                                    <span className='player_artist'>{currentMusic.song.artists}</span>
                                </div>
                            </>
                        ) : (
                            <div className='player_image-placeholder'>
                                <span></span>
                            </div>
                        )}
                </div>
                
                <div className='player_player'>
                    <button className='player_boton' onClick={toggleIsPlayer}>
                        {isPlayer ? 
                            <RiPauseCircleFill className='player_icon'/> : 
                            <RiPlayCircleFill className='player_icon' />}
                    </button>
                    <audio ref={audioRef} />
                </div>
                <div>
                    volumen..
                </div>
            </div>
        </div>
    )
}