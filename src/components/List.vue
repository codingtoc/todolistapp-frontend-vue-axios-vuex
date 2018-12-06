<template>
  <ul id="todolist">
    <li
      v-for="item in todolist"
      :key="item._id"
      :class="checked(item.done)"
      @click="doneToggle(item._id)"
    >
      <span>{{item.todo}}</span>
      <span v-if="item.done"> (완료)</span>
      <span
        class="close"
        @click.stop="deleteTodo(item._id)"
      >X</span>
    </li>
  </ul>
</template>

<script>
// 액션 관련 메서드 이름 가져오기
import Constant from "../Constant.js";
// vuex의 mapState 헬퍼 메서드 가져오기
import { mapState } from "vuex";

export default {
  // 컴포넌트 이름 설정
  name: "list",
  // 저장소의 할일 목록 상태 가져오는 계산형 속성
  computed: mapState(["todolist"]),
  mounted() {
    // 컴포넌트가 마운트되면 DB에서 할일 목록 가져와 상태 변경하기
    this.$store.dispatch(Constant.FETCH_TODOS);
  },
  methods: {
    // 할일 완료여부에 따라 checked 클래스를 설정하는 메서드
    checked(done) {
      if (done) return { checked: true };
      else return { checked: false };
    },
    // 특정 id의 할일 완료여부 값을 토글하는 메서드
    doneToggle(id) {
      // 할일 목록에서 특정 id의 할일 객체를 찾아서 변수에 저장
      let obj = this.todolist.find(obj => obj._id === id);
      // DB에서 기존 할일 완료여부 수정 후 할일 목록 가져와 상태 변경하기
      this.$store.dispatch(Constant.DONE_TOGGLE, {
        id: id,
        todo: { done: !obj.done }
      });
    },
    // 특정 id의 할일을 삭제하는 메서드
    deleteTodo(id) {
      // DB에서 기존 할일 삭제한 후 할일 목록 가져와 상태 변경하기
      this.$store.dispatch(Constant.DELETE_TODO, { id: id });
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  cursor: pointer;
  position: relative;
  padding: 8px 8px 8px 40px;
  background: #eee;
  font-size: 14px;
  transition: 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
ul li:hover {
  background: #ddd;
}
ul li.checked {
  background: #bbb;
  color: #fff;
  text-decoration: line-through;
}
ul li.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0px 1px 1px 0px;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 8px;
  width: 8px;
}
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 8px 12px 8px 12px;
}
.close:hover {
  background-color: #f44336;
  color: white;
}
</style>