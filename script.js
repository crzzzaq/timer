
/*setTimeout(function () {
    setTimeout(function () {
        console.log('таймер на 1000')
    }, 1000)
    console.log('таймер на 5000')
}, 5000)

setTimeout(function () {
    console.log('таймер на 2000')
}, 2000)

console.log('после setTimeout');

console.log('до цикла');
console.time('время выполнения скрипта');
for (let i = 1; i < 3000000000; i++) {
    let a = i / i;
}
console.timeEnd('время выполнения скрипта');
console.log('после цикла');
*/


let text = document.querySelector('.text');
let btn = document.querySelector('.btn');
let input = document.querySelector('.input');


function start() {
    window.setInterval(timer, 1000);
}

function timer() {
    input.value = input.value * input.value
}

btn.addEventListener('click', function () {
    setTimeout(function () {
        text.textContent = text.textContent + 1
    }, 1000)
})