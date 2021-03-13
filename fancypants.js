function stackoverflow() {
    var txt = document.getElementById("search").value
    window.location.href = "https://google.com/search?q=" + escape(txt)
}

function google(){
    var txt = document.getElementById("search").value
    window.location.href = "https://google.com/search?q=" + escape(txt)
}

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  window.location.href = "./mobile"
}