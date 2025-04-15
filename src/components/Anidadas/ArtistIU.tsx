import Image from 'next/image';
import React from 'react';
import { PlayButton } from '../ui/player/PlayBoton';


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

const MAX_ARTISTS_LENGTH = 20;

export const CardArtist: React.FC<CardArtistProps> = ({ playlist, index, onArtistClick }) => {
    const { cover, artists } = playlist;
    const isEvenIndex = index % 2 === 0;

    const truncateText = (text: string, maxLength: number): string => {
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    const artistsString = truncateText(artists.join(', '), MAX_ARTISTS_LENGTH);

    const handlePlayButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleCardClick = () => {
        onArtistClick?.(artists[0]);
    };

    return (
        <article
            className="card"
            onClick={handleCardClick}
            style={{
                '--rotation': `${index % 2 === 0 ? '5deg' : '-5deg'}`,
                cursor: 'pointer' // Add pointer cursor to indicate clickable
            } as React.CSSProperties}
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
                        <div className="card-meta-button">
                            <PlayButton id={playlist.id} onClick={handlePlayButtonClick} />
                        </div>
                    </div>
                    <h2 className="card-title">{artistsString}</h2>
                </div>
            </div>
        </article>
    );
};