


// Step 1: DOM Elements Select करना (ADDED/FIXED)
const navLinks = document.querySelectorAll('.navbar-links .navbar-link');
const sections = document.querySelectorAll('section'); // आपके <section id="home">, <section id="about"> आदि
const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

// Step 2: Scrollspy Logic (स्क्रॉल करते ही एक्टिव लिंक चेंज होना)
window.addEventListener('scroll', () => {
  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // चेक करना कि स्क्रॉल कहाँ पहुँचा है (1/3 स्क्रॉल ऑफसेट के साथ)
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSectionId = section.getAttribute('id');
    }
  });

  // active क्लास अपडेट करना
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
});

// Step 3: Hamburger Toggle Logic (UPDATED class to 'is-open')
if (navbarToggle && navbarLinks) {
  navbarToggle.addEventListener('click', () => {
    // is-open क्लास टॉगल करना ताकि CSS एनिमेशन चले
    navbarToggle.classList.toggle('is-open');
    navbarLinks.classList.toggle('is-open');

    const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
    navbarToggle.setAttribute('aria-expanded', !isExpanded);
  });

  // मोबाइल में लिंक क्लिक होते ही मेनु बंद हो जाना
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarToggle.classList.remove('is-open');
      navbarLinks.classList.remove('is-open');
      navbarToggle.setAttribute('aria-expanded', 'false');
    });
  });
}









// ==========================================
// JavaScript: Modal Popup Form Handler for 'Get Started' CTA 
// ==========================================

//Step 1: DOM Elements Select karna
const ctaBtn = document.querySelector('.cta-btn'); // Hero section ka 'Get Started' button
const modal = document.getElementById('contactModal'); // Popup Form overlay
const closeModal = document.getElementById('closeModal'); // Form ka Close (X) button

//Step 2: Get Started Button Click Event (Form Kholne Ke Liye)
if (ctaBtn && modal) {
  ctaBtn.addEventListener('click', () => {
    'active' //class add hote hi CSS se form visible ho jayega
    modal.classList.add('active');
  });
}

// Step 3: Close Button Click Event (Form Band Karne Ke Liye)
if (closeModal && modal) {
  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Background par kahin bhi bahar click karne se bhi form close ho jayega
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}



/* ============================================
   Coin-flip injector (Final & Clean)
   - Unique content for each card.
   - Clean single paragraph / structured back text.
   - No icons, no fallback text junk.
============================================ */
(function () {
  function initCoinFlipCards() {
    var cards = document.querySelectorAll('.feature-card');

    // Teeno cards ke liye alag aur ekdum solid professional content
    var cardBackData = [
      {
        title: "THE DIGITAL MAZE SOLVED",
        text: "Getting tangled in countless tools, shifting algorithms, and online visibility is easy. AS Pvt. Ltd. deeply analyzes your business structure to craft a custom digital roadmap that cuts through the noise and connects you directly with your customers."
      },
      {
        title: "BEYOND TEMPLATES",
        text: "Every business has its own identity, meaning standard designs won't cut it. We engineer tailor-made technological solutions built precisely around your brand's unique goals and growth trajectory."
      },
      {
        title: "100% TRANSPARENCY",
        text: "No hidden steps or guesswork. We maintain complete clarity with real-time updates and dedicated support every step of the way, ensuring you are always in control."
      }
    ];

    cards.forEach(function (card, index) {
      if (card.querySelector('.card-flip-inner')) return; // already processed

      var frontContent = card.innerHTML;
      var backData = cardBackData[index] || cardBackData[0];

      // Icon aur faltu text hta kar sirf clean title aur text rakha hai
      card.innerHTML =
        '<div class="card-flip-inner">' +
        '<div class="card-face card-face--front">' + frontContent + '</div>' +
        '<div class="card-face card-face--back">' +
        '<h3>' + backData.title + '</h3>' +
        '<p>' + backData.text + '</p>' +
        '</div>' +
        '</div>';

      // Accessibility aur click events
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-pressed', 'false');

      card.addEventListener('click', function () {
        var flipped = card.classList.toggle('is-flipped');
        card.setAttribute('aria-pressed', String(flipped));
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCoinFlipCards);
  } else {
    initCoinFlipCards();
  }
})();



function toggleService(serviceKey){
  const services = ['web', 'it', 'seo'];

  services.forEach(key => {
    const box = document.getElementById(`service-${key}`);

    if(key === serviceKey) {
      box.classList.toggle('hidden');
    } else {
      box.classList.add('hidden');
    }
  });
}

function handleServiceSubmit(event, serviceName) {
  event.preventDefault();
  alert('Thank you! Your reqirement for ${serviceName} has been recived. We will get in touch soon.');
}