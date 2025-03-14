import { prisma } from "../lib/prima";
import { playlists, songs } from "./seed";
 // Asegúrate de importar el archivo correcto

async function main() {
    // Insertar Playlists sin `id` (Prisma genera UUID)
    await prisma.playlist.createMany({
        data: playlists.map(({ albumId, title, cover, artists, genre }) => ({
            albumId,
            title,
            cover,
            artists,
            genre: genre ?? "Desconocido",
        }))
    });

    // Insertar Songs sin `id` (Prisma genera autoincrement)
    await prisma.song.createMany({
        data: songs.map(({ albumId, title, image, artists, album, duration, genre, audioUrl }) => ({
            albumId,
            title,
            image,
            artists,
            album,
            duration,
            genre: genre ?? "Desconocido",
            audioUrl
        }))
    });

    console.log("Seed ejecutado con éxito.");
}

main()
    .catch((e) => console.error(e))
    .finally(() => prisma.$disconnect());