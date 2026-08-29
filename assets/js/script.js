(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============ Footer year ============ */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ============ Navbar scroll state ============ */
  var navbar = document.getElementById('navbar');
  function onScroll() {
    if (window.scrollY > 12) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ============ Mobile hamburger menu ============ */
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');

  function closeMobileMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
  }

  hamburger.addEventListener('click', function () {
    var isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('[data-nav]').forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ============ Scrollspy: highlight active nav link ============ */
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));

  var spyObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );
  sections.forEach(function (section) { spyObserver.observe(section); });

  /* ============ Scroll reveal ============ */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal-up'));
  if (prefersReducedMotion) {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ============ Hero typing effect ============ */
  var typeTarget = document.getElementById('typeTarget');
  var roles = ['[ตำแหน่งที่สนใจ เช่น Frontend Developer]', 'Full Stack Developer', 'Web Application Developer'];

  if (typeTarget && !prefersReducedMotion) {
    var roleIndex = 0, charIndex = 0, deleting = false;

    function typeLoop() {
      var current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        typeTarget.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(typeLoop, 1600);
          return;
        }
      } else {
        charIndex--;
        typeTarget.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(typeLoop, deleting ? 35 : 65);
    }
    typeLoop();
  } else if (typeTarget) {
    typeTarget.textContent = roles[0];
  }

  /* ============ Cursor glow (desktop only) ============ */
  var glow = document.querySelector('.cursor-glow');
  if (glow && window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion) {
    window.addEventListener('mousemove', function (e) {
      glow.style.transform = 'translate(' + (e.clientX - 210) + 'px, ' + (e.clientY - 210) + 'px)';
    });
  }

  /* ============ Lightbox ============ */
  var lightbox = document.getElementById('lightbox');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('[data-lightbox]').forEach(function (item) {
    item.addEventListener('click', function () {
      lightboxCaption.textContent = item.getAttribute('data-caption') || '';
      lightbox.classList.add('open');
    });
  });

  function closeLightbox() { lightbox.classList.remove('open'); }
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  /* ============ Contact form (no backend — UI only) ============ */
  var contactForm = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    formStatus.textContent = 'ยังไม่ได้เชื่อมต่อ Backend — นี่คือ UI ตัวอย่างเท่านั้น (ข้อมูลจะยังไม่ถูกส่งจริง)';
    contactForm.reset();
  });

  /* ============ Back to top ============ */
  var backToTop = document.getElementById('backToTop');
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
})();
