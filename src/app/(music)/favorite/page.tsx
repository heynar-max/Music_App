import { SongIU, Title } from "@/components";


export default async function favoritePage() {
    
    return (
        <div>
            <Title
                    titlepagina="Favoritos"
                    title="Escuchando todos los días"
                    subtitle="Tus Favoritos te acompañan a todo lugar"
                    className="mb-2"
            />
            <div className="page_favorite">
                <SongIU/>
            </div>
        </div>
    );
}