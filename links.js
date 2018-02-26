// concerning apple iOS web app: this script keeps links from opening in browser
/*
var stay = function() {
        window.location=this.getAttribute("href");
        return false; 
}

var hideme = function() {
    document.getElementById('s-menu').checked = false;
    document.getElementById('m-s-menu').checked = false;
}

var runall = function() {
    hideme();
    stay();
}
var a=document.getElementsByTagName("a");

for(var i=0;i<a.length;i++) {
    if(a[i].getAttribute("target") != "_blank") {
        a[i].addEventListener("click", function() {
            window.location=this.getAttribute("href");
            return false; 
        })
    }
}
*/

//document.querySelectorAll("a.nav").addEventListener("click", hideme());


/*
function stay() {
    window.location=this.getAttribute("href");
    return false; 
}

function hide2() {
    document.getElementById('s-menu').checked = false;
  }
var a=document.getElementsByTagName("a");
for(var i=0;i<a.length;i++) {
    if(a[i].getAttribute("target") != "_blank") {
        a[i].onclick=function() {
            stay();
            hide2();
        }
    }
}
*/