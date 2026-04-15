/* ============================================================
   main.js — 홈페이지 동작 스크립트
   ============================================================ */

/* ── 1. 모바일 햄버거 + 아코디언 서브메뉴 ──────────────── */
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

if (hamburger && mobileNav) {
  // 햄버거 열기/닫기
  hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));

  // 외부 클릭 시 닫기
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target))
      mobileNav.classList.remove('open');
  });

  // 모바일 아코디언 서브메뉴
  mobileNav.querySelectorAll('.mob-toggle:not(.is-link)').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.mob-item');
      const isOpen = item.classList.contains('open');
      // 다른 열린 항목 닫기
      mobileNav.querySelectorAll('.mob-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // 서브메뉴 링크 클릭 시 전체 메뉴 닫기
  mobileNav.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => mobileNav.classList.remove('open'))
  );
}

/* ── 2. 홈 투명 헤더 — 스크롤·네비 호버 시 흰 배경 전환 ── */
(function initTransparentHeader() {
  const hdr = document.querySelector('.header-transparent');
  if (!hdr) return;

  // 스크롤 감지
  function onScroll() {
    hdr.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 네비 호버 감지
  hdr.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', () => hdr.classList.add('nav-hovered'));
    item.addEventListener('mouseleave', () => hdr.classList.remove('nav-hovered'));
  });
})();

/* ── 3. 현재 페이지 메뉴 활성화 ─────────────────────────── */
(function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a, .mobile-nav a').forEach(link => {
    if (link.getAttribute('href') === current) link.classList.add('active');
  });
})();

/* ── 3. 스크롤 시 헤더 그림자 ───────────────────────────── */
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 2px 12px rgba(0,0,0,0.08)' : 'none';
  });
}

/* ── 4. 제품 다중 필터 시스템 ──────────────────────────── */
function initProductFilter() {
  const filterGroups = document.querySelectorAll('.filter-group');
  if (!filterGroups.length) return;

  const allCards = document.querySelectorAll('.product-card');

  function applyFilter() {
    const activeFilters = {};
    filterGroups.forEach(group => {
      const key = group.dataset.filterGroup;
      const vals = [...group.querySelectorAll('.item-check:checked')].map(cb => cb.value);
      if (!activeFilters[key]) activeFilters[key] = [];
      activeFilters[key].push(...vals);
    });

    const hasAnyFilter = Object.values(activeFilters).some(v => v.length > 0);
    let visibleCount = 0;

    allCards.forEach(card => {
      const show = Object.entries(activeFilters).every(([key, vals]) => {
        if (!vals.length) return true;
        return vals.includes(card.dataset[key] || '');
      });
      card.style.display = show ? '' : 'none';
      if (show) visibleCount++;
    });

    const noResult = document.getElementById('no-result');
    if (noResult) {
      noResult.style.display = (hasAnyFilter && visibleCount === 0) ? '' : 'none';
    }
  }

  filterGroups.forEach(group => {
    const allCheck   = group.querySelector('.group-all-check');
    const itemChecks = group.querySelectorAll('.item-check');

    if (allCheck) {
      allCheck.addEventListener('change', () => {
        itemChecks.forEach(cb => { cb.checked = false; });
        applyFilter();
      });
    }
    itemChecks.forEach(cb => {
      cb.addEventListener('change', () => {
        if (allCheck) allCheck.checked = false;
        applyFilter();
      });
    });
  });

  applyFilter();
}

initProductFilter();

/* ── 5. 제품 카드 → 상세 페이지 링크 자동 연결 ──────────── */
document.querySelectorAll('.product-card').forEach(card => {
  const id = card.id;
  if (!id) return;
  const btn = card.querySelector('.product-detail-link');
  if (btn) btn.href = 'product.html?id=' + id;
  card.style.cursor = 'pointer';
  card.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A') {
      window.location.href = 'product.html?id=' + id;
    }
  });
});

/* ── 6. 우측 고정 제품 문의 배너 (전 페이지 자동 삽입) ──── */
(function injectFloatingInquiry() {
  const KAKAO_CHAT_URL = 'https://pf.kakao.com/_xbxendX/chat';
  const banner = document.createElement('div');
  banner.className = 'floating-inquiry';
  banner.innerHTML = `
    <a href="${KAKAO_CHAT_URL}" target="_blank" rel="noopener" title="카카오톡 채널 문의">
      <svg class="fi-logo" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="30" fill="#FEE500"/>
        <path d="M30 13C19.5 13 11 20.2 11 29c0 5.6 3.4 10.5 8.6 13.4l-1.8 8.6 8.4-4.9c1.5.3 3.1.4 4.8.4 10.5 0 19-7.2 19-16S40.5 13 30 13z" fill="#3C1E1E"/>
        <rect x="21" y="26" width="18" height="2.8" rx="1.4" fill="#FEE500"/>
        <rect x="21" y="31.5" width="13" height="2.8" rx="1.4" fill="#FEE500"/>
      </svg>
      카카오톡<br>문의
    </a>
  `;
  document.body.appendChild(banner);
})();

/* ── 7. 문의 폼 ──────────────────────────────────────────── */
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('문의가 접수되었습니다.\n빠른 시일 내에 연락드리겠습니다.');
    contactForm.reset();
  });
}
