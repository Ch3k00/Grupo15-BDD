import prisma from "../prismaClient.js";

const crearDefensa = async (req, res) => {
  const {defensa} = req.body;
  const defensas = await prisma.defensas.create({
    data: {
     defensa,
    },
  });
  res.json(defensas);
};

const obtenerDefensa = async (req, res) => {
    const defensas = await prisma.defensas.findMany();
    res.json(defensas);
};

const obtenerDefensaPorId = async (req, res) => {
    const { id } = req.params;
    const defensas = await prisma.defensas.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (defensas) {
      res.json(defensas);
    } else {
      res.status(404).json({ error: "Defensa no encontrado" });
    }
  };

  const actualizarDefensa = async (req, res) => {
    const { defensa } = req.body;
    const defensas = await prisma.defensas.update({
      where: {
        id: Number(id),
      },
      data: {
        defensa
      },
    });
    res.json(defensas);
  };
  
  const eliminarDefensa = async (req, res) => {
    const { id } = req.body;
    const defensas = await prisma.defensas.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(defensas);
  };

  const defensas = {
    crearDefensa,
    obtenerDefensa,
    obtenerDefensaPorId,
    actualizarDefensa,
    eliminarDefensa,
  };
  
  export default defensas;
  