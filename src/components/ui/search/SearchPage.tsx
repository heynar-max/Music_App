import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

export const SearchPage = () => {
    return (
        <div className="search">
            <div className="search-inner">
                <button className="search-button">
                    <RiSearchLine className="ai-search" />
                </button>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar Canción"
                    id="search"
                    name="search-input-1"
                    autoComplete="off"
                />
            </div>
        </div>
    )
}
