<template>
  <div id="app">
    <div
      id="header"
      class="header"
    >
      <h2>Todo List App</h2>
      <input-todo></input-todo>
    </div>
    <list></list>
  </div>
</template>

<script>
// 할일 목록 컴포넌트 가져오기
import List from "./components/List";
// 할일 추가 컴포넌트 가져오기
import InputTodo from "./components/InputTodo";

export default {
  // 컴포넌트 이름 설정
  name: "app",
  // 자식 컴포넌트 등록
  components: { List, InputTodo }
};
</script>

<style>
* {
  box-sizing: border-box;
}
.header {
  background-color: purple;
  color: yellow;
  text-align: center;
  padding: 30px 30px;
}
.header::after {
  content: "";
  display: table;
  clear: both;
}
</style>
