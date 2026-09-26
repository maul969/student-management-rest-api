# Data Siswa

Aplikasi CRUD sederhana berbasis web untuk mengelola data siswa. Dilengkapi dengan fitur pencarian, filter kelas, pagination, dan *dark mode*.

## Teknologi
- **Backend:** Node.js, Express.js
- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Komunikasi Data:** REST API (JSON)

## Cara Menjalankan

**1. Jalankan Backend (API)**
Buka terminal, masuk ke folder backend, lalu jalankan perintah berikut:
```bash
npm install
nodemon start
```
*(Server akan berjalan di `http://localhost:3000`)*

**2. Jalankan Frontend**
Buka file `data-siswa.html` langsung di browser, atau gunakan ekstensi *Live Server* di code editor Anda. **Pastikan backend sudah menyala terlebih dahulu** agar data dapat dimuat.

## Endpoint API

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/siswa` | Mengambil semua data siswa |
| GET | `/siswa/:id` | Mengambil data siswa berdasarkan ID |
| POST | `/siswa` | Menambah data siswa baru |
| PUT | `/siswa/:id` | Mengedit data siswa |
| DELETE | `/siswa/:id` | Menghapus data siswa |

**Contoh body request (POST/PUT):**
```json
{
  "nis": 12345,
  "nama": "Nama Siswa",
  "kelas": "12",
  "jurusan": "RPL",
  "alamat": "Alamat Siswa"
}
```

## Dokumentasi 
- **untuk dokumentasi berada pada folder /screenshot**

## Pembuat
- **Nama:** Maulidan Alif Wicaksono
- **Kelas:** 12 RPL