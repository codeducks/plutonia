function makecookie() {
    var exp = 60*60*24*7*30*365
    var time = new Date
    time.setSeconds(exp)

    var se_name = document.getElementById('se-name').value;
    var se_str = document.getElementById('se-str').value;
    document.cookie = "se_name=" + escape(se_name) + " ; expires=" + time.getUTCDate() + " ;path=/"
    document.cookie = "se_str=" + se_str + " ; expires=" + time.getUTCDate() + " ;path=/"
    console.log(document.cookie)
    alert("Settings were saved.")
}

window.onload = () => {

    if (document.cookie) {
        document.getElementById('se-name').value = document.cookie.split('; ').find(row => row.startsWith("se_name" + '=')).split('=')[1];
        document.getElementById('se-str').value = document.cookie.split('; ').find(row => row.startsWith("se_str" + '=')).split('=')[1];
    } else {

        document.getElementById('se-name').value = "Google"
        document.getElementById('se-str').value = "https://google.com/search?q="

    }

}