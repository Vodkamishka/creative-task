const array = [1,2,3,4,5];

const shift = (array, k) => {
    return [...array.slice(-k), ...array.slice(0, array.length - k)]
}

console.log(shift(array, 3))

let A = 'aababba';
let B = 'abbaabcd';

const compare = (a, b) => {
    const words = [...a.split('').map((el, index) => a.slice(0, index+1)), ...a.split('').map((el, index) => a.slice(index+1))]
    const same = words.filter(el => b.indexOf(el) !== -1);
    const max =  Math.max(...same.map(el => el.length));
    return same.filter(el => el.length === max)
}

console.log(compare(A,B))