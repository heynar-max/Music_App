"use client";

import { useEffect } from "react";
import { useFavoriteStore } from "@/store/ui/useFavoriteStore";
import { useSession } from "next-auth/react";

export const LoadFavorites = () => {
    const { data: session } = useSession();
    const setFavorites = useFavoriteStore((state) => state.setFavorites);

    useEffect(() => {
        if (!session?.user) return;

        const fetchFavorites = async () => {
            try {
                const res = await fetch("/api/favorite-song");
                const data = await res.json();
                if (res.ok) {
                    setFavorites(data.favorites);
                } else {
                    console.error("Error al cargar favoritos:", data.error);
                }
            } catch (err) {
                console.error("Error al cargar favoritos:", err);
            }
        };

        fetchFavorites();
    }, [session?.user, setFavorites]);

    return null;
};