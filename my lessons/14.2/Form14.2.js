let formRegRef = document.querySelector('.js-register-form');
let inputNameRef = document.querySelector('input[name="name"]');
console.log(inputNameRef);



formRegRef.addEventListener('submit', (event) => {
    event.preventDefault()
    let formRef = event.target.elements; // после elements идёт name инпута к которому обращяемся
    console.log('Submit');
    console.dir(formRef.email.value);
    console.dir(formRef);
});

