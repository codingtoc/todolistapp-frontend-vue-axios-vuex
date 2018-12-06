// 할일 관련 backend 서버 REST API 가져오기
import todoAPI from "../api/TodoAPI";
// 액션 관련 메서드 이름 가져오기
import Constant from "../Constant";

export default {
  // DB에서 할일 목록 가져와 상태 변경하기
  [Constant.FETCH_TODOS]: store => {
    // DB에서 할일 목록을 가져오기 위해 backend REST API 요청하기
    todoAPI.fetchTodos().then(response => {
      // 응답 결과로 할일 목록 상태 변경하기
      store.commit(Constant.FETCH_TODOS, { todolist: response.data });
    });
  },
  // DB에 신규 할일 추가한 후 할일 목록 가져와 상태 변경하기
  [Constant.ADD_TODO]: (store, payload) => {
    // DB에 신규 할일을 추가하기 위해 backend REST API 요청하기
    todoAPI.addTodo(payload).then(response => {
      // DB에서 할일 목록 가져와 상태 변경하기
      store.dispatch(Constant.FETCH_TODOS);
    });
  },
  // DB에서 기존 할일 완료여부 수정 후 할일 목록 가져와 상태 변경하기
  [Constant.DONE_TOGGLE]: (store, payload) => {
    // DB에서 기존 할일 완료여부 수정하기 위해 backend REST API 요청하기
    todoAPI.updateTodo(payload).then(response => {
      // DB에서 할일 목록 가져와 상태 변경하기
      store.dispatch(Constant.FETCH_TODOS);
    });
  },
  // DB에서 기존 할일 삭제한 후 할일 목록 가져와 상태 변경하기
  [Constant.DELETE_TODO]: (store, payload) => {
    // DB에서 기존 할일 삭제하기 위해 backend REST API 요청하기
    todoAPI.deleteTodo(payload.id).then(response => {
      // DB에서 할일 목록 가져와 상태 변경하기
      store.dispatch(Constant.FETCH_TODOS);
    });
  }
};
