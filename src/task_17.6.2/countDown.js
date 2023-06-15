export function countDown (n) {
    if (typeof n !== 'number' || Number.isNaN(n)) {
        throw new Error('Invalid parameter');
    }

    if (n >= 0) {
        for (let i = n; i >= 1; i--) {
            console.log(i);
        }
    } else {
        for (let i = n; i <= -1; i++) {
            console.log(i);
        }
    }
}