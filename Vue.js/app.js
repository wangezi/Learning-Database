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
// 輸出 - 文字的綁定
var app = Vue.createApp({
  // 資料模型 (Model)
  data: function () {
    return {
      message: "Hello Ian!",
      items: ["Dog", "Cat", "Bird"],
    };
  },
});
// Vue.js 渲染畫面的 HTML Element
app.mount("#app");

// // 迴圈
// var app = Vue.createApp({
//   data: function () {
//     return {
//       list: ["Dog", "Cat", "Bird"],
//     };
//   },
// });
// app.mount("#app");
