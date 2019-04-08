const nameEl = document.getElementById('name');
const passEl = document.getElementById('token');
const btnSingIn = document.getElementById('signIn');
const error = document.getElementById('idDivError');


btnSingIn.addEventListener('click', submitListener);
nameEl.addEventListener('input',()=> {error.innerHTML = '';});
passEl.addEventListener('input',()=> {error.innerHTML = '';});

function getAutorizaton(userName, userToken) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
                const arrUser = JSON.parse(this.responseText);

                for (let i = 0; i < arrUser.length; i++) {
                    if (arrUser[i].name === userName && arrUser[i].token === userToken) {
                        sessionStorage.setItem('idUser', arrUser[i].id);
                        resolve();
                        break;
                    }
                }
                reject();
            }
        });

        xhr.open("GET", "/api/user/");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Postman-Token", "b8388a49-8f92-49e4-a63a-69a627a7137c");

        xhr.send();
    })
}

function submitListener(event) {
    const name = nameEl.value;
    const loginNotEmpty = name.trim() !== '';

    const token = passEl.value;
    const passNotEmpty = token.trim() !== '';

    if (loginNotEmpty && passNotEmpty) {
        const promice = getAutorizaton(name, token);

        promice
            .then(() => {
                location.href = './index.html';
                return true})
            .catch(() => {
                error.innerHTML = 'Ошибка. Неправильное имя пользователя или токен';
                return false;
            });
    } else {
        if (!loginNotEmpty) {
            error.innerHTML = 'Ошибка. Поле Логин не заполнено';
            return false;
        }

        if (!passNotEmpty) {
            error.innerHTML = 'Ошибка. Пароль не должен быть пустым';
        }
    }

    event.preventDefault();
    return false;
}
