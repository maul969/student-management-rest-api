const db = require('../config/database');

const siswa = {
    async findAll() {
        const [rows] = await db.query('SELECT * FROM siswa');
        return rows;
    },

    async findById(id) {
        const [rows] = await db.query('SELECT * FROM siswa WHERE id = ?', [id]);
        return rows[0] || null;
    },

    async create({ nis, nama, kelas, jurusan, alamat }) {
        const [result] = await db.query(
            'INSERT INTO siswa (nis, nama, kelas, jurusan, alamat) VALUES (?, ?, ?, ?, ?)',
            [nis, nama, kelas, jurusan, alamat]
        );
        return { id: result.insertId, nis, nama, kelas, jurusan, alamat };
    },

    async update(id, data) {
        const fieldsMap = {
            nis: data.nis,
            nama: data.nama,
            kelas: data.kelas,
            jurusan: data.jurusan,
            alamat: data.alamat
        };

        const fields = Object.entries(fieldsMap).filter(([_, v]) => v !== undefined);

        if (fields.length === 0) {
            throw new Error('tidak ada data yang diupdate');
        }

        const setClause = fields.map(([key]) => `${key} = ?`).join(', ');
        const values = fields.map(([_, value]) => value);

        const [result] = await db.query(
            `UPDATE siswa SET ${setClause} WHERE id = ?`,
            [...values, id]
        );

        return result;
    },

    async remove(id) {
        const [result] = await db.query('DELETE FROM siswa WHERE id = ?', [id]);
        return result;
    }
};

module.exports = siswa;