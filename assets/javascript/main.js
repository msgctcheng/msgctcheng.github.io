function openTab(name, content) {
    var i;
    var tabContent;
    var tabs;
    tabContent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
   
    document.getElementById(name).style.display = "block";
    document.getElementById(content).style.display= "block";
  

}
document.getElementById("startTab").click(); 