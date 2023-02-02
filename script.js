const main = document.querySelector('.main');


const passwords = document.querySelectorAll('.password')
const pword = document.querySelector('#pword');
const cpword = document.querySelector('#cpword');
const pwordWarning = document.querySelector('.password-warning');

const invalidPasswordWarning = () => {
    pword.classList.add('invalid');
    cpword.classList.add('invalid');
    pwordWarning.classList.remove('hidden');
}

const removeInvalidPasswordWarning = () => {
    pword.classList.remove('invalid');
    cpword.classList.remove('invalid');
    pwordWarning.classList.add('hidden');
}

passwords.forEach((password) => {
    password.addEventListener('input', () => {
        if (pword.value != cpword.value) {
            invalidPasswordWarning();
        } else {
            removeInvalidPasswordWarning();
        }
    })
})


const x = () => {
    console.log(pword.value)
}