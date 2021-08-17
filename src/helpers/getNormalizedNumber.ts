export default function getNormalizedNumber(number) {
    return number
        .split('')
        .filter(char => /[0-9,+]/.test(char))
        .join('');
}
