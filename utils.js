
export const compareNumbers = (n, g) => {
    const num = Number(n);
    const guess = Number(g);

    if (num === guess) return 'correct';
    else if (guess > num) return 'too high';
    else return 'too low';
};