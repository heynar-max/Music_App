"use client"

import { useEffect, useRef, useState } from 'react';
import '../../../style/player.css'
import { RiPlayCircleFill, RiPauseCircleFill, RiSkipBackFill, RiSkipForwardFill} from "react-icons/ri";
import { usePlayerStore } from '@/store/ui/usePlayerStore';
import Image from 'next/image';
import { IoVolumeHigh, IoVolumeMute } from 'react-icons/io5';

export const Player = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [volume, setVolume] = useState(0.7);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    
    const {
        isPlayer,
        toggleIsPlayer,
        setAudioElement,
        currentMusic,
        playNextSong,
        playPreviousSong,
    } = usePlayerStore();

    // Configuración inicial del audio
    useEffect(() => {
        if (!audioRef.current) return;

        const audio = audioRef.current;
        setAudioElement(audio);
        audio.volume = volume;

        // Actualizar tiempo actual
        const updateTime = () => setCurrentTime(audio.currentTime);
        // Actualizar duración cuando esté disponible
        const updateDuration = () => {
            if (!isNaN(audio.duration)) {
                setDuration(audio.duration);
            }
        };

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('durationchange', updateDuration);
        audio.addEventListener('ended', playNextSong);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('durationchange', updateDuration);
            audio.removeEventListener('ended', playNextSong);
        };
    }, [setAudioElement, playNextSong, volume]);

    // Manejo de reproducción
    useEffect(() => {
        if (!audioRef.current || !currentMusic.song) return;

        audioRef.current.src = currentMusic.song.audioUrl;

        if (isPlayer) {
            audioRef.current.play().catch(e => console.error("Error al reproducir:", e));
        } else {
            audioRef.current.pause();
        }
    }, [currentMusic, isPlayer]);

    // Manejo de volumen 
    useEffect(() => {
        if (!audioRef.current) return;
        audioRef.current.volume = isMuted ? 0 : volume;
    }, [isMuted, volume]);


    // Control de volumen
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        setIsMuted(newVolume === 0);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            const newMutedState = !isMuted;
            setIsMuted(newMutedState);
            audioRef.current.volume = newMutedState ? 0 : volume;
        }
    };

    // Control de progreso
    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!audioRef.current) return;
        const newTime = parseFloat(e.target.value);
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    // Formatear tiempo (mm:ss)
    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="player_container">
            <div className='player_content'>
                <div className='player_content_web'>
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
                
                <div className='player_controls'>
                    <div className='player_progress-container'>
                        <span className='player_time'>{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            min="0"
                            max={duration || 100}
                            value={currentTime}
                            onChange={handleProgressChange}
                            className='player_progress'
                            disabled={!currentMusic.song}
                            style={{
                                background: duration
                                ? `linear-gradient(to right, var(--c-gray-900) 0%, var(--c-gray-900) ${(currentTime / duration) * 100}%, #f9bc73 ${(currentTime / duration) * 100}%)`
                                : undefined
                            }}
                        />
                        <span className='player_time'>{formatTime(duration)}</span>
                    </div>
                    
                    <div className='player_buttons'>
                    <button className='player_boton_next' onClick={playPreviousSong}><RiSkipBackFill /></button>
                        <button className='player_boton' onClick={toggleIsPlayer}>
                            {isPlayer ? 
                                <RiPauseCircleFill className='player_icon'/> : 
                                <RiPlayCircleFill className='player_icon' />}
                        </button>
                        <button className='player_boton_next' onClick={playNextSong}><RiSkipForwardFill /></button>
                    </div>
                </div>
                
                <div className='player_volume-controls'>
                    <button onClick={toggleMute} className='player_volume-button'>
                        {isMuted || volume === 0 ? 
                            <IoVolumeMute className='player_icon_volumen' /> : 
                            <IoVolumeHigh className='player_icon_volumen' />}
                            
                    </button>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className='player_volume-slider'
                        style={{
                            background: `linear-gradient(to right, var(--c-gray-900) 0%, var(--c-gray-900) ${(isMuted ? 0 : volume) * 100}%, #f9bc73 ${(isMuted ? 0 : volume) * 100}%)`
                        }}
                    />
                </div>
                </div>
                
                <div className='player_progress-container_mobile'>
                        <span className='player_time_mobile'>{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            min="0"
                            max={duration || 100}
                            value={currentTime}
                            onChange={handleProgressChange}
                            className='player_progress'
                            disabled={!currentMusic.song}
                            style={{
                                background: duration
                                ? `linear-gradient(to right, var(--c-gray-900) 0%, var(--c-gray-900) ${(currentTime / duration) * 100}%, #f9bc73 ${(currentTime / duration) * 100}%)`
                                : undefined
                            }}
                        />
                        <span className='player_time_mobile'>{formatTime(duration)}</span>
                    </div>
                <audio ref={audioRef} />
                
            </div>
        </div>
    )
}