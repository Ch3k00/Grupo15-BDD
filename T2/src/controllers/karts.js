import prisma from "../prismaClient.js";

const crearKart = async (req,res) => {
 try {
  const kart = await prisma.karts.create({
    data: {
      modelo:req.body.modelo,
      color:req.body.color,
      velocidad_maxima:req.body.velocidad_maxima,
      id_personaje:req.body.id_personaje,
    },
  });
  res.json(kart);
 } catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al crear kart'});
 }
  
};


const obtenerKart = async (req,res) => {
try {
  const karts = await prisma.karts.findMany()
  res.json(karts)
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al obtener karts'});
}
   
  
};

const obtenerKartId = async (req, res) => {
  try {
    const { id } = req.params;
    const kart = await prisma.karts.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (kart) {
      res.json(kart);
    } else {
      res.status(404).json({ error: "Kart no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener kart por ID'});
  }
};

const actualizarKart = async (req,res) => {
try {
  const {id} = req.body;
  const {modelo,color,velocidad_maxima, id_personaje}=req.body;
  const kart = await prisma.karts.update({
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
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al actualizar kart'});
}
};


const eliminarKart = async (req,res) =>{
   try {
    const{id}=req.body;
    const kart= await prisma.karts.delete({
      
        where:{
        id: Number(id),
        },
    });
    res.json(kart);
   } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar kart'});
   }
};    


const karts = {
    crearKart,
    obtenerKart,
    obtenerKartId,
    actualizarKart,
    eliminarKart
};
export default karts;