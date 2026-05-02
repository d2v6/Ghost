# Kerentanan Baru

Bagian ini mendokumentasikan kandidat kerentanan baru pada checkout Ghost yang
diuji. Setiap temuan pertama kali diidentifikasi menggunakan alat SAST, lalu
ditinjau secara manual untuk memahami jalur kode yang terdampak, diuji secara
dinamis di lingkungan lokal yang terisolasi, dibuktikan dengan pengujian
reproduksibilitas bila memungkinkan, dibandingkan dengan CVE/advisory yang sudah
ada, dan dinilai berdasarkan dampaknya pada deployment nyata.

Pengujian dibatasi pada validasi yang etis, lokal, dan tidak merusak. Tidak ada
sistem produksi, target pihak ketiga, data pengguna nyata, atau pengujian
resource exhaustion yang destruktif.

## Ringkasan Kerentanan

| ID | Judul | Komponen terdampak | Sumber SAST | Hasil DAST | Hasil test | Hasil novelty | Severity |
|---|---|---|---|---|---|---|---|
| NV-01 | `<judul singkat>` | `<file/module/route>` | `SonarQube / Semgrep` | `Terkonfirmasi / Tidak tereproduksi / Tidak diuji` | `Lulus / Gagal / N/A` | `Tidak ditemukan CVE yang cocok / Advisory sudah ada` | `<Low/Medium/High/Critical>` |
| NV-02 | `<judul singkat>` | `<file/module/route>` | `SonarQube / Semgrep` | `Terkonfirmasi / Tidak tereproduksi / Tidak diuji` | `Lulus / Gagal / N/A` | `Tidak ditemukan CVE yang cocok / Advisory sudah ada` | `<Low/Medium/High/Critical>` |

## NV-01: `<Judul Kerentanan>`

### Ikhtisar

- **Kategori:** `<CWE / kategori OWASP jika diketahui>`
- **Komponen terdampak:** `<route, middleware, service, frontend component, dll.>`
- **File terdampak:**
  - `<path/to/file.js:line>`
  - `<path/to/other-file.ts:line>`
- **Autentikasi yang dibutuhkan:** `<Unauthenticated / Member / Admin / Owner / Unknown>`
- **Attack surface:** `<Public frontend / Admin API / Admin UI / iframe messaging / upload endpoint / dll.>`
- **Severity:** `<Low/Medium/High/Critical>`
- **Status:** `<Terkonfirmasi / Terkonfirmasi sebagian / Tidak tereproduksi / Perlu tinjauan lanjut>`

### Alur Penemuan

Kandidat ini diidentifikasi oleh analisis statis, kemudian ditinjau secara
manual untuk menentukan apakah input yang dikontrol pengguna dapat mencapai sink
yang sensitif.

| Langkah | Bukti |
|---|---|
| Temuan SonarQube | `<rule id, issue id, file:line, pesan>` |
| Temuan Semgrep | `<rule id, file:line, pesan>` |
| Fokus tinjauan manual | `<source, sink, trust boundary, validasi yang hilang, dll.>` |
| Fokus DAST lokal | `<endpoint lokal atau perilaku UI yang diuji>` |
| Test reproduksibilitas | `<file/nama test atau rencana test>` |

### Akar Masalah

`<Jelaskan bug dengan bahasa yang jelas. Identifikasi trust boundary dan
keputusan implementasi spesifik yang membuat isu ini mungkin terjadi. Fokuskan
pada kode, bukan pada narasi eksploitasi.>`

Kode relevan:

```js
// Tempel hanya potongan kode paling relevan atau parafrase logikanya.
```

### Reproduksi Lokal

Lingkungan:

- **Aplikasi:** checkout Ghost lokal
- **Mode:** `<development / test>`
- **Base URL:** `http://localhost:2368`
- **Tools:** `SonarQube`, `Semgrep`, `OWASP ZAP`, `<test framework>`
- **Data yang digunakan:** hanya data dummy lokal

Langkah lokal yang aman:

1. `<Jalankan lingkungan Ghost lokal yang terisolasi.>`
2. `<Siapkan data dummy lokal seminimal mungkin.>`
3. `<Kirim request lokal yang aman atau lakukan aksi UI yang relevan.>`
4. `<Amati response/header/state UI/output log.>`
5. `<Bersihkan data dummy lokal jika diperlukan.>`

Hasil yang diamati:

```text
<Output lokal yang sudah disanitasi, response code, header, ringkasan alert ZAP, atau hasil test>
```

Perilaku aman yang diharapkan:

```text
<Apa yang seharusnya terjadi jika isu sudah diperbaiki atau tidak rentan>
```

Putusan reproduksibilitas:

`<Terkonfirmasi lokal / Tidak tereproduksi lokal / Tereproduksi sebagian / Hanya terkonfirmasi dari source code>`

### Bukti DAST

OWASP ZAP hanya digunakan terhadap target lokal yang terisolasi. Tujuannya
adalah mengonfirmasi perilaku yang dapat diamati tanpa payload destruktif.

| Field | Nilai |
|---|---|
| Nama alert ZAP | `<nama alert>` |
| Risk/confidence ZAP | `<risk> / <confidence>` |
| URL lokal | `<URL lokal saja>` |
| HTTP method | `<GET/POST/dll.>` |
| Bukti | `<bukti yang sudah disanitasi>` |
| Catatan konfirmasi | `<mengapa ini mengonfirmasi atau tidak mengonfirmasi perilaku>` |

### Test Reproduksibilitas

Bukti test:

- **File test:** `<path/to/test>`
- **Nama test:** `<deskripsi test>`
- **Command:** `<pnpm ...>`
- **Hasil:** `<lulus/gagal>`

Hal yang dibuktikan oleh test:

`<Nyatakan invariant yang dibuktikan oleh test, misalnya: input tidak tepercaya
mencapai redirect sink, upload berukuran berlebih ditolak, pesan iframe dari
origin tidak tepercaya diabaikan, dll.>`

Keterbatasan:

`<Sebutkan hal yang tidak diuji, terutama kondisi destruktif, perilaku proxy
produksi, layanan pihak ketiga, atau perilaku yang sensitif terhadap timing.>`

### Pemeriksaan CVE dan Advisory

Tanggal pencarian: `<YYYY-MM-DD>`

Sumber yang diperiksa:

- Pencarian CVE NVD: `<query pencarian>`
- GitHub Security Advisories: `<query pencarian>`
- Release notes/advisory Ghost: `<query pencarian>`
- Database advisory/package jika relevan: `<query pencarian>`

Hasil:

`<Tidak ditemukan CVE/advisory publik yang cocok / Ada isu serupa tetapi tidak
sesuai dengan jalur kode ini / Advisory sudah ada: ...>`

Penilaian novelty:

`<Kandidat baru / Duplikat isu yang sudah diketahui / Belum dapat disimpulkan>`

### Analisis Dampak

Jika isu ini ada pada deployment nyata, attacker dengan
`<level akses yang dibutuhkan>` berpotensi untuk:

- `<Dampak 1, misalnya mengarahkan pengguna ke situs yang dikontrol attacker>`
- `<Dampak 2, misalnya membocorkan data yang seharusnya hanya untuk iframe tepercaya>`
- `<Dampak 3, misalnya mengonsumsi ruang disk sementara sebelum validasi>`

Properti keamanan yang terdampak:

- **Confidentiality:** `<None/Low/Medium/High + penjelasan>`
- **Integrity:** `<None/Low/Medium/High + penjelasan>`
- **Availability:** `<None/Low/Medium/High + penjelasan>`

Batasan realistis:

- `<Autentikasi, konfigurasi, feature flag, limit proxy, perilaku browser, interaksi pengguna, dll.>`
- `<Kondisi yang menurunkan atau meningkatkan exploitability>`

### Alasan Severity

Severity yang disarankan: `<Low/Medium/High/Critical>`

Alasan:

`<Jelaskan severity berdasarkan exploitability, privilege yang dibutuhkan,
interaksi pengguna, scope, dan dampak. Tambahkan CVSS vector jika laporan
membutuhkannya.>`

CVSS opsional:

```text
CVSS v3.1: <vector>
Score: <score>
```

### Rekomendasi Perbaikan

Perbaikan yang disarankan:

`<Jelaskan perubahan minimal yang aman. Utamakan validasi, pemeriksaan origin
yang presisi, konstruksi URL same-origin, limit upload eksplisit, dll.>`

Defense-in-depth:

- `<Langkah hardening tambahan>`
- `<Cakupan test yang perlu ditambahkan>`
- `<Kontrol operasional seperti reverse-proxy limit, jika relevan>`

### Batasan Pengujian yang Bertanggung Jawab

Semua validasi untuk temuan ini dilakukan secara lokal. Reproduksi menghindari:

- target produksi atau pihak ketiga;
- credential nyata, data member nyata, atau data billing nyata;
- payload destruktif;
- pengujian volume tinggi atau pengujian yang memenuhi disk.

## NV-02: `<Judul Kerentanan>`

Gunakan struktur yang sama seperti NV-01:

1. Ikhtisar
2. Alur Penemuan
3. Akar Masalah
4. Reproduksi Lokal
5. Bukti DAST
6. Test Reproduksibilitas
7. Pemeriksaan CVE dan Advisory
8. Analisis Dampak
9. Alasan Severity
10. Rekomendasi Perbaikan
11. Batasan Pengujian yang Bertanggung Jawab

## Kesimpulan Kerentanan Baru

`<Ringkas berapa banyak kandidat yang terkonfirmasi, terkonfirmasi sebagian,
tidak tereproduksi, atau dikecualikan. Jelaskan temuan terkuat, keterbatasan
terpenting, dan apa yang sebaiknya diperbaiki atau diuji berikutnya.>`

Contoh:

```text
Dari kandidat SAST yang ditinjau, <N> isu terkonfirmasi secara lokal, <N> isu
terkonfirmasi dari source code tetapi belum diuji dinamis sepenuhnya, dan <N>
isu tidak tereproduksi pada checkout saat ini. Temuan dengan dampak tertinggi
yang terkonfirmasi adalah <temuan>, karena <alasan>. Semua pengujian tetap
bersifat lokal dan tidak destruktif.
```
