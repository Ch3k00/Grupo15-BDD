import prisma from "../prismaClient.js";

const crearReino = async (req, res) => {
try {
  const {nombre, ubicacion, superficie } = req.body;
  const reino = await prisma.reinos.create({
    data: {
      nombre,
      ubicacion,
      superficie,
    },
  });
  res.json(reino);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al crear reino'});
}
};

const obtenerReino = async (req, res) => {
try {
  const reino = await prisma.reinos.findMany();
  res.json(reino);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al obtener reinos'});
}
};
  
const obtenerReinoPorId = async (req, res) => {
try {
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
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al obtener reino por ID'});
}
};

const actualizarReino = async (req, res) => {
try {
  const { id, nombre, ubicacion, superficie } = req.body;
  const reino = await prisma.reinos.update({
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
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al actualizar reino'});
}
};
  
const eliminarReino = async (req, res) => {
try {
  const { id } = req.body;
  const reino = await prisma.reinos.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(reino);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al eliminar reino'});
}
};

const reino = {
    crearReino,
    obtenerReino,
    obtenerReinoPorId,
    actualizarReino,
    eliminarReino,
  };
  
  export default reino;