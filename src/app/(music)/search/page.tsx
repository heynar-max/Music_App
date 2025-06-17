import { SearchPage, SongIU, Title } from "@/components";
import { songs } from "@/seed/seed";


export default async function searchPage() {
    
    const sortedSongs = [...songs].sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div>
            <Title
                titlepagina="Busqueda"
                title="Escuchando todos los días"
                subtitle="Tus Favoritos te acompañan a todo lugar"
                className="mb-2 "
            />
            <SearchPage/>

            <div className="song-list">
                {sortedSongs.map((song) => (
                <SongIU 
                    key={`${song.albumId}-${song.id}`} 
                    song={song} 
                    allSongs={sortedSongs}  // Pasa todas las canciones ordenadas
                />
                ))}
                </div>
        </div>
    );
}