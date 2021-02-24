// scroll down the document by 1 page
window.scrollByPages(1);

// scroll up the document by 1 page
window.scrollByPages(-1);

document.querySelector('[name="source"]').value = location.href;

    function sendMail(e) {
        e.preventDefault();
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
            }
        };

        let email = document.getElementById('email');
        let message = document.getElementById('message');
        let source = document.getElementById('source');
        xhttp.open("POST", this.getAttribute('action'), true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("email=" + email +  "&message=" + message + "&source=" + source);
    }