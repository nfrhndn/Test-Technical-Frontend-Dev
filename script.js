/**
 * DOM Elements
 */
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const wishlistBadge = document.getElementById("wishlist-badge");
const cartBadge = document.getElementById("cart-badge");
const navbar = document.getElementById("navbar");

/**
 * State Variables (Arrays instead of simple counters)
 */
let wishlistItems = [];
let cartItems = [];

/**
 * dummy Data
 */
const servicesData = [
  {
    id: 1,
    title: "EduResearch",
    subtitle: "Jasa Bimbingan Skripsi / Tesis / Disertasi",
    priceText: "Mulai 99k <span>per-paket</span>",
    bestSeller: true,
    features: [
      "Layanan Tersedia untuk Semua Bidang/jurusan",
      "Dibimbing oleh Mentor/Konsultan Ahli",
      "Full Bimbingan Dari Judul, Revisi, Hingga ACC",
      "Garansi ACC Dosen Pembimbing",
      "Jadwal Konsultasi Fleksibel",
      "Banyak Pilihan Paket",
      "Privasi Terjamin 100% Aman & Legal",
      "Konsultasi Gratis di Awal"
    ],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    title: "EduStatistics",
    subtitle: "Jasa Olah Data Penelitian",
    priceText: "Mulai 99k <span>per-paket</span>",
    bestSeller: true,
    features: [
      "Support SPSS, AMOS, Excel, RStudio, Python",
      "Hasil analisis data lengkap",
      "Bonus interpretasi hasil olah data",
      "Bonus output asli software",
      "Free lampiran olah data",
      "Free revisi dan konsultasi",
      "Free e-book olah data",
      "Konsultan lulusan S2/S3 Statistik"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    title: "EduPublisher",
    subtitle: "Jasa Publikasi Jurnal Ilmiah",
    priceText: "Mulai 49k <span>per-layanan</span>",
    bestSeller: true,
    features: [
      "Terima jurnal nasional/internasional",
      "ISSN, Sinta 1-6 hingga Scopus Q1-Q4",
      "Free editing penyesuaian template",
      "Free translate dan proofreading",
      "Free cek plagiasi (uji turnitin)",
      "Free revisi dan proses peer-review",
      "Free input sitasi Mendeley/Zotero",
      "Bisa request fast track LoA"
    ],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    title: "EduData",
    subtitle: "Jasa Mencari Data Penelitian",
    priceText: "Mulai 50k <span>per-variabel</span>",
    bestSeller: false,
    features: [
      "Support data primer maupun sekunder",
      "Support data dari IDX, OJK, BPS",
      "Free request kriteria responden",
      "Free request jumlah sampel",
      "Free request rentang tahun",
      "Garansi data valid dan benar",
      "Tim konsultan profesional"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    title: "EduScholar",
    subtitle: "Jasa Konsultasi Beasiswa",
    priceText: "Mulai 100k <span>per-layanan</span>",
    bestSeller: false,
    features: [
      "Konsultasi beasiswa S1, S2, S3",
      "Panduan penentuan negara kampus",
      "Bimbingan penyusunan CV & Study Plan",
      "Review dokumen oleh konsultan",
      "Strategi interview beasiswa",
      "Informasi peluang beasiswa aktif",
      "Panduan pendaftaran & unggah berkas",
      "Tips personal branding akademik"
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    title: "Jasa Pendukung Akademik",
    subtitle: "Research Support",
    priceText: "Mulai 10k <span>per-layanan</span>",
    bestSeller: false,
    features: [
      "Cek plagiasi Turnitin resmi",
      "Jasa parafrase skripsi/tesis",
      "Layanan revisi & editing naskah",
      "Proofreading Bahasa Indonesia/Inggris",
      "Translate akademik profesional",
      "Formatting dokumen pedoman kampus",
      "Ketik verbatim wawancara",
      "Jasa sitasi otomatis"
    ],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 7,
    title: "Konsultasi Judul & Metode",
    subtitle: "Penentuan Ide Penelitian",
    priceText: "Mulai 45k <span>per-pertemuan</span>",
    bestSeller: false,
    features: [
      "Rekomendasi judul semua jurusan",
      "Bantuan penentuan variabel",
      "Saran metode penelitian",
      "Referensi teori terbaru",
      "Panduan rumusan masalah",
      "Bantuan latar belakang & teori",
      "Konsultasi online",
      "Garansi revisi"
    ],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 8,
    title: "EduArticles",
    subtitle: "Bimbingan Artikel Jurnal",
    priceText: "Mulai 49k <span>per-paket</span>",
    bestSeller: false,
    features: [
      "Bimbingan artikel SINTA & Scopus",
      "Konsultasi awal GRATIS",
      "E-Book Tips Publish Jurnal",
      "Free Editing & Proofreading",
      "Free Konsultasi Metodologi",
      "Bonus 50+ Referensi Jurnal",
      "Gratis Penyusunan Abstrak",
      "Formatting Template Jurnal"
    ],
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

/**
 * Classes Data grouped by Service (For Modal)
 */
const allClassesData = {
  "EduResearch": [
    {
      id: 1,
      title: "Panduan Cepat Menyusun Proposal Skripsi",
      tutorName: "Ilham Muhammad, M.Pd.",
      tutorRole: "Expert Bibliometric & SLR",
      type: "Gratis",
      duration: "10 Jam",
      rating: "4.90",
      levelText: "Pemula",
      modules: "25 Modul",
      students: "85 Siswa",
      price: "Gratis",
      isLimited: true,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Bimbingan Intensif Tesis Kualitatif",
      tutorName: "Dr. Amanda Saraswati",
      tutorRole: "Senior Researcher",
      type: "Berbayar",
      duration: "90 Jam",
      rating: "4.85",
      levelText: "Menengah",
      modules: "117 Modul",
      students: "64 Siswa",
      price: "Rp 99.000",
      isLimited: false,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ],
  "EduStatistics": [
    {
      id: 3,
      title: "Pengenalan Antarmuka dan Input Data SPSS",
      tutorName: "Rizky Firmansyah, M.Stat.",
      tutorRole: "Data Analyst",
      type: "Gratis",
      duration: "15 Jam",
      rating: "4.80",
      levelText: "Pemula",
      modules: "12 Modul",
      students: "92 Siswa",
      price: "Gratis",
      isLimited: false,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Bootcamp Analisis Ekonometrika Lanjut",
      tutorName: "Dr. Larasati",
      tutorRole: "Senior Data Consultant",
      type: "Berbayar",
      duration: "120 Jam",
      rating: "4.95",
      levelText: "Mahir",
      modules: "80 Modul",
      students: "41 Siswa",
      price: "Rp 85.000",
      isLimited: false,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ],
  "EduPublisher": [
    {
      id: 5,
      title: "Format Template Jurnal SINTA 2",
      tutorName: "Anita Wijaya, Ph.D",
      tutorRole: "Reviewer Jurnal Nasional",
      type: "Gratis",
      duration: "8 Jam",
      rating: "4.75",
      levelText: "Menengah",
      modules: "5 Modul",
      students: "77 Siswa",
      price: "Gratis",
      isLimited: true,
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "Masterclass Lolos Submit Jurnal Scopus Q1",
      tutorName: "Prof. Dr. Hendra",
      tutorRole: "Academic Writer Expert",
      type: "Berbayar",
      duration: "150 Jam",
      rating: "4.99",
      levelText: "Mahir",
      modules: "95 Modul",
      students: "53 Siswa",
      price: "Rp 120.000",
      isLimited: false,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ],
  "EduData": [
    {
      id: 7,
      title: "Scraping Data Publik untuk Riset",
      tutorName: "Kevin Sanjaya, M.Kom.",
      tutorRole: "Data Engineer",
      type: "Gratis",
      duration: "20 Jam",
      rating: "4.82",
      levelText: "Pemula",
      modules: "30 Modul",
      students: "89 Siswa",
      price: "Gratis",
      isLimited: false,
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 8,
      title: "Machine Learning untuk Prediktif Data",
      tutorName: "Dara Nindy, M.Si.",
      tutorRole: "Data Scientist",
      type: "Berbayar",
      duration: "110 Jam",
      rating: "4.88",
      levelText: "Menengah",
      modules: "140 Modul",
      students: "68 Siswa",
      price: "Rp 99.000",
      isLimited: false,
      image: "https://images.unsplash.com/photo-1517048676732-d6888fc99c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ],
  "EduScholar": [
    {
      id: 9,
      title: "Webinar Persiapan Berkas Beasiswa LPDP",
      tutorName: "Tasya Kamila",
      tutorRole: "Awardee LPDP",
      type: "Gratis",
      duration: "3 Jam",
      rating: "4.95",
      levelText: "Semua Tingkatan",
      modules: "1 Modul",
      students: "95 Siswa",
      price: "Gratis",
      isLimited: true,
      image: "https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 10,
      title: "Mentoring Lolos Wawancara Beasiswa Luar Negeri",
      tutorName: "Reza Rahadian",
      tutorRole: "International Scholarship Coach",
      type: "Berbayar",
      duration: "60 Jam",
      rating: "4.98",
      levelText: "Lanjutan",
      modules: "45 Modul",
      students: "34 Siswa",
      price: "Rp 75.000",
      isLimited: false,
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ],
  "Jasa Pendukung Akademik": [
    {
      id: 11,
      title: "Tips Parafrase Otomatis Anti Plagiasi",
      tutorName: "Bayu Saputra",
      tutorRole: "Tim Turnitin Educativa",
      type: "Gratis",
      duration: "5 Jam",
      rating: "4.70",
      levelText: "Pemula",
      modules: "8 Modul",
      students: "72 Siswa",
      price: "Gratis",
      isLimited: false,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 12,
      title: "Layanan Penerjemahan Jurnal Abstrak Profesional",
      tutorName: "Sinta Maharani",
      tutorRole: "Sworn Translator",
      type: "Berbayar",
      duration: "24 Jam",
      rating: "4.90",
      levelText: "Semua Tingkatan",
      modules: "12 Modul",
      students: "28 Siswa",
      price: "Rp 15.000",
      isLimited: false,
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ],
  "Konsultasi Judul & Metode": [
    {
      id: 13,
      title: "Template Mencari Fenomena Gap untuk Judul",
      tutorName: "Dr. Larasati",
      tutorRole: "Kepala Peneliti",
      type: "Gratis",
      duration: "4 Jam",
      rating: "4.88",
      levelText: "Pemula",
      modules: "5 Modul",
      students: "81 Siswa",
      price: "Gratis",
      isLimited: false,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 14,
      title: "Private Brainstorming Judul Skripsi ACC Dosen",
      tutorName: "Prof. Dr. Hendra",
      tutorRole: "Dosen Pembimbing",
      type: "Berbayar",
      duration: "10 Jam",
      rating: "4.99",
      levelText: "Lanjutan",
      modules: "1 Modul",
      students: "15 Siswa",
      price: "Rp 85.000",
      isLimited: true,
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ],
  "EduArticles": [
    {
      id: 15,
      title: "Download Template Artikel Ilmiah OJS Standar",
      tutorName: "Ilham Muhammad",
      tutorRole: "OJS Manager",
      type: "Gratis",
      duration: "1 Jam",
      rating: "4.95",
      levelText: "Semua Tingkatan",
      modules: "2 Modul",
      students: "98 Siswa",
      price: "Gratis",
      isLimited: false,
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 16,
      title: "Paket Konversi Skripsi Menjadi Naskah Jurnal",
      tutorName: "Tim Educativa",
      tutorRole: "Editor Jurnal",
      type: "Berbayar",
      duration: "48 Jam",
      rating: "4.92",
      levelText: "Lanjutan",
      modules: "10 Modul",
      students: "45 Siswa",
      price: "Rp 99.000",
      isLimited: false,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ]
};

// Fallback for missing services data
const defaultClasses = [
    {
      id: 99,
      title: "Sesi Konsultasi Layanan Akademik",
      tutorName: "Tim Educativa",
      tutorRole: "Konsultan Akademik",
      type: "Gratis",
      duration: "1 Jam",
      rating: "4.80",
      levelText: "Pemula",
      modules: "1 Modul",
      students: "22 Siswa",
      price: "Gratis",
      isLimited: false,
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
];

let currentActiveService = ""; // state to keep track of active modal service

/**
 * Event Listeners & Interactions
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = navToggle.querySelector("i");
    if (navMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // 2. Sticky Navbar Shadow on Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = "var(--shadow-md)";
    } else {
      navbar.style.boxShadow = "var(--shadow-sm)";
    }
  });

  // 3. Highlight Nav Menu on Scroll (ScrollSpy)
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    document.querySelectorAll(".nav-menu li a").forEach((li) => {
      li.classList.remove("active");
      if (li.getAttribute("href") === `#${current}`) {
        li.classList.add("active");
      }
    });
  });



  // Initial Rendering
  renderServicesSlider();

  // 5. Slider Functionality
  const sliderContainer = document.getElementById("services-slider-container");
  const btnPrev = document.getElementById("slider-prev");
  const btnNext = document.getElementById("slider-next");

  const cardWidth = 320; // Matches CSS width + gap

  btnNext.addEventListener("click", () => {
    sliderContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });

  btnPrev.addEventListener("click", () => {
    sliderContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });

  // DRAG TO SCROLL (Mouse Swipe) functionality
  let isDown = false;
  let startX;
  let scrollLeft;

  sliderContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    sliderContainer.classList.add('active'); // Optional: Add a grab cursor class in CSS if needed
    startX = e.pageX - sliderContainer.offsetLeft;
    scrollLeft = sliderContainer.scrollLeft;
  });

  sliderContainer.addEventListener('mouseleave', () => {
    isDown = false;
    sliderContainer.classList.remove('active');
  });

  sliderContainer.addEventListener('mouseup', () => {
    isDown = false;
    sliderContainer.classList.remove('active');
  });

  sliderContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderContainer.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast multiplier
    sliderContainer.scrollLeft = scrollLeft - walk;
  });
});



/**
 * Render Services Slider
 */
function renderServicesSlider() {
  const sliderContainer = document.getElementById("services-slider-container");
  if (!sliderContainer) return;
  sliderContainer.innerHTML = "";

  servicesData.forEach((service) => {
    const card = document.createElement("div");
    card.classList.add("service-slider-card");

    let badgeHTML = "";
    if (service.bestSeller) {
      badgeHTML = `<span class="service-badge">🔥 Terpopuler</span>`;
    }

    const featuresList = service.features.map(f => `<li><i class="fas fa-check-circle text-teal"></i> ${f}</li>`).join('');

    card.innerHTML = `
      <div class="service-image-banner">
          <img src="${service.image}" alt="${service.title}">
          ${badgeHTML}
      </div>
      <div class="service-header">
          <span class="service-subtitle">${service.subtitle}</span>
          <h3 class="service-title">${service.title}</h3>
          <div class="service-price">${service.priceText}</div>
      </div>
      <div class="service-body">
          <ul class="service-features">
              ${featuresList}
          </ul>
      </div>
      <div class="service-footer course-actions" style="justify-content: center;">
          <button class="btn-outline btn-pill" style="width: 100%; padding: 0.8rem; font-weight: 600; color: var(--primary-color); border-color: var(--primary-color);" onclick="openKelasRisetModal('${service.title}')">
              Lihat Detail <i class="fas fa-arrow-right" style="margin-left: 0.5rem;"></i>
          </button>
      </div>
    `;

    sliderContainer.appendChild(card);
  });
}

/**
 * Handle Add to Wishlist / Cart with Toasts and Dropdowns
 */
function handleWishlist(btnElement, classIdStr) {
    const classId = parseInt(classIdStr, 10);
    // Find class data from allClassesData
    let targetClass = null;
    for (const service in allClassesData) {
        const found = allClassesData[service].find(c => c.id === classId);
        if (found) { targetClass = found; break; }
    }
    
    if (!targetClass) return;

    // Check if already in wishlist
    const index = wishlistItems.findIndex(item => item.id === classId);
    
    if (index === -1) {
        // Add
        wishlistItems.push(targetClass);
        btnElement.classList.add("active");
        btnElement.innerHTML = '<i class="fas fa-heart"></i>'; // Solid heart
        showToast("Masuk Wishlist!", `${targetClass.title} berhasil ditambahkan ke daftar favorit Anda.`, "success");
    } else {
        // Remove
        wishlistItems.splice(index, 1);
        btnElement.classList.remove("active");
        btnElement.innerHTML = '<i class="far fa-heart"></i>'; // Outline heart
        showToast("Dihapus", `${targetClass.title} dihapus dari wishlist.`, "danger");
    }
    
    updateNavCounters();
    renderNavDropdown('wishlist');
}

function handleAddToCart(classIdStr) {
    const classId = parseInt(classIdStr, 10);
    let targetClass = null;
    for (const service in allClassesData) {
        const found = allClassesData[service].find(c => c.id === classId);
        if (found) { targetClass = found; break; }
    }
    
    if (!targetClass) return;

    // Check if already in cart
    const isExist = cartItems.find(item => item.id === classId);
    
    if (!isExist) {
        cartItems.push(targetClass);
        showToast("Berhasil Masuk Keranjang!", `${targetClass.title} siap untuk di-checkout.`, "success");
    } else {
        showToast("Sudah Ada!", "Kelas ini sudah ada di keranjang Anda.", "danger");
    }
    
    updateNavCounters();
    renderNavDropdown('cart');
}

function removeFromList(listType, classId) {
    if (listType === 'cart') {
        cartItems = cartItems.filter(item => item.id !== classId);
        renderNavDropdown('cart');
    } else {
        wishlistItems = wishlistItems.filter(item => item.id !== classId);
        renderNavDropdown('wishlist');
        // Optional: Update UI if modal is open
        renderKelasRisetCards(); 
    }
    updateNavCounters();
}

/**
 * Navbar Dropdowns & Counters Logic
 */
function updateNavCounters() {
    wishlistBadge.textContent = wishlistItems.length;
    wishlistBadge.classList.add("bump");
    setTimeout(() => wishlistBadge.classList.remove("bump"), 300);
    
    cartBadge.textContent = cartItems.length;
    cartBadge.classList.add("bump");
    setTimeout(() => cartBadge.classList.remove("bump"), 300);
}

function toggleNavDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    // Close others
    document.querySelectorAll('.nav-dropdown').forEach(el => {
        if(el.id !== dropdownId) el.classList.remove('show');
    });
    
    if(dropdown) {
        dropdown.classList.toggle('show');
        if(dropdown.classList.contains('show')) {
            renderNavDropdown(dropdownId === 'cart-dropdown' ? 'cart' : 'wishlist');
        }
    }
}

function renderNavDropdown(type) {
    const containerId = type === 'cart' ? 'cart-items-container' : 'wishlist-items-container';
    const container = document.getElementById(containerId);
    if(!container) return;
    
    const items = type === 'cart' ? cartItems : wishlistItems;
    const iconBtn = type === 'cart' ? '<i class="fas fa-trash"></i>' : '<i class="fas fa-heart-crack"></i>';
    
    if (items.length === 0) {
        container.innerHTML = `<p class="empty-notif">${type === 'cart' ? 'Keranjang Anda kosong.' : 'Belum ada kelas di wishlist.'}</p>`;
        return;
    }
    
    let html = '';
    items.forEach(item => {
        html += `
            <div class="dropdown-item">
                <img src="${item.image}" alt="${item.title}" class="dropdown-item-img">
                <div class="dropdown-item-info">
                    <div class="dropdown-item-title">${item.title}</div>
                    <div class="dropdown-item-price">${item.price}</div>
                </div>
                <button class="dropdown-item-remove" onclick="removeFromList('${type}', ${item.id}); event.stopPropagation();" title="Hapus">
                    ${iconBtn}
                </button>
            </div>
        `;
    });
    container.innerHTML = html;
}

// Close Dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.icon-wrapper')) {
        document.querySelectorAll('.nav-dropdown').forEach(el => el.classList.remove('show'));
    }
});

/**
 * Kelas Riset Modal Logic
 */
function openKelasRisetModal(serviceTitle) {
  currentActiveService = serviceTitle;
  const modal = document.getElementById("kelas-riset-modal");
  const titleDisplay = document.getElementById("kr-modal-service-title");
  
  if(modal) {
      if(titleDisplay) titleDisplay.textContent = `Layanan ${serviceTitle}`;
      
      modal.classList.add("show");
      document.body.style.overflow = "hidden"; // Prevent background scroll
      
      // Reset search and filters
      const searchInput = document.getElementById('kr-search');
      if(searchInput) searchInput.value = "";
      
      const filterBtns = document.querySelectorAll('.kr-filter-btn');
      filterBtns.forEach(btn => btn.classList.remove('active'));
      const allBtn = document.querySelector('.kr-filter-btn[data-filter="all"]');
      if(allBtn) allBtn.classList.add('active');

      renderKelasRisetCards(); // Render classes when opened
  }
}

function closeKelasRisetModal() {
  const modal = document.getElementById("kelas-riset-modal");
  if(modal) {
      modal.classList.remove("show");
      document.body.style.overflow = "auto";
  }
}

/**
 * Filter and Render state via Buttons
 */
function updateKRFilter(btnElement) {
    const filterBtns = document.querySelectorAll('.kr-filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const filterType = btnElement.getAttribute('data-filter');
    const searchVal = document.getElementById('kr-search') ? document.getElementById('kr-search').value : "";
    
    renderKelasRisetCards(filterType, searchVal);
}

/**
 * Render Kelas Riset Cards (In Modal)
 */
function renderKelasRisetCards(filterType = "all", searchQuery = "") {
  const grid = document.getElementById("kelas-riset-grid");
  if (!grid) return;
  grid.innerHTML = "";

  // Get data for the active service, or fallback to default
  let classData = allClassesData[currentActiveService] || defaultClasses;
  let filteredData = [...classData];

  // Apply Type Filter
  if (filterType !== "all") {
    filteredData = filteredData.filter(item => item.type === filterType);
  }

  // Apply Search Filter
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredData = filteredData.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.tutorName.toLowerCase().includes(query)
    );
  }

  if (filteredData.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-muted);">Tidak ada kelas/paket yang sesuai.</div>`;
      return;
  }

  filteredData.forEach((kelas) => {
    const card = document.createElement("div");
    card.classList.add("kr-card");

    // Badges
    let limitedBadge = kelas.isLimited ? `<div class="kr-badge-limited"><i class="fas fa-exclamation-triangle"></i> LIMITED ACCESS</div>` : '';
    
    // Type/Price Tag Styling
    let isGratis = kelas.type === "Gratis";
    let priceHTML = isGratis 
        ? `<div class="kr-price-badge gratis">Gratis</div>` 
        : `<div class="kr-price-badge berbayar">${kelas.price}</div>`;

    card.innerHTML = `
      <div class="kr-image-container">
        <img src="${kelas.image}" alt="${kelas.title}">
        <div class="kr-image-overlay">
            <div class="kr-logo"><i class="fas fa-microscope"></i> KelasRiset<span>by educativa.id</span></div>
            ${limitedBadge}
            <h3 class="kr-title-overlay">${kelas.title}</h3>
            <div class="kr-tutor-info">
                <p class="tutor-name">${kelas.tutorName}</p>
                <p class="tutor-role">${kelas.tutorRole}</p>
            </div>
        </div>
      </div>
      <div class="kr-content">
        <h4 class="kr-title">${kelas.title}</h4>
        
        <div class="kr-class-meta-grid">
            <div class="kr-meta-row">
                <div class="meta-item"><i class="far fa-clock text-teal"></i> ${kelas.duration}</div>
                <div class="meta-item"><i class="fas fa-star text-yellow"></i> ${kelas.rating}</div>
                <div class="meta-item"><i class="fas fa-signal" style="color:#cbd5e1;"></i> ${kelas.levelText}</div>
            </div>
            <div class="kr-meta-row kr-meta-bottom">
                <div class="meta-item"><i class="far fa-copy"></i> ${kelas.modules}</div>
                <div class="meta-item"><i class="fas fa-users"></i> ${kelas.students}</div>
            </div>
        </div>
        
        ${priceHTML}
      </div>
      <div class="kr-footer">
        <button class="btn-wishlist btn-wishlist-round ${wishlistItems.find(i => i.id === kelas.id) ? 'active' : ''}" aria-label="Add to Favorit" onclick="handleWishlist(this, '${kelas.id}')">
            <i class="${wishlistItems.find(i => i.id === kelas.id) ? 'fas fa-heart' : 'far fa-heart'}"></i>
        </button>
        <button class="kr-btn-ambil" onclick="handleAddToCart('${kelas.id}')">
            Ambil Kelas <i class="fas fa-shopping-cart" style="margin-left: 0.3rem;"></i>
        </button>
      </div>
    `;

    grid.appendChild(card);
  });
}

/**
 * Toast Notification System
 */
function showToast(title, message, type = "success") {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'danger' ? 'toast-danger' : ''}`;
    
    const iconClass = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';

    toast.innerHTML = `
        <i class="fas ${iconClass} toast-icon"></i>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-desc">${message}</div>
        </div>
    `;

    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 400); // Wait for transition
    }, 3000);
}
