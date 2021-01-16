let allButtons = document.querySelectorAll('.drum');

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function () {
        let btnInnerHTML = this.innerHTML;
        playSound(btnInnerHTML);
        btnAnimation(btnInnerHTML);
    })
}


document.addEventListener('keydown', function (event) {
    playSound(event.key);
    btnAnimation(event.key);
})


function playSound(key) {
    switch (key) {
        case 'w':
            let tom1 = new Audio('/sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('/sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('/sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('/sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let snare = new Audio('/sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            let crash = new Audio('/sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            let kickBass = new Audio('/sounds/kick-bass.mp3');
            kickBass.play();
            break;
        default:
            console.log('invalid button input');
            break;
    }
};

function btnAnimation(currentKey) {
    let activeBtn = document.querySelector('.' + currentKey);
    activeBtn.classList.add('pressed');
    
    setTimeout(function() {
        activeBtn.classList.remove('pressed');
    }, 100)
};
