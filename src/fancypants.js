function stackoverflow() {
    var txt = document.getElementById("search").value;
    window.location.href = "https://stackoverflow.com/search?q=" + escape(txt);
}

function google(){
    var txt = document.getElementById("search").value;
    window.location.href = "https://google.com/search?q=" + escape(txt);
}