import { EOL } from 'os';
import deepFreeze from './deepFreeze.js';

const MENU_SAMPLE = Object.freeze({
  일식: [
    '규동',
    '우동',
    '미소시루',
    '스시',
    '가츠동',
    '오니기리',
    '하이라이스',
    '라멘',
    '오코노미야끼',
  ],
  한식: [
    '김밥',
    '김치찌개',
    '쌈밥',
    '된장찌개',
    '비빔밥',
    '칼국수',
    '불고기',
    '떡볶이',
    '제육볶음',
  ],
  중식: [
    '깐풍기',
    '볶음면',
    '동파육',
    '짜장면',
    '짬뽕',
    '마파두부',
    '탕수육',
    '토마토 달걀볶음',
    '고추잡채',
  ],
  아시안: [
    '팟타이',
    '카오 팟',
    '나시고렝',
    '파인애플 볶음밥',
    '쌀국수',
    '똠얌꿍',
    '반미',
    '월남쌈',
    '분짜',
  ],
  양식: [
    '라자냐',
    '그라탱',
    '뇨끼',
    '끼슈',
    '프렌치 토스트',
    '바게트',
    '스파게티',
    '피자',
    '파니니',
  ],
});

const NUMBER = Object.freeze({
  coach: {
    nameLength: { min: 2, max: 4 },
    count: { min: 2, max: 5 },
    excludedMenuCount: { min: 0, max: 2 },
  },
  menuPicker: {
    sameCategoryLimit: 2,
    days: [0, 1, 2, 3, 4],
  },
});

const SYMBOL = {
  inputSeparator: ',',
  resultSeparator: ' | ',
  newLine: EOL,
};

const MESSAGE = Object.freeze({
  header: {
    application: '점심 메뉴 추천을 시작합니다.',
    result: '메뉴 추천 결과입니다.',
  },
  read: {
    coachNames: `코치의 이름을 입력해 주세요. (${SYMBOL.inputSeparator} 로 구분)`,
    excludedMenu: coachName =>
      `${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.`,
  },
  footer: '추천을 완료했습니다.',
});

const DAYS = Object.freeze({
  0: '월',
  1: '화',
  2: '수',
  3: '목',
  4: '금',
  5: '토',
  6: '일',
});

const CATEGORIES = Object.freeze({
  1: '일식',
  2: '한식',
  3: '중식',
  4: '아시안',
  5: '양식',
});

const ERROR = Object.freeze({
  coachName: {
    invalidLength: `코치 이름은 ${NUMBER.coach.nameLength.min} ~ ${NUMBER.coach.nameLength.max}글자 사이의 문자열이어야 합니다.`,
    invalidCount: `코치는 최소 ${NUMBER.coach.count.min}명, 최대 ${NUMBER.coach.count.max}명 입력 가능합니다.`,
    duplicateName: '코치 이름을 중복으로 입력할 수 없습니다.',
  },
  excludedMenu: {
    invalidName: '유효하지 않은 메뉴입니다.',
    duplicateName: '메뉴를 중복으로 입력할 수 없습니다.',
    invalidCount: `먹을 수 없는 메뉴는 최소 ${NUMBER.coach.excludedMenuCount.min}개, 최대 ${NUMBER.coach.excludedMenuCount.max}개여야 합니다.`,
  },
});

const FORMAT = Object.freeze({
  joinWithSeparator: item => item.join(SYMBOL.resultSeparator),
  schedule: dayNumbers =>
    `[ 구분 | ${FORMAT.joinWithSeparator(
      dayNumbers.map(item => `${DAYS[item]}요일`),
    )} ]`,
  categories: categories =>
    `[ 카테고리 | ${FORMAT.joinWithSeparator(categories)} ]`,
  pickResult: (coachName, menuPicks) =>
    `[ ${coachName} | ${FORMAT.joinWithSeparator(menuPicks)} ]`,
});

export {
  MENU_SAMPLE,
  NUMBER,
  FORMAT,
  SYMBOL,
  DAYS,
  ERROR,
  CATEGORIES,
  MESSAGE,
};
