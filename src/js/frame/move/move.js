export default function (index) {
  var liNodes = document.querySelectorAll("body #app .head .headMain .nav .item");
  var pointNodes = document.querySelectorAll("html #app .content .points, body #app .content .points li");
  var content = document.querySelector("html body #app .content");
  var listNode = document.querySelector("html body #app .content .list");
  var arrow = document.querySelector("html body #app .head .headMain .arrow");

  for (var j = 0; j < liNodes.length; j++) {
    liNodes[j].classList.remove("active");
    pointNodes[j].classList.remove("active");
  }
  liNodes[index].classList.add("active");
  pointNodes[index].classList.add("active");

  //重新设置arrow的位置
  arrow.style.left = (liNodes[index].offsetLeft + (liNodes[index].offsetWidth/2) - (arrow.offsetWidth/2) )+"px";

  //切换屏幕
  listNode.style.top = `-${index * content.offsetHeight}px`;
}
