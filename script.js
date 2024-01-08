function sendRequest() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var responseDiv = document.getElementById("response");
            responseDiv.innerHTML = "Server Response: " + xhr.responseText;
        }
    };

    xhr.open("GET", "http://localhost:3000/", true);
    xhr.send();
}
