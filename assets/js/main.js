const toggleButton = document.getElementById('toggleButton')
    const navList = document.getElementById('navi-list')

    toggleButton.addEventListener('click', () => {
        navList.classList.toggle('active');
    })