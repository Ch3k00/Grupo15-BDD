import prisma from "../prismaClient.js";


const crearPtt = async (req,res) => {
    const {id_trabajo,id_personaje,fecha_inicio,fecha_termino} = req.body;
    const ptt = await prisma.personaje_tiene_trabajo.create({
      data: {
        id_trabajo,
        id_personaje,
        fecha_inicio,
        fecha_termino,
      },
    });
    res.json(ptt);
  
};

const obtenerPtt = async (req,res) => {

    const ptts = await prisma.personaje_tiene_trabajo.findMany()
    res.json(ptts)
  
};

const obtenerPttId = async (req, res) => {
    const { id } = req.params;
    const ptt = await prisma.ptt.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (ptt) {
      res.json(ptt);
    } else {
      res.status(404).json({ error: "Relacion Personaje_tiene_trabajo no encontrada" });
    }
};


const actualizarPtt = async (req,res) => {
    const {id} = req.body;
    const {id_trabajo,id_personaje,fecha_inicio,fecha_termino }=req.body;
    const ptt = await prisma.ptt.update({
      where:{
        id: Number(id),
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
    const ptt= await prisma.ptt.delete({
      
        where:{
        id: Number(id),
        },
    });
    res.json(ptt);
};    

const ptts = {
    crearPtt,
    obtenerPtt,
    obtenerPttId,
    actualizarPtt,
    eliminarPtt
};
export default ptts;