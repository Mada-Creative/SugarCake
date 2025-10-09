const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// فتح أو إغلاق المنيو لما نضغط على زر الساندويش
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// إغلاق المنيو بعد اختيار أي عنصر منها
const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active"); // ⬅️ يغلق المنيو
  });
});

// التحكم في حجم الهيدر عند السحب
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    // لما ينزل المستخدم 50px
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

AOS.init({
  duration: 1000,
  once: true,
});

const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    current = i;
    showSlide(i);
  });
});

setInterval(nextSlide, 3000); // ⏳ تغيير كل 4 ثوانٍ
