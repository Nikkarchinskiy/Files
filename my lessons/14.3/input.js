let inputRef = document.querySelector('.js-input');
let nameLabelRef = document.querySelector('.js-button > span');
let licenseRef = document.querySelector('.js-license');
let buttonRef = document.querySelector('.js-button');


// inputRef.addEventListener('change', () => {
//     console.log('Hello from input!!!');
// });

// inputRef.addEventListener('input', (event) => {
//     // console.log(event.target.value);
//     nameLabelRef.textContent = event.target.value;
// });
buttonRef.addEventListener('click', (event) => {
    console.log('go');
});

licenseRef.addEventListener('change', (edvent) => {
    console.log(event.target.checked);
    buttonRef.disabled = !event.target.checked;
});

inputRef.addEventListener('focus', (event) => {
    console.log('Focus event');
});