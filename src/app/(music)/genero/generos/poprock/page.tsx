import { Generos, SongIU, Title } from "@/components";
import { songs } from "@/seed/seed";


export default async function poprockpage() {

     // Filtrar las canciones por género "Rock"
        const rockSongs = songs.filter((song) => song.genre === "Pop Rock");
    
        return(
            <div className="generos_page">
                <div className="genero_container">
                    <Title
                            titlepagina="Generos"
                            title=""
                            subtitle=""
                            className=""
                    />
                        
                        <div className="sixe_generos">
                            <Generos size={100}/>
                        </div>
                        <Title
                                titlepagina=""
                                title="Rock Pop"
                                subtitle="Aquí encontrarás las mejores canciones."
                                className=""
                        />
                        
                    </div>
                
    
                {/* Mostrar las canciones de rock */}
                <div className="song-list">
                    {rockSongs.map((song) => (
                    <SongIU key={song.id} song={song} />
                    ))}
                </div>
        </div>
    )
}