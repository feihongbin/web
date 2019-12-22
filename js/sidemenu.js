function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
    document.getElementById("main").style.marginRight = "150px";
    document.getElementById("side-face").style.display = "block";
}
/*关闭侧栏，恢复原始侧栏宽度，主体左跨度、背景透明度*/
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
document.getElementById("side-face").style.display = "none";
}