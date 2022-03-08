const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
    postActivity, 
    getActivities,
} = require ('../controllers/controllersActivities')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/', postActivity)
router.get('/get', getActivities)

// router.get('/activities', getActivites)

module.exports = router;