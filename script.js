// Данные для имитации активности
const names = ['Dmitry', 'Ivan', 'Roblox_King', 'CookieMonster', 'User_77', 'MegaGamer'];
const amounts = ['100', '500', '1000', '2500', '5000'];

function showNotification() {
    const container = document.getElementById('notification-container');
    
    // Генерируем случайные данные
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAmount = amounts[Math.floor(Math.random() * amounts.length)];
    
    // Создаем элемент уведомления
    const toast = document.createElement('div');
    toast.className = 'notification';
    toast.innerHTML = `<strong>${randomName}</strong> купил 🍪 <strong>${randomAmount} Cookies</strong>`;
    
    container.appendChild(toast);
    
    // Удаляем уведомление через 4 секунды
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// Запускаем появление уведомлений каждые 7-12 секунд
function startNotifications() {
    const randomDelay = Math.floor(Math.random() * (12000 - 7000) + 7000);
    setTimeout(() => {
        showNotification();
        startNotifications();
    }, randomDelay);
}

// Запуск через 3 секунды после загрузки сайта

setTimeout(startNotifications, 3000);
// Функция для живого изменения счетчика остатков
function updateStock() {
    const stockElement = document.getElementById('cookie-count');
    let currentStock = parseInt(stockElement.innerText.replace(',', ''));
    
    // Случайным образом уменьшаем число (имитация продаж)
    setInterval(() => {
        const sale = Math.floor(Math.random() * 5);
        if (currentStock > 100) {
            currentStock -= sale;
            stockElement.innerText = currentStock.toLocaleString();
        }
    }, 5000);
}

updateStock();

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Запускаем один раз при загрузке, чтобы проверить первый экран
reveal();
