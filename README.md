# Matthew Abednego Inkiriwan - Portfolio Website

Portofolio interaktif dengan desain **Cyberpunk Minimalist** yang terinspirasi dari adhamdannaway.com.

## 📋 Daftar File

```
matthew-portfolio-html/
├── index.html          # File HTML utama
├── styles.css          # Stylesheet dengan desain Cyberpunk Minimalist
├── script.js           # JavaScript untuk interaktivitas
└── README.md           # Dokumentasi ini
```

## 🚀 Cara Menggunakan

### 1. **Buka di VSCode**
- Ekstrak folder `matthew-portfolio-html`
- Buka folder di VSCode
- Gunakan **Live Server** extension untuk preview (klik kanan `index.html` → "Open with Live Server")

### 2. **Buka Langsung di Browser**
- Cukup buka file `index.html` di browser favorit Anda
- Semua fitur akan berfungsi normal

### 3. **Deploy ke Web**
- Upload ketiga file (`index.html`, `styles.css`, `script.js`) ke hosting Anda
- Pastikan semua file berada di folder yang sama

## 🎨 Fitur Desain

### Cyberpunk Minimalist Theme
- **Warna Utama**: 
  - Neon Green (#00ff00) - Primary
  - Neon Cyan (#00d9ff) - Secondary  
  - Neon Magenta (#ff00ff) - Accent
  - Dark Navy (#0a0e27) - Background

- **Tipografi**:
  - Space Grotesk (Headings)
  - Inter (Body Text)

- **Efek Visual**:
  - Neon glow effects
  - Animated skill bars
  - Smooth transitions
  - Grid background animation
  - Mouse tracking pada hero section

## 📱 Responsive Design

Website ini fully responsive dan bekerja sempurna di:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🔧 Kustomisasi

### Mengubah Warna
Edit variabel CSS di bagian `:root` dalam `styles.css`:

```css
:root {
    --primary: #00ff00;      /* Ubah warna neon hijau */
    --secondary: #00d9ff;    /* Ubah warna neon cyan */
    --accent: #ff00ff;       /* Ubah warna neon magenta */
    --bg-dark: #0a0e27;      /* Ubah warna background */
}
```

### Mengubah Konten
Edit teks dan informasi langsung di `index.html`:
- Nama, deskripsi, skill, project, dll.
- Semua konten terletak di dalam elemen HTML yang jelas

### Menambah Social Media Links
Cari bagian "Social Links" di `index.html` dan tambahkan link baru:

```html
<a href="YOUR_LINK" target="_blank" class="social-link">
    <span class="social-icon">ICON</span>
    <span>Platform Name</span>
</a>
```

## 📧 Mengubah Email Contact

Di bagian Contact section, ubah email:

```html
<a href="mailto:matthew@example.com" class="email-button">Send Me an Email</a>
```

Ganti `matthew@example.com` dengan email Anda.

## ⚡ Fitur JavaScript

1. **Scroll to Top Button** - Tombol untuk scroll ke atas (muncul saat scroll > 300px)
2. **Mobile Menu Toggle** - Menu responsif untuk mobile
3. **Smooth Scrolling** - Navigasi smooth ke section
4. **Hero Mouse Tracking** - Efek 3D perspective pada hero section
5. **Active Navigation Link** - Highlight link aktif saat scroll
6. **Intersection Observer** - Animasi saat elemen masuk viewport
7. **Parallax Effect** - Background bergerak saat scroll

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Struktur HTML

```
<body>
  ├── Navigation Bar
  ├── Hero Section
  ├── About Section
  ├── Skills Section
  ├── Experience Section
  ├── Projects Section
  ├── Contact Section
  ├── Scroll to Top Button
  └── Scripts
```

## 🎯 Tips Penggunaan

1. **Untuk editing cepat**: Gunakan VSCode dengan Live Server untuk melihat perubahan real-time
2. **Untuk production**: Minify CSS dan JS menggunakan tools seperti minifier.org
3. **Untuk SEO**: Update meta tags di `<head>` section
4. **Untuk analytics**: Tambahkan Google Analytics atau similar tracking code

## 📄 Lisensi

Portfolio ini dapat digunakan dan dimodifikasi sesuai kebutuhan Anda.

## 💡 Saran Pengembangan

- Tambahkan blog section
- Integrasikan dengan form service (FormSubmit, Netlify Forms)
- Tambahkan dark/light mode toggle
- Implementasikan lazy loading untuk images
- Tambahkan testimonials section

---

**Dibuat dengan ❤️ menggunakan HTML, CSS, dan JavaScript**

Untuk pertanyaan atau bantuan, hubungi Matthew Abednego Inkiriwan.
