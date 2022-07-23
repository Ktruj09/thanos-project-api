'use strict'
const {Router} = require('express');
const {testGet, clientSave, findAllClient, findByIdClient, updateClient, agentSave, findAllAgent, findByIdAgent,
    updateAgent, saveConcessionaire, findAllConcessinaire, findByIdConcessionaire, vehicleSave, findAllVehicles, uploadImage,
    sociodemographic} = require('../controllers/controller');
const multipart = require('connect-multiparty');
const md_upload =multipart({uploadDir: './uploads/photos'})

const router = Router();


router.get('/home', testGet);
router.post('/save-client', clientSave);
router.get('/register-client', findAllClient);
router.get('/register-client/:id', findByIdClient); 
router.put('/register-client-update/:id', updateClient);

//registro agent
router.post('/save-agent', agentSave);
router.get('/agents', findAllAgent);
router.get('/agent/:id', findByIdAgent);
router.put('/update-agent/:id', updateAgent);

router.post('/save-concessionaire', saveConcessionaire);
router.get('/concessionaire', findAllConcessinaire);
router.get('/concessionaire/:id', findByIdConcessionaire); 

router.post('/save-vehicle', vehicleSave);
router.get('/vehicles', findAllVehicles);
router.post('/vehicle/upload/:id', md_upload, uploadImage)

router.post('/save-sociodemographic', sociodemographic);

module.exports = router;