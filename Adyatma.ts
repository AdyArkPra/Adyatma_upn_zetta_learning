type Combinable = (number | string)[]
/**
 * @param {String | Number []} tulisan
 */
function penggabung(tulisan: Combinable): string{
    let result: string = '';
    tulisan.map((text, index) => {
        result += (index ? ' ' : '') + text;
    }
    );
    return result;
}
const text1 = [1, 'data', '3', 'result'];
const text2 = ['Bejo', 'has', 4, 'sport', 'car'];

console.log(penggabung(text1));
console.log(penggabung(text2));