import prisma from "../prismaClient.js";

const crearDiplo = async (req, res) => {
    const { id_1, id_2, es_aliado} = req.body;
    const diplomacia = await prisma.trabajo.create({
      data: {
        id_1,
        id_2,
        es_aliado,
        },
    });
    res.json(diplomacia);
};

const obtenerDiplo = async (req, res) => {
    const diplomacia = await prisma.diplomacia.findMany();
    res.json(diplomacia);
};

const obtenerDiploId = async (req, res) => {
    const { id } = req.params;
    const diplomacia= await prisma.diplomacia.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (diplomacia) {
      res.json(diplomacia);
    } else {
      res.status(404).json({ error: "Diplomacia no encontrada" });
    }
};


const actualizarDiplo = async (req, res) => {
    const { id } = req.body;
    const {id_1, id_2, es_aliado } = req.body;
    const diplomacia = await prisma.diplomacia.update({
      where: {
        id: Number(id),
      },
      data: {
        id_1,
        id_2,
        es_aliado,
        },
    });
    res.json(diplomacia);
};

const eliminarDiplo = async (req, res) => {
    const { id } = req.body;
    const diplomacia = await prisma.diplomacia.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(diplomacia);
};

const diplomacia = {
    crearDiplo,
    obtenerDiplo,
    obtenerDiploId,
    actualizarDiplo,
    eliminarDiplo
  }
  export default diplomacia;