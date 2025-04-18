"use client"

import { useEffect, useRef } from 'react';
import '../../../style/player.css'
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";
import { usePlayerStore } from '@/store/ui/usePlayerStore';

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
            audioRef.current.src = currentMusic.song;
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
                <div>
                    {/* Mostrar información de la canción actual */}
                    {currentMusic.song && (
                        <div className="now-playing">
                            {/* Aquí puedes mostrar la imagen y detalles de la canción */}
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
                    {/* Controles de volumen */}
                </div>
            </div>
        </div>
    )
}