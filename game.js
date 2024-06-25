// Получаем элемент игрока
var player = document.getElementById("player");
var x = 0; // Начальная позиция X в процентах
var y = 0; // Начальная позиция Y в процентах
var speed = 0.2; // Скорость движения игрока в процентах

// Функция для обновления позиции игрока
function updatePlayerPosition() {
    player.style.left = x + '%';
    player.style.top = y + '%';
}

// Объект для отслеживания состояния клавиш
var keysPressed = {};

// Добавляем обработчик события для нажатия клавиш
document.addEventListener('keydown', function(event) {
    keysPressed[event.key] = true;
});

// Добавляем обработчик события для отпускания клавиш
document.addEventListener('keyup', function(event) {
    keysPressed[event.key] = false;
});

// Функция для перемещения игрока
function movePlayer() {
    var moved = false; // Флаг, указывающий на изменение позиции
    if (keysPressed['w']) { // вверх
        y -= speed;
        moved = true;
    }
    if (keysPressed['s']) { // вниз
        y += speed;
        moved = true;
    }
    if (keysPressed['a']) { // влево
        x -= speed;
        moved = true;
    }
    if (keysPressed['d']) { // вправо
        x += speed;
        moved = true;
    }

    if (moved) { // Обновляем позицию только если было движение
        updatePlayerPosition();
        moved = false;
    }

    requestAnimationFrame(movePlayer); // Планируем следующий вызов
}

// Инициализируем анимацию
requestAnimationFrame(movePlayer);