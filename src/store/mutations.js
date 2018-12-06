// 변이 관련 메서드 이름 가져오기
import Constant from "../Constant";

export default {
  // 할일 목록 상태 변경하기
  [Constant.FETCH_TODOS]: (state, payload) => {
    state.todolist = payload.todolist;
  }
};
