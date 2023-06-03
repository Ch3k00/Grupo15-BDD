-- CreateTable
CREATE TABLE "personaje_tiene_trabajo" (
    "id_trabajo" INTEGER NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_termino" TIMESTAMP(3),
    "id_personaje" INTEGER NOT NULL,

    CONSTRAINT "personaje_tiene_trabajo_pkey" PRIMARY KEY ("id_trabajo","id_personaje")
);

-- CreateTable
CREATE TABLE "personaje" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(45) NOT NULL,
    "fuerza" INTEGER NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "objeto" VARCHAR(30) NOT NULL,

    CONSTRAINT "personaje_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trabajo" (
    "id" SERIAL NOT NULL,
    "descripcion" VARCHAR(45) NOT NULL,
    "sueldo" INTEGER NOT NULL,

    CONSTRAINT "trabajo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reinos" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(45) NOT NULL,
    "ubicacion" VARCHAR(45) NOT NULL,
    "superficie" INTEGER NOT NULL,

    CONSTRAINT "reinos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "karts" (
    "id" SERIAL NOT NULL,
    "modelo" VARCHAR(45) NOT NULL,
    "color" VARCHAR(45) NOT NULL,
    "velocidad_maxima" INTEGER,
    "id_personaje" INTEGER NOT NULL,

    CONSTRAINT "karts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personaje_habita_reino" (
    "id_personaje" INTEGER NOT NULL,
    "id_reino" INTEGER NOT NULL,
    "fecha_registro" TIMESTAMP(3) NOT NULL,
    "es_gobernante" BOOLEAN NOT NULL,

    CONSTRAINT "personaje_habita_reino_pkey" PRIMARY KEY ("id_personaje","id_reino")
);

-- CreateTable
CREATE TABLE "defensas" (
    "id" SERIAL NOT NULL,
    "defensa" VARCHAR(45) NOT NULL,

    CONSTRAINT "defensas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReinosDefensas" (
    "reinos_id" INTEGER NOT NULL,
    "defensas_id" INTEGER NOT NULL,

    CONSTRAINT "ReinosDefensas_pkey" PRIMARY KEY ("reinos_id","defensas_id")
);

-- CreateTable
CREATE TABLE "diplomacia" (
    "id_1" INTEGER NOT NULL,
    "id_2" INTEGER NOT NULL,
    "es_aliado" BOOLEAN NOT NULL,

    CONSTRAINT "diplomacia_pkey" PRIMARY KEY ("id_1","id_2")
);

-- AddForeignKey
ALTER TABLE "personaje_tiene_trabajo" ADD CONSTRAINT "personaje_tiene_trabajo_id_trabajo_fkey" FOREIGN KEY ("id_trabajo") REFERENCES "trabajo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personaje_tiene_trabajo" ADD CONSTRAINT "personaje_tiene_trabajo_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "personaje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "karts" ADD CONSTRAINT "karts_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "personaje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personaje_habita_reino" ADD CONSTRAINT "personaje_habita_reino_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "personaje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personaje_habita_reino" ADD CONSTRAINT "personaje_habita_reino_id_reino_fkey" FOREIGN KEY ("id_reino") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReinosDefensas" ADD CONSTRAINT "ReinosDefensas_reinos_id_fkey" FOREIGN KEY ("reinos_id") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReinosDefensas" ADD CONSTRAINT "ReinosDefensas_defensas_id_fkey" FOREIGN KEY ("defensas_id") REFERENCES "defensas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diplomacia" ADD CONSTRAINT "diplomacia_id_1_fkey" FOREIGN KEY ("id_1") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diplomacia" ADD CONSTRAINT "diplomacia_id_2_fkey" FOREIGN KEY ("id_2") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
