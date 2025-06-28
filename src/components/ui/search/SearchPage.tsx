"use client";

import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { SongIU } from "@/components";
import { songs } from "@/seed/seed";

export const SearchPage = () => {
    const [query, setQuery] = useState("");

    const filteredSongs = songs.filter((song) =>
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artists.join(" ").toLowerCase().includes(query.toLowerCase())
    );

    const sortedSongs = [...filteredSongs].sort((a, b) => a.title.localeCompare(b.title));

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
                            allSongs={song}
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
