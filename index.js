
let apps = [
    'app',
    'blog',
    'shop',
    'note',
    'game',
    'grave'
]

let displayedApp = document.getElementById('app-name')
displayedApp.innerHTML = apps[0]

const rotateRight = () => {
    apps.push(apps.shift());
    return apps;
}

const rotateLeft = () => {
    apps.unshift(apps.pop());
    return apps
}

const toggleRight = () => {
    let carosel = rotateRight();
    displayedApp.innerHTML = carosel[0];
    carosel[0] === 'grave' ? toggleDark() : toggleLight()
}

const toggleLeft = () => {

    let carosel = rotateLeft();
    displayedApp.innerHTML = carosel[0];
    carosel[0] === 'grave' ? toggleDark() : toggleLight()
}

document.getElementById('button-right').onclick = toggleRight;
document.getElementById('button-left').onclick = toggleLeft;