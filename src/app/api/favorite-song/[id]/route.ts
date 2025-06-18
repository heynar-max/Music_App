import { NextResponse } from "next/server";
import { auth } from "@/auth.config";
import { prisma } from "@/lib/prisma";

// GET → saber si la canción está en favoritos
export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    const session = await auth();

    if (!session?.user?.email) {
        return NextResponse.json({ isFavorite: false }, { status: 200 });
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
    });

    if (!user) {
        return NextResponse.json({ isFavorite: false }, { status: 200 });
    }

    const songId = Number(params.id);

    const exists = await prisma.favoriteSong.findUnique({
        where: {
            userId_songId: {
                userId: user.id,
                songId,
            },
        },
    });

    return NextResponse.json({ isFavorite: !!exists }, { status: 200 });
}

// POST → agregar a favoritos
export async function POST(
    req: Request,
    { params }: { params: { id: string } }
) {
    const session = await auth();

    if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
    });

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const songId = Number(params.id);

    const exists = await prisma.favoriteSong.findUnique({
        where: {
            userId_songId: {
                userId: user.id,
                songId,
            },
        },
    });

    if (exists) {
        return NextResponse.json({ message: "Song already in favorites" }, { status: 200 });
    }

    const favorite = await prisma.favoriteSong.create({
        data: {
            user: { connect: { id: user.id } },
            song: { connect: { id: songId } },
        },
    });

    return NextResponse.json(favorite);
}

// DELETE → eliminar de favoritos
export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    const session = await auth();

    if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
    });

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const songId = Number(params.id);

    await prisma.favoriteSong.delete({
        where: {
            userId_songId: {
                userId: user.id,
                songId,
            },
        },
    });

    return NextResponse.json({ message: "Removed from favorites" }, { status: 200 });
}
