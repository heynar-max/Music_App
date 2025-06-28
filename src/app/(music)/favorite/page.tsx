'use client';

import { SongIU, Title } from "@/components";
import { songs } from "@/seed/seed";
import { useFavoriteStore } from "@/store/ui/useFavoriteStore";

export default function FavoritePage() {
    const { favorites } = useFavoriteStore();

    // Filtrar canciones que están en favoritos
    const favoriteSongs = songs
        .filter((song) => favorites.includes(song.id))
        .sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div className="favorite-container">
            <Title
                titlepagina="Favoritos"
                title="Escuchando todos los días"
                subtitle="Tus Favoritos te acompañan a todo lugar"
                className="mb-2"
            />

            <div className="page_favorite">
                {favoriteSongs.length > 0 ? (
                    favoriteSongs.map((song) => {
                        const formattedSong = {
                        ...song,
                        id: song.id.toString(),
                        artists: Array.isArray(song.artists) ? song.artists.join(", ") : song.artists,
                        };

                        const formattedAllSongs = favoriteSongs.map((s) => ({
                        ...s,
                        id: s.id.toString(),
                        artists: Array.isArray(s.artists) ? s.artists.join(", ") : s.artists,
                        }));

                        return (
                        <SongIU
                            key={`${song.albumId}-${song.id}`}
                            song={formattedSong}
                            allSongs={formattedAllSongs}
                        />
                        );
                    })
                    ) : (
                    <div className="text-center text-gray-500 mt-8">
                        <h2 className="text-lg font-semibold mb-2">NO TIENES FAVORITOS</h2>
                        <p>Debes agregar tus canciones favoritas para verlas aquí.</p>
                    </div>
                )}
            </div>
        </div>
    );
}