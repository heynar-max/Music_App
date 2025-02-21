import Image from 'next/image'
import React from 'react'

// Definimos las props del componente
interface AlbumIUProps {
    index: number; // Pasar el índice como prop
}

export const AlbumIU :React.FC<AlbumIUProps> = ({ index }) => {

    // Determinar si el índice es par o impar
    const isEvenIndex = index % 2 === 0;

    return (
        <>
            <article
                className="card"
                style={{
                transform: `rotate(${isEvenIndex ? '5deg' : '-5deg'})`, // Usar transform directamente
                }}
            >
                        
                <div className={`card-inner ${isEvenIndex ? 'even' : 'odd'}`} >
                    <span className="card-pin" 
                        style={{ 
                            top: '20px', 
                            left: index % 2 === 0 ? '20px' : 'calc(50% - 6px)', 
                            transform: index % 2 === 0 ? 'rotate(-5deg)' : 'rotate(0)' }}>
                    </span>
                    
                    <div className="card-image">
                        
                            <Image src="https://res.cloudinary.com/dzty81hol/image/upload/v1697931368/lalfctbpxmrfvuappaxq.jpg" 
                                    alt='logo'
                                    width={100}
                                    height={100}
                                    priority/>
                    </div>
                    <div className="card-content">
                    <div className="card-meta">
                        <span className="card-meta-number">14 canciones</span>
                            <div className="card-meta-button">
                                
                            </div>
                    </div>
                    <h2 className="card-title">Heroes del Silencio</h2>
                    <div className="card-meta-ti">
                        <h2 className="card-meta-title">Avalancha</h2>
                    </div>
                    </div>
                </div>
            </article>
        </>
    )
}
