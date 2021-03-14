function cookieValue(cookie) {

    return document.cookie.split('; ').find(row => row.startsWith(cookie + '=')).split('=')[1];

}

function search(engine) {

    var input = document.getElementById("search").value;

    switch (engine) {

        case 0: // dev_bible
            window.location.href = "https://stackoverflow.com/search?q=" + escape(input);
        break;

        case 1: // ordinary
            window.location.href = "https://google.com/search?q=" + escape(input);
        break;

        case 2: // cookie
            if (cookieValue("se_str").slice(-1) != "=") {
                window.location.href = cookieValue("se_str") + "=" + escape(input)
            } else {
                window.location.href = cookieValue("se_str") + escape(input)
            }
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

    var input = document.createElement("input");
    input.setAttribute('type', 'button');
    input.setAttribute('class', 'submit')
    input.setAttribute('id', 'defaultbtn')

    if (document.cookie) {
        console.log(document.cookie)
        
        input.setAttribute('value', 'Search with ' + cookieValue('se_name'))
        input.setAttribute('onclick', 'search(2)')

    } else {
        input.setAttribute('value', 'Search with ' + "Google")
        input.setAttribute('onclick', 'search(1)')
    }

    if (window.location.href.slice(-10).includes('mobile') == true) {
        input.setAttribute('style', 'font-size: 4vw;')
    }

    var parent = document.getElementById("se_list");
    parent.appendChild(input);

}