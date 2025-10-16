# 🔐 Panduan Login - FreelanceHub

## Cara Login untuk Setiap Role

Aplikasi ini memiliki 3 jenis pengguna (role) dengan akses yang berbeda. Berikut panduan lengkap untuk login sebagai masing-masing role:

---

## 📍 Akses Halaman Login

Untuk masuk ke halaman login, kunjungi:
```
/auth
```

Atau klik tombol **"Login"** atau **"Sign Up"** di navbar.

---

## 👥 3 Jenis Pengguna

### 1. 👨‍💻 **FREELANCER** (Pekerja Lepas)
**Warna Tema**: Biru (`#3B82F6`)

**Siapa?**
- Orang yang menawarkan jasa/layanan
- Menerima proyek dari klien
- Menghasilkan uang dari skill yang dimiliki

**Akses Dashboard:**
```
/dashboard/freelancer
```

**Fitur yang Tersedia:**
- ✅ Kelola layanan/jasa (My Services)
- ✅ Terima dan kerjakan pesanan (Orders)
- ✅ Lihat penghasilan & withdraw (Earnings)
- ✅ Lihat profil publik
- ✅ Chat dengan klien

**Halaman Khusus Freelancer:**
- `/freelancer/services` - Buat dan kelola layanan
- `/freelancer/orders` - Kelola pesanan yang masuk
- `/freelancer/earnings` - Lihat pendapatan & penarikan dana

---

### 2. 👤 **CLIENT** (Klien/Pemberi Kerja)
**Warna Tema**: Ungu/Indigo (`#6366F1`)

**Siapa?**
- Orang yang membutuhkan jasa
- Menyewa freelancer untuk mengerjakan proyek
- Membayar untuk layanan yang diterima

**Akses Dashboard:**
```
/dashboard/client
```

**Fitur yang Tersedia:**
- ✅ Telusuri layanan di marketplace
- ✅ Posting proyek baru
- ✅ Pantau pesanan yang sedang dikerjakan
- ✅ Bayar & review freelancer
- ✅ Chat dengan freelancer

**Halaman Khusus Client:**
- `/client/orders` - Pantau semua pesanan
- `/client/post-project` - Buat proyek baru (wizard 4 langkah)

---

### 3. 🛡️ **ADMIN** (Administrator)
**Warna Tema**: Abu-abu Gelap (`#111827`)

**Siapa?**
- Pengelola platform
- Mengawasi semua aktivitas
- Menyelesaikan dispute & masalah

**Akses Dashboard:**
```
/admin/dashboard
```

**Fitur yang Tersedia:**
- ✅ Lihat statistik platform secara keseluruhan
- ✅ Kelola pengguna (freelancer & client)
- ✅ Monitor transaksi pembayaran
- ✅ Tangani dispute/sengketa
- ✅ Kelola kategori layanan

**Halaman Khusus Admin:**
- `/admin/dashboard` - Overview platform
- `/admin/users` - Manajemen pengguna
- `/admin/transactions` - Monitor transaksi
- `/admin/disputes` - Kelola sengketa

---

## 🚀 Cara Login (Step by Step)

### **A. LOGIN untuk Pengguna yang Sudah Terdaftar**

1. **Buka halaman Auth** → `/auth`
2. **Pilih tab "Login"** (default sudah aktif)
3. **Masukkan Email & Password**
4. **Pilih role Anda:**
   - Klik "Freelancer" jika Anda pekerja lepas
   - Klik "Client" jika Anda pemberi kerja
   - Klik "Admin" jika Anda administrator
5. **Klik tombol "Masuk"**
6. Anda akan diarahkan ke dashboard sesuai role:
   - Freelancer → `/dashboard/freelancer`
   - Client → `/dashboard/client`
   - Admin → `/admin/dashboard`

**Catatan Login:**
- Warna tombol "Masuk" akan berubah sesuai role yang dipilih:
  - **Biru** untuk Freelancer
  - **Ungu/Indigo** untuk Client
  - **Abu-abu Gelap** untuk Admin

---

### **B. SIGN UP untuk Pengguna Baru**

1. **Buka halaman Auth** → `/auth`
2. **Pilih tab "Sign Up"**
3. **Pilih role yang Anda inginkan:**
   
   **Untuk Freelancer:**
   - Klik kotak "Bekerja sebagai Freelancer"
   - Background berubah biru
   
   **Untuk Client:**
   - Klik kotak "Mempekerjakan Talenta"
   - Background berubah ungu
   
   **Untuk Admin:**
   - Klik kotak "Login sebagai Admin"
   - Background berubah abu-abu

4. **Isi form pendaftaran:**
   - Nama Lengkap
   - Email
   - Password
   - Centang "Terms of Service"

5. **Klik tombol "Buat Akun"**
   - Warna tombol otomatis menyesuaikan role

6. Anda akan langsung diarahkan ke dashboard sesuai role

---

## 🎨 Perbedaan Visual Tiap Role

### Indikator Warna di UI:

| Role | Warna Utama | Gradient | Background Accent |
|------|-------------|----------|-------------------|
| **Freelancer** | Biru (#3B82F6) | `from-blue-500 to-blue-600` | `bg-blue-50` |
| **Client** | Ungu (#6366F1) | `from-indigo-500 to-indigo-600` | `bg-indigo-50` |
| **Admin** | Abu-abu (#111827) | `from-gray-700 to-gray-900` | `bg-gray-50` |

---

## 📱 Contoh Penggunaan

### Skenario 1: Sarah ingin bekerja sebagai desainer
1. Sarah buka `/auth`
2. Pilih tab **"Sign Up"**
3. Klik **"Bekerja sebagai Freelancer"** (background jadi biru)
4. Isi nama, email, password
5. Klik **"Buat Akun"** (tombol biru)
6. Masuk ke `/dashboard/freelancer`
7. Sarah bisa buat layanan di `/freelancer/services`

### Skenario 2: John ingin hire developer
1. John buka `/auth`
2. Pilih tab **"Sign Up"**
3. Klik **"Mempekerjakan Talenta"** (background jadi ungu)
4. Isi form
5. Klik **"Buat Akun"** (tombol ungu)
6. Masuk ke `/dashboard/client`
7. John bisa post proyek di `/client/post-project`

### Skenario 3: Admin monitoring platform
1. Admin buka `/auth`
2. Pilih tab **"Login"**
3. Masukkan email & password
4. Pilih role **"Admin"** (background abu-abu)
5. Klik **"Masuk"** (tombol abu-abu gelap)
6. Masuk ke `/admin/dashboard`
7. Bisa kelola users di `/admin/users`

---

## ⚠️ Catatan Penting

### Saat ini (Demo Mode):
- ✅ Login **TIDAK memerlukan kredensial asli**
- ✅ Semua login **langsung berhasil** (mock authentication)
- ✅ Tidak ada validasi email/password
- ✅ Fokus pada **demo UI/UX** dan navigasi

### Untuk Production (Nanti):
- 🔒 Perlu integrasi backend API
- 🔒 Validasi email & password
- 🔒 JWT token untuk session
- 🔒 Password encryption
- 🔒 Email verification
- 🔒 Forgot password flow

---

## 🔄 Ganti Role Setelah Login

Jika Anda sudah login dan ingin mencoba role lain:

1. **Kembali ke halaman Auth** → `/auth`
2. **Pilih role yang berbeda**
3. **Login lagi**

Atau langsung akses URL dashboard:
- Freelancer: `/dashboard/freelancer`
- Client: `/dashboard/client`
- Admin: `/admin/dashboard`

---

## 📍 Quick Links

| Role | Dashboard | Halaman Utama |
|------|-----------|---------------|
| **Freelancer** | [/dashboard/freelancer](/dashboard/freelancer) | [Services](/freelancer/services), [Orders](/freelancer/orders), [Earnings](/freelancer/earnings) |
| **Client** | [/dashboard/client](/dashboard/client) | [My Orders](/client/orders), [Post Project](/client/post-project) |
| **Admin** | [/admin/dashboard](/admin/dashboard) | [Users](/admin/users), [Transactions](/admin/transactions), [Disputes](/admin/disputes) |

---

## 🎯 Tips Menggunakan Demo

1. **Coba semua role** untuk melihat perbedaan UI
2. **Perhatikan warna** yang berubah sesuai role
3. **Explore semua halaman** untuk lihat fitur lengkap
4. **Gunakan Navbar** untuk navigasi cepat
5. **Mock data** sudah tersedia di semua halaman

---

## ❓ FAQ

**Q: Apakah saya perlu registrasi asli?**  
A: Tidak, ini mode demo. Klik saja "Masuk" atau "Buat Akun" dan Anda langsung diarahkan.

**Q: Password apa yang harus saya masukkan?**  
A: Apa saja, karena saat ini tidak ada validasi backend.

**Q: Bisakah saya login sebagai 2 role sekaligus?**  
A: Tidak perlu. Anda bisa langsung akses halaman role manapun via URL.

**Q: Kenapa warna berubah-ubah?**  
A: Setiap role punya warna tema sendiri agar mudah dibedakan:
- Biru = Freelancer
- Ungu = Client  
- Abu-abu = Admin

**Q: Bagaimana cara logout?**  
A: Saat ini belum ada fitur logout karena mode demo. Cukup kembali ke `/auth` atau ganti role.

---

**Selamat mencoba! 🎉**
