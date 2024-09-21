
document.addEventListener('DOMContentLoaded', () => {
    // Загрузка данных из Local Storage
    if (localStorage.getItem('userData')) {
        const userData = JSON.parse(localStorage.getItem('userData'));
        document.getElementById('email').value = userData.email || '';
        document.getElementById('name').value = userData.name || '';
        document.getElementById('last_name').value = userData.last_name || '';
        document.getElementById('country').value = userData.country || 'USA';
        document.getElementById('language').value = userData.language || 'English';
        if (userData.subscribe === 'yes') {
            document.getElementById('subscribe_yes').checked = true;
        } else {
            document.getElementById('subscribe_no').checked = true;
        }
    }

    // Сохранение данных в Local Storage при отправке формы
    document.getElementById('user_form').addEventListener('submit', (e) => {
        e.preventDefault();
        const userData = {
            email: document.getElementById('email').value,
            name: document.getElementById('name').value,
            last_name: document.getElementById('last_name').value,
            country: document.getElementById('country').value,
            language: document.getElementById('language').value,
            subscribe: document.querySelector('input[name="subscribe"]:checked').value
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Данные сохранены!');
    });
});