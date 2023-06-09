import prisma from "../prismaClient.js";

const crearReinoDef = async (req, res) => {
    const {id_reinos,id_defensas} = req.body;
    const reinod = await prisma.reinod.create({
      data: {
        id_reinos,
        id_defensas,
      },
    });
    res.json(reinod);
};

const obtenerReinoDef = async (req, res) => {
    const reinod= await prisma.reinosDefensas.findMany();
    res.json(reinod);
};  

const obtenerReinoDefPorId = async (req, res) => {
    const { id } = req.params;
    const reinod = await prisma.reinosDefensas.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (reinod) {
      res.json(reinod);
    } else {
      res.status(404).json({ error: "Reino defensas no encontrado" });
    }
};

const actualizarReinoDef = async (req, res) => {
    const { id_reinos,id_defensas } = req.body;
    const reinod = await prisma.reinosDefensas.update({
      where: {
        id: Number(id),
      },
      data: {
        id_reinos,
        id_defensas
      },
    });
    res.json(reinod);
};

const eliminarReinoDef = async (req, res) => {
    const { id } = req.body;
    const reinod = await prisma.reinosDefensas.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(reinod);
};

const reinosDefensas = {
    crearReinoDef,
    obtenerReinoDef,
    obtenerReinoDefPorId,
    actualizarReinoDef,
    eliminarReinoDef,
  };
  
  export default reinosDefensas;