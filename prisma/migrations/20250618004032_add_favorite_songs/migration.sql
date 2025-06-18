/*
  Warnings:

  - You are about to drop the `FavoriteSong` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FavoriteSong" DROP CONSTRAINT "FavoriteSong_songId_fkey";

-- DropForeignKey
ALTER TABLE "FavoriteSong" DROP CONSTRAINT "FavoriteSong_userId_fkey";

-- DropTable
DROP TABLE "FavoriteSong";

-- CreateTable
CREATE TABLE "_UserFavoriteSongs" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserFavoriteSongs_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserFavoriteSongs_B_index" ON "_UserFavoriteSongs"("B");

-- AddForeignKey
ALTER TABLE "_UserFavoriteSongs" ADD CONSTRAINT "_UserFavoriteSongs_A_fkey" FOREIGN KEY ("A") REFERENCES "Song"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavoriteSongs" ADD CONSTRAINT "_UserFavoriteSongs_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
