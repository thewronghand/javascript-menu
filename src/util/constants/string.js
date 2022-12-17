const RESULT = {
  noDuplicates: '중복 없음',
  hasDuplicates: '중복됨',
};

const SIGN = {
  opener: '[ ',
  closer: ' ]',
  divider: ' | ',
};

const WEEK = {
  title: '구분',
  monday: '월요일',
  tuesday: '화요일',
  wednesday: '수요일',
  thursday: '목요일',
  friday: '금요일',
};

const CATEGORY = {
  title: '카테고리',
  korean: '한식',
  japanese: '일식',
  chinese: '중식',
  asian: '아시안',
  western: '양식',
};

const MENU = {
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
};
module.exports = { RESULT, SIGN, WEEK, CATEGORY, MENU };
