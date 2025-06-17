"use client";



import { useEffect, useState } from "react";
import {  AlbumIU, ArtistDetail, CardArtist,  SearchPage,  SongIU, Title } from "@/components";
import { playlists, songs } from "@/seed/seed";
import AlbumDetail from "@/components/Anidadas/AlbumDetail";
import Link from "next/link";
import FavoritePage from "./favorite/page";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";




export default function Home() {
  // Estado para manejar la página activa
  const [activePage, setActivePage] = useState("song");
  const [selectedAlbumId, setSelectedAlbumId] = useState<string | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);

  return (
    <>
      <Title
        titlepagina="Home"
        title="Escuchando todos los días"
        subtitle="Explora millones de música según tu gusto"
        className="mb-2"
      />

      {/* Buscador */}
      <section >
        <Link href='/search'>
          <SearchPage/>
        </Link>
        
      </section>

      {/* Barra de navegación */}
      <nav className="navigation">
        
        <button
          onClick={() => setActivePage("song")}
          className={`navigation-item ${activePage === "song" ? "active" : ""}`}
        >
          <h1 className="link_title">Canciones</h1>
        </button>
        <button
          onClick={() => setActivePage("album")}
          className={`navigation-item ${activePage === "album" ? "active" : ""}`}
        >
          <h1 className="link_title">Álbum</h1>
        </button>
        <button
          onClick={() => setActivePage("artist")}
          className={`navigation-item ${activePage === "artist" ? "active" : ""}`}
        >
          <h1 className="link_title">Artistas</h1>
        </button>
        <button
          onClick={() => setActivePage("favorite")}
          className={`navigation-item ${activePage === "favorite" ? "active" : ""}`}
        >
          <h1 className="link_title">Me gusta</h1>
        </button>
      </nav>

      {/* Sección donde se mostrará el contenido dinámico */}
      <div className="content">
        {activePage === "favorite" && <FavoritoPage />}
        {activePage === "song" && <SongPage />}
        {activePage === "album" && (
          selectedAlbumId ? (
            <AlbumDetail albumId={selectedAlbumId} onClose={() => setSelectedAlbumId(null)} />
          ) : (
            <AlbumPage onAlbumClick={setSelectedAlbumId} />
          )
        )}
        {activePage === "artist" && (
          selectedArtist ? (
            <ArtistDetail artist={selectedArtist} onBack={() => setSelectedArtist(null)} />
          ) : (
            <ArtistPage onArtistClick={setSelectedArtist} />
          )
        )}
      </div>
    </>
  );
}

// Componentes para cada página
function FavoritoPage() {
const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/auth/login?redirectTo=/favorite");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  if (!session?.user) {
    return null; // No mostrar nada mientras redirige
  }

  return (
    <div className="favorite-list">
      <FavoritePage/>
    </div>
  );
}

function SongPage() {
  const sortedSongs = [...songs].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="song-list">
      {sortedSongs.map((song) => (
        <SongIU 
          key={`${song.albumId}-${song.id}`} 
          song={song} 
          allSongs={sortedSongs}  // Pasa todas las canciones ordenadas
        />
      ))}
    </div>
  );
}

function AlbumPage({ onAlbumClick }: { onAlbumClick: (id: string) => void }) {
  return (
    <div className="cards__card">
      {playlists.map((playlist, index) => (
        <AlbumIU key={playlist.id} playlist={playlist} index={index} onClick={() => onAlbumClick(playlist.id)} />
      ))}
    </div>
  );
}

function ArtistPage({ onArtistClick }: { onArtistClick: (artist: string) => void }) {
  return (
    <div className="cards__card">
      {Array.from(new Set(playlists.flatMap((playlist) => playlist.artists))).map((artist, index) => (
        <div key={artist} onClick={() => onArtistClick(artist)}>
          <CardArtist playlist={playlists.find((p) => p.artists.includes(artist))!} index={index} />
        </div>
      ))}
    </div>
  );
}