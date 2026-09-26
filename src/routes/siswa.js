const express = require('express');
const router = express.Router();
const siswaController = require('../controllers/siswacontroller');

router.get('/siswa', siswaController.getAllSiswa);
router.get('/siswa/:id', siswaController.getSiswaById);
router.post('/siswa', siswaController.createSiswa);
router.put('/siswa/:id', siswaController.updateSiswa);
router.delete('/siswa/:id', siswaController.deleteSiswa);

module.exports = router;