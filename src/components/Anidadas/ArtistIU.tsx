import Image from 'next/image';
import React from 'react';
import { RiPlayCircleFill } from 'react-icons/ri';
;

interface Playlist {
    id: string;
    cover: string;
    artists: string[];
    albumId: number;
}

interface CardArtistProps {
    playlist: Playlist;
    index: number;
    onArtistClick?: (artist: string) => void;
}

const MAX_ARTISTS_LENGTH = 20; // Longitud máxima antes de truncar

export const CardArtist: React.FC<CardArtistProps> = ({ playlist, index, onArtistClick  }) => {
    const {  cover, artists } = playlist;

    // Determinar si el índice es par o impar
    const isEvenIndex = index % 2 === 0;


    // Función para truncar el texto si es demasiado largo
    const truncateText = (text: string, maxLength: number): string => {
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    // Formatear la lista de artistas
    const artistsString = truncateText(artists.join(', '), MAX_ARTISTS_LENGTH);

    return (
        <button onClick={() => onArtistClick?.(artists[0])} className="card_link">
        <article
            className="card"
            style={{
                '--rotation': `${index % 2 === 0 ? '5deg' : '-5deg'}`,
              } as React.CSSProperties} // Asegurar a TypeScript que es válido
            >
            <div className={`card-inner ${isEvenIndex ? 'even' : 'odd'}`}>
            <span
                className="card-pin"
                style={{
                top: '20px',
                left: isEvenIndex ? '20px' : 'calc(50% - 6px)',
                transform: isEvenIndex ? 'rotate(-5deg)' : 'rotate(0)',
                }}
            ></span>

            <div className="card-image">
                <Image
                src={cover}
                alt={artistsString}
                width={100}
                height={100}
                priority
                />
            </div>

            <div className="card-content">
                <div className="card-meta">
                
                <button className="card-meta-button">
                    <RiPlayCircleFill className="iplay" />
                </button>
                </div>
                <h2 className="card-title">{artistsString}</h2>
            </div>
            </div>
        </article>
        </button>
    );
};