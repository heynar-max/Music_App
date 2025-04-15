import { usePlayerStore } from "@/store";
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";

interface Props {
    id: string;
    onClick: (e: React.MouseEvent) => void;  // Agregar onClick al tipo Props
}

export const PlayButton = ({ id, onClick }: Props) => {
    const {
        isPlayer,
        currentMusic,
        toggleIsPlayer,
        setCurrentMusic,
    } = usePlayerStore();

    const handleClick = (e: React.MouseEvent) => {
        onClick(e); // Ejecutar el onClick recibido
        setCurrentMusic({ playlist: id, song: null, songs: [] });
        toggleIsPlayer();
    };

    const isPlayingPlaylist = isPlayer && currentMusic?.playlist === id;

    return (
        <button className="card-meta-button" onClick={handleClick}>
            {isPlayingPlaylist ? (
                <RiPauseCircleFill className="iplay" />
            ) : (
                <RiPlayCircleFill className="iplay" />
            )}
        </button>
    );
};