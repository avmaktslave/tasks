document.querySelector('#result').onclick = getResult;

getResult();

function getResult() {
    const menu = document.getElementsByClassName('menu');
    let cost = 0;
    let kkal = 0;
    for (let index = 0; index < menu.length; index++) {
        if (menu[index].checked) {
            cost += parseFloat(menu[index].getAttribute('data-cost'));
            kkal += parseFloat(menu[index].getAttribute('data-kkal'));
        }
    }
    document.getElementById('cost').innerHTML = cost;
    document.getElementById('kkal').innerHTML = kkal;
}