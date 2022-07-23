'use strict'
const fs = require('fs');
const Client = require('../models/client');
const Agent = require('../models/agent');
const Concessionaire = require('../models/concessionaire');
const Vehicle = require('../models/vehicle');
const Sociodemographic = require('../models/sociodemographic');


const testGet = async(req, res)=>{
    res.status(200).send({
        message: 'Ruta de prueba'
    })
}

const clientSave = async(req, res)=>{
   let  {name, surname, phone, email, address} = req.body;
   const clientBody = new Client({name, surname, phone, email, address});
   await clientBody.save();

   res.status(201).json({
    message: 'Registro se completo perfectamente',
    clientResponse: clientBody
   })
}

const findAllClient = async(req, res)=>{
    let clients = await Client.find();
    if(clients == 0){
        res.status(200).send({
            message: 'Lo sentimos, no existe ningún registro'
        })
    }
    res.status(200).send({
        message: 'Registros encontrados',
        clients
    })
}

const findByIdClient = async(req, res) =>{
    let idParams = req.params.id;
    let idClient = await Client.findById(idParams);

    if(idClient == null){
        res.status(400).send({
            message: 'Lo sentimos no se ha encontrado ningún dato con el ID',
            idClient: idParams
        })
    }
    res.status(200).send({
        message: 'El resultado encontrado es: ',
        client: idClient
    })
}

const updateClient = async(req, res) => {
    let idParams = req.params.id;
    let bodyUpdate = req.body;
    await Client.findOne(idParams, bodyUpdate, {new: true}, (err, clientUpdate) =>{
        res.status(201).send({
            message: 'Registro actualizado correctamente.',
            clientUpdate: clientUpdate
        })
    })
}

const agentSave = async(req, res)=>{
    let  {name, surname, employeeNumber} = req.body;
    const agentBody = new Agent({name, surname, employeeNumber});
    await agentBody.save();
 
    res.status(201).json({
     message: 'Registro se completo perfectamente',
     agentResponse: agentBody
    })
 }

 const findAllAgent = async(req, res) =>{
    let agents = await Agent.find();
    if(agents == 0){
        res.status(200).send({
            message: 'Lo sentimos, no existe ningún registro'
        })
    }
    res.status(200).send({
        message: 'Registros encontrados',
        agents
    })
 }

 const findByIdAgent = async(req, res) =>{
    let id = req.params.id;
    let agentId = await Agent.findById(id);

    if(agentId == null){
        res.status(400).send({
            message: 'Lo sentimos no se ha encontrado ningún dato con el ID',
            agentId: id
        })
    }
    res.status(200).send({
        message: 'El resultado encontrado es: ',
        agetnt: agentId
    })
 }

 const updateAgent = async(req, res) =>{
    let id = req.params.id;
    let body = req.body;
    await Agent.find(id, body, {new: true}, (err, agentUpdadte) =>{
        res.status(201).send({
            message: 'Registro actualizado correctamente.',
            agentUpdadte: body
        })
    })
 }

 const saveConcessionaire = async(req, res) => {
    let  {address, nameBusiness, phone, quantityBrances} = req.body;
    const concessionaire = new Concessionaire({address, nameBusiness, phone, quantityBrances});
    await concessionaire.save();
 
    res.status(201).json({
     message: 'Registro se completo perfectamente',
     concessionaire: concessionaire
    })
}

const findAllConcessinaire = async(req, res) =>{
    let concessionaire = await Concessionaire.find();
    if(concessionaire == 0){
        res.status(200).send({
            message: 'Lo sentimos, no existe ningún registro'
        })
    }
    res.status(200).send({
        message: 'Registros encontrados',
        concessionaire
    })
}

const findByIdConcessionaire = async(req, res) =>{
    let id = req.params.id;
    let concessionaireId = await Concessionaire.findById(id);

    if(concessionaireId == null){
        res.status(400).send({
            message: 'Lo sentimos no se ha encontrado ningún dato con el ID',
            concessionaireId: id
        })
    }
    res.status(200).send({
        message: 'El resultado encontrado es: ',
        agetnt: concessionaireId
    })
}

const vehicleSave = async(req, res) =>{
    let  {brand, year,  model, featuresVehicle, state, color, matricula, price, photo = null} = req.body;
   const vehicle = new Vehicle({brand, year, model, featuresVehicle, state, color, matricula, price, photo});
   await vehicle.save();

   res.status(201).json({
    message: 'Registro se completo perfectamente',
    vehicule: vehicle
   })
}

const findAllVehicles = async(req, res) =>{
    let vehicles = await Vehicle.find();
    if(vehicles == 0){
        res.status(200).send({
            message: 'Lo sentimos, no existe ningún registro'
        })
    }
    res.status(200).send({
        message: 'Registros encontrados',
        vehicles
    })
}

const uploadImage = async(req, res) =>{
    const vehicleId = req.params.id;
    if (req.files) {
        const file_path = req.files.image.path;
        console.log(file_path)
        const file_split = file_path.split('\\')
        console.log(file_split)

        //sacamos el nombre del archivo
        const file_name = file_split[2];
        console.log(file_name)

        const ext_split = file_name.split('\.');
        const file_ext = ext_split[1];
        console.log(file_ext);
        if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext =='gif') {
            await Vehicle.findOne(vehicleId, { image: file_name }, { new: true }, (err, photoUpdate) => {
                if (err) res.status(404).send({ message: 'Error al actualizar los datos del usuario' })
                res.status(201).send({ photo: photoUpdate })
            })
        } else {
            return removeFile(res, file_path, 'Extensión no validad')
        }
    } else {
        return res.status(200).send({ message: 'No se ha podido subir la imagen' })
    }
}
function removeFile(res, file_path, message) {
    fs.unlink(file_path, (err) => {
        return res.status(200).send({ message: message })
    })
}

const sociodemographic = async(req, res) =>{
    let  {age, maritalStatus,  gender, levelShooling, numberPeopleInCharge, avarageIncome, smokes, numberOfCigarretes, consumeAlcoholic} = req.body;
    const sociodemographic = new Sociodemographic({age, maritalStatus, gender, levelShooling, numberPeopleInCharge, avarageIncome, smokes, numberOfCigarretes, consumeAlcoholic});
    await sociodemographic.save();
 
    res.status(201).json({
     message: 'Registro se completo perfectamente',
     sociodemographic: sociodemographic
    })
}

module.exports = {
    testGet,
    clientSave,
    findAllClient, 
    findByIdClient, 
    updateClient,
    agentSave, 
    findAllAgent, 
    findByIdAgent, 
    updateAgent,
    saveConcessionaire, 
    findAllConcessinaire, 
    findByIdConcessionaire, 
    vehicleSave,
    findAllVehicles, 
    uploadImage, 
    sociodemographic
}