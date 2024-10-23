const fortunes = [
    "You will have a great day!",
    "Good things are coming your way!",
    "Expect a pleasant surprise soon!",
    "Success is in your future.",
    "Today is a lucky day for you!",
    "You are destined for greatness.",
    "Happiness will find you soon.",
    "A new opportunity is around the corner.",
    "Fortune favors the brave.",
    "You will achieve your dreams!"
];

const cookie = document.getElementById('cookie');
const message = document.getElementById('fortune-message');
const newFortuneBtn = document.getElementById('new-fortune');

// Function to display a random fortune
function showFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    message.innerHTML = fortunes[randomIndex];
    message.style.display = 'block';
}

// On clicking the cookie, display a random fortune
cookie.addEventListener('click', showFortune);

// On clicking the "Open Another Cookie" button, generate a new fortune
newFortuneBtn.addEventListener('click', () => {
    message.style.display = 'none';
    showFortune();
});