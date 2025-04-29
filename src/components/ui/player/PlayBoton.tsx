import { usePlayerStore } from "@/store";
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";
import { playlists, songs } from "@/seed/seed"; // Importa canciones y playlists
import { Song } from "@prisma/client";

interface Props {
    id: string;
    onClick: (e: React.MouseEvent) => void;
    songId?: string;
    customSongs?: Song[];
}

export const PlayButton = ({ id, onClick, songId, customSongs }: Props) => {
    const {
        isPlayer,
        currentMusic,
        toggleIsPlayer,
        setCurrentMusic,
        setIsPlayer,
    } = usePlayerStore();

    const handleClick = (e: React.MouseEvent) => {
        onClick(e); // Ejecutar el onClick recibido del padre

        const playlistSongs = customSongs
            ? customSongs.map(s => ({ ...s, id: String(s.id) }))
            : (() => {
                const playlist = playlists.find(p => p.id === id);
                if (!playlist) return [];
                return songs
                    .filter(s => s.albumId === playlist.albumId)
                    .map(s => ({ ...s, id: String(s.id) }));
            })();

        if (playlistSongs.length === 0) return;

        const songToPlay = songId
            ? playlistSongs.find(s => s.id === songId)
            : playlistSongs[0];

        if (!songToPlay) return;

        // Si estamos en la misma playlist/canción, alternar reproducción
        if (currentMusic.playlist === id && (!songId || currentMusic.song?.id === songToPlay.id)) {
            toggleIsPlayer();
            return;
        }

        setCurrentMusic({
            playlist: id,
            song: songToPlay,
            songs: playlistSongs
        });

        setIsPlayer(true);
    };

    const isPlayingPlaylist = currentMusic.playlist === id &&
        (!songId || currentMusic.song?.id === songId);

    return (
        <button className="card-meta-button" onClick={handleClick}>
            {isPlayingPlaylist && isPlayer ? (
                <RiPauseCircleFill className="iplay" />
            ) : (
                <RiPlayCircleFill className="iplay" />
            )}
        </button>
    );
};