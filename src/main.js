// vue 모듈 가져오기
import Vue from "vue";
// App 컴포넌트 가져오기
import App from "./App.vue";
// Vuex의 저장소 가져오기
import store from "./store";

// Vue 인스턴스 생성
new Vue({
  // 저장소 옵션
  store,
  // HTML 요소 옵션
  el: "#app",
  // App 컴포넌트 렌더링 메서드 옵션
  render: h => h(App)
});
