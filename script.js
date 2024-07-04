let rizzData = [];
let currentRizz = null;

// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        rizzData = data;
    })
    .catch(error => console.error('Error loading data:', error));

function generateRizz() {
    if (rizzData.length === 0) return;

    const randomIndex = Math.floor(Math.random() * rizzData.length);
    currentRizz = rizzData[randomIndex];

    document.getElementById('rizz-string').innerText = currentRizz;
    
    document.querySelector('.copy').classList.remove('disabled');
}

function copyRizz() {
    if (!currentRizz) return;

    navigator.clipboard.writeText(currentRizz)
        .then(() => {
            showCopyPopup();
        })
        .catch(err => {
            console.error('Error copying text:', err);
        });
}

function showCopyPopup() {
    const popup = document.getElementById('copy-popup');
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 2000);
}

function disableCopyButton() {
    document.querySelector('.copy').classList.add('disabled');
}

disableCopyButton();