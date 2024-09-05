function darkMode() {
    document.querySelector('body').classList.toggle('dark');
}

const cta = document.querySelector('.cta');
cta.addEventListener('click', () => {
    location.href = 'secret.html';
})