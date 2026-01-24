// 1. Анимация появления при прокрутке
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);
reveal(); // Запуск при загрузке

// 2. Логика проверки аккаунта (Исправлено)
function checkAccount() {
    const nickInput = document.getElementById('nickname');
    const res = document.getElementById('check-result');
    
    if (!nickInput.value.trim()) { 
        res.innerHTML = "❌ Введите ваш ник!"; 
        res.style.color = "#ff4d4d";
        return; 
    }
    
    res.style.color = "#00d2ff";
    res.innerHTML = "🔍 Подключение к серверам Roblox...";
    
    setTimeout(() => {
        res.innerHTML = `✅ Аккаунт <strong>${nickInput.value}</strong> найден и совместим! Скидка 5% активирована.`;
        res.style.color = "#00ff88";
    }, 1500);
}

// 3. Живой счетчик остатков
let currentStock = 48250;
const stockElement = document.getElementById('cookie-count');
if(stockElement) {
    setInterval(() => {
        currentStock -= Math.floor(Math.random() * 3);
        stockElement.innerText = currentStock.toLocaleString();
    }, 8000);
}

// 4. Имитация уведомлений о покупках
const names = ['Artem_ZXC', 'Killer777', 'RobloxGirl', 'Danya_Top', 'User_99', 'Admin_Cookies'];
function showNotif() {
    const container = document.getElementById('notification-container');
    const toast = document.createElement('div');
    toast.className = 'notification';
    const randomName = names[Math.floor(Math.random() * names.length)];
    toast.innerHTML = `🛒 <strong>${randomName}</strong> купил пакет Cookies!`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}
setInterval(showNotif, 12000); // Раз в 12 секунд
