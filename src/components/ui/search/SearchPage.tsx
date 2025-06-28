"use client";

import React, { useState, useMemo } from "react";
import { RiSearchLine } from "react-icons/ri";
import { SongIU } from "@/components";
import { songs as seedSongs } from "@/seed/seed";
import { formatSongs } from "@/utils/formatSong";


export const SearchPage = () => {
    const [query, setQuery] = useState("");

    // Formatear las canciones del seed para que tengan artists como string y id como string
    const formattedSongs = useMemo(() => formatSongs(seedSongs), []);

    const filteredSongs = useMemo(() => {
        return formattedSongs.filter((song) =>
            song.title.toLowerCase().includes(query.toLowerCase()) ||
            song.artists.toLowerCase().includes(query.toLowerCase())
        );
    }, [formattedSongs, query]);

    const sortedSongs = useMemo(() => {
        return [...filteredSongs].sort((a, b) => a.title.localeCompare(b.title));
    }, [filteredSongs]);

    return (
        <div className="search-container">
            <div className="search mb-6">
                <div className="search-inner">
                    <button className="search-button">
                        <RiSearchLine className="ai-search" />
                    </button>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Buscar Canción"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="search-song-list">
                {sortedSongs.length > 0 ? (
                    sortedSongs.map((song) => (
                        <SongIU
                            key={`${song.albumId}-${song.id}`}
                            song={song}
                            allSongs={sortedSongs}
                        />
                    ))
                ) : (
                    <div className="text-center text-gray-500 mt-10">
                        <p>No se encontraron resultados para <strong>&quot;{query}&quot;</strong></p>
                    </div>
                )}
            </div>
        </div>
    );
};