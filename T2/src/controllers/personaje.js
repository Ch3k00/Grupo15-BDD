import prisma from "../prismaClient.js";


// Crear un nuevo registro
const crearPersonaje = async (req,res) => {
try {
  const personaje = await prisma.personaje.create({
    data: {
      nombre:req.body.nombre,
      fuerza:req.body.fuerza,
      fecha_nacimiento:req.body.fecha_nacimiento,
      objeto:req.body.objeto,
    },
  });
  res.json(personaje);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al crear personaje'});
}

};

// Leer todos los registros
const obtenerPersonaje = async (req,res) => {

try {
  const personaje = await prisma.personaje.findMany()
  res.json(personaje)

} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al encontrar personajes'});
}
};

// Leer un registro por su ID
const obtenerPersonajePorId = async (req, res) => {
try {
  const { id } = req.params;
  const personaje = await prisma.personaje.findUnique({
    where: {
      id: Number(id),
    },
  }); 
  console.log(personaje);
  if (personaje) {
    res.json(personaje);
  } else {
    res.status(404).json({ error: "Personaje no encontrado" });
  }
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al encontrar personaje por ID'});
}
};

// Actualizar un registro
const actualizarPersonaje = async (req,res) => {
try {
const {id} = req.body;
const {nombre,fuerza,fecha_nacimiento, objeto}=req.body;
const personaje = await prisma.personaje.update({
  where:{
    id: Number(id),
  },
  data:{
    nombre,
    fuerza,
    fecha_nacimiento,
    objeto,
  },
});
res.json(personaje);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al actualizar personaje'});
}
};

// Eliminar un registro
const eliminarPersonaje = async (req,res) =>{
try {
  const{id}=req.body;
  const personaje= await prisma.personaje.delete({

    where:{
      id: Number(id),
    },
  });
  res.json(personaje);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Error al eliminar personaje'});
}
};



const personaje = {
  crearPersonaje,
  obtenerPersonaje,
  obtenerPersonajePorId,
  actualizarPersonaje,
  eliminarPersonaje
};
export default personaje;