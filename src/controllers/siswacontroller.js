const siswaModel = require('../../model/siswamodel');

function validasi(data) {
    const errors = [];

    if (data.nis === undefined || data.nis === null || String(data.nis).trim() === '') {errors.push('nis tidak boleh kosong');}
    if (!data.nama || data.nama.trim() === '') errors.push('nama tidak boleh kosong');
    if (!data.kelas || data.kelas.trim() === '') errors.push('kelas tidak boleh kosong');
    if (!data.jurusan || data.jurusan.trim() === '') errors.push('jurusan tidak boleh kosong');
    if (!data.alamat || data.alamat.trim() === '') errors.push('alamat tidak boleh kosong');

    return errors;
}
// ambil seluruh data
const getAllSiswa = async (req, res) => {
    try {
        const data = await siswaModel.findAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ambil data dari id
const getSiswaById = async (req, res) => {
    try {
        const data = await siswaModel.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'siswa tidak ditemukan' });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// menambah data
const createSiswa = async (req, res) => {
    try {
        const errors = validasi(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const newSiswa = await siswaModel.create({
            nis: req.body.nis,
            nama: req.body.nama,
            kelas: req.body.kelas,
            jurusan: req.body.jurusan,
            alamat: req.body.alamat
        });
        res.status(201).json(newSiswa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// update data
const updateSiswa = async (req, res) => {
    try {
        const errors = validasi(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const result = await siswaModel.update(req.params.id, {
            nis: req.body.nis,
            nama: req.body.nama,
            kelas: req.body.kelas,
            jurusan: req.body.jurusan,
            alamat: req.body.alamat
        });

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'siswa tidak ditemukan' });
        }

        res.json({ message: 'siswa berhasil diupdate' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// hapus data
const deleteSiswa = async (req, res) => {
    try {
        const result = await siswaModel.remove(req.params.id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'siswa tidak ditemukan' });
        }
        res.json({ message: 'siswa berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllSiswa,
    getSiswaById,
    createSiswa,
    updateSiswa,
    deleteSiswa
};