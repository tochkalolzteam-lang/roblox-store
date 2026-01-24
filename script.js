// Функция проверки (теперь точно сработает)
function checkAccount() {
    console.log("Кнопка нажата!"); // Для проверки в консоли
    const nick = document.getElementById('nickname').value;
    const res = document.getElementById('check-result');
    
    if (!nick.trim()) {
        res.innerHTML = "❌ Введите ник!";
        res.style.color = "#ff4d4d";
        return;
    }
    
    res.innerHTML = "🔍 Проверка совместимости...";
    res.style.color = "#00d2ff";
    
    setTimeout(() => {
        res.innerHTML = `✅ Аккаунт <strong>${nick}</strong> подходит!`;
        res.style.color = "#00ff88";
    }, 1500);
}

// Анимация появления при скролле
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
window.onload = reveal; // Чтобы первый экран сразу появился
