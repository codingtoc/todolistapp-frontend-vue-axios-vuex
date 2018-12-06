// axios 모듈 가져오기
import axios from "axios";
// axios를 이용해 접근할 backend 서버 REST API URL 가져오기
import CONF from "../Config";

export default {
  // DB에서 할일 목록 가져오기 REST API
  fetchTodos() {
    // axios get 메서드 호출
    return axios.get(CONF.FETCH);
  },
  // DB에 신규 할일 추가하기 REST API
  addTodo(todo) {
    // axios post 메서드 호출
    return axios.post(CONF.ADD, todo);
  },
  // DB에 기존 할일 수정하기 REST API
  updateTodo(todo) {
    // axios put 메서드 호출
    return axios.put(CONF.UPDATE.replace("${id}", todo.id), todo.todo);
  },
  // DB에 기존 할일 삭제하기 REST API
  deleteTodo(id) {
    // axios delete 메서드 호출
    return axios.delete(CONF.DELETE.replace("${id}", id));
  }
};
