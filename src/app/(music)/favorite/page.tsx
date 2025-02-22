import {  SongIU, Title } from "@/components";
import { songs } from "@/seed/seed";


export default async function favoritePage() {

    const sortedSongs = [...songs].sort((a, b) => a.title.localeCompare(b.title));
    return (
        <div>
            <Title
                    titlepagina="Favoritos"
                    title="Escuchando todos los días"
                    subtitle="Tus Favoritos te acompañan a todo lugar"
                    className="mb-2"
            />
            <div className="page_favorite">
                {/* Mapear las canciones ordenadas */}
      {sortedSongs.map((song) => (
        <SongIU key={`${song.albumId}-${song.id}`} song={song} />
      ))}
            </div>
        </div>
    );
}