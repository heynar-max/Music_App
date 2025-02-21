import Image from 'next/image'
import React from 'react'
import { RiPlayCircleFill } from 'react-icons/ri'

export const SongIU = () => {
    return (
        <section className="card-container">
        
                <article className="card horizontal">
                    <div className="card-inner">
                        <span className="card-pin simple"></span>
                        <div className="card-image">
                            <Image src="https://res.cloudinary.com/dzty81hol/image/upload/v1697931368/lalfctbpxmrfvuappaxq.jpg" 
                                    alt='logo'
                                    width={100}
                                    height={100}
                                    priority/>
                        </div>
                        <div className="card-content">
                            <div className="card-meta">
                                <span className="card-meta-artist">Heroes del Silencio</span>
                                    <button className="card-meta-button">
                                    <RiPlayCircleFill className='player_icon' />
                                    </button>
                            </div>
                            <h2 className="card-title"> Opio
                                <span className="card-time">4:20</span>
                            </h2>
                        </div>
                        <span className="card-pin simple"></span>
                    </div>
                    
                </article>
            </section>
    )
}
