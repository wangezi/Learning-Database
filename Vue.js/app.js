// Vue.js 2.x
/* 
var app = new app({

// el 即 Element，Vue 以 css 的選擇器指定要 render 的位置
   el : '#app',

// Vue Render 時使用的資料
   data: {
   message: "Hello World",
  }
})
*/

// Vue.js 3.x

var app = Vue.createApp({
  // 資料模型 (Model)
  data: function () {
    return {
      message: "Hello Ian!", // 輸出 - 文字的綁定
      list: ["Dog", "Cat", "Bird"], // 迴圈
      Ian: "I'm Ian", //輸入-表單變數資料雙向綁定
      isIan: ture, // 條件式
      message01: "Hi!!",
    };
  },

  // 事件
  methods: {
    testEvent: function () {
      alert("click seccess!(點擊成功)");
    },
  },

  // 初始化 - beforeCreate 與 created
  beforeCreate() {
    // Vue 實體化後，響應式開始前，資料初始化程式可於此處撰寫。
  },
  created() {
    // Vue 實體化後，開始響應式後，資料初始化程式可於此處撰寫。
  },

  // 元件及樣板掛載 - beforeMount 與 mounted
  beforeMount() {
    // 元件或樣板掛載前，要執行的程序。
  },
  mounted() {
    // 元件或樣板掛載完成後，要執行的程序。
  },

  //元件及樣板銷毀 - beforeUnmount 與 unmounted
  beforeUnmount() {
    // 元件或樣板銷毀前，要執行的程序。(應用於計數器)
  },
  unmounted() {
    // 元件或樣板銷毀前，要執行的程序。(應用於轉導頁面)
  },

  // 資料更新及重新渲染 - beforeUpdate 與 updated
  beforeUpdate() {
    // 資料更新後，畫面渲染前執行的程序
  },
  updated() {
    // 資料更新後，完成畫面渲染時，執行的程序
  },
});
// Vue.js 渲染畫面的 HTML Element
app.mount("#app");
