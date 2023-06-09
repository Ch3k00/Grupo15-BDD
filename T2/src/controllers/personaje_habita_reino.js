import prisma from "../prismaClient.js";

const crearPersonajeHabitaReino = async (req,res) => {
    const {id_personaje, id_reino,fecha_registro, es_gobernante} = req.body;
    const personaje_habita_reino = await prisma.personaje_habita_reino.create({
        data: {
            id_personaje,
            id_reino,
            fecha_registro,
            es_gobernante,
        },
    });
    res.json(personaje_habita_reino);
};

const obtenerPersonajeHabitaReino = async(req,res)=>{
    const personaje_habita_reino = await prisma.personaje_habita_reino.findMany();
    res.json(personaje_habita_reino);
};

const obtenerPersonajeHabitaReinoPorId = async(req , res) => {
    const { id } = req.params;
    const personaje_habita_reino = await prisma.personaje_habita_reino.findUnique({
    where: {
      id: Number(id),
    },
  });
  if (personaje_habita_reino) {
    res.json(personaje_habita_reino);
  } else {
    res.status(404).json({ error: " Relacion Personaje_tiene_trabajo no encontrado" });
  }
}

const actualizarPersonajeHabitaReino = async (req, res) => {
    const { id } = req.body;
    const { id_personaje, id_reino, fecha_registro, es_gobernante } = req.body;
    const personaje_habita_reino = await prisma.personaje_habita_reino.update({
      where: {
        id: Number(id),
      },
      data: {
        id_personaje,
        id_reino,
        fecha_registro,
        es_gobernante,
      },
    });
    res.json(personaje_habita_reino);
  };

  const eliminarPersonajeHabitaReino = async (req, res) => {
    const { id } = req.body;
    const personaje_habita_reino = await prisma.personaje_habita_reino.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(personaje_habita_reino);
  };

  const personaje_habita_reino = {
    crearPersonajeHabitaReino,
    obtenerPersonajeHabitaReino,
    obtenerPersonajeHabitaReinoPorId,
    actualizarPersonajeHabitaReino,
    eliminarPersonajeHabitaReino,
  };
  
  export default personaje_habita_reino;