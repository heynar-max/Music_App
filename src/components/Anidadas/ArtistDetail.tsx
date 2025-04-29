import { playlists, songs } from "@/seed/seed";
import { SongIU } from "./SongIU"
import Image from "next/image";
import { durationToSeconds, secondsToHoursMinutes } from "@/helpers/timeUtils";
import { useMemo } from "react";
import { usePlayerStore } from "@/store";

interface ArtistDetailProps {
    artist: string;
    onBack: () => void;
  }
  
export  const ArtistDetail: React.FC<ArtistDetailProps> = ({ artist, onBack }) => {
    // Filtrar canciones que incluyan al artista
    const artistSongs = songs.filter((song) => song.artists?.includes(artist)) || [];

    // Calcular la duración total de las canciones del artista
    const totalDuration = useMemo(() => {
      const totalSeconds = artistSongs.reduce((acc, song) => acc + durationToSeconds(song.duration), 0);
      return secondsToHoursMinutes(totalSeconds);
  }, [artistSongs])
    
    // Obtener imagen del artista
  const artistPlaylist = playlists.find((playlist) => 
    playlist.artists?.includes(artist)
  );

  // Funcionalidad del reproductor
  const { setCurrentMusic, setIsPlayer } = usePlayerStore();

  const handlePlayAll = () => {
    if (artistSongs.length > 0) {
      setCurrentMusic({
        playlist: `artist-${artist}`,
        song: artistSongs[0],
        songs: artistSongs,
      });
      setIsPlayer(true);
    }
  };

  
    return (
      <div className="album-detail">
        <button className="back-button" onClick={onBack}>
          Volver
        </button>
        <div className="PageMusic_container">
        {artistPlaylist ? (
        <Image 
          className="PageMusic_img"
          src={artistPlaylist.cover} 
          alt={`Imagen de ${artist}`} 
          width={300} 
          height={300} 
          priority={false}
        />
      ) : (
        <Image 
          className="PageMusic_img"
          src="/default-image.jpg" 
          alt="Imagen no disponible" 
          width={300} 
          height={300} 
          priority={false}
        />
      )}
      <div className="pageMusic_rigth">
      <h1 className="pageMusic_h1">Canciones de <span className="pageMusic-span">{artist}</span></h1>
            <p className="pageMusic_span">Duración total: {totalDuration}</p>
            
      </div>  
      </div>

        <div className="songs-list">
        {artistSongs.length > 0 ? (
          artistSongs.map((song) => (
            <SongIU
              key={`${song.id}-${song.title}`}
              song={song}
              allSongs={artistSongs}
            />
          ))
        ) : (
          <div className="no-songs-message">
            <p>No hay canciones disponibles para este artista.</p>
            <button 
              className="secondary-button"
              onClick={onBack}
            >
              Explorar otros artistas
            </button>
          </div>
        )}
      </div>
    </div>
  );
};