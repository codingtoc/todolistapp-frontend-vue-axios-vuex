// axios를 이용해 접근할 backend 서버 기본 URL
const BASE_URL = "http://localhost:4000/api";

// axios를 이용해 접근할 backend 서버 REST API URL
export default {
  // DB에서 할일 목록 가져오기 URL
  FETCH: BASE_URL + "/todos",
  // DB에 신규 할일 추가하기 URL
  ADD: BASE_URL + "/todos",
  // DB에서 기존 할일 수정하기 URL
  UPDATE: BASE_URL + "/todos/${id}",
  // DB에서 기존 할일 삭제하기 URL
  DELETE: BASE_URL + "/todos/${id}"
};
