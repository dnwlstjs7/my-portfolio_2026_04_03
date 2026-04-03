// Nav scroll border
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }
});

// Fade-up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Custom cursor
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');

if (cursor && ring) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    ring.style.left   = e.clientX + 'px';
    ring.style.top    = e.clientY + 'px';
  });

  document.querySelectorAll('a, .tag, .goal-card, img').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width  = '14px'; cursor.style.height = '14px';
      ring.style.width  = '46px'; ring.style.height = '46px';
      // 호버 시 살짝 초록빛의 배경이 들어가 생동감을 줌
      ring.style.backgroundColor = 'rgba(0, 255, 102, 0.08)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width  = '8px'; cursor.style.height = '8px';
      ring.style.width  = '30px'; ring.style.height = '30px';
      ring.style.backgroundColor = 'transparent';
    });
  });
}
