const toggleButton = document.getElementById('toggleButton')
const navList = document.getElementById('MENU')
const regList = document.getElementById('REG')


toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
})
toggleButton.addEventListener('click', () => {
    regList.classList.toggle('active');
})

function mysearch() {
    let elem = document.getElementById('SEARCH'); // получаем элемент по ID
    let style = getComputedStyle(elem); // получаем его стили
    if (style.display === 'none') {
        document.getElementById('SEARCH').style.display = 'flex';
    } else if (style.display !== 'none') {
        document.getElementById('SEARCH').style.display = 'none';
    }
}