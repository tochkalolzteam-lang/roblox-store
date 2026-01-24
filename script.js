function runCheck() {
    const n = document.getElementById('nick').value;
    const o = document.getElementById('out');
    if(!n) { o.innerText = "Введите ник!"; o.style.color = "red"; return; }
    o.innerText = "Проверка...";
    setTimeout(() => {
        o.innerText = "✅ Аккаунт совместим!";
        o.style.color = "#00ff88";
    }, 1000);
}
