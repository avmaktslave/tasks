document.addEventListener('click', e => {
    if (e.target.tagName === 'IMG') {
        (e.target.classList != 'bordered') ?
            e.target.classList.add('bordered'):
            e.target.classList.remove('bordered');
    }
});