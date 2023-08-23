// ================================================Start tombol back to top============================================================== //
function ScrollKeatas() {
  window.scrollTo({
    top: 0,
  });
}
window.onscroll = function () {
  var backToTopButton = document.getElementById("Back-to-top");
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollPosition > windowHeight / 1.5) {
    // Jika posisi scroll melebihi setengah tinggi jendela viewport, tampilkan tombol
    backToTopButton.classList.remove("d-none");
  } else {
    // Jika posisi scroll tidak melebihi setengah tinggi jendela viewport, sembunyikan tombol
    backToTopButton.classList.add("d-none");
  }
};
// ================================================End tombol back to top============================================================== //

// ================================================Start tombol Navbar============================================================== //
// Mengambil elemen navbar dan semua tautan di dalamnya
const navbar = document.querySelector(".navbar");
const navLinks = navbar.querySelectorAll(".nav-link");

// Mendengarkan peristiwa scroll
window.addEventListener("scroll", () => {
  // Mendapatkan posisi scroll
  const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

  // Memperbarui kelas aktif pada tautan navigasi sesuai dengan posisi scroll
  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    const sectionTop = section.offsetTop - navbar.offsetHeight;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Fungsi untuk menggulir ke bagian yang tepat saat tautan di navbar diklik
function scrollToSection(event, sectionId) {
  event.preventDefault();

  const section = document.querySelector(sectionId);
  const offsetTop = section.offsetTop - navbar.offsetHeight;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });

  // Memperbarui kelas aktif pada tautan navigasi setelah menggulir
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === sectionId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// ===============Hamburber menu================ //
const hamburger = document.querySelector(".navbar-toggler");
const navMenu = document.getElementById("zxNavlist");
const menuItems = navMenu.querySelectorAll("a");

// Fungsi untuk menyembunyikan menu navbar
function hideNavMenu() {
  hamburger.classList.remove("navbar-toggler-active");
  navMenu.classList.remove("show");
}
// Menambahkan event listener pada hamburger untuk mendeteksi klik
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("navbar-toggler-active");
  navMenu.classList.toggle("show");
});

// Menambahkan event listener pada window untuk mendeteksi klik di dalam halaman
window.addEventListener("click", function (e) {
  // Cek apakah elemen yang diklik bukanlah elemen dengan id "zxNavlist" dan juga tidak berada di dalam elemen "navMenu"
  if (e.target !== navMenu && !navMenu.contains(e.target)) {
    // Jika kondisi terpenuhi, tutup menu navbar
    hideNavMenu();
  }
});
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    // Tutup menu navbar
    hideNavMenu();
  });
});
// ================================================End tombol back to top============================================================== //

// ================================================Start scroll reveals============================================================== //
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".conten h4",{ origin: "top"});
ScrollReveal().reveal(".conten .hm",{ origin: "left"});

ScrollReveal().reveal(".kontak1",{ origin: "top"});
ScrollReveal().reveal(".kontak2",{ origin: "bottom"});

ScrollReveal().reveal(".about1",{ origin: "top"});
ScrollReveal().reveal(".about2",{ origin: "left"});
ScrollReveal().reveal(".about3",{ origin: "bottom"});
// ================================================End scroll reveals============================================================== //
ScrollReveal().reveal(".gambarmenu",{ origin: "bottom"});
ScrollReveal().reveal(".mnkmi",{ origin: "top"});

