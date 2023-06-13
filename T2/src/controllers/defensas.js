import prisma from "../prismaClient.js";

const crearDefensa = async (req, res) => {
try {
  const {defensa} = req.body;
  const defensas = await prisma.defensas.create({
    data: {
     defensa,
    },
  });
  res.json(defensas);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al crear defensa'});
}
};

const obtenerDefensa = async (req, res) => {
try {
  const defensas = await prisma.defensas.findMany();
  res.json(defensas);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al obtener defensa'});
}
  
};

const obtenerDefensaPorId = async (req, res) => {
   try {
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
   } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener defensa por ID'});
   }
  };

  const actualizarDefensa = async (req, res) => {
    try {
      const {id,defensa } = req.body;
      const defensas = await prisma.defensas.update({
        where: {
          id: Number(id),
        },
        data: {
          defensa
        },
      });
      res.json(defensas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar defensa'});
    }
};
  
const eliminarDefensa = async (req, res) => {
 try {
  const { id } = req.body;
  const defensas = await prisma.defensas.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(defensas);
 } catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al eliminar defensa'});
 }
};

const defensas = {
    crearDefensa,
    obtenerDefensa,
    obtenerDefensaPorId,
    actualizarDefensa,
    eliminarDefensa,
  };
  
  export default defensas;
  