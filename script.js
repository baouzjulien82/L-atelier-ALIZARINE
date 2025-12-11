// ===============================
// NAVBAR : fermer le menu au clic
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne tous les liens sauf ceux du dropdown
  document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)')
    .forEach(function (navLink) {
      navLink.addEventListener('click', function () {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        // Si le menu est ouvert, on le ferme
        if (navbarCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapse, { toggle: true });
        }
      });
    });
});

// ===============================
// FOOTER : année dynamique
// ===============================
document.getElementById("year").textContent = new Date().getFullYear();

// ===============================
// GALERIE : ouverture du lightbox
// ===============================
document.querySelectorAll('.galerie-img img').forEach(img => {
  img.addEventListener('click', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex'; // affiche le lightbox
    lightboxImg.src = this.src.replace("-thumbnail", ""); // remplace la miniature par l’image originale
  });
});

// ===============================
// LIGHTBOX : fermeture
// ===============================
// Fermer au clic sur le bouton "X"
document.querySelector('.lightbox .close').addEventListener('click', function () {
  document.getElementById('lightbox').style.display = 'none';
});

// Fermer au clic sur le fond (hors image)
document.getElementById('lightbox').addEventListener('click', function (e) {
  if (e.target === this) { // uniquement si on clique sur le fond
    this.style.display = 'none';
  }
});

// ===============================
// COOKIES : bannière de consentement (pour développement ultérieur car pas utile pour le moment)
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");

  // Vérifie si l'utilisateur a déjà donné son choix
  if (localStorage.getItem("cookiesConsent")) {
    banner.style.display = "none";
  }

  // Bouton "Accepter"
  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesConsent", "accepted");
    banner.style.display = "none";
    // Ici activer tes scripts externes (FB, Insta, Analytics)
  });

  // Bouton "Refuser"
  rejectBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesConsent", "rejected");
    banner.style.display = "none";
    // Ici bloquer ou ne pas charger les scripts externes
  });
});