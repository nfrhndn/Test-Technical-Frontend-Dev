/**
 * DOM Elements
 */
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const wishlistBadge = document.getElementById("wishlist-badge");
const cartBadge = document.getElementById("cart-badge");
const promoModal = document.getElementById("promo-modal");
const modalClose = document.getElementById("modal-close");
const courseGrid = document.getElementById("course-grid");
const navbar = document.getElementById("navbar");

/**
 * State Variables
 */
let wishlistCount = 0;
let cartCount = 0;

/**
 * dummy Data
 */
const coursesData = [
  {
    id: 1,
    title: "Bootcamp Front-End Web Developer",
    description: "Pelajari HTML, CSS, JavaScript, dan React.js dari 0 sampai mahir membuat website responsif.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    price: 499000,
    rating: 4.8,
    category: "Programming",
    bestSeller: true
  },
  {
    id: 2,
    title: "Data Science dengan Python",
    description: "Kuasai analisis data, machine learning, dan visualisasi data menggunakan Python.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    price: 599000,
    rating: 4.9,
    category: "Data",
    bestSeller: true
  },
  {
    id: 3,
    title: "Mastering UI/UX Design",
    description: "Belajar membuat desain antarmuka yang menarik dan pengalaman pengguna yang luar biasa dari ahlinya.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    price: 349000,
    rating: 4.7,
    category: "Design",
    bestSeller: false
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    description: "Strategi pemasaran digital dari social media, SEO, hingga iklan berbayar untuk memajukan bisnis.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    price: 299000,
    rating: 4.6,
    category: "Marketing",
    bestSeller: false
  }
];

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

  // 3. Show Promo Modal automatically after 2 seconds
  setTimeout(() => {
    promoModal.classList.add("show");
  }, 2000);

  // 4. Close Modal
  modalClose.addEventListener("click", () => {
    promoModal.classList.remove("show");
  });

  // Close modal when clicking outside content
  promoModal.addEventListener("click", (e) => {
    if (e.target === promoModal) {
      promoModal.classList.remove("show");
    }
  });

  // Render courses on load
  renderCourses();
});

/**
 * Counter Update Logic
 */
function updateCounter(type) {
  let badgeElement;

  if (type === "wishlist") {
    wishlistCount++;
    badgeElement = wishlistBadge;
    badgeElement.textContent = wishlistCount;
  } else if (type === "cart") {
    cartCount++;
    badgeElement = cartBadge;
    badgeElement.textContent = cartCount;
  }

  // Add bump animation class
  if (badgeElement) {
    badgeElement.classList.remove("bump");
    // Force reflow
    void badgeElement.offsetWidth;
    badgeElement.classList.add("bump");
  }
}

/**
 * Render Courses with Filter
 */
function renderCourses(filterCategory = "all") {
  courseGrid.innerHTML = "";

  const filteredCourses = filterCategory === "all" 
      ? coursesData 
      : coursesData.filter(c => c.category === filterCategory);

  filteredCourses.forEach((course) => {
    // Format price to IDR
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(course.price);

    const card = document.createElement("div");
    card.classList.add("course-card");

    // Create Badge properly checking for Best Seller
    let badgeHTML = "";
    if (course.bestSeller) {
      badgeHTML = `<span class="course-badge">Best Seller</span>`;
    }

    card.innerHTML = `
      <div class="course-image">
          <img src="${course.image}" alt="${course.title}">
          ${badgeHTML}
      </div>
      <div class="course-content">
          <div class="course-rating">
              <i class="fas fa-star"></i>
              <span>${course.rating}</span>
          </div>
          <h3 class="course-title">${course.title}</h3>
          <p class="course-desc">${course.description}</p>
          <div class="course-meta">
              <span class="course-price">${formattedPrice}</span>
          </div>
          <div class="course-actions">
              <button class="btn-wishlist" aria-label="Add to Wishlist" onclick="handleWishlist(this, '${course.title}')">
                  <i class="far fa-heart"></i>
              </button>
              <button class="btn-add-cart" onclick="handleAddToCart('${course.title}')">
                  <i class="fas fa-cart-plus"></i> Tambah
              </button>
          </div>
      </div>
    `;

    courseGrid.appendChild(card);
  });
}

/**
 * Handle Add to Wishlist Click
 */
function handleWishlist(btn, courseTitle) {
  const icon = btn.querySelector("i");

  // Toggle active state
  if (btn.classList.contains("active")) {
    btn.classList.remove("active");
    icon.classList.remove("fas"); // solid heart
    icon.classList.add("far"); // regular heart

    wishlistCount = Math.max(0, wishlistCount - 1);
    wishlistBadge.textContent = wishlistCount;
    showToast(`Dihapus dari Wishlist: ${courseTitle}`);
  } else {
    btn.classList.add("active");
    icon.classList.remove("far"); // regular heart
    icon.classList.add("fas"); // solid heart

    updateCounter("wishlist");
    showToast(`Ditambahkan ke Wishlist: ${courseTitle}`);
  }
}

/**
 * Handle Add to Cart Click
 */
function handleAddToCart(courseTitle) {
  updateCounter("cart");
  showToast(`Dimasukkan ke Keranjang: ${courseTitle}`);
}

/**
 * Toast Notification Logic
 */
function showToast(message) {
  const toastContainer = document.getElementById('toast-container');
  
  const toast = document.createElement('div');
  toast.classList.add('toast');
  
  toast.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>${message}</span>
    <i class="fas fa-times toast-close" onclick="this.parentElement.remove()"></i>
  `;
  
  toastContainer.appendChild(toast);
  
  // Trigger animation after adding to DOM
  setTimeout(() => toast.classList.add('show'), 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    // Wait for animation to finish before removing Element
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/**
 * Initial Render & Filter Binding
 */
document.addEventListener("DOMContentLoaded", () => {
    // Render initially
    renderCourses();

    // Bind Filter Buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            e.target.classList.add('active');
            
            // Get filter string & render
            const filterValue = e.target.getAttribute('data-filter');
            renderCourses(filterValue);
        });
    });
});
