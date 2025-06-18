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
