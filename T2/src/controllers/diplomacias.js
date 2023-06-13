import prisma from "../prismaClient.js";

const crearDiplo = async (req, res) => {
  try {
    const { id_1, id_2, es_aliado} = req.body;
    const diplomacia = await prisma.diplomacia.create({
      data: {
        id1:{connect:{
          id:Number(id_1),
        },},
        id2:{connect:{
          id:Number(id_2),
        },},
        es_aliado,
        },
    });
    res.json(diplomacia);
  } catch (error) {
    console.error(error);
      res.status(500).json({ error: 'Error al crear diplomacia'});
  }
};

const obtenerDiplo = async (req, res) => {
   try {
    const diplomacia = await prisma.diplomacia.findMany();
    res.json(diplomacia);
   } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener diplomacias'});
   }
};

const obtenerDiploId = async (req, res) => {
  try {
    const { id_1,id_2 } = req.params;
    const diplomacia= await prisma.diplomacia.findUnique({
      where: {
        id_1_id_2:{
          id_1:Number(id_1),id_2:Number(id_2)
        }
      },
    });
    if (diplomacia) {
      res.json(diplomacia);
    } else {
      res.status(404).json({ error: "Diplomacia no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener diplomacia por ID'});
  }
};


const actualizarDiplo = async (req, res) => {
  try {
    const {id_1, id_2, es_aliado } = req.body;
  const diplomacia = await prisma.diplomacia.update({
    where: {
      id_1_id_2:{
        id_1:Number(id_1),id_2:Number(id_2)
      }
    },
    data: {
      id1:{connect:{
        id:Number(id_1),
      },},
      id2:{connect:{
        id:Number(id_2),
      },},
      es_aliado,
      },
  });
  res.json(diplomacia);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar diplomacia'});
  }
};

const eliminarDiplo = async (req, res) => {
   try {
    const { id_1,id_2 } = req.body;
    const diplomacia = await prisma.diplomacia.delete({
      where: {
        id_1_id_2:{
          id_1:Number(id_1),id_2:Number(id_2)
        }
      },
    });
    res.json(diplomacia);
   } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar diplomacia'});
   }
};

const diplomacia = {
    crearDiplo,
    obtenerDiplo,
    obtenerDiploId,
    actualizarDiplo,
    eliminarDiplo
  }
  export default diplomacia;