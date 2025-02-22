"use client";

import { useState } from "react";
import { AlbumIU,  CardArtist,  SongIU, Title } from "@/components";
import { RiSearchLine } from "react-icons/ri";
import { playlists, songs } from "@/seed/seed";



export default function Home() {
  // Estado para manejar la página activa
  const [activePage, setActivePage] = useState("description");

  return (
    <>
      <Title
        titlepagina="Home"
        title="Escuchando todos los días"
        subtitle="Explora millones de música según tu gusto"
        className="mb-2"
      />

      {/* Buscador */}
      <section className="search">
        <div className="search-inner">
          <button className="search-button">
            <RiSearchLine className="ai-search" />
          </button>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar Canción"
          />
        </div>
      </section>

      {/* Barra de navegación */}
      <nav className="navigation">
        <button
          onClick={() => setActivePage("description")}
          className={`navigation-item ${activePage === "description" ? "active" : ""}`}
        >
          <h1 className="link_title">Descripción</h1>
        </button>
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
      </nav>

      {/* Sección donde se mostrará el contenido dinámico */}
      <div className="content">
        {activePage === "description" && <DescriptionPage />}
        {activePage === "song" && <SongPage />}
        {activePage === "album" && <AlbumPage />}
        {activePage === "artist" && <ArtistPage />}
      </div>
    </>
  );
}

// Componentes para cada página
function DescriptionPage() {
  return (
    <div>
      <h1>Descripción</h1>
      <p>Esta es la página de descripción.</p>
    </div>
  );
}

function SongPage() {

  const sortedSongs = [...songs].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="song-list">
      {/* Mapear las canciones ordenadas */}
      {sortedSongs.map((song) => (
        <SongIU key={`${song.albumId}-${song.id}`} song={song} />
      ))}
    </div>
  );
}

function AlbumPage() {
  return (
    <div className="cards__card">
      {playlists.map((playlist, index) => (
        <AlbumIU key={playlist.id} playlist={playlist} index={index} />
      ))}
    </div>
  );
}

function ArtistPage() {
  return (
    <div className="cards__card">
      {playlists.map((playlist, index) => (
        <CardArtist key={playlist.id} playlist={playlist} index={index} />
      ))}
    </div>
  );
}