# GThings App: Aplikasi CRUD Full-Stack untuk Manajemen Data Programmer

---

## Ringkasan Proyek (Project Overview)

* **Latar Belakang:** Proyek ini bertujuan untuk membangun dan men-deploy aplikasi web *full-stack* modern dari awal hingga akhir, sebagai penerapan ilmu yang didapat selama program.
* **Tujuan Proyek:** Membuat aplikasi **CRUD** (*Create, Read, Update, Delete*) yang fungsional untuk mengelola daftar nama programmer, lengkap dengan fitur pencarian.
* **Arsitektur:** Aplikasi ini dibangun dengan arsitektur terpisah (*decoupled*), di mana **Frontend (React)** dan **Backend (Node.js)** dikembangkan dan di-deploy secara terpisah untuk skalabilitas yang lebih baik.

---

## Teknologi yang Digunakan (Technologies Used)

* **Frontend:**
    * **React.js (Vite):** Untuk membangun antirmuka pengguna yang interaktif dan modern.
    * **Axios:** Untuk menangani permintaan HTTP antara frontend dan backend.
    * **CSS3:** Untuk styling dan desain responsif.
* **Backend:**
    * **Node.js:** Sebagai lingkungan runtime JavaScript di sisi server.
    * **Express.js:** Sebagai framework untuk membangun API yang *robust*.
* **Database:**
    * **MongoDB:** Sebagai database NoSQL untuk menyimpan data programmer.
* **Deployment:**
    * **Vercel:** Untuk hosting dan *continuous deployment* aplikasi frontend.
    * **Railway/Render:** Untuk hosting API backend.
    * **Git & GitHub:** Untuk kontrol versi dan integrasi dengan layanan deployment.

---

## Fitur Aplikasi (Features)

* **Menampilkan Data (Read):** Menampilkan seluruh daftar programmer dari database saat halaman pertama kali dimuat.
* **Menambah Data (Create):** Menyediakan formulir untuk menambahkan data programmer baru ke dalam database.
* **Mengubah Data (Update):** Memungkinkan pengguna untuk mengedit informasi dari programmer yang sudah ada.
* **Menghapus Data (Delete):** Memberikan fungsionalitas untuk menghapus data programmer dari daftar.
* **Pencarian Dinamis (Search):** Fitur pencarian *real-time* untuk memfilter daftar programmer berdasarkan nama.

---

## Panduan Instalasi & Setup Lokal

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

**Prasyarat:**
* Node.js (v18 atau lebih tinggi)
* Git

**Langkah-langkah:**

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/Kern3Lz/gthings-app.git](https://github.com/Kern3Lz/gthings-app.git)
    cd NAMA_REPO_ANDA
    ```

2.  **Setup Backend:**
    ```bash
    # Masuk ke direktori backend
    cd backend

    # Instal semua dependency yang dibutuhkan
    npm install

    # Buat file .env di dalam direktori backend dan isi dengan koneksi URI MongoDB Anda
    # Contoh isi file .env:
    # MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/database_name

    # Jalankan server backend
    npm run dev
    ```
    Server backend akan berjalan di `http://localhost:5001`.

3.  **Setup Frontend:**
    ```bash
    # Buka terminal baru, kembali ke direktori utama, lalu masuk ke direktori frontend
    cd ../frontend

    # Instal semua dependency yang dibutuhkan
    npm install

    # Jalankan aplikasi frontend
    npm run dev
    ```
    Aplikasi frontend akan berjalan di `http://localhost:5173` dan siap digunakan.

---

## Penjelasan Dukungan AI (AI Support Explanation)

Bagaimana AI (IBM Granite/Model Bahasa) membantu dalam proyek ini:

* **Generasi Kode Awal:** Meminta AI untuk membuat kerangka dasar (*boilerplate*) untuk server Express.js dan komponen React, menghemat waktu setup awal.
* **Debugging Cepat:** AI sangat berperan dalam fase *deployment*. Saya menggunakannya untuk:
    * Menganalisis pesan *error* "Mixed Content" dan `localhost` saat menghubungkan Vercel ke Railway.
    * Mengidentifikasi penyebab *error* "404 Not Found" yang ternyata disebabkan oleh kesalahan kecil seperti *trailing slash* (`/`) pada URL API.
* **Implementasi Logika:** Membantu membuat fungsi `debounce` untuk fitur pencarian agar lebih efisien dan tidak membebani server dengan permintaan berlebihan.
* **Refactoring & Best Practice:** Meminta AI untuk merefaktor cara pemanggilan API agar menggunakan *environment variables* (`import.meta.env.VITE_API_URL`), yang merupakan *best practice* dalam pengembangan.

### Dampak Nyata Penggunaan AI

* **Percepatan Debugging:** Mengurangi waktu *troubleshooting* masalah *deployment* dari yang mungkin berjam-jam menjadi beberapa menit saja.
* **Peningkatan Kualitas Kode:** Membantu menerapkan *best practice* (seperti penggunaan variabel lingkungan) yang membuat kode lebih aman dan mudah dikelola.
* **Pemahaman Konsep:** AI berfungsi sebagai "mentor instan" yang menjelaskan konsep rumit seperti CORS, *environment variables*, dan alur kerja deployment *full-stack* secara kontekstual.
