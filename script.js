function checkAccount() {
    const nick = document.getElementById('nickname').value;
    const res = document.getElementById('check-result');
    
    if (!nick.trim()) {
        res.innerHTML = "❌ Введите ник!";
        res.style.color = "#ff4d4d";
        return;
    }
    
    res.innerHTML = "🔍 Проверка...";
    res.style.color = "#00d2ff";
    
    setTimeout(() => {
        res.innerHTML = `✅ Аккаунт ${nick} подходит!`;
        res.style.color = "#00ff88";
    }, 1000);
}

// Уведомления
setInterval(() => {
    const container = document.getElementById('notification-container');
    const toast = document.createElement('div');
    toast.className = 'notification';
    toast.innerHTML = `🛒 Кто-то купил Cookies!`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}, 10000);
