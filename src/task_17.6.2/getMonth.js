export function getMonth (n) {
    if (n === 1) return 'Январь';
    if (n === 2) return 'Февраль';
    if (n === 3) return 'Март';
    if (n === 4) return 'Апрель';
    if (n === 5) return 'Май';
    if (n === 6) return 'Июнь';
    if (n === 7) return 'Июль';
    if (n === 8) return 'Август';
    if (n === 9) return 'Сентябрь';
    if (n === 10) return 'Октябрь';
    if (n === 11) return 'Ноябрь';
    if (n === 12) return 'Декабрь';
    throw new Error('Invalid parameter');
}