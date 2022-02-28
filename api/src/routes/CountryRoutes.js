const { Router } = require('express');
const { 
    showAllCountries, 
    countriesId 
} = require('../controllers/controllersCountries');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', showAllCountries)
router.get('/:id', countriesId)

module.exports = router;