// ===============================
// Navbar linkleri → sayfa yönlendirme
// ===============================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("href");

    if (target && target !== "#") {
      window.location.href = target; // farklı sayfaya yönlendir
    }
  });
});

// ===============================
// CTA butonu → contact.html sayfasına git
// ===============================
const ctaBtn = document.querySelector(".cta-btn");
if (ctaBtn) {
  ctaBtn.addEventListener("click", e => {
    e.preventDefault();
    window.location.href = "contact.html";
  });
}

// ===============================
// Form submit → alert göster
// ===============================
const contactForm = document.querySelector(".contact form");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Mesajınız başarıyla gönderildi 🚀");
    contactForm.reset();
  });
}

// ===============================
// Çeviri objesi
// ===============================
const translations = {
  tr: {
    brand: "RUNOTECH",
    home: "Ana Sayfa",
    products: "Ürünler",
    contact: "İletişim",
    heroTitle: "Endüstriyel Taşıt Tartım Sistemleri",
    heroSubtitle: "Yüksek hassasiyet, güvenilir otomasyon çözümleri.",
    cta: "Bizimle İletişime Geçin",
    contactTitle: "Bana Ulaşın",
    name: "Adınız",
    email: "E-posta",
    message: "Mesajınız",
    send: "Gönder",
    solutionsTitle: "Scalemaster Tartım Çözümleri",
    solutionsText:
      "Scalemaster taşıt-tartım sistemleri, endüstriyel ortamlarda yüksek doğruluk ve dayanıklılık sağlayan yenilikçi çözümler sunar."
  },
  en: {
    brand: "RUNOTECH",
    home: "Home",
    products: "Products",
    contact: "Contact",
    heroTitle: "Industrial Vehicle Weighing Systems",
    heroSubtitle: "High precision, reliable automation solutions.",
    cta: "Contact Us",
    contactTitle: "Get in Touch",
    name: "Your Name",
    email: "Your Email",
    message: "Your Message",
    send: "Send",
    solutionsTitle: "Scalemaster Weighing Solutions",
    solutionsText:
      "Scalemaster vehicle weighing systems provide innovative solutions ensuring high accuracy and durability in industrial environments."
  }
};

// ===============================
// Dil değiştirme fonksiyonu
// ===============================
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

// ===============================
// Dil butonları
// ===============================
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    setLanguage(lang);
    localStorage.setItem("lang", lang); // seçilen dili kaydet
  });
});

// ===============================
// Sayfa açıldığında önceki seçim yüklensin
// ===============================
const savedLang = localStorage.getItem("lang") || "tr";
setLanguage(savedLang);
