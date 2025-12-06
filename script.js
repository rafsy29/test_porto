// Smooth Scroll ke Section tertentu
function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    window.scrollTo({
      top: target.offsetTop - 80, 
      behavior: "smooth"
    });
  }
}


// Navbar responsive (hamburger menu)
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


// Close menu saat link diklik (Mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// Animasi fade saat scroll (optional & ringan)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".section").forEach((sec) => {
  sec.classList.add("hidden");
  observer.observe(sec);
});
document.querySelectorAll(".section").forEach((sec) => {
  sec.classList.add("hidden");
  observer.observe(sec);
});

// Smooth scroll untuk tombol navbar
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const target = this.getAttribute("href").substring(1);
    document.getElementById(target).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Smooth scroll tombol “Lebih Lanjut”
document.querySelectorAll(".scroll-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const target = this.dataset.target;
    document.getElementById(target).scrollIntoView({
      behavior: "smooth"
    });
  });
});



