export function getPercents (percent, number) {
    if ((typeof percent !== 'number' || Number.isNaN(percent)) && (typeof number !== 'number' || Number.isNaN(number))) {
        throw new Error('Invalid percent and number parameter');
    } else if (typeof percent !== 'number' || Number.isNaN(percent)) {
        throw new Error('Invalid percent parameter');
    } else if (typeof number !== 'number' || Number.isNaN(number)) {
        throw new Error('Invalid number parameter');
    }
    return number / 100 * percent;
}