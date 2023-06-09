import prisma from "../prismaClient.js";

const crearTrabajo = async (req, res) => {
    const {descripcion, sueldo} = req.body;
    const trabajo = await prisma.trabajo.create({
      data: {
        descripcion,
        sueldo,
        },
    });
    res.json(trabajo);
};

const obtenerTrabajo = async (req, res) => {
    const trabajo = await prisma.trabajo.findMany();
    res.json(trabajo);
};

const obtenerTrabajoPorId = async (req, res) => {
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
};

const actualizarTrabajo = async (req, res) => {
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
};

const eliminarTrabajo = async (req, res) => {
    const { id } = req.body;
    const trabajo = await prisma.trabajo.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(trabajo);
};

const trabajos = {
  crearTrabajo,
  obtenerTrabajo,
  obtenerTrabajoPorId,
  actualizarTrabajo,
  eliminarTrabajo
}
export default trabajos;