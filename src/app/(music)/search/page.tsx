"use client";

import { Title } from "@/components";
import { SearchPage } from "@/components/ui/search/SearchPage";

export default function Search() {
    return (
        <div>
            <Title
                titlepagina="Búsqueda"
                title="Escuchando todos los días"
                subtitle="Encuentra tus canciones favoritas"
                className="mb-2"
            />
            <SearchPage />
        </div>
    );
}