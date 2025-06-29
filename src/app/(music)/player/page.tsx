"use client";

import { useEffect, useState } from "react";
import { usePlayerStore } from "@/store/ui/usePlayerStore";
import Image from "next/image";
import {
    RiHeart3Fill,
    RiHeartAddLine,
    RiPauseCircleFill,
    RiPlayCircleFill,
    RiSkipBackFill,
    RiSkipForwardFill,
    RiShuffleFill,
    RiRepeatOneFill,
} from "react-icons/ri";
import { useFavoriteStore } from "@/store/ui/useFavoriteStore";
import { useSession } from "next-auth/react";
import "../../../style/playermobile.css";

export default function PlayerPage() {
    const {
        currentMusic,
        isPlayer,
        toggleIsPlayer,
        playNextSong,
        playPreviousSong,
        audioElement,
        isShuffle,
        toggleShuffle,
        isRepeat,
        toggleRepeat,
    } = usePlayerStore();

    const { data: session } = useSession();
    const favorites = useFavoriteStore((state) => state.favorites);
    const addFavorite = useFavoriteStore((state) => state.addFavorite);
    const removeFavorite = useFavoriteStore((state) => state.removeFavorite);

    const [isFavorite, setIsFavorite] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const song = currentMusic.song;

    useEffect(() => {
        if (!song) return;
        const id = Number(song.id);
        setIsFavorite(favorites.includes(id));
    }, [song, favorites]);

    useEffect(() => {
        if (!audioElement) return;

        const update = () => {
        setCurrentTime(audioElement.currentTime);
        setDuration(audioElement.duration || 0);
        };

        audioElement.addEventListener("timeupdate", update);
        audioElement.addEventListener("loadedmetadata", update);

        return () => {
        audioElement.removeEventListener("timeupdate", update);
        audioElement.removeEventListener("loadedmetadata", update);
        };
    }, [audioElement]);

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!audioElement) return;
        const newTime = parseFloat(e.target.value);
        audioElement.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handleFavorite = async () => {
        if (!song) return;
        const songId = Number(song.id);

        if (!session?.user) return;

        if (isFavorite) {
        await fetch(`/api/favorite-song/${songId}`, { method: "DELETE" });
        removeFavorite(songId);
        setIsFavorite(false);
        } else {
        await fetch(`/api/favorite-song/${songId}`, { method: "POST" });
        addFavorite(songId);
        setIsFavorite(true);
        }
    };

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    };

    if (!song) return <div style={{ padding: "2rem" }}>No hay canción activa</div>;

    return (
        <div className="player-full-page">
        {/* Imagen */}
        <div className="player-full-image">
            <Image
            src={song.image}
            alt={song.title}
            width={400}
            height={400}
            className=""
            />
        </div>

        {/* Info */}
        <div className="player-full-info">
            <h1 className="player-full-title">{song.title}</h1>
            <p className="player-full-artists">{song.artists}</p>
        </div>

        {/* Progreso */}
        <div className="player-full-progress">
            <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            />
            <div className="player-full-time">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
            </div>
        </div>

        {/* Controles */}
        <div className="player-full-controls">
            <button onClick={toggleShuffle} title="Modo aleatorio">
            <RiShuffleFill
                size={24}
                color={isShuffle ? "#f9bc73" : "black"}
            />
            </button>

            <button onClick={playPreviousSong} title="Anterior">
            <RiSkipBackFill size={30} />
            </button>

            <button onClick={toggleIsPlayer} title="Play/Pausa">
            {isPlayer ? (
                <RiPauseCircleFill size={60} />
            ) : (
                <RiPlayCircleFill size={60} />
            )}
            </button>

            <button onClick={playNextSong} title="Siguiente">
            <RiSkipForwardFill size={30} />
            </button>

            <button onClick={toggleRepeat} title="Repetir">
            <RiRepeatOneFill
                size={24}
                color={isRepeat ? "#f9bc73" : "black"}
            />
            </button>
        </div>

        {/* Favorito */}
        <div className="player-full-favorite">
            <button onClick={handleFavorite}>
            {isFavorite ? (
                <RiHeart3Fill size={28} color="black" />
            ) : (
                <RiHeartAddLine size={28} />
            )}
            </button>
        </div>
        </div>
    );
}