// vue 모듈 가져오기
import Vue from "vue";
// vuex 모듈 가져오기
import Vuex from "vuex";
// 저장소 상태 가져오기
import state from "./state";
// 저장소 변이 가져오기
import mutations from "./mutations";
// 저장소 액션 가져오기
import actions from "./actions";
// es6-promise 모듈 가져오기
import ES6Promise from "es6-promise";

// 낡은 브라우저에서도 Promise를 사용할 수 있도록 설정
ES6Promise.polyfill();
// Vue에서 Vuex를 사용할 수 있도록 설정
Vue.use(Vuex);

// Vuex의 저장소 객체 생성
const store = new Vuex.Store({
  // 상태 옵션
  state,
  // 변이 옵션
  mutations,
  // 액션 옵션
  actions,
  // strict 모드 옵션
  strict: true
});

export default store;
