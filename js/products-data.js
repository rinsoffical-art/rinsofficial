/* ============================================================
   products-data.js — 전체 제품 데이터
   ★ 제품 추가/수정은 이 파일에서만 하면 됩니다.
   ============================================================

   각 제품 항목 구조:
   'id': {
     brand:    '브랜드명',
     category: '카테고리',
     model:    '모델번호',
     name:     '제품명',
     image:    '이미지 URL (또는 로컬 경로)',
     specs: {              ← 규격 항목 (키: 값 형태로 자유롭게 추가)
       '항목명': '내용',
     },
     tags:  ['태그1', '태그2'],
     desc:  '제품 상세 설명 (긴 설명)',
     docs: {               ← 관련 문서 (없으면 항목 자체를 생략하거나 '#' 입력)
       시험성적서: 'docs/test-cert/파일명.pdf',   ← 파일 경로 또는 외부 URL
       절수확인서:  'docs/water-cert/파일명.pdf',  ← 절수형 제품에만 추가
       시공도면:    'docs/drawings/파일명.pdf',
     },
   }
   ★ docs 항목은 실제 파일이 있을 때만 넣으세요. '#' 이면 버튼이 표시되지 않습니다.
   ============================================================ */

const PRODUCTS = {

  /* ── 대림바스 · 양변기 ────────────────────────────────── */

  'p-001': {
    brand: '대림바스', category: '양변기',
    model: 'CC-107', name: 'CC-107',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210020000442.jpg',
    specs: { '규격': 'KS규격 C2010C', '배수방식': '바닥배수' },
    tags: ['양변기'],
    desc: '대림바스 CC-107 양변기입니다. KS규격 C2010C를 충족하는 제품으로, 내구성과 위생성이 뛰어납니다.',
  },
  'p-002': {
    brand: '대림바스', category: '양변기',
    model: 'CC-110', name: 'CC-110',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210020000462.jpg',
    specs: { '규격': 'KS규격' },
    tags: ['양변기'],
    desc: '대림바스 CC-110 양변기입니다. KS규격 인증 제품입니다.',
  },
  'p-003': {
    brand: '대림바스', category: '양변기',
    model: 'CC-214', name: 'CC-214',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210020000022.jpg',
    specs: { '규격': 'KS규격 C2020C' },
    tags: ['양변기'],
    desc: '대림바스 CC-214 양변기입니다. KS규격 C2020C 인증 제품입니다.',
  },
  'p-004': {
    brand: '대림바스', category: '양변기',
    model: 'CC-230', name: 'CC-230',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210020000032.jpg',
    specs: { '규격': '표준규격' },
    tags: ['양변기'],
    desc: '대림바스 CC-230 양변기입니다. 표준규격 제품입니다.',
  },
  'p-005': {
    brand: '대림바스', category: '양변기',
    model: 'CC-256', name: 'CC-256',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210020000052.jpg',
    specs: { '규격': 'KS규격 C2010C' },
    tags: ['양변기'],
    desc: '대림바스 CC-256 양변기입니다. KS규격 C2010C 인증 제품입니다.',
  },
  'p-006': {
    brand: '대림바스', category: '양변기',
    model: 'CC-260', name: 'CC-260',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210020000062.jpg',
    specs: { '규격': '표준규격' },
    tags: ['양변기'],
    desc: '대림바스 CC-260 양변기입니다. 표준규격 제품입니다.',
  },
  'p-007': {
    brand: '대림바스', category: '양변기',
    model: 'CC-280', name: 'CC-280',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210020000072.jpg',
    specs: { '규격': '표준규격' },
    tags: ['양변기'],
    desc: '대림바스 CC-280 양변기입니다. 표준규격 제품입니다.',
  },
  'p-008': {
    brand: '대림바스', category: '양변기',
    model: 'CC-723', name: 'CC-723',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210020000252.jpg',
    specs: { '규격': 'KS규격 C1210CR3', '타입': '절수형' },
    tags: ['양변기', '절수형'],
    desc: '대림바스 CC-723 양변기입니다. KS규격 C1210CR3 인증 절수형 제품입니다.',
    docs: {
      시험성적서: '#',   // ★ 실제 파일 경로로 변경 (예: 'docs/test-cert/CC-723.pdf')
      절수확인서:  '#',   // ★ 실제 파일 경로로 변경
      시공도면:    '#',   // ★ 실제 파일 경로로 변경
    },
  },
  'p-009': {
    brand: '대림바스', category: '양변기',
    model: 'CC-724', name: 'CC-724',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210020000262.jpg',
    specs: { '규격': 'KS규격 C1210CR3', '타입': '절수형' },
    tags: ['양변기', '절수형'],
    desc: '대림바스 CC-724 양변기입니다. KS규격 C1210CR3 인증 절수형 제품입니다.',
  },
  'p-010': {
    brand: '대림바스', category: '양변기',
    model: 'CC-728', name: 'CC-728',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210020000272.jpg',
    specs: { '규격': 'KS규격 C1210CR3', '타입': '절수형' },
    tags: ['양변기', '절수형'],
    desc: '대림바스 CC-728 양변기입니다. KS규격 C1210CR3 인증 절수형 제품입니다.',
  },
  'p-011': {
    brand: '대림바스', category: '양변기',
    model: 'CC-730', name: 'CC-730',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210020000282.jpg',
    specs: { '규격': 'KS규격 C1210CR2', '타입': '절수형' },
    tags: ['양변기', '절수형'],
    desc: '대림바스 CC-730 양변기입니다. KS규격 C1210CR2 인증 절수형 제품입니다.',
  },
  'p-012': {
    brand: '대림바스', category: '양변기',
    model: 'CC-751', name: 'CC-751',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210020000312.jpg',
    specs: { '규격': 'KS규격 C1210CR3', '타입': '절수형' },
    tags: ['양변기', '절수형'],
    desc: '대림바스 CC-751 양변기입니다. KS규격 C1210CR3 인증 절수형 제품입니다.',
  },

  /* ── 대림바스 · 세면기 ────────────────────────────────── */

  'p-013': {
    brand: '대림바스', category: '세면기',
    model: 'CL 332', name: 'CL 332',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210040000012.jpg',
    specs: { '규격': '표준규격', '타입': '벽걸이형' },
    tags: ['세면기'],
    desc: '대림바스 CL 332 세면기입니다. 표준규격 벽걸이형 세면기입니다.',
  },
  'p-014': {
    brand: '대림바스', category: '세면기',
    model: 'CL 333D', name: 'CL 333D',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210040000302.jpg',
    specs: { '타입': '더블싱크형' },
    tags: ['세면기', '더블싱크'],
    desc: '대림바스 CL 333D 세면기입니다. 더블싱크형으로 두 사람이 동시에 사용 가능합니다.',
  },
  'p-015': {
    brand: '대림바스', category: '세면기',
    model: 'CL 336D', name: 'CL 336D',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210040000322.jpg',
    specs: { '타입': '더블싱크형' },
    tags: ['세면기', '더블싱크'],
    desc: '대림바스 CL 336D 세면기입니다. 더블싱크형 제품입니다.',
  },
  'p-016': {
    brand: '대림바스', category: '세면기',
    model: 'CL 340', name: 'CL 340',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210040000352.jpg',
    specs: { '규격': '표준규격' },
    tags: ['세면기'],
    desc: '대림바스 CL 340 세면기입니다. 표준규격 제품입니다.',
  },
  'p-017': {
    brand: '대림바스', category: '세면기',
    model: 'CL 341', name: 'CL 341',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210040000362.jpg',
    specs: { '규격': '표준규격' },
    tags: ['세면기'],
    desc: '대림바스 CL 341 세면기입니다. 표준규격 제품입니다.',
  },
  'p-018': {
    brand: '대림바스', category: '세면기',
    model: 'CL 347D', name: 'CL 347D',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210040000382.jpg',
    specs: { '타입': '더블싱크형' },
    tags: ['세면기', '더블싱크'],
    desc: '대림바스 CL 347D 세면기입니다. 더블싱크형 제품입니다.',
  },
  'p-019': {
    brand: '대림바스', category: '세면기',
    model: 'CL 360', name: 'CL 360',
    image: 'https://www.daelimplus.com/shopimages/hsmok0326/0210040000462.jpg',
    specs: { '규격': '표준규격' },
    tags: ['세면기'],
    desc: '대림바스 CL 360 세면기입니다. 표준규격 제품입니다.',
  },

  /* ── 로얄앤컴퍼니 · 세면수전 ──────────────────────────── */

  'p-020': {
    brand: '로얄앤컴퍼니', category: '세면수전',
    model: 'RLS3010-Y1', name: '모드 센 1홀 세면수전',
    image: 'https://new.royaltoto.co.kr/Prod/RLS3010-Y1/MI/png/RLS3010-Y1.png',
    specs: { '홀수': '1홀', '마감': '크롬' },
    tags: ['세면수전', '1홀'],
    desc: '로얄앤컴퍼니 모드 센 라인의 1홀 세면수전입니다. 세련된 디자인과 뛰어난 내구성을 자랑합니다.',
  },
  'p-021': {
    brand: '로얄앤컴퍼니', category: '세면수전',
    model: 'RLS3010', name: '모드 쿠로 1홀 세면수전',
    image: 'https://new.royaltoto.co.kr/Prod/RLS3010/MI/png/RLS3010.png',
    specs: { '홀수': '1홀', '마감': '무광블랙(쿠로)' },
    tags: ['세면수전', '1홀', '무광블랙'],
    desc: '로얄앤컴퍼니 모드 쿠로 라인의 1홀 세면수전입니다. 무광 블랙 마감으로 고급스러운 분위기를 연출합니다.',
  },
  'p-022': {
    brand: '로얄앤컴퍼니', category: '세면수전',
    model: 'RLS5010', name: '캐니언 플랫 1홀 세면수전',
    image: 'https://new.royaltoto.co.kr/Prod/RLS5010/MI/png/RLS5010-CR.png',
    specs: { '홀수': '1홀', '핸들': '큐브핸들', '마감': '크롬' },
    tags: ['세면수전', '1홀', '큐브핸들'],
    desc: '로얄앤컴퍼니 캐니언 플랫 라인의 1홀 세면수전입니다. 큐브핸들 디자인이 특징입니다.',
  },
  'p-023': {
    brand: '로얄앤컴퍼니', category: '세면수전',
    model: 'RLS5020-W1', name: '캐니언 플랫 2홀 세면수전',
    image: 'https://new.royaltoto.co.kr/Prod/RLS5020-W1/MI/png/RLS5020-W1-CR.png',
    specs: { '홀수': '2홀', '마감': '크롬' },
    tags: ['세면수전', '2홀'],
    desc: '로얄앤컴퍼니 캐니언 플랫 라인의 2홀 세면수전입니다.',
  },
  'p-024': {
    brand: '로얄앤컴퍼니', category: '세면수전',
    model: 'RLS5010-W2', name: '캐니언 웨이브 1홀 세면수전',
    image: 'https://new.royaltoto.co.kr/Prod/RLS5010-W2/MI/png/RLS5010-W2-CR.png',
    specs: { '홀수': '1홀', '핸들': '큐브핸들', '마감': '크롬' },
    tags: ['세면수전', '1홀', '큐브핸들'],
    desc: '로얄앤컴퍼니 캐니언 웨이브 라인의 1홀 세면수전입니다.',
  },
  'p-025': {
    brand: '로얄앤컴퍼니', category: '세면수전',
    model: 'RLS5010S-W3', name: '캐니언 웨이브 1홀 세면수전 사틴',
    image: 'https://new.royaltoto.co.kr/Prod/RLS5010S-W3/MI/png/RLS5010S-W3.png',
    specs: { '홀수': '1홀', '마감': '사틴(무광실버)' },
    tags: ['세면수전', '1홀', '사틴'],
    desc: '로얄앤컴퍼니 캐니언 웨이브 라인의 1홀 세면수전 사틴 마감 제품입니다.',
  },
  'p-026': {
    brand: '로얄앤컴퍼니', category: '세면수전',
    model: 'RLSZ10', name: '다이브 1홀 세면수전',
    image: 'https://new.royaltoto.co.kr/Prod/RLSZ10/MI/png/RLSZ10_MAIN.png',
    specs: { '홀수': '1홀', '마감': '크롬' },
    tags: ['세면수전', '1홀'],
    desc: '로얄앤컴퍼니 다이브 라인의 1홀 세면수전입니다.',
  },

  /* ── 로얄앤컴퍼니 · 샤워수전 ──────────────────────────── */

  'p-027': {
    brand: '로얄앤컴퍼니', category: '샤워수전',
    model: 'RBS3000', name: '모드 쿠로 2WAY 욕조샤워수전',
    image: 'https://new.royaltoto.co.kr/Prod/RBS3000/MI/png/RBS3000_mid.png',
    specs: { '방식': '2WAY', '타입': '욕조샤워 겸용', '마감': '무광블랙(쿠로)' },
    tags: ['샤워수전', '욕조겸용'],
    desc: '로얄앤컴퍼니 모드 쿠로 라인의 2WAY 욕조샤워수전입니다. 무광 블랙 마감 제품입니다.',
  },
  'p-028': {
    brand: '로얄앤컴퍼니', category: '샤워수전',
    model: 'RBS3000-Y2', name: '모드 센 2WAY 욕조샤워수전',
    image: 'https://new.royaltoto.co.kr/Prod/RBS3000-Y2/MI/png/RBS3000-Y2_mid.png',
    specs: { '방식': '2WAY', '타입': '욕조샤워 겸용', '마감': '크롬' },
    tags: ['샤워수전', '욕조겸용'],
    desc: '로얄앤컴퍼니 모드 센 라인의 2WAY 욕조샤워수전입니다.',
  },
  'p-029': {
    brand: '로얄앤컴퍼니', category: '샤워수전',
    model: 'RBS5000S', name: '캐니언 플랫 2WAY 욕조샤워수전 사틴',
    image: 'https://new.royaltoto.co.kr/Prod/RBS5000S/MI/png/RBS5000S_MAIN.png',
    specs: { '방식': '2WAY', '타입': '욕조샤워 겸용', '마감': '사틴' },
    tags: ['샤워수전', '욕조겸용', '사틴'],
    desc: '로얄앤컴퍼니 캐니언 플랫 라인의 2WAY 욕조샤워수전 사틴 마감 제품입니다.',
  },
  'p-030': {
    brand: '로얄앤컴퍼니', category: '샤워수전',
    model: 'RBS5010S', name: '캐니언 웨이브 2WAY 욕조샤워수전 사틴',
    image: 'https://new.royaltoto.co.kr/Prod/RBS5010S/MI/png/RBS5010S_MAIN.png',
    specs: { '방식': '2WAY', '타입': '욕조샤워 겸용', '마감': '사틴' },
    tags: ['샤워수전', '욕조겸용', '사틴'],
    desc: '로얄앤컴퍼니 캐니언 웨이브 라인의 2WAY 욕조샤워수전 사틴 마감 제품입니다.',
  },
  'p-031': {
    brand: '로얄앤컴퍼니', category: '샤워수전',
    model: 'RBSZ00', name: '다이브 2WAY 욕조샤워수전',
    image: 'https://new.royaltoto.co.kr/Prod/RBSZ00/MI/png/RBSZ00_MAIN.png',
    specs: { '방식': '2WAY', '타입': '욕조샤워 겸용', '마감': '크롬' },
    tags: ['샤워수전', '욕조겸용'],
    desc: '로얄앤컴퍼니 다이브 라인의 2WAY 욕조샤워수전입니다.',
  },
  'p-032': {
    brand: '로얄앤컴퍼니', category: '샤워수전',
    model: 'RBS1000', name: '유니 2WAY 욕조샤워수전',
    image: 'https://new.royaltoto.co.kr/Prod/RBS1000/MI/png/RBS1000_MAIN.png',
    specs: { '방식': '2WAY', '타입': '욕조샤워 겸용', '마감': '크롬' },
    tags: ['샤워수전', '욕조겸용'],
    desc: '로얄앤컴퍼니 유니 라인의 2WAY 욕조샤워수전입니다.',
  },

  /* ── 로얄앤컴퍼니 · 레인샤워수전 ─────────────────────── */

  'p-033': {
    brand: '로얄앤컴퍼니', category: '레인샤워수전',
    model: 'RBS3051', name: '모드 쿠로 2WAY 레인샤워',
    image: 'https://new.royaltoto.co.kr/Prod/RBS3051/MI/png/RBS3051_mid.png',
    specs: { '방식': '2WAY', '타입': '레인샤워', '마감': '무광블랙(쿠로)' },
    tags: ['레인샤워수전'],
    desc: '로얄앤컴퍼니 모드 쿠로 라인의 2WAY 레인샤워입니다.',
  },
  'p-034': {
    brand: '로얄앤컴퍼니', category: '레인샤워수전',
    model: 'RBS3051-Y2', name: '모드 센 2WAY 레인샤워',
    image: 'https://new.royaltoto.co.kr/Prod/RBS3051-Y2/MI/png/RBS3051-Y2_mid.png',
    specs: { '방식': '2WAY', '타입': '레인샤워', '마감': '크롬' },
    tags: ['레인샤워수전'],
    desc: '로얄앤컴퍼니 모드 센 라인의 2WAY 레인샤워입니다.',
  },
  'p-035': {
    brand: '로얄앤컴퍼니', category: '레인샤워수전',
    model: 'RBS5035', name: '캐니언 플랫 3WAY 레인샤워',
    image: 'https://new.royaltoto.co.kr/Prod/RBS5035/MI/png/RBS5035.png',
    specs: { '방식': '3WAY', '타입': '레인샤워', '마감': '크롬' },
    tags: ['레인샤워수전'],
    desc: '로얄앤컴퍼니 캐니언 플랫 라인의 3WAY 레인샤워입니다.',
  },
  'p-036': {
    brand: '로얄앤컴퍼니', category: '레인샤워수전',
    model: 'RBS5035S', name: '캐니언 플랫 3WAY 레인샤워 사틴',
    image: 'https://new.royaltoto.co.kr/Prod/RBS5035S/MI/png/RBS5035S.png',
    specs: { '방식': '3WAY', '타입': '레인샤워', '마감': '사틴' },
    tags: ['레인샤워수전', '사틴'],
    desc: '로얄앤컴퍼니 캐니언 플랫 라인의 3WAY 레인샤워 사틴 마감 제품입니다.',
  },
  'p-037': {
    brand: '로얄앤컴퍼니', category: '레인샤워수전',
    model: 'RBS5045S', name: '캐니언 웨이브 3WAY 레인샤워 사틴',
    image: 'https://new.royaltoto.co.kr/Prod/RBS5045S/MI/png/RBS5045S.png',
    specs: { '방식': '3WAY', '타입': '레인샤워', '마감': '사틴' },
    tags: ['레인샤워수전', '사틴'],
    desc: '로얄앤컴퍼니 캐니언 웨이브 라인의 3WAY 레인샤워 사틴 마감 제품입니다.',
  },
  'p-038': {
    brand: '로얄앤컴퍼니', category: '레인샤워수전',
    model: 'RBSZ35', name: '다이브 3WAY 레인샤워',
    image: 'https://new.royaltoto.co.kr/Prod/RBSZ35/MI/png/RBSZ35.png',
    specs: { '방식': '3WAY', '타입': '레인샤워', '마감': '크롬' },
    tags: ['레인샤워수전'],
    desc: '로얄앤컴퍼니 다이브 라인의 3WAY 레인샤워입니다.',
  },

};
