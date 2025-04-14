"use client"

import { useRef, useState } from 'react';
import '../../../style/player.css'
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";

export const Player = () => {

    const [isPlayer, setIsPlayer] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleClick = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlayer) {
            audio.pause();
        } else {
            audio.src = '/music/5/20.mp3'; // OJO: No uses /public en el path
            audio.play();
        }
        setIsPlayer(!isPlayer);
    };

    return (
        <div className="player_container">
            <div className='player_content'>
                <div>
                    imagen...
                </div>
                <div className='player_player'>
                    <button className='player_boton' onClick={handleClick}>
                        {isPlayer ? <RiPauseCircleFill className='player_icon'/> : <RiPlayCircleFill className='player_icon' /> }
                    </button>
                    {/* Aquí asigna la referencia al elemento <audio> */}
                    <audio ref={audioRef} />
                </div>
                <div>
                    volumen...
                </div>
            </div>
            
        </div>
    )
}