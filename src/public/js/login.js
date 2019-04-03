
document.querySelector('#signInBtn').addEventListener('click', login);

function login() {
 
    // Form fields, see IDs above
    var data = {
        name: document.querySelector('#loginFormName').value,
        token: document.querySelector('#loginFormPassword').value
    };
    var json = JSON.stringify(data);
  
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
    });
    xhr.open("POST", "http://localhost:3000/api/user");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "28ba48db-ccc9-47db-9107-b924c81f4fad");
    xhr.send(json);
}

