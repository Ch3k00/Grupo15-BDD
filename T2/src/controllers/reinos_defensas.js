import prisma from "../prismaClient.js";

const crearReinoDef = async (req, res) => {
try {
  const {id_reinos,id_defensas} = req.body;
  const reinod = await prisma.reinosDefensas.create({
    data: {
      id_reinos,
      id_defensas,
    },
  });
  res.json(reinod);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al crear relacion reinos_defensas'});
}
};

const obtenerReinoDef = async (req, res) => {
try {
  const reinod= await prisma.reinosDefensas.findMany();
  res.json(reinod);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al obtener relaciones reinos_defensas'});
}
};  

const obtenerReinoDefPorId = async (req, res) => {
try {
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
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al obtener relacion reinos_defensas por id'});
}
};

const actualizarReinoDef = async (req, res) => {
try {
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
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al actualizar reinos_defensas'});
}
};

const eliminarReinoDef = async (req, res) => {
try {
  const { id_reinos,id_defensas } = req.body;
  const reinod = await prisma.reinosDefensas.delete({
    where: {
      id_reinos_id_defensas:{
        id_reinos:Number(id_reinos),id_defensas:Number(id_defensas)
      }
    },
  });
  res.json(reinod);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al eliminar reinos_defensas'});
}
};

const reinosDefensas = {
    crearReinoDef,
    obtenerReinoDef,
    obtenerReinoDefPorId,
    actualizarReinoDef,
    eliminarReinoDef,
  };
  
  export default reinosDefensas;