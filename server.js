const express = require('express');
const app = express();
const db = require('./config/database');
const siswaRoutes = require('./src/routes/siswa');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/', siswaRoutes);

db.getConnection()
    .then(connection => {
        console.log('Koneksi ke MySQL berhasil');
        connection.release();

        app.listen(3000, () => {
            console.log('Server berjalan di http://localhost:3000');
        });
    })
    .catch(error => {
        console.error('Gagal konek ke database:', error.message);
    });