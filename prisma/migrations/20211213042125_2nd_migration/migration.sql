/*
  Warnings:

  - Added the required column `passengerId` to the `Seat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `seat` ADD COLUMN `passengerId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Seat` ADD CONSTRAINT `Seat_passengerId_fkey` FOREIGN KEY (`passengerId`) REFERENCES `Passenger`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
