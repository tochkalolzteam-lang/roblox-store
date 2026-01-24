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