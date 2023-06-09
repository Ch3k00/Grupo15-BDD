import prisma from "../prismaClient.js";

const crearKart = async (req,res) => {
    const kart = await prisma.karts.create({
      data: {
        modelo:req.body.modelo,
        color:req.body.color,
        velocidad_maxima:req.body.velocidad_maxima,
        id_personaje:req.body.id_personaje,
      },
    });
    res.json(kart);
  
};


const obtenerKart = async (req,res) => {

    const karts = await prisma.karts.findMany()
    res.json(karts)
  
};

const obtenerKartId = async (req, res) => {
    const { id } = req.params;
    const kart = await prisma.kart.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (kart) {
      res.json(kart);
    } else {
      res.status(404).json({ error: "Kart no encontrado" });
    }
};

const actualizarKart = async (req,res) => {
    const {id} = req.body;
    const {modelo,color,velocidad_maxima, id_personaje}=req.body;
    const kart = await prisma.kart.update({
      where:{
        id: Number(id),
      },
      data:{
        modelo,
        color,
        velocidad_maxima,
        id_personaje,
      },
    });
    res.json(kart);
};


const eliminarKart = async (req,res) =>{
    const{id}=req.body;
    const kart= await prisma.kart.delete({
      
        where:{
        id: Number(id),
        },
    });
    res.json(kart);
};    


const karts = {
    crearKart,
    obtenerKart,
    obtenerKartId,
    actualizarKart,
    eliminarKart
};
export default karts;