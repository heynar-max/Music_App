import { NextResponse } from "next/server";
import { auth } from "@/auth.config";
import { prisma } from "@/lib/prisma";

// GET → obtener todas las canciones favoritas del usuario
export async function GET() {
    const session = await auth();

    if (!session?.user?.email) {
        return NextResponse.json({ favorites: [] }, { status: 200 });
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        include: { favoriteSongs: true },
    });

    const favoriteIds = user?.favoriteSongs.map(fav => fav.songId) ?? [];

    return NextResponse.json({ favorites: favoriteIds }, { status: 200 });
}