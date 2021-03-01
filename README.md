# valila_javascript_simple_trello

- class로 짜보기
- component 관심사 분리하기
- state 객체로 상태관리하기
- api 호출 동시다발적으로 여러번 할경우 제일 마지막부분만 api call되도록 처리하기 (reduxsaga에서 takeLatest 같은거) -> debounce로 처리
- 에러에 대한 처리
- 서버요청에 response가 느릴경우 or 없는경우 UX처리
- 레이지 로딩 처리로 사용자 경험 높이기
- 무한 스크롤링 구현의 두가지 방법 
  1- ([intersectionobserver](https://velog.io/@yejinh/Intersection-Observer%EB%A1%9C-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0))
  2 - throtle
