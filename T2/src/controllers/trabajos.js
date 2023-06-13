import prisma from "../prismaClient.js";

const crearTrabajo = async (req, res) => {
try {
  const {descripcion, sueldo} = req.body;
  const trabajo = await prisma.trabajo.create({
    data: {
      descripcion,
      sueldo,
      },
  });
  res.json(trabajo);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al crear trabajo'});
}
};

const obtenerTrabajo = async (req, res) => {
try {
  const trabajo = await prisma.trabajo.findMany();
  res.json(trabajo);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al obtener trabajos'});
}
};

const obtenerTrabajoPorId = async (req, res) => {
try {
  const { id } = req.params;
  const trabajo= await prisma.trabajo.findUnique({
    where: {
      id: Number(id),
    },
  });
  if (trabajo) {
    res.json(trabajo);
  } else {
    res.status(404).json({ error: "Trabajo no encontrado" });
  }
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al obtener trabajo por ID'});
}
};

const actualizarTrabajo = async (req, res) => {
try {
  const { id } = req.body;
  const {descripcion, sueldo } = req.body;
  const trabajo = await prisma.trabajo.update({
    where: {
      id: Number(id),
    },
    data: {
      descripcion,
      sueldo,
      },  
  });
  res.json(trabajo);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al actualizar trabajo'});
}
};

const eliminarTrabajo = async (req, res) => {
try {
  const { id } = req.body;
  const trabajo = await prisma.trabajo.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(trabajo);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al eliminar trabajo'});
}
};

const trabajos = {
  crearTrabajo,
  obtenerTrabajo,
  obtenerTrabajoPorId,
  actualizarTrabajo,
  eliminarTrabajo
}
export default trabajos;