-- CreateTable
CREATE TABLE `Airline` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `companyName` VARCHAR(191) NOT NULL,
    `iataCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Flight` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `flightNumber` INTEGER NOT NULL,
    `departure` VARCHAR(191) NOT NULL,
    `destination` VARCHAR(191) NOT NULL,
    `eta` DATETIME(3) NOT NULL,
    `etd` DATETIME(3) NOT NULL,
    `price` DOUBLE NOT NULL,
    `airlineId` INTEGER NOT NULL,
    `availableSeats` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Seat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `number` INTEGER NOT NULL,
    `available` BOOLEAN NOT NULL DEFAULT true,
    `flightId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Passenger` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `birthday` DATETIME(3) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `idNumber` VARCHAR(191) NULL,
    `cpf` VARCHAR(191) NULL,
    `passport` VARCHAR(191) NULL,

    UNIQUE INDEX `Passenger_idNumber_key`(`idNumber`),
    UNIQUE INDEX `Passenger_cpf_key`(`cpf`),
    UNIQUE INDEX `Passenger_passport_key`(`passport`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FlightToPassenger` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FlightToPassenger_AB_unique`(`A`, `B`),
    INDEX `_FlightToPassenger_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Flight` ADD CONSTRAINT `Flight_airlineId_fkey` FOREIGN KEY (`airlineId`) REFERENCES `Airline`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Seat` ADD CONSTRAINT `Seat_flightId_fkey` FOREIGN KEY (`flightId`) REFERENCES `Flight`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FlightToPassenger` ADD FOREIGN KEY (`A`) REFERENCES `Flight`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FlightToPassenger` ADD FOREIGN KEY (`B`) REFERENCES `Passenger`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
