const healthbar = document.getElementById('lives');

export const compareNumbers = (n, g) => {
    const num = Number(n);
    const guess = Number(g);

    if (num === guess) return 'correct';
    else if (guess > num) return 'too high';
    else return 'too low';
};

export const displayHearts = n => {
    const num = Number(n);

    healthbar.innerHTML = '';

    for (let i = 0; i < num; i++) {
        const heart = document.createElement('img');
        heart.src = './assets/health.png';
        heart.classList.add('heart');

        healthbar.appendChild(heart);
    }
}