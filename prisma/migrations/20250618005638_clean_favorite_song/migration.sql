/*
  Warnings:

  - You are about to drop the `FavoritePlaylist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserFavoriteSongs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FavoritePlaylist" DROP CONSTRAINT "FavoritePlaylist_playlistId_fkey";

-- DropForeignKey
ALTER TABLE "FavoritePlaylist" DROP CONSTRAINT "FavoritePlaylist_userId_fkey";

-- DropForeignKey
ALTER TABLE "_UserFavoriteSongs" DROP CONSTRAINT "_UserFavoriteSongs_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserFavoriteSongs" DROP CONSTRAINT "_UserFavoriteSongs_B_fkey";

-- DropTable
DROP TABLE "FavoritePlaylist";

-- DropTable
DROP TABLE "_UserFavoriteSongs";

-- CreateTable
CREATE TABLE "FavoriteSong" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "songId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FavoriteSong_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteSong_userId_songId_key" ON "FavoriteSong"("userId", "songId");

-- AddForeignKey
ALTER TABLE "FavoriteSong" ADD CONSTRAINT "FavoriteSong_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteSong" ADD CONSTRAINT "FavoriteSong_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
