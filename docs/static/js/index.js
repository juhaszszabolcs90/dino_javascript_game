function initPage() {
    Splitting();
    inputName();
}

function inputName() {
    const inputField = document.querySelector('#name');
    const btnDiv = document.querySelector('#btnDiv');
    const startButton = document.querySelector('#start_game');

    // Eseményfigyelő az input mezőhöz
    inputField?.addEventListener('input', () => {
        const userName = inputField.value.trim();
        if (userName.length >= 5) {
            btnDiv.classList.remove('inactive'); // Gomb aktív
            startButton.disabled = false; // Gomb használható
        } else {
            btnDiv.classList.add('inactive'); // Gomb inaktív
            startButton.disabled = true; // Gomb tiltott
        }
    });

    // Start gomb kattintás eseménye
    startButton?.addEventListener('click', () => {
        const userName = inputField.value.trim();
        if (userName.length >= 5) {
            localStorage.setItem('username', userName); // Felhasználónév mentése
            window.location.href = './game.html'; // Átirányítás a játék oldalára
        }
    });
}




initPage();
