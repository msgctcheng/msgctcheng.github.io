
var drop = document.getElementsByClassName("dropdown");
var i;
for (i = 0; i < drop.length; i++) {
        drop[i].onclick = function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        }
    }





function openTab(name, content) {
    var i;
    var tabContent;
    var tabs;
    tabContent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
   
    document.getElementById(name).style.display = "block";
    document.getElementById(content).style.display= "block";
  

}
document.getElementById("startTab").click(); 



