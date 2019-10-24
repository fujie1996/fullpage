// import "@babel/polyfill"
import "./frame/frame"
import "./business/home"
import "./business/course"
import "./business/works"
import "./business/about"
import "./business/team"

//处理用户的缩放操作
window.onresize = function () {
  var liNodes = document.querySelectorAll("html body #app .head .headMain .nav .item");
  var homeNode = liNodes[0];
  var arrow = document.querySelector("html body #app .head .headMain .arrow");
  var contentLiNodes = document.querySelectorAll("html body #app .content .list li");
  var contentNode = document.querySelector("html body #app .content");
  var pointNodes = document.querySelectorAll("html body #app .content .points li");

  //按住ctrl键进行鼠标缩放时，css中的样式都会进行重绘，而写在JS中的样式不会，监听onresize事件，将JS中的样式重新再设置一遍
  contentLiNodes.forEach((liNode)=>{
    liNode.style.height = contentNode.offsetHeight + "px";
  })
  arrow.style.left = (homeNode.offsetLeft + (homeNode.clientWidth / 2) - (arrow.offsetWidth / 2))+ 'px';
}
