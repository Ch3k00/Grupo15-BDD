import prisma from "../prismaClient.js";

const crearReino = async (req, res) => {
  const {nombre, ubicacion, superficie } = req.body;
  const reino = await prisma.reinos.create({
    data: {
      nombre,
      ubicacion,
      superficie,
    },
  });
  res.json(reino);
};

const obtenerReino = async (req, res) => {
    const reino = await prisma.reinos.findMany();
    res.json(reino);
};
  
const obtenerReinoPorId = async (req, res) => {
    const { id } = req.params;
    const reino = await prisma.reinos.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (reino) {
      res.json(reino);
    } else {
      res.status(404).json({ error: "Reino no encontrado" });
    }
};

const actualizarReino = async (req, res) => {
    const { nombre, ubicacion, superficie } = req.body;
    const reino = await prisma.reino.update({
      where: {
        id: Number(id),
      },
      data: {
        nombre,
        ubicacion,
        superficie,
      },
    });
    res.json(reino);
};
  
const eliminarReino = async (req, res) => {
    const { id } = req.body;
    const reino = await prisma.reinos.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(reino);
};

const reino = {
    crearReino,
    obtenerReino,
    obtenerReinoPorId,
    actualizarReino,
    eliminarReino,
  };
  
  export default reino;