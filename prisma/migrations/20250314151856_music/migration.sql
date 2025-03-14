/*
  Warnings:

  - You are about to drop the `Album` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `album` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_albumId_fkey";

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_albumId_fkey";

-- AlterTable
ALTER TABLE "Playlist" ALTER COLUMN "genre" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "album" TEXT NOT NULL,
ADD COLUMN     "artists" TEXT[],
ALTER COLUMN "genre" DROP NOT NULL;

-- DropTable
DROP TABLE "Album";
