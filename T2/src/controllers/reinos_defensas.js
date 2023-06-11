import prisma from "../prismaClient.js";

const crearReinoDef = async (req, res) => {
    const {id_reinos,id_defensas} = req.body;
    const reinod = await prisma.reinosDefensas.create({
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
    const { id_reinos,id_defensas } = req.params;
    const reinod = await prisma.reinosDefensas.findUnique({
      where: {
        id_reinos_id_defensas:{
          id_defensas:Number(id_defensas),id_reinos:Number(id_reinos)
        }
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
      id_reinos_id_defensas:{id_reinos:Number(id_reinos),id_defensas:Number(id_defensas)}
    },
    data: {
      reinos:{connect:{
        id:Number(id_reinos),
      },},
      defensa:{connect:{
        id:Number(id_defensas),
      },}
    },
  });
  res.json(reinod);
};

const eliminarReinoDef = async (req, res) => {
    const { id_reinos,id_defensas } = req.body;
    const reinod = await prisma.reinosDefensas.delete({
      where: {
        id_reinos_id_defensas:{
          id_reinos:Number(id_reinos),id_defensas:Number(id_defensas)
        }
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