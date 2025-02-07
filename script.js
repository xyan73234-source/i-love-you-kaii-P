const messages = [
    "Are you sure?",
    "Really realllyy sure??",
    "Absolutely sure??",
    "Babe please...",
    "Just think about it one more time!",
    "If you say no, im gonna cryyyy",
    "I will cry my eyes out",
    "I will be very sad too",
    "fine fine, ill stop asking :(",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}