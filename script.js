// Анимация прокрутки
function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) el.classList.add("active");
    });
}
window.addEventListener("scroll", reveal);
reveal();

// Проверка аккаунта (имитация)
function checkAccount() {
    const nick = document.getElementById('nickname').value;
    const res = document.getElementById('check-result');
    if (!nick) { res.innerHTML = "Введите ник!"; return; }
    
    res.innerHTML = "🔍 Проверяем аккаунт...";
    setTimeout(() => {
        res.innerHTML = `✅ Аккаунт <strong>${nick}</strong> совместим! Скидка 5% применена в боте.`;
        res.style.color = "#00ff88";
    }, 2000);
}

// Счетчик остатков
let currentStock = 48250;
setInterval(() => {
    currentStock -= Math.floor(Math.random() * 3);
    document.getElementById('cookie-count').innerText = currentStock.toLocaleString();
}, 7000);

// Уведомления о покупках
const names = ['Dmitry', 'Ivan', 'Roblox_Fan', 'Gamer777', 'Stas'];
function showNotif() {
    const container = document.getElementById('notification-container');
    const toast = document.createElement('div');
    toast.className = 'notification';
    toast.innerHTML = `🛒 <strong>${names[Math.floor(Math.random()*names.length)]}</strong> купил Cookies!`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}
setInterval(showNotif, 10000);
