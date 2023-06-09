import express from 'express';
import UsersController from './controllers/UsersController.js';
import personaje from "./controllers/personaje.js"
import karts from "./controllers/karts.js"
import personaje_habita_reino from "./controllers/personaje_habita_reino.js" 
import ptts from "./controllers/personaje_tiene_trabajo.js"
import trabajos from './controllers/trabajos.js';
import diplomacia from './controllers/diplomacias.js';
import reino from './controllers/reinos.js';
import reinosDefensas from './controllers/reinos_defensas.js';
import defensas from './controllers/defensas.js';
import morgan from 'morgan';


const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));
//config routes
const route = express.Router();
//register all our routes
app.use('/api', route);



//endpoints(Routes)
app.get('/users', UsersController.getUsers)
app.get('/users/:id', UsersController.getUserById)
app.post('/users', UsersController.createUser)
app.get('/users/:id/posts', UsersController.usersPosts)

//psj
route.post("/personaje",personaje.crearPersonaje)
route.get("/personaje",personaje.obtenerPersonaje)
route.get("/personaje",personaje.obtenerPersonajePorId)
route.put("/personaje", personaje.actualizarPersonaje)
route.delete("/personaje",personaje.eliminarPersonaje)

//kart

route.post("/karts",karts.crearKart)
route.get("/karts",karts.obtenerKart)
route.get("/karts",karts.obtenerKartId)
route.put("/karts",karts.actualizarKart)
route.delete("/karts",karts.eliminarKart)

//personaje habita reino

route.post("/personaje_habita_reino",personaje_habita_reino.crearPersonajeHabitaReino)
route.get("/personaje_habita_reino",personaje_habita_reino.obtenerPersonajeHabitaReino)
route.get("/personaje_habita_reino",personaje_habita_reino.obtenerPersonajeHabitaReinoPorId)
route.put("/personaje_habita_reino",personaje_habita_reino.actualizarPersonajeHabitaReino)
route.delete("/personaje_habita_reino",personaje_habita_reino.eliminarPersonajeHabitaReino)

//personaje tiene trabajo
route.post("/personaje_tiene_trabajo",ptts.crearPtt)
route.get("/personaje_tiene_trabajo",ptts.obtenerPtt)
route.get("/personaje_tiene_trabajo",ptts.obtenerPttId)
route.put("/personaje_tiene_trabajo",ptts.actualizarPtt)
route.delete("/personaje_tiene_trabajo",ptts.eliminarPtt)

//trabajos 
route.post("/trabajos",trabajos.crearTrabajo)
route.get("/trabajos",trabajos.obtenerTrabajo)
route.get("/trabajos",trabajos.obtenerTrabajoPorId)
route.put("/trabajos",trabajos.actualizarTrabajo)
route.delete("/trabajos",trabajos.eliminarTrabajo)

//reinos
route.post("/reinos",reino.crearReino)
route.get("/reinos",reino.obtenerReino)
route.get("/reinos",reino.obtenerReinoPorId)
route.put("/reinos",reino.actualizarReino)
route.delete("/reinos",reino.eliminarReino)

//diplomacias
route.post("/diplomacias",diplomacia.crearDiplo)
route.get("/diplomacias",diplomacia.obtenerDiplo)
route.get("/diplomacias",diplomacia.obtenerDiploId)
route.put("/diplomacias",diplomacia.actualizarDiplo)
route.delete("/diplomacias",diplomacia.eliminarDiplo)


//reinos defensas
route.post("/reinos_defensas",reinosDefensas.crearReinoDef)
route.get("/reinos_defensas",reinosDefensas.obtenerReinoDef)
route.get("/reinos_defensas",reinosDefensas.obtenerReinoDefPorId)
route.put("/reinos_defensas",reinosDefensas.actualizarReinoDef)
route.delete("/reinos_defensas",reinosDefensas.eliminarReinoDef)

//defensas
route.post("/defensas",defensas.crearDefensa)
route.get("/defensas",defensas.obtenerDefensa)
route.get("/defensas",defensas.obtenerDefensaPorId)
route.put("/defensas",defensas.actualizarDefensa)
route.delete("/defensas",defensas.eliminarDefensa)
//==========================================================//
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!!' });
})
//==========================================================//


// 404 not found route
app.use((_, res) => {
    res.status(404).json({ message: 'Not found Crack!' });
})


//Init server
app.listen(ENV.API_PORT, () => {
    console.log(`Server running on port ${ENV.API_PORT}`);
})