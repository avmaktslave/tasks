document.querySelector('.test').onmousemove = e => {
    document.querySelector('#offx').innerHTML = e.offsetX;
    document.querySelector('#offy').innerHTML = e.offsetY;
};