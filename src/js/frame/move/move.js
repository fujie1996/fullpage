export default function (index) {
  var liNodes = document.querySelectorAll("html body #app .head .headMain .nav .item");
  var arrow = document.querySelector("html body #app .head .headMain .arrow");
  var listNode = document.querySelector("html body #app .content .list");
  var content = document.querySelector("html body #app .content");
  var pointNodes = document.querySelectorAll("html body #app .content .points li");

  content.index = index;

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
