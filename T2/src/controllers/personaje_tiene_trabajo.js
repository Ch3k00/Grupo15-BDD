import prisma from "../prismaClient.js";


const crearPtt = async (req,res) => {
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
  
};

const obtenerPtt = async (req,res) => {

    const ptts = await prisma.personaje_tiene_trabajo.findMany()
    res.json(ptts)
  
};

const obtenerPttId = async (req, res) => {
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
};

const actualizarPtt = async (req,res) => {
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
};



const eliminarPtt = async (req,res) =>{
    const{id}=req.body;
    const ptts= await prisma.ptt.delete({
      
        where:{
        id: Number(id),
        },
    });
    res.json(ptts);
};    

const ptts = {
    crearPtt,
    obtenerPtt,
    obtenerPttId,
    actualizarPtt,
    eliminarPtt
};
export default ptts;