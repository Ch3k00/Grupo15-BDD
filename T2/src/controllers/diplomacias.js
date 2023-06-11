import prisma from "../prismaClient.js";

const crearDiplo = async (req, res) => {
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
};

const obtenerDiplo = async (req, res) => {
    const diplomacia = await prisma.diplomacia.findMany();
    res.json(diplomacia);
};

const obtenerDiploId = async (req, res) => {
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
};


const actualizarDiplo = async (req, res) => {
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
};

const eliminarDiplo = async (req, res) => {
    const { id_1,id_2 } = req.body;
    const diplomacia = await prisma.diplomacia.delete({
      where: {
        id_1_id_2:{
          id_1:Number(id_1),id_2:Number(id_2)
        }
      },
    });
    res.json(diplomacia);
};

const diplomacia = {
    crearDiplo,
    obtenerDiplo,
    obtenerDiploId,
    actualizarDiplo,
    eliminarDiplo
  }
  export default diplomacia;