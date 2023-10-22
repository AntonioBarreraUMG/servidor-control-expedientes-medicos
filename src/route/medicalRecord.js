const express = require('express');
const router = express.Router();
const medicalRecord = require('../controller/medicalRecord');
const { protectRoute } = require('../security/jsonwebtoken');

// Proteger todas las rutas
router.use(protectRoute);
// Ruta para crear un nuevo registro de médico
router.post('/', medicalRecord.createMedicalRecord);
// Ruta para obtener un registro de médico
router.get('/:id', medicalRecord.getMedicalRecordById);
// Ruta para obtener un registro de médicos
router.get('/', medicalRecord.getAllMedicalRecords);
// Ruta para actualizar un registro de médico
router.put('/:id', medicalRecord.updateMedicalRecord);
// Ruta para eliminar un registro de médico
router.delete('/:id', medicalRecord.removeMedicalRecord);

module.exports = router;
