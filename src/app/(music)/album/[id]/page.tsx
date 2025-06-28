"use client";

import { useParams } from "next/navigation";
import { songs as allSongs, playlists } from "@/seed/seed";
import { SongIU } from "@/components";
import Image from "next/image";

export default function AlbumPage() {
    const { id } = useParams(); // Obtener el ID del álbum desde la URL
    const album = playlists.find((playlist) => playlist.id === id); // Buscar el álbum

    if (!album) {
        return <p>Álbum no encontrado</p>;
    }

    // Filtrar las canciones que pertenecen al álbum
    const albumSongs = allSongs.filter((song) => song.albumId === album.albumId);

    return (
        <section className="album-detail">
        <div className="album-header">
            <Image src={album.cover} alt={album.title} width={300} height={300} />
            <div>
            <h1>{album.title}</h1>
            <p>{album.artists.join(", ")}</p>
            <p>{albumSongs.length} canciones</p>
            </div>
        </div>

        <div className="song-list">
            {albumSongs.map((song) => (
            <SongIU
                key={song.id}
                song={{
                ...song,
                id: song.id.toString(),       // ✅ Convertir a string
                artists: song.artists.join(", ") // ✅ Si artists es string[]
                }}
                allSongs={albumSongs.map(s => ({
                ...s,
                id: s.id.toString(),
                artists: s.artists.join(", ")
                }))}
            />
            ))}
        </div>
        </section>
    );
}