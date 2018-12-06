<template>
  <div>
    <input
      type="text"
      id="task"
      class="input"
      v-model.trim="todo"
      placeholder="입력 후 엔터!"
      @keyup.enter="addTodo"
    >
    <span
      class="addbutton"
      @click="addTodo"
    >추 가</span>
  </div>
</template>

<script>
// 액션 관련 메서드 이름 가져오기
import Constant from "../Constant.js";

export default {
  // 컴포넌트 이름 설정
  name: "inputTodo",
  // 추가할 할일 지역 데이터 정의
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    // 신규 할일을 추가하는 메서드
    addTodo() {
      // 할일로 값이 입력된 경우에만 처리
      if (this.todo !== "") {
        // DB에 신규 할일 추가한 후 할일 목록 가져와 상태 변경하기
        this.$store.dispatch(Constant.ADD_TODO, {
          todo: this.todo,
          done: false
        });
        // 할일 지역 데이터 초기화
        this.todo = "";
      }
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.input {
  border: none;
  width: 75%;
  height: 35px;
  padding: 10px;
  float: left;
  font-size: 16px;
}
.addbutton {
  padding: 10px;
  width: 25%;
  height: 35px;
  background-color: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  transition: 0.3s;
}
.addbutton:hover {
  background-color: #bbb;
}
</style>