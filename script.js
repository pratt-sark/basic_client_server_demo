function sendRequest() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var responseDiv = document.getElementById("response");
            responseDiv.innerHTML = "Server Response: " + xhr.responseText;
        }
    };

    xhr.open("GET", "/api/data", true);
    xhr.send();
}
