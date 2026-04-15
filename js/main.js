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

/* ── 4. 제품 다중 필터 시스템 ────────────────────────────
   - 각 필터 그룹: <div class="filter-group" data-filter-group="brand">
   - 전체 체크박스: class="group-all-check"
   - 개별 체크박스: class="item-check" value="값"
   - 제품 카드:     data-brand="값" data-category="값" 등

   동작: 그룹 내 OR / 그룹 간 AND / 체크 없음=전체표시
   ─────────────────────────────────────────────────────────── */
function initProductFilter() {
  const filterGroups = document.querySelectorAll('.filter-group');
  if (!filterGroups.length) return;

  // 모든 제품 카드 (평면 그리드)
  const allCards = document.querySelectorAll('.product-card');

  function applyFilter() {
    // 그룹별 선택값 수집
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

  // 체크박스 이벤트
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
  // 카드 전체 클릭 시에도 이동
  card.style.cursor = 'pointer';
  card.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A') {
      window.location.href = 'product.html?id=' + id;
    }
  });
});

/* ── 6. 우측 고정 제품 문의 배너 (전 페이지 자동 삽입) ──── */
(function injectFloatingInquiry() {
  const banner = document.createElement('div');
  banner.className = 'floating-inquiry';
  banner.innerHTML = `
    <a href="contact.html" title="제품 문의하기">
      <span class="fi-icon">✉</span>
      제품&nbsp;문의
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
