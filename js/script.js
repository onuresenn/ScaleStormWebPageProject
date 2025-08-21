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

const logo = document.querySelector(".logo");
if (logo) {
  logo.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}


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
    download: "İndir",
    heroTitle: "Endüstriyel Taşıt Tartım Otomasyon Sistemleri",
    heroSubtitle: "Yüksek hassasiyet, güvenilir ve hızlı otomasyon çözümleri.",
    cta: "Benimle İletişime Geçin",
    contactTitle: "Bana Ulaşın",
    name: "Adınız",
    email: "E-posta",
    message: "Mesajınız",
    send: "Gönder",
    solutionsTitle: "Scalemaster Tartım Çözümleri",
    solutionsText:
      "<strong>SCALEMASTER</strong> taşıt tartım sistemleri, endüstriyel ortamlarda yüksek doğruluk ve dayanıklılık sağlayan yenilikçi çözümler sunar.",

    intro_title: "SCALEMASTER",
    intro_text: "Scalemaster, gelişmiş veri işleme ve kapsamlı raporlama yetenekleriyle güvenilir bir çözüm sunar. Esnek altyapısı sayesinde taşıt kantarlarının yönetiminde tüm ihtiyaçlara uyum sağlar. Kullanıcı dostu arayüzü, renkli ve anlaşılır menü yapısı ile her seviyeden personelin kolayca öğrenip zorlanmadan kullanabileceği şekilde tasarlanmıştır.",

    scalemaster_title: "SCALEMASTER",
    connect_title: "SCALEMASTER CONNECT",
    automation_title: "SCALEMASTER AUTOMATION",

    program_features: "Program Özellikleri",
    options: "Opsiyonlar",

    feature_multi_lang: "🌍 4 farklı dilde menü seçeneği",
    feature_unlimited_storage: "💾 Sınırsız kayıt hafızası",
    feature_user_menu: "🎨 Kolay anlaşılabilir, renkli ve kullanıcı dostu menü",
    feature_simple_menu: "🎨 Kolay anlaşılabilir, basit ve renkli menü yapısı",
    feature_custom_fields: "📝 Kullanıcı tarafından tanımlanabilir bilgi alanları",
    feature_comm_speed: "⚡ Ayarlanabilir haberleşme hızı ve yapısı",
    feature_dual_scale: "💻 Tek bilgisayar üzerinden çift kantar yönetimi",
    feature_tare_vehicle: "🚛 Sürekli tartılan araçlar için dara kaydı ve tanımlı araçlar tablosu",
    feature_single_double: "⚖️ Tek tartım veya çift tartım modu seçimi",
    feature_reports: "📊 Sınırsız tipte özet ve detaylı rapor imkanı",
    feature_excel: "📑 MS Excel formatında rapor alma desteği",

    option_multi_location: "🌐 Birden fazla bağımsız lokasyondan erişim imkanı",
    option_db_integration: "🔗 İstenen veritabanına entegrasyon seçeneği",
    option_license_plate: "📷 Otomatik plaka okuma ve tanıma entegrasyonu",
    option_barrier: "🚦 Otomatik bariyer entegrasyonu",
    option_terminal: "💻 Terminal entegrasyonu",
    option_sensor: "🎛️ Özel isteğe bağlı sensör entegrasyonu",

    products_img_alt: "Ürünler Görseli",

    contact_title: "İletişim Bilgileri",
    contact_desc: "Bana aşağıdaki iletişim bilgilerinden ulaşabilirsiniz.",
    address: "Adres",
    phone: "Telefon",
    email: "E-posta",


    pageTitle: "İndirmeler",
    pageDesc: "Kurulum dosyaları ve dokümanlara aşağıdan ulaşabilirsiniz.",
    docTitle: "Doküman",
    docDesc: "Kullanım kılavuzu ve kurulum notları.",
    docBtn: "📄 PDF İndir",
    setupTitle: "Kurulum",
    setupDesc: "Scalemaster kurulum dosyası.",
    setupBtn: "⚙️ Kurulum İndir"

  },
  en: {
    brand: "RUNOTECH",
    home: "Home",
    products: "Products",
    contact: "Contact",
    download: "Download",
    heroTitle: "Industrial Vehicle Weighing Automation Systems",
    heroSubtitle: "High-precision, reliable, and fast automation solutions.",
    cta: "Contact Me",
    contactTitle: "Get in Touch",
    name: "Your Name",
    email: "Your Email",
    message: "Your Message",
    send: "Send",
    solutionsTitle: "Scalemaster Weighing Solutions",
    solutionsText:
      "<strong>SCALEMASTER</strong> vehicle weighing systems provide innovative solutions ensuring high accuracy and durability in industrial environments.",

    intro_title: "SCALEMASTER",
    intro_text: "Scalemaster offers a reliable solution with advanced data processing and comprehensive reporting capabilities. Thanks to its flexible infrastructure, it adapts to all needs in weighbridge management. With its user-friendly interface and colorful, easy-to-understand menu structure, it is designed to be easily learned and used by personnel at all levels.",


    scalemaster_title: "SCALEMASTER",
    connect_title: "SCALEMASTER CONNECT",
    automation_title: "SCALEMASTER AUTOMATION",

    program_features: "Program Features",
    options: "Options",

    feature_multi_lang: "🌍 Menu option in 4 different languages",
    feature_unlimited_storage: "💾 Unlimited record storage",
    feature_user_menu: "🎨 Easy-to-understand, colorful and user-friendly menu",
    feature_simple_menu: "🎨 Simple, colorful and easy-to-use menu",
    feature_custom_fields: "📝 User-definable information fields",
    feature_comm_speed: "⚡ Adjustable communication speed and structure",
    feature_dual_scale: "💻 Dual scale management from a single computer",
    feature_tare_vehicle: "🚛 Tare registration and predefined vehicle table for frequently weighed vehicles",
    feature_single_double: "⚖️ Single weighing or double weighing mode selection",
    feature_reports: "📊 Unlimited types of summary and detailed reports",
    feature_excel: "📑 Excel format reporting support",

    option_multi_location: "🌐 Access option from multiple independent locations",
    option_db_integration: "🔗 Integration with the desired database",
    option_license_plate: "📷 Automatic license plate recognition integration",
    option_barrier: "🚦 Automatic barrier integration",
    option_terminal: "💻 Terminal integration",
    option_sensor: "🎛️ Custom sensor integration on request",

    products_img_alt: "Products Image",

    contact_title: "Contact Information",
    contact_desc: "You can reach me using the information below.",
    address: "Address",
    phone: "Phone",
    email: "Email",

    pageTitle: "Downloads",
    pageDesc: "You can access installation files and documents below.",
    docTitle: "Document",
    docDesc: "User manual and installation notes.",
    docBtn: "📄 Download PDF",
    setupTitle: "Setup",
    setupDesc: "Scalemaster installation file.",
    setupBtn: "⚙️ Download Setup"

  }
};

// ===============================
// Dil değiştirme fonksiyonu
// ===============================
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
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
// Aktif menüyü işaretleme
// ===============================
function markActiveNav() {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach((a) => {
    const href = a.getAttribute("href");
    a.classList.toggle("active", href === current);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // ... senin mevcut nav, logo, cta vs kodların ...
  markActiveNav();
});


document.getElementById("contact-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    document.getElementById("form-message").innerText = "Mesajınız başarıyla gönderildi!";
    form.reset();
  } else {
    document.getElementById("form-message").innerText = "Bir hata oluştu, tekrar deneyin.";
  }
});


// ===============================
// Sayfa açıldığında önceki seçim yüklensin
// ===============================
const savedLang = localStorage.getItem("lang") || "tr";
setLanguage(savedLang);
