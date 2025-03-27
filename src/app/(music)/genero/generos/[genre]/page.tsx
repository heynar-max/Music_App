export const revalidate = 60 //60 segundos

import { notFound } from "next/navigation";
import { Generos, SongIU, Title } from "@/components";
import { prisma } from "@/lib/prima";

export default async function GenrePage({ params }: { params: { genre: string } }) {
    const { genre } = params;

    // Obtener géneros exactos de la base de datos
    const availableGenres = await prisma.song.findMany({
        select: { genre: true },
        distinct: ["genre"],
    });

    // Crear un diccionario para mapear los géneros en minúsculas
    const genreMap = availableGenres.reduce((map, g) => {
        if (g.genre) map[g.genre.toLowerCase()] = g.genre;
        return map;
    }, {} as Record<string, string>);

    console.log("Mapa de géneros disponibles:", genreMap);

    // Obtener el nombre exacto del género
    const exactGenre = genreMap[genre.toLowerCase()];

    if (!exactGenre) {
        console.log("Género no encontrado:", genre);
        return notFound();
    }

    // 🔹 Objeto de Mapeo 
    const staticGenreMap: Record<string, string> = {
        rockespanol: "Rock Español",
        rock: "Rock",
        poprock: "Pop Rock",
        dance: "Dance",
    };

    const formattedGenreMap = staticGenreMap[exactGenre.toLowerCase()] || exactGenre;


    // Buscar canciones con el género exacto
    const filteredSongs = await prisma.song.findMany({
        where: { genre: exactGenre },
    });

    console.log(`Canciones encontradas para ${formattedGenreMap}:`, filteredSongs);

    return (
        <div className="generos_page">
            <div className="genero_container">
                <Title titlepagina="Géneros" title="" subtitle="" className="" />
                <div className="sixe_generos">
                    <Generos size={100} />
                </div>

                {/* 🔹 Puedes elegir cuál de las dos opciones usar aquí */}
                <Title titlepagina="" title={formattedGenreMap} subtitle="Aquí encontrarás las mejores canciones." className="" />
                
            </div>

            {/* Mostrar las canciones filtradas */}
            <div className="song-list">
                {filteredSongs.map((song) => (
                    <SongIU key={song.id} song={song} />
                ))}
            </div>
        </div>
    );
}