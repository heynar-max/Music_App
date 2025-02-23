import { Genero, Title } from "@/components";


export default async function generoPage() {

        return (
        <div>
                <Title
                        titlepagina="Generos"
                        title="Escuchando todos los días"
                        subtitle="Escoge su genero favorito"
                        className="mb-2"
                />
                <Genero/>
        </div>
        );
}