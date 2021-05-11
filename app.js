window.onload = function () { // создаётся функция, которая работает после загрузки страницы
    let elements = document.getElementsByTagName("button"); // создаётся переменная "elements" в которой хранятся кнопки
    let screen = document.querySelectorAll("p")[0]; // создаётся переменная экрана, где хранится первый параграф

    for (let i = 0; i < elements.length; i++) { // создаётся счётчик переменной "i", который увеличивается на единицу, пока меньше количества кнопок
        if (elements[i].innerHTML === "=") {
            elements[i].addEventListener("click", calculate(i));
        } else {
            elements[i].addEventListener("click", addtocurrentvalue(i));
        }
    }

    function addtocurrentvalue(i) {
        return function () {
            if (elements[i].innerHTML === "÷") {
                screen.innerHTML += "/";
            } else if (elements[i].innerHTML === "×") {
                screen.innerHTML += "*";
            } else if (elements[i].innerHTML === "–") {
                screen.innerHTML += "-";
            } else if (elements[i].innerHTML === ",") {
                screen.innerHTML += ".";
            } else {
                screen.innerHTML += elements[i].innerHTML;
            }
        };
    }

    clear.onclick = function () {
        screen.innerHTML = "";
    };

    function calculate(i) {
        return function () {
            screen.innerHTML = eval(screen.innerHTML);
        }
    }
};