const MedicalRecord = require("../model/medicalRecord");

exports.createMedicalRecord = async function (req, res) {
  try {
    await new MedicalRecord(req.body).save();

    res.status(201).json({ message: "Registro médico creado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

exports.getMedicalRecordById = async function (req, res) {
  try {
    const medicalRecord = await MedicalRecord.findById(req.params.id);
    if (!medicalRecord) {
      return res.status(404).json({ mensaje: "El registro médico no existe" });
    }

    res.status(200).json(medicalRecord);
  } catch (error) {
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

exports.getAllMedicalRecords = async function (req, res) {
  try {
    res.status(200).json(await MedicalRecord.find());
  } catch (error) {
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

exports.updateMedicalRecord = async function (req, res) {
  try {
    const updatedMedicalRecord = await MedicalRecord.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMedicalRecord) {
      return res.status(404).json({ mensaje: "El registro médico no existe" });
    }

    res.status(200).json(updatedMedicalRecord);
  } catch (error) {
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

exports.removeMedicalRecord = async function (req, res) {
  try {
    const removedMedicalRecord = await MedicalRecord.findByIdAndRemove(
      req.params.id
    );
    if (!removedMedicalRecord) {
      return res.status(404).json({ mensaje: "El registro médico no existe" });
    }

    res.status(200).json({ mensaje: "Registro médico eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};
