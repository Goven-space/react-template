
import "./css/index.css";
import "./css/index.less";
import "./css/index.sass";
import png1 from "./assets/1.png";
document.querySelector(".demo-img1").style.background = `url(${png1})`;
console.log("hello webpack");
// # main.js
// 数组去重
const uniqueArr = [...new Set([1, 1, 1, 2, 3])];
console.log(uniqueArr);

// 箭头函数
const es6Fn = () => "is es6Fn";
console.log(es6Fn());
console.log(111)