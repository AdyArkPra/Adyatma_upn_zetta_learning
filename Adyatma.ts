/**
 * @param {string} text
 * @param {Number} index1
 * @param {Number} index2
 */
function pemisah(text: string, index1: number, index2: number): string{
    return text.slice(index1, index2);
}
const text = "Learning Typescript is different than Javascript";
const index1 = 9;
const index2 = 19;

console.log(pemisah(text, index1, index2));