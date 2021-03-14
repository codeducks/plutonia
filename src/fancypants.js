function search(engine) {

    var input = document.getElementById("search").value;

    switch (engine) {

        case 0: // dev_bible
            window.location.href = "https://stackoverflow.com/search?q=" + escape(input);
        break;

        case 1: // ordinary
            window.location.href = "https://google.com/search?q=" + escape(input);
        break;

    }

}

window.onload=function(){
    document.getElementById("search"). addEventListener('keydown', (e) => { //addEventListener("keyup", function(event) {
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("defaultbtn").click();
    }
    });
}