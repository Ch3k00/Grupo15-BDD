import prisma from "../prismaClient.js";


const crearPtt = async (req,res) => {
try {
  const {id_trabajo,id_personaje,fecha_inicio,fecha_termino} = req.body;
  const ptts = await prisma.personaje_tiene_trabajo.create({
    data: {
      id_trabajo,
      id_personaje,
      fecha_inicio,
      fecha_termino,
    },
  });
  res.json(ptts);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al crear la relacion personaje_tiene_trabajo'});
}
  
};

const obtenerPtt = async (req,res) => {

try {
  const ptts = await prisma.personaje_tiene_trabajo.findMany()
  res.json(ptts)

} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al encontrar las relaciones personaje_tiene_trabajo'});
}
};

const obtenerPttId = async (req, res) => {
try {
  const { id_trabajo,id_personaje } = req.params;
  const ptt = await prisma.personaje_tiene_trabajo.findUnique({
    where: {
      id_trabajo_id_personaje:{
        id_trabajo:Number(id_trabajo),id_personaje:Number(id_personaje)
      }
    },
  });
  if (ptt) {
    res.json(ptt);
  } else {
    res.status(404).json({ error: "Relacion Personaje_tiene_trabajo no encontrada" });
  }
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al encontrar la relacion personaje_tiene_trabajo por ID'});
}
};

const actualizarPtt = async (req,res) => {
try {
  const {id_trabajo,id_personaje,fecha_inicio,fecha_termino }=req.body;
  const ptt = await prisma.personaje_tiene_trabajo.update({
    where:{
      id_trabajo_id_personaje:{id_trabajo:Number(id_trabajo),id_personaje:Number(id_trabajo)},
    },
    data:{
      id_trabajo,
      id_personaje,
      fecha_inicio,
      fecha_termino,
    },
  });
  res.json(ptt);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al actualizar la relacion personaje_tiene_trabajo'});
}
};



const eliminarPtt = async (req,res) =>{
try {
  const{id_trabajo,id_personaje}=req.body;
  const ptts= await prisma.personaje_tiene_trabajo.delete({
    
      where:{
      id_trabajo_id_personaje: {id_trabajo:Number(id_trabajo),id_personaje:Number(id_personaje)}
      },
  });
  res.json(ptts);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al eliminar la relacion personaje_tiene_trabajo'});
}
};    

const ptts = {
    crearPtt,
    obtenerPtt,
    obtenerPttId,
    actualizarPtt,
    eliminarPtt
};
export default ptts;