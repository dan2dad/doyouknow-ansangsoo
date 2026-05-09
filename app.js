'use strict';

/* ================================================================
   AG 안상수체 알아보기 — app.js
   이미지 자료 기반 콘텐츠
   ================================================================ */

/* ── 카테고리별 콘텐츠 ── */
const PAGES = {

  /* HOME — 2분할: 왼쪽 목록 + 오른쪽 호버 설명 */
  home: {
    title: '메인 홈',
    num: '◆',
    render() {
      return `
        <div class="hm-split">
          <nav class="hm-split-left">
            <div class="hm-split-menu">
              <button class="hm-group-btn" data-group="history">
                <span class="hm-group-range">01 – 03</span>
                <span class="hm-group-name">역사·배경</span>
                <span class="hm-group-arr">→</span>
              </button>
              <button class="hm-group-btn" data-group="structure">
                <span class="hm-group-range">04 – 06</span>
                <span class="hm-group-name">구조·원리</span>
                <span class="hm-group-arr">→</span>
              </button>
              <button class="hm-group-btn" data-group="digital">
                <span class="hm-group-range">07 – 08</span>
                <span class="hm-group-name">디지털·현재</span>
                <span class="hm-group-arr">→</span>
              </button>
              <button class="hm-group-btn" data-group="typing">
                <span class="hm-group-range">▶</span>
                <span class="hm-group-name">세벌식 타자연습</span>
                <span class="hm-group-arr">→</span>
              </button>
            </div>
          </nav>
          <div class="hm-split-right" id="hm-preview"></div>
        </div>
      `;
    }
  },

  /* 01. 안상수체의 탄생 */
  birth: {
    title: '안상수체의 탄생',
    num: '01',
    render() {
      return `
        <div class="desc-header">
          <span class="desc-num">01</span>
          <span class="desc-title">안상수체의 탄생</span>
          <span class="desc-sub">1985</span>
        </div>

        <div class="desc-visual-large">AG  안상수체  2012</div>

        <p>⟨안상수체⟩는 디자이너 안상수가 1985년 설계한 세벌식 탈네모틀 글꼴이다. 첫닿자 19자, 홀자 21자, 받침 27자를 조합하여 11,172자를 파생하는 세벌식 조합 글꼴로, 한글 자소는 수직선, 수평선, 사선, 정원 등 기하학적 형태로 구성됐으며 홀자의 기둥이 길게 뻗어서 받침의 정가운데에 맞닿아 있는 것이 특징이다.</p>

        <div class="desc-two-col" style="margin-top:18px;">
          <div class="info-box">
            <div class="info-box-title">탄생 배경</div>
            <p>1985년 12월 제3회 〈홍익시각디자이너협회 회원전〉 포스터에 처음 사용되었으며, 이듬해 1986년 1월 창간된 <em>《과학동아》</em>의 제호 작업에도 쓰였다.</p>
            <p>안상수는 1984년 벡터 방식의 캐드 프로그램(오토캐드 2.1)을 활용해 훈민정음의 창제 원리에 기반하여 낱소리·홀소리의 자소를 독립된 단위로 조합하는 방식으로 글자 체계를 설계하고, 최소한의 자소로 가장 많은 글자를 구성할 수 있는 한글 본래의 조합 논리를 디지털 환경에 적용했다.</p>
          </div>
          <div class="info-box">
            <div class="info-box-title">안상수 교수는?</div>
            <p>안상수는 1952년생 시각디자이너로, 홍익대학교 시각디자인과 교수를 역임했다. 한국 현대 타이포그래피를 이끈 선구자로, 1988년 《보고서/보고서》를 창간하며 타이포그래피 실험을 이어갔다.</p>
            <p>파주타이포그라피학교(PaTI)를 설립하여 실험적 타이포그래피 교육의 장을 마련했다.</p>
          </div>
        </div>

        <div class="timeline">
          <div class="tl-item">
            <div class="tl-year">1984</div>
            <div class="tl-line"><div class="tl-dot"></div><div class="tl-bar"></div></div>
            <div class="tl-body"><strong>캐드 프로그램으로 시작</strong> — 오토캐드 2.1을 활용, 벡터 방식의 기초 설계 착수</div>
          </div>
          <div class="tl-item">
            <div class="tl-year">1985</div>
            <div class="tl-line"><div class="tl-dot"></div><div class="tl-bar"></div></div>
            <div class="tl-body"><strong>홍익대 회원전</strong> — 제3회 홍익시각디자이너협회 회원전 포스터에 최초 사용</div>
          </div>
          <div class="tl-item">
            <div class="tl-year">1986</div>
            <div class="tl-line"><div class="tl-dot"></div><div class="tl-bar"></div></div>
            <div class="tl-body"><strong>《과학동아》 제호</strong> — 창간호 제호 작업에 탈네모틀 서체로 게재</div>
          </div>
          <div class="tl-item">
            <div class="tl-year">1990</div>
            <div class="tl-line"><div class="tl-dot"></div><div class="tl-bar"></div></div>
            <div class="tl-body"><strong>디지털화</strong> — 벡터 기반 글꼴로 변환, 일반 배포 시작</div>
          </div>
          <div class="tl-item">
            <div class="tl-year">2012</div>
            <div class="tl-line"><div class="tl-dot"></div></div>
            <div class="tl-body"><strong>AG 안상수체 2012</strong> — 전면 리디자인 및 가변폰트 연구 착수</div>
          </div>
        </div>

      `;
    }
  },

  /* 02. 한글기계화운동 */
  mechanization: {
    title: '한글기계화운동',
    num: '02',
    render() {
      return `
        <div class="desc-header">
          <span class="desc-num">02</span>
          <span class="desc-title">한글기계화운동</span>
          <span class="desc-sub">배경과 맥락</span>
        </div>

        <p>일제강점기 이후 한글 전용·가로쓰기가 확산되면서 문서를 빠르고 효율적으로 생산할 수단이 절실해졌고, 이에 한글을 기계로 구현하려는 움직임이 본격화됐다. 5벌식·4벌식을 거쳐 공병우의 세벌식으로 실용화됐으나, 정권이 2벌식을 표준으로 강제 채택하면서 기계화 운동의 본래 원리는 꺾였다. 그러나 이 세벌식의 조합 구조는 디자이너들에게 영감을 주어 탈네모틀 서체 탄생의 토대가 됐다.</p>

        <div class="desc-two-col" style="margin-top:14px;">
          <div class="info-box">
            <div class="info-box-title">세벌식과 탈네모틀</div>
            <p>세벌식은 초성·중성·종성을 각각 독립된 자판으로 입력하는 방식이다. 이 구조는 자소를 분리된 단위로 다룬다는 점에서, 안상수체의 조형 설계와 정확히 같은 논리를 공유한다.</p>
            <p>기계화의 논리가 타이포그래피의 미학으로 이어진 흐름이다.</p>
          </div>
          <div class="info-box">
            <div class="info-box-title">2벌식 표준화의 역설</div>
            <p>정권의 2벌식 강제 표준 채택으로 세벌식은 공식 기계화에서 밀려났지만, 세벌식의 조합 논리는 디자인 언어로 살아남았다.</p>
            <p>안상수체는 기계화의 실패가 오히려 타이포그래피의 혁신으로 이어진 사례이다.</p>
          </div>
        </div>

        <div class="info-box" style="margin-top:14px;">
          <div class="info-box-title">낱자의 독립</div>
          <p>초성·중성·종성을 분리된 단위(낱자)로 독립시키는 방식은, 기계 위에서 한글을 처리하기 위한 필수적 과정이었다. 안상수체는 이 "낱자의 독립"을 타이포그래피적 미학으로 승화시켰다.</p>
          <p>기존 서체에서 하나의 덩어리였던 초성·중성·종성이 각각 독립된 조형 단위로 배치되면서, 한글 타이포그래피의 새로운 패러다임이 열렸다.</p>
        </div>

        <div class="quote-large">"반드시 이웃이 있게 마련이다."</div>
      `;
    }
  },

  /* 03. 탈네모틀 */
  talnemo: {
    title: '탈 네모틀',
    num: '03',
    render() {
      return `
        <div class="desc-header">
          <span class="desc-num">03</span>
          <span class="desc-title">탈 네모틀</span>
          <span class="desc-sub">조형의 해방</span>
        </div>

        <p>기존 한글 서체는 초성·중성·종성을 하나의 <strong>정사각형 칸(네모틀)</strong> 안에 채워 넣는 방식이었습니다. 안상수체는 이 틀에서 벗어나 자모를 독립 단위로 배치하는 <strong>'탈네모틀'</strong> 구조를 제안했습니다.</p>

        <div class="desc-two-col" style="margin-top:16px;">
          <div class="info-box">
            <div class="info-box-title">네모틀이란?</div>
            <p>전통 활자 시대부터 이어진 방식으로, 한 글자가 정해진 사각형 안에서 초성·중성·종성을 조합하는 형태다.</p>
            <p>가로세로 비율이 1:1인 정사각형 공간을 기준으로, 모든 글자가 동일한 크기를 갖게 된다.</p>
          </div>
          <div class="info-box">
            <div class="info-box-title">탈네모틀의 의미</div>
            <p>자모 하나하나가 독립적인 크기와 형태를 갖고, 글자 내부의 여백과 간격이 다양해진다.</p>
            <p>이는 서양 타이포그래피의 프로포셔널 설계와 유사한 논리로, 한글을 더 세밀하게 디자인할 수 있게 한다.</p>
          </div>
        </div>

        <div class="info-box" style="margin-top:14px;">
          <div class="info-box-title">조형적 특징</div>
          <p>안상수체의 자소는 <strong>수학식·수열식·정원</strong> 등 기하학적 형태로 구성됩니다. 홀자(모음)의 기저 변인상 바탕에 닿아 있으며, 자음의 구조도 최소한의 획으로 정리되어 있습니다.</p>
          <p>이러한 기하학적 단순성이 안상수체의 시각적 율동감과 현대성을 동시에 만들어냅니다.</p>
        </div>

        <div class="desc-three-col" style="margin-top:14px;">
          <div class="info-box" style="text-align:center;">
            <div class="info-box-title">네모틀 방식</div>
            <div style="font-size:28px;font-weight:800;letter-spacing:0;border:2px solid #ccc;padding:10px;margin:8px 0;">한글</div>
            <p style="font-size:11px;color:#888;">균일한 정사각형 배치</p>
          </div>
          <div style="display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:800;color:#b0aa9e;">→</div>
          <div class="info-box" style="text-align:center;">
            <div class="info-box-title">탈네모틀 방식</div>
            <div style="font-size:28px;font-weight:800;letter-spacing:8px;padding:10px;margin:8px 0;">ㅎㅏㄴ</div>
            <p style="font-size:11px;color:#888;">자모 독립 배치</p>
          </div>
        </div>
      `;
    }
  },

  /* 04. 개발 과정 */
  process: {
    title: '개발 과정',
    num: '04',
    render() {
      return `
        <div class="desc-header">
          <span class="desc-num">04</span>
          <span class="desc-title">개발 과정</span>
          <span class="desc-sub">6단계 제작 원리</span>
        </div>

        <p>1984년, 안상수는 벡터 방식의 기계 제도용 캐드 프로그램 오토캐드(AutoCAD 2.1)를 활용해 한글 글꼴 설계에 착수했다. 건축 설계용 도구를 글자 디자인에 전용한 것으로, 컴퓨터를 완전히 숙지하지 못한 상태에서 시작했지만 이를 통해 한글 조형의 새로운 가능성을 발견했다.</p>

        <div class="step-grid">
          <div class="step-card">
            <div class="step-num">STEP 1</div>
            <div class="step-title">프레임 만들기</div>
            <div class="step-body">모든 문자를 구성할 격자를 설정하고, 자모의 위치와 크기를 결정하는 기본 틀을 만든다.</div>
          </div>
          <div class="step-card">
            <div class="step-num">STEP 2</div>
            <div class="step-title">낱음 요소의 분석</div>
            <div class="step-body">44자(첫닿자 19, 홀자 14, 받침달자 11)를 최소 단위로 설정하고, 블록들의 조합으로 자형을 구현했다.</div>
          </div>
          <div class="step-card">
            <div class="step-num">STEP 3</div>
            <div class="step-title">직선의 처리</div>
            <div class="step-body">슬라이드 도형을 사용하여 첫닿자·홀자·받침의 모든 외곽선을 폴리라인으로 변환했다.</div>
          </div>
          <div class="step-card">
            <div class="step-num">STEP 4</div>
            <div class="step-title">곡선의 처리</div>
            <div class="step-body">원호를 사용해 외곽선을 처리했다. ㅁ·ㅅ은 별도의 규칙을 적용해 정밀하게 처리했다.</div>
          </div>
          <div class="step-card">
            <div class="step-num">STEP 5</div>
            <div class="step-title">글자의 조합</div>
            <div class="step-body">확정된 자소를 조합하여 11,172자를 파생하는 조합형 글꼴 구조를 검증한다.</div>
          </div>
          <div class="step-card">
            <div class="step-num">STEP 6</div>
            <div class="step-title">하드카피</div>
            <div class="step-body">DXY.880 플로터로 출력하고, 규격에 맞지 않는 부분은 수정 사인펜으로 일일이 보정해 완성했다.</div>
          </div>
        </div>

        <div class="info-box" style="margin-top:4px;">
          <div class="info-box-title">구조적 특징</div>
          <p>각 자소를 독립된 모듈로 다루어, 어떤 자소와 합쳐지더라도 일정한 조형 원칙이 유지되도록 설계되어 있습니다. 이 원칙 덕분에 적은 자소로 많은 글자를 구성할 수 있는 한글의 조합 논리를 극대화할 수 있었습니다.</p>
        </div>
      `;
    }
  },

  /* 05. 모임꼴 */
  moim: {
    title: '모임꼴',
    num: '05',
    render() {
      const cons = [
        ['ㄱ','기역'],['ㄴ','니은'],['ㄷ','디귿'],['ㄹ','리을'],['ㅁ','미음'],['ㅂ','비읍'],
        ['ㅅ','시옷'],['ㅇ','이응'],['ㅈ','지읒'],['ㅊ','치읓'],['ㅋ','키읔'],['ㅌ','티읕'],
        ['ㅍ','피읖'],['ㅎ','히읗'],['ㄲ','쌍기역'],['ㄸ','쌍디귿'],['ㅃ','쌍비읍'],
        ['ㅆ','쌍시옷'],['ㅉ','쌍지읒'],
      ];
      const vows = [
        ['ㅏ','아'],['ㅐ','애'],['ㅑ','야'],['ㅒ','얘'],['ㅓ','어'],['ㅔ','에'],
        ['ㅕ','여'],['ㅖ','예'],['ㅗ','오'],['ㅘ','와'],['ㅙ','왜'],['ㅚ','외'],
        ['ㅛ','요'],['ㅜ','우'],['ㅝ','워'],['ㅞ','웨'],['ㅟ','위'],['ㅠ','유'],
        ['ㅡ','으'],['ㅢ','의'],['ㅣ','이'],
      ];
      const cell = ([ch, name]) =>
        `<div class="jamo-cell"><span class="jamo-char">${ch}</span><span class="jamo-name">${name}</span></div>`;
      return `
        <div class="desc-header">
          <span class="desc-num">05</span>
          <span class="desc-title">모임꼴</span>
          <span class="desc-sub">자모 배치 원리</span>
        </div>
        <p>안상수체의 초성·중성·종성은 독립된 모듈로 설계되어, 어떤 위치에 쓰이든 동일한 형태를 유지합니다.</p>
        <div class="desc-num" style="margin:8px 0 4px;font-size:10px;letter-spacing:2px;color:var(--gray);">자음 CONSONANTS</div>
        <div class="jamo-grid">${cons.map(cell).join('')}</div>
        <div class="desc-num" style="margin:8px 0 4px;font-size:10px;letter-spacing:2px;color:var(--gray);">모음 VOWELS</div>
        <div class="jamo-grid">${vows.map(cell).join('')}</div>
        <div class="info-box" style="margin-top:8px;">
          <div class="info-box-title">같은 모양, 다른 역할</div>
          <p>초성과 종성에 같은 자소가 쓰이더라도 안상수체에서 형태는 항상 동일합니다. ㄱ은 초성·종성 구분 없이 같은 모양이며, 위치만 달라질 뿐입니다. 이것이 안상수체 모듈화의 핵심입니다.</p>
        </div>
      `;
    }
  },

  /* 06. 조형체 종류 */
  types: {
    title: '조형체 종류',
    num: '06',
    render() {
      return `
        <div class="desc-header">
          <span class="desc-num">06</span>
          <span class="desc-title">조형체 종류</span>
          <span class="desc-sub">A · B · C · D 타입</span>
        </div>

        <p>안상수체는 자소의 배치 방식에 따라 크게 A·B·C·D 네 가지 조형 타입으로 분류됩니다. 각 타입은 초성·중성·종성의 결합 방식과 공간 배분이 다릅니다.</p>

        <div class="type-grid">
          <div class="type-card">
            <div class="type-label">TYPE — A</div>
            <div class="type-name">초성 + 중성</div>
            <div class="type-demo">가 나 다</div>
            <div class="type-desc">종성 없이 초성과 중성만으로 구성되는 글자. 가장 단순한 구조로, 중성이 초성 오른쪽 또는 아랫쪽에 위치한다.</div>
          </div>
          <div class="type-card">
            <div class="type-label">TYPE — B</div>
            <div class="type-name">초성 + 중성 + 종성</div>
            <div class="type-demo">각 닭 밥</div>
            <div class="type-desc">초성·중성·종성이 모두 있는 완전한 글자. 종성이 글자 아래에 독립적으로 배치된다.</div>
          </div>
          <div class="type-card">
            <div class="type-label">TYPE — C</div>
            <div class="type-name">세로 중성</div>
            <div class="type-demo">모 도 보</div>
            <div class="type-desc">중성이 초성 아래에만 오는 구조. 세로 방향의 리듬감이 강조된다.</div>
          </div>
          <div class="type-card">
            <div class="type-label">TYPE — D</div>
            <div class="type-name">복합 중성</div>
            <div class="type-demo">봐 뭐 쪄</div>
            <div class="type-desc">합성 모음(복합 중성)을 사용하는 글자. 두 모음이 결합되어 독특한 공간 구조를 형성한다.</div>
          </div>
        </div>

        <div class="info-box" style="margin-top:4px;">
          <div class="info-box-title">조형의 일관성</div>
          <p>네 가지 타입 모두 동일한 기하학적 원칙을 따릅니다. 자소의 획 두께, 곡선 반지름, 여백 비율이 수학적으로 통일되어 있어, 어떤 글자든 안상수체 고유의 일관성을 유지합니다.</p>
          <p>이 원칙이 바로 안상수체를 단순한 '예쁜 글꼴'이 아닌 하나의 완결된 타이포그래피 시스템으로 만드는 이유입니다.</p>
        </div>
      `;
    }
  },

  /* 07. 모듈 조립 체험 */
  workshop: {
    title: '모듈 조립 체험',
    num: '07',
    isWorkshop: true,
    render() {
      /* 안상수체 핵심: 초성·중성·종성이 모두 같은 모양! */
      const choseong  = ['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ','ㄲ','ㄸ','ㅃ','ㅆ','ㅉ'];
      const jungseong = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
      const jongseong = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];

      const makeTiles = (items, role) =>
        items.map(j =>
          `<div class="ws-tile" data-jamo="${j}" data-role="${role}" draggable="false">
             <span class="ws-tile-char">${j}</span>
           </div>`
        ).join('');

      return `
        <div class="ws-header">
          <div class="desc-header" style="margin-bottom:6px;padding-bottom:8px;">
            <span class="desc-num">07</span>
            <span class="desc-title">모듈 조립 체험</span>
            <span class="desc-sub">Modular Assembly</span>
          </div>
          <div class="ws-hint">
            아래 자판에서 자모를 <strong>드래그</strong>해서 캔버스에 놓으세요.
            &mdash; <span class="ws-highlight">초성</span> <span class="ws-highlight">중성</span> <span class="ws-highlight">종성</span>은 모두 <strong>같은 모양의 모듈</strong>입니다. 위치만 다를 뿐!
            &nbsp;· 캔버스 위 모듈 재드래그하여 이동 &nbsp;· 호버 시 × 삭제
          </div>
        </div>

        <div class="ws-body">
          <div class="ws-canvas-wrap" id="ws-canvas">
            <div class="ws-canvas-hint" id="ws-hint">☐ 아래 자판에서 자모를 끌어다 놓으세요</div>
          </div>

          <div class="ws-palette" id="ws-palette">
            <div class="ws-palette-row">
              <span class="ws-palette-label">초성</span>
              ${makeTiles(choseong, '초성')}
            </div>
            <div class="ws-palette-row">
              <span class="ws-palette-label">중성</span>
              ${makeTiles(jungseong, '중성')}
            </div>
            <div class="ws-palette-row">
              <span class="ws-palette-label">종성</span>
              ${makeTiles(jongseong, '종성')}
            </div>
            <div class="ws-controls">
              <button class="ws-btn" id="ws-clear">↺ 캔버스 삭제</button>
              <span style="font-size:11px;color:#888;line-height:28px;margin-left:4px;">초성 ㄱ과 종성 ㄱ은 같은 모양 — 콘셈트만 다르다</span>
            </div>
          </div>
        </div>
      `;
    }
  },

  /* 08. 디지털화 */
  digital: {
    title: '디지털화',
    num: '08',
    render() {
      return `
        <div class="desc-header">
          <span class="desc-num">08</span>
          <span class="desc-title">안상수체의 디지털화</span>
          <span class="desc-sub">벡터에서 가변폰트까지</span>
        </div>

        <p>안상수체는 1985년 캐드 소프트웨어로 설계되어 27자를 조합한 11,172자를 출력할 수 있었습니다. 이후 벡터 기반 포스트스크립트 방식으로 전환하면서 디지털 환경에서의 활용이 본격화되었습니다.</p>

        <div class="timeline">
          <div class="tl-item">
            <div class="tl-year">1985</div>
            <div class="tl-line"><div class="tl-dot"></div><div class="tl-bar"></div></div>
            <div class="tl-body"><strong>오토캐드 DXF 880도</strong> — 최초의 벡터 데이터. 캐드도면 프린터로 출력</div>
          </div>
          <div class="tl-item">
            <div class="tl-year">1990</div>
            <div class="tl-line"><div class="tl-dot"></div><div class="tl-bar"></div></div>
            <div class="tl-body"><strong>벡터 글꼴 변환</strong> — 포스트스크립트 기반 글꼴로 최초 전환. 인쇄 출판 분야에 본격 배포</div>
          </div>
          <div class="tl-item">
            <div class="tl-year">1993</div>
            <div class="tl-line"><div class="tl-dot"></div><div class="tl-bar"></div></div>
            <div class="tl-body"><strong>트루타입 변환</strong> — 일반 PC 환경에서도 사용 가능한 TTF 포맷 배포 시작</div>
          </div>
          <div class="tl-item">
            <div class="tl-year">2012</div>
            <div class="tl-line"><div class="tl-dot"></div><div class="tl-bar"></div></div>
            <div class="tl-body"><strong>AG 안상수체 2012</strong> — AG 타이포그라피연구소와 협업하여 전면 리뉴얼. OpenType 완전 지원</div>
          </div>
          <div class="tl-item">
            <div class="tl-year">현재</div>
            <div class="tl-line"><div class="tl-dot"></div></div>
            <div class="tl-body"><strong>가변폰트(Variable Font) 연구</strong> — 무게·너비·기울기를 축으로 연속 변형 가능한 가변폰트 개발 진행 중</div>
          </div>
        </div>

        <div class="desc-two-col" style="margin-top:8px;">
          <div class="info-box">
            <div class="info-box-title">벡터 모드로의 전환</div>
            <p>1990년대 초 PostScript 기반 출력 장비가 보급되면서, 안상수체는 벡터 방식으로 재설계되었습니다. 이로써 어떤 크기에서도 선명한 출력이 가능해졌습니다.</p>
          </div>
          <div class="info-box">
            <div class="info-box-title">캠리같은문패(1984)</div>
            <p>이상철 작가가 제작한 실험적 한글 타이포그래피 작업. 안상수체와 함께 1980년대 한국 실험 타이포그래피의 대표작으로 꼽힙니다.</p>
          </div>
        </div>

        <div class="quote-large">"지금까 바라보고 이었던 거야."<br/><span style="font-size:16px;letter-spacing:2px;font-weight:400;">— 안상수</span></div>
      `;
    }
  },

  /* 08. AG 안상수체 종류 */
  ag: {
    title: 'AG 안상수체',
    num: '08',
    render() {
      return `
        <div class="desc-header">
          <span class="desc-num">08</span>
          <span class="desc-title">AG 안상수체 종류</span>
          <span class="desc-sub">AG 타이포그라피연구소 출시</span>
        </div>

        <p>AG 타이포그라피연구소와의 협업을 통해 2012년 기준 세 가지 버전의 안상수체가 배포·판매되고 있습니다.</p>

        <div class="ag-grid">
          <div class="ag-card">
            <div class="ag-card-header">AG 안상수체 줄무의</div>
            <div class="ag-card-demo">한글</div>
            <div class="ag-card-body">
              <p>AG 안상수체 2012를 바탕으로, 글자 중앙에 얇은 선을 추가해 디자인한 글꼴이다. 중앙을 가로지르는 얇은 선이 안상수체에 새로운 활력을 부여한다.</p>
            </div>
          </div>
          <div class="ag-card">
            <div class="ag-card-header">AG 둥근안상수체</div>
            <div class="ag-card-demo">한글</div>
            <div class="ag-card-body">
              <p>안상수체(1985)의 새로운 글자 가족으로, 직각 처리된 끝부분을 부드러운 원호로 다듬어 친근한 느낌을 강조한 파생 버전이다. 한글·라틴·숫자를 다목적으로 재구성했다.</p>
            </div>
          </div>
          <div class="ag-card">
            <div class="ag-card-header">AG 안상수체 베리어블</div>
            <div class="ag-card-demo">한글</div>
            <div class="ag-card-body">
              <p>AG 안상수체 2012를 바탕으로 8가지 형태의 글꼴을 구현한 가변폰트다. 세로모임꼴 너비·가로모임꼴 너비·받침 길이 세 가지 변수 축을 통해 연속적으로 변형 가능하다.</p>
            </div>
          </div>
        </div>

        <div class="info-box" style="margin-top:4px;">
          <div class="info-box-title">영원한 이별은 아니다.</div>
          <p style="font-size:18px;font-weight:800;letter-spacing:4px;margin:6px 0;">영원한 이별은 아니다.</p>
          <p>이 문장은 안상수체의 조형 원리를 가장 잘 드러내는 예시 문장으로 자주 사용됩니다. 각 자모의 독립성과 결합의 리듬감을 동시에 느낄 수 있습니다.</p>
        </div>

      `;
    }
  },

  /* 직접 써보기 */
  preview: {
    title: '직접 써보기',
    num: '✎',
    render() {
      return `
        <div class="desc-header">
          <span class="desc-num">✎</span>
          <span class="desc-title">직접 써보기</span>
          <span class="desc-sub">안상수체 렌더링</span>
        </div>
        <div class="preview-tool">
          <div class="preview-controls">
            <textarea class="preview-text-input" id="preview-text" placeholder="한글을 자유롭게 입력하세요" maxlength="200" rows="3">안상수체</textarea>
            <div class="preview-sliders">
              <div class="preview-slider-wrap">
                <span>크기</span>
                <input type="range" id="preview-size" min="24" max="160" value="80" step="4" />
                <span id="preview-size-val">80px</span>
              </div>
              <div class="preview-slider-wrap">
                <span>자간</span>
                <input type="range" id="preview-letter" min="0" max="20" value="4" step="1" />
                <span id="preview-letter-val">4px</span>
              </div>
              <div class="preview-slider-wrap">
                <span>행간</span>
                <input type="range" id="preview-line" min="10" max="30" value="13" step="1" />
                <span id="preview-line-val">1.3</span>
              </div>
            </div>
          </div>
          <div class="preview-display" id="preview-display">안상수체</div>
        </div>
      `;
    }
  },

  /* 서체 비교 */
  compare: {
    title: '서체 비교',
    num: '≡',
    render() {
      return `
        <div class="desc-header">
          <span class="desc-num">≡</span>
          <span class="desc-title">서체 비교</span>
          <span class="desc-sub">네모틀 vs 탈네모틀</span>
        </div>
        <div class="compare-input-wrap">
          <input type="text" class="compare-text-input" id="compare-text" placeholder="비교할 텍스트를 입력하세요" value="한글 타이포그래피" maxlength="14" />
        </div>
        <div class="compare-grid">
          <div class="compare-card">
            <div class="compare-card-header">
              AG 안상수체
              <div class="compare-card-sub">탈네모틀</div>
            </div>
            <div class="compare-card-display" id="cmp-ahn" style="font-family:var(--font-ahn);">한글 타이포그래피</div>
            <div class="compare-card-desc">자모를 독립 모듈로 배치. 네모틀 밖으로 벗어나는 탈네모틀 구조.</div>
          </div>
          <div class="compare-card">
            <div class="compare-card-header">
              나눔고딕
              <div class="compare-card-sub">네모틀 산세리프</div>
            </div>
            <div class="compare-card-display" id="cmp-gothic" style="font-family:'Nanum Gothic',sans-serif;font-weight:800;">한글 타이포그래피</div>
            <div class="compare-card-desc">정사각형 네모틀 안에 자모를 균등 배치하는 현대적 한글 고딕 서체.</div>
          </div>
          <div class="compare-card">
            <div class="compare-card-header">
              나눔명조
              <div class="compare-card-sub">네모틀 세리프</div>
            </div>
            <div class="compare-card-display" id="cmp-myeong" style="font-family:'Nanum Myeongjo',serif;font-weight:700;">한글 타이포그래피</div>
            <div class="compare-card-desc">획의 시작과 끝에 세리프를 갖춘 전통 명조 계열 네모틀 서체.</div>
          </div>
        </div>
        <div class="info-box" style="margin-top:14px;">
          <div class="info-box-title">네모틀과 탈네모틀의 차이</div>
          <p>나눔고딕·나눔명조는 모든 글자가 동일한 정사각형 크기를 차지하지만, 안상수체는 자모의 독립성에 따라 글자 폭이 달라집니다.</p>
        </div>
      `;
    }
  },

  /* 타자 연습 세부 페이지는 이제 홈 메뉴 드롭다운으로 대체됨 */
  exit: {
    title: '끝',
    num: '✕',
    render() {
      return `
        <div class="desc-header"><span class="desc-title">감사합니다</span></div>
        <p>안상수체 알아보기를 이용해주셔서 감사합니다.</p>
        <div class="quote-large">영원한 이별은 아니다.</div>
      `;
    }
  },
};

/* ── 타이핑 연습 텍스트 ── */
const TYPING = {
  sentence: [
    '안상수체는 1985년 안상수가 디자인한 한글 전용 서체입니다.',
    '자모를 분리하여 배치하는 독창적인 구조가 특징입니다.',
    '탈네모틀이란 기존 정사각형 틀에서 자모를 해방하는 개념입니다.',
    '안상수체는 기존 모아쓰기 틀에서 벗어난 해방적 타이포그래피입니다.',
    '자음과 모음이 자유롭게 배치되어 시각적 율동감을 만들어냅니다.',
    '서양의 타이포그래피와 대등한 독립적 조형 체계를 정립한 서체입니다.',
    '안상수 교수는 파주타이포그라피학교 파티를 설립하기도 했습니다.',
    '영원한 이별은 아니다.',
  ],
  longtext: [],   /* 카테고리별로 동적 설정됨 */
};

/* ── 긴글연습 카테고리 및 텍스트 ── */
const LONGTEXT_CATS = [
  {
    id: 'feature',
    num: '01',
    name: '안상수체의 특징',
    desc: '조형 원리 · 모듈화 · 기하학',
    texts: [
      `안상수체는 기존 한글 서체와 근본적으로 다른 조형 원리를 지닌다. 전통 서체가 초성, 중성, 종성을 네모틀 안에 눌러 담는 방식이라면, 안상수체는 각 자소를 독립된 모듈로 취급한다. 자소는 어떤 글자에 쓰이든 동일한 크기와 형태를 유지하며, 조합에 따라 위치만 달라질 뿐이다.`,
      `안상수체의 획은 수학식 직선과 기하학적 곡선으로만 이루어진다. 손으로 쓴 붓글씨의 흔적이 전혀 없으며, 마치 자로 그은 듯한 엄격한 선형 구조가 특징이다. 이 원칙 덕분에 안상수체는 디지털 시대의 서체로서 완벽하게 구현될 수 있었다. 어떤 해상도에서도 획의 규칙성이 무너지지 않는다.`,
      `안상수체에서 자음 모듈은 초성으로 쓰이든 종성으로 쓰이든 형태가 동일하다. 예를 들어 기역은 초성 위치에서도, 종성 위치에서도 같은 획 구성과 비례 관계를 유지한다. 이것이 안상수가 말하는 모듈화의 핵심이다. 자소 자체에 의미가 있고, 위치는 그 다음의 문제이다. 이 원칙은 조합형 한글의 본래 논리와도 일치한다.`,
    ],
  },
  {
    id: 'nemo',
    num: '02',
    name: '네모틀과 탈네모틀',
    desc: '전통 구조 · 해방 · 새로운 조형',
    texts: [
      `네모틀이란 한글 한 글자를 정사각형 안에 배치하는 레이아웃 원칙이다. 조선시대 목판 인쇄부터 현대 납활자 시대까지 한글 서체 디자인의 불문율로 여겨졌다. 이 틀 안에서 초성, 중성, 종성은 전체 글자의 균형을 위해 크기와 비례를 조정해야만 했다.`,
      `탈네모틀은 글자를 정사각형 틀 안에 욱여넣는 기존 관행을 거부하는 움직임이다. 안상수는 각 자소가 고유한 크기를 가져야 한다고 주장했다. 자음은 자음의 본래 폭을, 모음은 모음의 본래 높이를 유지해야 한다는 것이다. 이 원칙을 따르면 글자마다 차지하는 공간이 달라진다.`,
      `탈네모틀 서체에서 낱말은 서로 다른 높이와 너비를 가진 자소들의 리듬감 있는 배열이 된다. 일정한 틀에 눌린 자소 대신, 각자의 형태를 온전히 드러내는 자소들이 나란히 서는 것이다. 안상수는 이를 '자소의 해방'이라고 불렀다. 자소는 특정 글자에 종속되는 것이 아니라, 자체로서 존재한다.`,
    ],
  },
  {
    id: 'change',
    num: '03',
    name: '한글 서체의 변화',
    desc: '역사 흐름 · 기계화 · 디지털',
    texts: [
      `한글 서체의 역사는 훈민정음 창제 이후 다양한 변화를 거쳐왔다. 조선시대의 필사체, 목판 인쇄체, 근대의 활자체, 컴퓨터 시대의 디지털 폰트까지 각 시대의 기술과 미감을 반영하며 발전해 왔다. 그 흐름 속에서 안상수체는 단순한 새 서체가 아니라, 한글 조형의 근본적인 재해석이었다.`,
      `1980년대 한국은 경제 성장과 함께 디자인 산업이 급격히 성장하던 시기였다. 그래픽 디자이너들은 서양 타이포그래피의 번역본에서 벗어나 한글 고유의 조형 언어를 모색하기 시작했다. 안상수는 그 선봉에서 한글 자모의 독자적인 조형성을 탐구했으며, 그 결실이 바로 안상수체이다.`,
      `컴퓨터와 레이저 프린터의 보급은 한글 서체 디자인의 판도를 바꾸었다. 납활자 시대에는 물리적으로 구현하기 어려웠던 다양한 형태의 서체가 디지털로 손쉽게 제작될 수 있게 되었다. 안상수체는 이 디지털 전환 시대의 한복판에서 태어났으며, 기하학 원칙에 기반한 구조 덕분에 디지털 환경에 완벽하게 적응할 수 있었다.`,
    ],
  },
  {
    id: 'birth',
    num: '04',
    name: '탄생과 역사',
    desc: '1985년 · 안상수 · 첫 발표',
    texts: [
      `1985년 제13회 홍익대학교 미대 타이포그래피 클럽 전시에서 안상수는 새로운 한글 서체를 처음 공개했다. 이 서체는 당시 디자인계에 큰 충격을 주었다. 누군가는 혁신이라 했고, 누군가는 낯섦에 고개를 저었다. 하지만 이 서체가 한국 타이포그래피의 새로운 장을 열었다는 점에서는 이견이 없었다.`,
      `안상수 교수는 홍익대학교 시각디자인과에서 수십 년간 후학을 양성하며 한국 그래픽 디자인의 지평을 넓혔다. 그는 서체 디자인에 그치지 않고, 공간 디자인, 출판, 전시 등 다양한 분야에서 활동했다. 파주타이포그라피학교, 이른바 파티를 설립하여 실험적 타이포그래피 교육의 장을 만들기도 했다.`,
      `안상수체가 처음 발표된 지 사십 년 가까이 지난 지금도 이 서체는 현역으로 활약하고 있다. 포스터, 책, 간판, 디지털 화면 등 다양한 매체에서 안상수체를 만날 수 있다. 시간이 지나도 퇴색하지 않는 이유는 이 서체의 조형 원리가 유행에 흔들리지 않는 기하학적 논리에 뿌리를 두고 있기 때문이다.`,
    ],
  },
  {
    id: 'module',
    num: '05',
    name: '모듈과 조합',
    desc: '자소 · 결합 원리 · 19+21+27',
    texts: [
      `한글은 자음 19개, 모음 21개, 받침 27개를 조합하여 만들 수 있는 음절의 수가 11,172개에 달한다. 안상수체는 이 방대한 조합을 최소한의 모듈로 운용한다. 초성, 중성, 종성에 같은 자소를 그대로 사용하기 때문에 디자이너가 만들어야 할 글리프 수가 대폭 줄어든다.`,
      `안상수체의 조합 방식은 레고 블록에 비유할 수 있다. 정해진 형태의 블록을 정해진 규칙으로 조합하면 무한한 결과물이 나온다. 자소라는 블록, 그리고 초성-중성-종성이라는 조합 규칙. 이 단순한 구조가 한글 전체를 아우른다. 안상수체는 이 구조를 가장 명료하게 시각화한 서체이다.`,
      `안상수체에서 자소는 어떤 글자에 쓰이든 동일한 형태를 유지하기 때문에, 글자 전체가 아닌 자소를 중심으로 서체를 경험하게 된다. 기역 하나, 이응 하나가 글자 안에서 자신의 존재감을 드러낸다. 이것이 안상수체가 독자에게 주는 독특한 시각적 경험이며, 한글의 조합 논리를 눈으로 느끼게 하는 방식이다.`,
    ],
  },
];

/* ── 세벌식 390 자판 레이아웃 ── */
const SEBEOL_LAYOUT = [
  [
    {code:'Backquote',key:'`',norm:'',shft:'~'},
    {code:'Digit1',key:'1',norm:'1',shft:'!'},
    {code:'Digit2',key:'2',norm:'2',shft:'@'},
    {code:'Digit3',key:'3',norm:'3',shft:'#'},
    {code:'Digit4',key:'4',norm:'4',shft:'$'},
    {code:'Digit5',key:'5',norm:'5',shft:'%'},
    {code:'Digit6',key:'6',norm:'6',shft:'^'},
    {code:'Digit7',key:'7',norm:'7',shft:'&'},
    {code:'Digit8',key:'8',norm:'8',shft:'*'},
    {code:'Digit9',key:'9',norm:'9',shft:'('},
    {code:'Digit0',key:'0',norm:'0',shft:')'},
    {code:'Minus',key:'-',norm:'-',shft:'_'},
    {code:'Equal',key:'=',norm:'=',shft:'+'},
    {code:'Backspace',key:'⌫',wide:'bs',norm:'',shft:''},
  ],
  [
    {code:'Tab',key:'Tab',wide:'tab',norm:'',shft:''},
    {code:'KeyQ',key:'Q',norm:'ㅂ',shft:'ㅃ'},
    {code:'KeyW',key:'W',norm:'ㅈ',shft:'ㅉ'},
    {code:'KeyE',key:'E',norm:'ㄷ',shft:'ㄸ'},
    {code:'KeyR',key:'R',norm:'ㄱ',shft:'ㄲ'},
    {code:'KeyT',key:'T',norm:'ㅅ',shft:'ㅆ'},
    {code:'KeyY',key:'Y',norm:'ㅛ',shft:''},
    {code:'KeyU',key:'U',norm:'ㅕ',shft:''},
    {code:'KeyI',key:'I',norm:'ㅑ',shft:''},
    {code:'KeyO',key:'O',norm:'ㅐ',shft:'ㅒ'},
    {code:'KeyP',key:'P',norm:'ㅔ',shft:'ㅖ'},
    {code:'BracketLeft',key:'[',norm:'[',shft:'{'},
    {code:'BracketRight',key:']',norm:']',shft:'}'},
    {code:'Backslash',key:'\\',wide:'bs2',norm:'\\',shft:'|'},
  ],
  [
    {code:'CapsLock',key:'Caps',wide:'caps',norm:'',shft:''},
    {code:'KeyA',key:'A',norm:'ㅁ',shft:''},
    {code:'KeyS',key:'S',norm:'ㄴ',shft:''},
    {code:'KeyD',key:'D',norm:'ㅇ',shft:''},
    {code:'KeyF',key:'F',norm:'ㄹ',shft:''},
    {code:'KeyG',key:'G',norm:'ㅎ',shft:''},
    {code:'KeyH',key:'H',norm:'ㅗ',shft:''},
    {code:'KeyJ',key:'J',norm:'ㅓ',shft:''},
    {code:'KeyK',key:'K',norm:'ㅏ',shft:''},
    {code:'KeyL',key:'L',norm:'ㅣ',shft:''},
    {code:'Semicolon',key:';',norm:';',shft:':'},
    {code:'Quote',key:"'",norm:"'",shft:'"'},
    {code:'Enter',key:'↵',wide:'enter',norm:'',shft:''},
  ],
  [
    {code:'ShiftLeft',key:'⇧',wide:'sl',norm:'',shft:''},
    {code:'KeyZ',key:'Z',norm:'ㅋ',shft:''},
    {code:'KeyX',key:'X',norm:'ㅌ',shft:''},
    {code:'KeyC',key:'C',norm:'ㅊ',shft:''},
    {code:'KeyV',key:'V',norm:'ㅍ',shft:''},
    {code:'KeyB',key:'B',norm:'ㅠ',shft:''},
    {code:'KeyN',key:'N',norm:'ㅜ',shft:''},
    {code:'KeyM',key:'M',norm:'ㅡ',shft:''},
    {code:'Comma',key:',',norm:',',shft:'<'},
    {code:'Period',key:'.',norm:'.',shft:'>'},
    {code:'Slash',key:'/',norm:'/',shft:'?'},
    {code:'ShiftRight',key:'⇧',wide:'sr',norm:'',shft:''},
  ],
  [
    {code:'ControlLeft',key:'Ctrl',wide:'ctrl',norm:'',shft:''},
    {code:'MetaLeft',key:'⌘',wide:'meta',norm:'',shft:''},
    {code:'AltLeft',key:'Alt',wide:'alt',norm:'',shft:''},
    {code:'Space',key:'',wide:'space',norm:'',shft:''},
    {code:'AltRight',key:'Alt',wide:'alt',norm:'',shft:''},
    {code:'MetaRight',key:'⌘',wide:'meta',norm:'',shft:''},
    {code:'ControlRight',key:'Ctrl',wide:'ctrl',norm:'',shft:''},
  ],
];

function renderSebeolKeyboard() {
  const VOWELS = new Set('ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'.split(''));
  const CONS   = new Set('ㄱㄲㄳㄴㄵㄶㄷㄸㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅃㅄㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'.split(''));
  const rows = SEBEOL_LAYOUT.map(row => {
    const keys = row.map(k => {
      const wc = k.wide ? ` kb-key--${k.wide}` : '';
      const tc = VOWELS.has(k.norm) ? ' kb-key--vowel' : CONS.has(k.norm) ? ' kb-key--cons' : '';
      let inner = '';
      if (k.norm && /[ㄱ-ㅎㅏ-ㅣ]/.test(k.norm)) {
        const ss = (k.shft && /[ㄱ-ㅎㅏ-ㅣ]/.test(k.shft)) ? `<span class="kb-s">${k.shft}</span>` : '';
        inner = `${ss}<span class="kb-n">${k.norm}</span>`;
      } else if (k.norm) {
        const ss = k.shft ? `<span class="kb-s">${k.shft}</span>` : '';
        inner = `${ss}<span class="kb-n kb-n--en">${k.norm}</span>`;
      } else {
        inner = `<span class="kb-label">${k.key}</span>`;
      }
      return `<div class="kb-key${wc}${tc}" data-code="${k.code}">${inner}</div>`;
    }).join('');
    return `<div class="kb-row">${keys}</div>`;
  }).join('');
  return `<div class="kb-board" id="kb-board">${rows}</div>`;
}

/* ── 상태 ── */
let typing = { text: '', startTime: null, timer: null, errorCount: 0 };
let _activeKbDown = null;
let _activeKbUp   = null;

/* ── DOM ── */
const descContent    = document.getElementById('desc-content');
const practiceOverlay = document.getElementById('practice-overlay');
const practiceBack   = document.getElementById('practice-back');
const practiceTitle  = document.getElementById('practice-title');
const practiceBody   = document.getElementById('practice-body');
const statusMsg      = document.getElementById('status-msg');

/* 현재 페이지 상태 */
let currentPageId  = 'home';

/* ── 그룹 정의 ── */
const GROUPS = {
  history: {
    label: '역사·배경',
    range: '01 – 03',
    preview: 'AG',
    desc: '1985년 안상수 디자이너가 개발한 탈네모틀 한글 서체의 탄생 배경과 한글기계화운동의 흐름, 네모틀을 보타대하는 새로운 조형 언어를 탐구합니다.',
    items: [
      { id: 'birth',         num: '01', name: '안상수체의 탄생' },
      { id: 'mechanization', num: '02', name: '한글기계화운동' },
      { id: 'talnemo',       num: '03', name: '탈 네모틀' },
    ]
  },
  structure: {
    label: '구조·원리',
    range: '04 – 06',
    preview: '꼴',
    desc: '첫닿자·홀자·받침의 모듈식 조합 원리, 모임꼴의 다양한 유형과 조형체의 종류를 통해 안상수체의 독자적 구조를 해부합니다.',
    items: [
      { id: 'process',  num: '04', name: '개발 과정' },
      { id: 'moim',     num: '05', name: '모임꼴' },
      { id: 'types',    num: '06', name: '조형체 종류' },
      { id: 'compare',  num: '≡',  name: '서체 비교' },
      { id: 'preview',  num: '✎',  name: '직접 써보기' },
      { id: 'workshop', num: '★',  name: '모듈 조립 체험' },
    ]
  },
  digital: {
    label: '디지털·현재',
    range: '07 – 08',
    preview: '字',
    desc: 'PC 시대로의 전환 과정과 널리 쓰이는 AG 안상수체의 디지털 구현과 현재적 의미를 살펴봅니다.',
    items: [
      { id: 'digital', num: '07', name: '디지털화' },
      { id: 'ag',      num: '08', name: 'AG 안상수체' },
    ]
  },
  typing: {
    label: '세벌식 타자연습',
    range: '▶',
    preview: '타',
    desc: '세벌식 390 자판으로 안상수체 문장을 직접 입력하며 타자 실력을 키웁니다. 화면 아래 자판을 보며 키 위치를 익힐 수 있습니다.',
    items: [
      { id: 'sentence', num: '▶', name: '문장 연습' },
      { id: 'longtext', num: '▶', name: '긴 글 연습' },
    ]
  },
  workshop: {
    label: '모듈 조립 체험',
    range: '★',
    preview: '조',
    desc: '첫닿자·홀자·받침을 직접 드래그하여 글자를 조합하는 인터랙티브 체험입니다. 안상수체의 조합형 원리를 직접 머리가 아닌 손으로 이해합니다.',
  },
  preview: {
    label: '직접 써보기',
    range: '✎',
    preview: '가',
    desc: '원하는 한글을 직접 입력하고 안상수체로 실시간 렌더링해보세요. 크기 슬라이더로 글자를 크고 작게 조절할 수 있습니다.',
  },
  compare: {
    label: '서체 비교',
    range: '≡',
    preview: '비',
    desc: '안상수체(탈네모틀)와 나눔고딕·나눔명조(네모틀)를 나란히 놓고 같은 텍스트로 비교해봅니다.',
  },
};


/* ── 카테고리 렌더 ── */
function renderPage(id) {
  const page = PAGES[id];
  if (!page) return;
  currentPageId = id;

  const descPanel    = document.querySelector('.description-panel');

  if (id === 'home') {
    descPanel?.classList.add('panel--home');
  } else {
    descPanel?.classList.remove('panel--home');
  }

  const backBtn = id !== 'home'
    ? `<button class="desc-back-btn" id="desc-back-btn">← 메인 홈</button>`
    : '';

  descContent.innerHTML = backBtn + page.render();
  statusMsg.textContent = id === 'home' ? '메인 홈' : `${page.title} — 선택됨`;
  bindActions(id);

  document.getElementById('desc-back-btn')?.addEventListener('click', () => {
    document.querySelectorAll('.category-item').forEach(el => el.removeAttribute('data-active'));
    descContent.classList.remove('workshop-mode');
    renderPage('home');
  });
}

function bindActions(id) {
  /* 그룹·콘텐츠 백: data-nav 클릭 → 콘텐츠 */
  descContent.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => selectCategory(el.dataset.nav));
  });

  /* 홈 호버/클릭 프리뷰 로직 */
  if (id === 'home') {
    const preview = document.getElementById('hm-preview');
    let locked = false;

    function showPreview(groupId) {
      if (locked) return;
      const g = GROUPS[groupId];
      if (!g || !preview) return;
      preview.innerHTML = `
        <div class="hm-preview-visual">${g.preview || ''}</div>
        <div class="hm-preview-label">
          <span class="hm-preview-range">${g.range || ''}</span>
          <span class="hm-preview-title">${g.label}</span>
        </div>
        <p class="hm-preview-desc">${g.desc || ''}</p>
      `;
    }

    function showSubcategories(groupId) {
      const g = GROUPS[groupId];
      if (!g || !preview) return;
      locked = true;

      const itemsHtml = g.items ? g.items.map(item => {
        let subMenu = '';
        if (item.id === 'longtext') {
           subMenu = `<div class="hm-sub-items" id="sub-${item.id}" style="display:none; padding-left: 42px; margin-top: -8px; padding-bottom: 12px;">` +
             LONGTEXT_CATS.map(c => `
               <button class="hm-sub-btn" data-start-lt="${c.id}">↳ ${c.name}</button>
             `).join('') + `</div>`;
        } else if (item.id === 'sentence') {
           subMenu = `<div class="hm-sub-items" id="sub-${item.id}" style="display:none; padding-left: 42px; margin-top: -8px; padding-bottom: 12px;">
               <button class="hm-sub-btn" data-start-st="all">↳ 전체 문장 종합 연습</button>
             </div>`;
        }

        return `
          <div>
            <button class="hm-item${item.star ? ' hm-item--star' : ''}" data-nav="${item.id}">
              <span class="hm-num">${item.num}</span>
              <span class="hm-name">${item.name}</span>
              <span class="hm-arr">${item.star ? '★' : '→'}</span>
            </button>
            ${subMenu}
          </div>
        `;
      }).join('') : '';

      preview.innerHTML = `
        <div class="hm-preview-visual" style="opacity:0.2;">${g.preview || ''}</div>
        <div class="hm-preview-label">
          <span class="hm-preview-range">${g.range || ''}</span>
          <span class="hm-preview-title">${g.label}</span>
        </div>
        <div class="hm-group" style="position:relative; z-index:1;">
          ${itemsHtml}
        </div>
      `;

      // 내부 카테고리 클릭 이벤트 연결
      preview.querySelectorAll('[data-nav]').forEach(el => {
        el.addEventListener('click', () => {
          const navId = el.dataset.nav;
          if (navId === 'longtext' || navId === 'sentence') {
            const sub = document.getElementById(`sub-${navId}`);
            if (sub) {
              sub.style.display = sub.style.display === 'none' ? 'block' : 'none';
            }
          } else {
            selectCategory(navId);
          }
        });
      });

      // 타이자 연습 세부 항목 드롭다운 실행 버튼 연결
      preview.querySelectorAll('[data-start-lt]').forEach(btn => {
        btn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          const cat = LONGTEXT_CATS.find(c => c.id === btn.dataset.startLt);
          if (!cat) return;
          TYPING.longtext = cat.texts;
          openTyping('longtext', cat.name);
        });
      });
      preview.querySelectorAll('[data-start-st]').forEach(btn => {
        btn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          openTyping('sentence');
        });
      });
    }

    // 그룹 버튼 호버 및 클릭 이벤트
    descContent.querySelectorAll('.hm-group-btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        locked = false; // 다른 항목을 호버하면 서브메뉴(클릭) 상태 해제
        descContent.querySelectorAll('.hm-group-btn').forEach(b => b.classList.remove('is-hovered'));
        btn.classList.add('is-hovered');
        showPreview(btn.dataset.group || 'workshop');
      });

      btn.addEventListener('click', () => {
        if (btn.dataset.nav) {
          // 직행 링크 (예: 모듈 조립)
          selectCategory(btn.dataset.nav);
        } else {
          // 서브 메뉴 표시
          showSubcategories(btn.dataset.group);
        }
      });
    });

    // 기본: 첫 번째 항목 표시
    const first = descContent.querySelector('.hm-group-btn');
    if (first) {
      first.classList.add('is-hovered');
      showPreview(first.dataset.group || 'workshop');
    }
  }

  /* start-btn data-action */
  descContent.querySelectorAll('[data-action]').forEach(el => {
    el.addEventListener('click', () => {
      const a = el.dataset.action;
      if (a === 'open-sentence') openTyping('sentence');
      else if (a === 'open-longtext') openTyping('longtext');
    });
  });

  /* 긴글연습 카테고리 선택 */
  descContent.querySelectorAll('[data-lt-cat]').forEach(el => {
    el.addEventListener('click', () => {
      const cat = LONGTEXT_CATS.find(c => c.id === el.dataset.ltCat);
      if (!cat) return;
      TYPING.longtext = cat.texts;
      openTyping('longtext', cat.name);
    });
  });


  /* 모듈 조립 체험 */
  if (id === 'workshop') {
    initWorkshop();
  }

  /* 직접 써보기 */
  if (id === 'preview') {
    const textInput   = document.getElementById('preview-text');
    const sizeInput   = document.getElementById('preview-size');
    const letterInput = document.getElementById('preview-letter');
    const lineInput   = document.getElementById('preview-line');
    const sizeVal     = document.getElementById('preview-size-val');
    const letterVal   = document.getElementById('preview-letter-val');
    const lineVal     = document.getElementById('preview-line-val');
    const display     = document.getElementById('preview-display');
    function updatePreview() {
      display.textContent          = textInput.value || '안상수체';
      display.style.fontSize       = sizeInput.value + 'px';
      display.style.letterSpacing  = letterInput.value + 'px';
      display.style.lineHeight     = (lineInput.value / 10).toFixed(1);
      sizeVal.textContent          = sizeInput.value + 'px';
      letterVal.textContent        = letterInput.value + 'px';
      lineVal.textContent          = (lineInput.value / 10).toFixed(1);
    }
    textInput.addEventListener('input', updatePreview);
    sizeInput.addEventListener('input', updatePreview);
    letterInput.addEventListener('input', updatePreview);
    lineInput.addEventListener('input', updatePreview);
  }

  /* 서체 비교 */
  if (id === 'compare') {
    const textInput = document.getElementById('compare-text');
    function updateCompare() {
      const val = textInput.value || '한글';
      document.getElementById('cmp-ahn').textContent    = val;
      document.getElementById('cmp-gothic').textContent = val;
      document.getElementById('cmp-myeong').textContent = val;
    }
    textInput.addEventListener('input', updateCompare);
  }
}

function selectCategory(id) {
  document.querySelectorAll('.category-item').forEach(el => {
    el.setAttribute('data-active', el.dataset.id === id ? 'true' : 'false');
  });
  /* 워크숍 모드: desc-content 패딩 제거 */
  const isWS = (id === 'workshop');
  descContent.classList.toggle('workshop-mode', isWS);
  renderPage(id);
}

document.querySelectorAll('.category-item').forEach(el => {
  el.addEventListener('click', () => selectCategory(el.dataset.id));
});

/* ── 타이핑 연습 ── */
function openTyping(mode, catTitle) {
  // 기존 키보드 핸들러 정리
  if (_activeKbDown) { document.removeEventListener('keydown', _activeKbDown); _activeKbDown = null; }
  if (_activeKbUp)   { document.removeEventListener('keyup',   _activeKbUp);   _activeKbUp   = null; }

  const texts = shuffle([...TYPING[mode]]);
  let idx = 0;
  typing = { text: texts[idx], startTime: null, timer: null, errorCount: 0 };

  const titles = { sentence: '세벌식 타자연습 · 문장', longtext: '세벌식 타자연습 · 긴글' };
  practiceTitle.textContent = catTitle ? `세벌식 타자연습 · ${catTitle}` : titles[mode];
  practiceBody.innerHTML = typingUI();
  practiceOverlay.classList.add('show');

  // 키보드 시각 피드백
  const kbBoard = document.getElementById('kb-board');
  _activeKbDown = (e) => { kbBoard?.querySelector(`[data-code="${e.code}"]`)?.classList.add('kb-pressed'); };
  _activeKbUp   = (e) => { kbBoard?.querySelector(`[data-code="${e.code}"]`)?.classList.remove('kb-pressed'); };
  document.addEventListener('keydown', _activeKbDown);
  document.addEventListener('keyup',   _activeKbUp);

  const display = document.getElementById('tp-display');
  const input   = document.getElementById('tp-input');
  const btnStart = document.getElementById('tp-start');
  const btnNext  = document.getElementById('tp-next');
  const btnReset = document.getElementById('tp-reset');

  renderTyping('');
  input.disabled = true;

  btnStart.addEventListener('click', () => {
    typing.startTime = null;
    typing.errorCount = 0;
    resetStats();
    input.disabled = false;
    input.value = '';
    input.focus();
    renderTyping('');
  });

  btnNext.addEventListener('click', () => {
    idx = (idx + 1) % texts.length;
    typing.text = texts[idx];
    typing.startTime = null;
    typing.errorCount = 0;
    clearInterval(typing.timer);
    input.value = '';
    if (!input.disabled) input.focus();
    resetStats();
    renderTyping('');
    // 결과창 제거
    practiceBody.querySelector('.result-box')?.remove();
  });

  btnReset.addEventListener('click', () => {
    typing.startTime = null;
    clearInterval(typing.timer);
    input.disabled = true;
    input.value = '';
    resetStats();
    renderTyping('');
    practiceBody.querySelector('.result-box')?.remove();
  });

  input.addEventListener('input', () => {
    const val = input.value;
    if (val.length === 1 && !typing.startTime) {
      typing.startTime = Date.now();
      startTimer();
    }
    renderTyping(val);
    updateStats(val);
    if (val.length >= typing.text.length) {
      setTimeout(() => showResult(val), 200);
    }
  });

  function renderTyping(val) {
    const t = typing.text;
    let h = '';
    for (let i = 0; i < t.length; i++) {
      const ch = esc(t[i]);
      if (i < val.length) {
        h += `<span class="${val[i]===t[i]?'char-correct':'char-incorrect'}">${ch}</span>`;
      } else if (i === val.length) {
        h += `<span class="char-current">${ch}</span>`;
      } else {
        h += `<span class="char-wait">${ch}</span>`;
      }
    }
    display.innerHTML = h;
  }

  function updateStats(val) {
    const elapsed = typing.startTime ? (Date.now()-typing.startTime)/60000 : 0;
    const correct = cntCorrect(val);
    const cpm = elapsed > 0 ? Math.round(correct/elapsed) : 0;
    const acc = val.length > 0 ? Math.round(correct/val.length*100) : 100;
    let errs = 0;
    for (let i=0;i<val.length;i++) if(val[i]!==typing.text[i]) errs++;
    typing.errorCount = errs;
    setT('tp-cpm', cpm.toLocaleString());
    setT('tp-acc', acc+'%');
    setT('tp-err', errs);
  }

  function startTimer() {
    clearInterval(typing.timer);
    typing.timer = setInterval(() => {
      if (!typing.startTime) return;
      const sec = Math.floor((Date.now()-typing.startTime)/1000);
      const m=Math.floor(sec/60), s=sec%60;
      setT('tp-time', `${m}:${String(s).padStart(2,'0')}`);
    }, 500);
  }

  function showResult(val) {
    clearInterval(typing.timer);
    input.disabled = true;
    const elapsed = typing.startTime?(Date.now()-typing.startTime)/1000:0;
    const correct = cntCorrect(val);
    const cpm = elapsed>0?Math.round(correct/elapsed*60):0;
    const acc = val.length>0?Math.round(correct/val.length*100):100;
    const sec=Math.floor(elapsed), m=Math.floor(sec/60), s=sec%60;
    (document.getElementById('tp-content') || practiceBody).insertAdjacentHTML('beforeend',`
      <div class="result-box">
        <div class="result-box-title">✓ 완료!</div>
        <div class="result-box-stats">
          타수 <strong>${cpm.toLocaleString()} 타/분</strong> &nbsp;·&nbsp;
          정확도 <strong>${acc}%</strong> &nbsp;·&nbsp;
          시간 <strong>${m}:${String(s).padStart(2,'0')}</strong> &nbsp;·&nbsp;
          오타 <strong>${typing.errorCount}회</strong>
        </div>
        <button class="start-btn" id="tp-result-next" style="margin-top:12px;">다음 문장 ▷</button>
      </div>
    `);
    document.getElementById('tp-result-next')?.addEventListener('click', () => {
      practiceBody.querySelector('.result-box')?.remove();
      idx = (idx+1)%texts.length;
      typing.text = texts[idx];
      typing.startTime = null;
      typing.errorCount = 0;
      clearInterval(typing.timer);
      input.disabled = false;
      input.value = '';
      input.focus();
      resetStats();
      renderTyping('');
    });
  }

  function resetStats() {
    setT('tp-cpm','0'); setT('tp-acc','100%');
    setT('tp-time','0:00'); setT('tp-err','0');
  }
  function cntCorrect(val) {
    let c=0;
    for(let i=0;i<val.length&&i<typing.text.length;i++) if(val[i]===typing.text[i]) c++;
    return c;
  }
}

function typingUI() {
  return `
    <div class="tp-content" id="tp-content">
      <div class="typing-display" id="tp-display"></div>
      <textarea class="typing-input-field" id="tp-input" placeholder="여기에 타이핑하세요..." spellcheck="false" autocomplete="off" autocorrect="off"></textarea>
      <div class="typing-stats">
        <div class="t-stat"><div class="t-stat-label">타 수</div><div class="t-stat-value" id="tp-cpm">0</div></div>
        <div class="t-stat"><div class="t-stat-label">정확도</div><div class="t-stat-value" id="tp-acc">100%</div></div>
        <div class="t-stat"><div class="t-stat-label">경과시간</div><div class="t-stat-value" id="tp-time">0:00</div></div>
        <div class="t-stat"><div class="t-stat-label">오타수</div><div class="t-stat-value" id="tp-err">0</div></div>
      </div>
      <div class="typing-btn-row">
        <button class="start-btn" id="tp-start" style="flex:1;">▶ 시작</button>
        <button class="start-btn ghost" id="tp-next" style="flex:1;">다음 ▷</button>
        <button class="start-btn ghost" id="tp-reset" style="flex:1;">↺ 초기화</button>
      </div>
    </div>
    <div class="kb-wrap">
      <div class="kb-legend-bar">
        <span class="kb-legend-text">세벌식 390 자판</span>
        <span class="kb-legend-hint">자음 ← · → 모음 &nbsp;|&nbsp; 쌍자음: Shift + 자음키</span>
      </div>
      ${renderSebeolKeyboard()}
    </div>
  `;
}

/* ── 닫기 ── */
practiceBack.addEventListener('click', () => {
  clearInterval(typing.timer);
  if (_activeKbDown) { document.removeEventListener('keydown', _activeKbDown); _activeKbDown = null; }
  if (_activeKbUp)   { document.removeEventListener('keyup',   _activeKbUp);   _activeKbUp   = null; }
  practiceOverlay.classList.remove('show');
});

/* ── 유틸 ── */
function setT(id, v) { const e=document.getElementById(id); if(e) e.textContent=v; }
function esc(s) { return s===' '?'&nbsp;':s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function shuffle(arr) {
  for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}
  return arr;
}

/* ═══════════════════════════════════════════════
   모듈 조립 체험 — 드래그 앤 드롭 엔진
   ═══════════════════════════════════════════════ */
function initWorkshop() {
  const canvas   = document.getElementById('ws-canvas');
  const hint     = document.getElementById('ws-hint');
  const clearBtn = document.getElementById('ws-clear');
  if (!canvas) return;

  /* 고스트 엘리먼트 (커서 따라다니는 복사본) */
  let ghost = null;
  /* 드래그 중인 정보 */
  let drag = null;
  /* 모듈 카운터 */
  let modCount = 0;

  /* ── 고스트 생성 ── */
  function createGhost(jamo, role) {
    const g = document.createElement('div');
    g.className = 'ws-ghost';
    g.innerHTML = `
      <span class="ws-ghost-char">${jamo}</span>
      <span class="ws-ghost-role">${role}</span>
    `;
    document.body.appendChild(g);
    return g;
  }

  /* ── 고스트 이동 ── */
  function moveGhost(x, y) {
    if (!ghost) return;
    ghost.style.left = (x - 36) + 'px';
    ghost.style.top  = (y - 36) + 'px';
  }

  /* ── 고스트 제거 ── */
  function removeGhost() {
    if (ghost) { ghost.remove(); ghost = null; }
  }

  /* ── 캔버스 힌트 토글 ── */
  function updateHint() {
    const hasModules = canvas.querySelector('.ws-module');
    hint?.classList.toggle('hidden', !!hasModules);
  }

  /* ── 캔버스에 모듈 생성 ── */
  function spawnModule(jamo, role, x, y) {
    const id = 'wm-' + (++modCount);
    const el = document.createElement('div');
    el.className = 'ws-module';
    el.dataset.role = role;
    el.id = id;
    el.style.left = Math.max(0, x - 36) + 'px';
    el.style.top  = Math.max(0, y - 36) + 'px';

    el.innerHTML = `
      <span class="ws-module-char">${jamo}</span>
      <span class="ws-module-role">${role}</span>
      <span class="ws-module-del" title="삭제">×</span>
    `;

    /* 삭제 버튼 */
    el.querySelector('.ws-module-del').addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      el.remove();
      updateHint();
    });

    /* 모듈 자체 드래그 */
    el.addEventListener('pointerdown', (e) => {
      if (e.target.classList.contains('ws-module-del')) return;
      e.preventDefault();
      e.stopPropagation();

      const rect = canvas.getBoundingClientRect();
      const startX = e.clientX - rect.left - parseInt(el.style.left);
      const startY = e.clientY - rect.top  - parseInt(el.style.top);

      el.classList.add('dragging-active');
      el.setPointerCapture(e.pointerId);

      drag = { type: 'canvas', el, startX, startY };
    });

    canvas.appendChild(el);
    updateHint();
    return el;
  }

  /* ── 팔레트 타일 → 드래그 시작 ── */
  document.querySelectorAll('#ws-palette .ws-tile').forEach(tile => {
    tile.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      const jamo = tile.dataset.jamo;
      const role = tile.dataset.role;
      ghost = createGhost(jamo, role);
      moveGhost(e.clientX, e.clientY);
      drag = { type: 'palette', jamo, role };
      document.setPointerCapture?.(e.pointerId);
    });
  });

  /* ── pointermove ── */
  document.addEventListener('pointermove', (e) => {
    if (!drag) return;
    if (drag.type === 'palette') {
      moveGhost(e.clientX, e.clientY);
    } else if (drag.type === 'canvas') {
      const rect = canvas.getBoundingClientRect();
      const nx = e.clientX - rect.left - drag.startX;
      const ny = e.clientY - rect.top  - drag.startY;
      const maxX = rect.width  - 72;
      const maxY = rect.height - 72;
      drag.el.style.left = Math.min(Math.max(0, nx), maxX) + 'px';
      drag.el.style.top  = Math.min(Math.max(0, ny), maxY) + 'px';
    }
  });

  /* ── pointerup ── */
  document.addEventListener('pointerup', (e) => {
    if (!drag) return;

    if (drag.type === 'palette') {
      /* 캔버스 위에 드롭됐는지 확인 */
      const rect = canvas.getBoundingClientRect();
      const inCanvas =
        e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top  && e.clientY <= rect.bottom;

      if (inCanvas) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spawnModule(drag.jamo, drag.role, x, y);
      }
      removeGhost();
    } else if (drag.type === 'canvas') {
      drag.el.classList.remove('dragging-active');
    }

    drag = null;
  });

  /* ── 캔버스 초기화 ── */
  clearBtn?.addEventListener('click', () => {
    canvas.querySelectorAll('.ws-module').forEach(m => m.remove());
    updateHint();
  });
}

/* 스플래시 → 앱 전환은 index.html 인라인 스크립트에서 처리 */

/* ── 햄버거 버튼: hover로 사이드바 열고 닫기 ── */
(function() {
  const btn = document.getElementById('sidebar-toggle');
  const nav = document.querySelector('.category-nav');
  if (!btn || !nav) return;

  let timer = null;

  function openNav() {
    clearTimeout(timer);
    nav.classList.remove('collapsed');
  }

  function scheduleClose() {
    // 카테고리 페이지에서는 자동 닫히지 않음
    if (currentPageId !== 'home') return;
    timer = setTimeout(() => nav.classList.add('collapsed'), 200);
  }

  btn.addEventListener('mouseenter', openNav);
  btn.addEventListener('mouseleave', scheduleClose);
  nav.addEventListener('mouseenter', openNav);
  nav.addEventListener('mouseleave', scheduleClose);
})();

/* ── 메인 헤더 클릭 → 홈으로 ── */
document.getElementById('main-header')?.addEventListener('click', () => {
  document.querySelectorAll('.category-item').forEach(el => el.removeAttribute('data-active'));
  descContent.classList.remove('workshop-mode');
  renderPage('home');
  statusMsg.textContent = '메인 홈';
});



