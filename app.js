let apps = [
    'app', 
    'blog', 
    'shop',
    'note',
    'game',
    'grave'
]

let displayedApp = document.getElementById('app-name')

const setDisplay = () => {
    const currentApp = apps[0];
    displayedApp.innerHTML = currentApp;
    currentApp === 'grave' ?  toggleDark() : toggleLight()
}

const toggleDark = () => {
    document.body.style.color = '#757575'
    document.body.style.backgroundColor = '#000000'
    displayedApp.style.color = '#9C27B0'
}

const toggleLight = () => {
    document.body.style.color = '#000000'
    document.body.style.backgroundColor = '#FFFFFF'
    displayedApp.style.color = '#2ED9EB'
}

const rotateRight = () => {
    apps.push(apps.shift());
    setDisplay();
}

const rotateLeft = () => {
    apps.unshift(apps.pop());
    setDisplay();
}

const changeToRent = () => {
    rentOrBuyComponent.innerHTML =
    '<div class="rent-component">' +
        '<h1>Rent</h1>' +
    '</div>';
}

const changeToBuy = () => {
    rentOrBuyComponent.innerHTML =
    '<div class="buy-component">' +
        '<h1>Buy</h1>' +
    '</div>';
}

document.getElementById('button-right').onclick = rotateRight;
document.getElementById('button-left').onclick = rotateLeft;
document.getElementById('toggle-rent-button').onclick = changeToRent;
document.getElementById('toggle-buy-button').onclick = changeToBuy;

document.addEventListener('DOMContentLoaded', () => {
    setDisplay();
})

let rentOrBuyComponent = document.getElementById('rent-or-buy')
