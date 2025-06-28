import { usePlayerStore } from "@/store";
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";
import { playlists, songs } from "@/seed/seed";
import { Song as PrismaSong } from "@prisma/client";

interface Props {
    id: string;
    onClick: (e: React.MouseEvent) => void;
    songId?: string;
    customSongs?: PrismaSong[];
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
        onClick(e);

        const playlistSongs = customSongs
            ? customSongs.map(s => ({
                id: String(s.id),
                title: s.title,
                artists: Array.isArray(s.artists) ? s.artists.join(', ') : s.artists,
                image: s.image,
                audioUrl: s.audioUrl,
                duration: s.duration ? Number(s.duration) : undefined
            }))
            : (() => {
                const playlist = playlists.find(p => p.id === id);
                if (!playlist) return [];
                return songs
                    .filter(s => s.albumId === playlist.albumId)
                    .map(s => ({
                        id: String(s.id),
                        title: s.title,
                        artists: Array.isArray(s.artists) ? s.artists.join(', ') : s.artists,
                        image: s.image,
                        audioUrl: s.audioUrl,
                        duration: s.duration ? Number(s.duration) : undefined
                    }));
            })();

        if (playlistSongs.length === 0) return;

        const songToPlay = songId
            ? playlistSongs.find(s => s.id === songId)
            : playlistSongs[0];

        if (!songToPlay) return;

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