import { usePlayerStore } from "@/store";
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";

interface Props {
    id: string;
    onClick: (e: React.MouseEvent) => void;  // Agregar onClick al tipo Props
    songId?: string; // Nuevo prop opcional para identificar canciones individuales
}

export const PlayButton = ({ id, onClick, songId }: Props) => {
    const {
        isPlayer,
        currentMusic,
        toggleIsPlayer,
        setCurrentMusic,
        setIsPlayer,
    } = usePlayerStore();

    const handleClick = (e: React.MouseEvent) => {
        onClick(e); // Ejecutar el onClick recibido del padre
        
        // Si estamos en la misma playlist/canción, solo alternar play/pause
        if (currentMusic.playlist === id && (!songId || currentMusic.song === songId)) {
            toggleIsPlayer();
        } else {
            // Cambiar a nueva música y reproducir
            setCurrentMusic({ 
                playlist: id, 
                song: songId || null, 
                songs: [] 
            });
            setIsPlayer(true);
        }
    };

    const isPlayingPlaylist = currentMusic.playlist === id && 
                            (!songId || currentMusic.song === songId);

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