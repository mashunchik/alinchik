var bounceIn = anime({
    targets: '.letter__part',
    translateY: {
        value: [-30, 0],
        duration: 900,
        elasticity: 600,
        easing: 'easeOutElastic',
        delay: anime.stagger(200, {start: 1000})
    },
    opacity: {
        value: [0, 1],
        duration: 300,
        easing: 'linear',
        delay: anime.stagger(200, {start: 1000})
    }
});

var lineDrawing1 = anime({
    targets: '.color-1',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutElastic',
    duration: 4000,
    delay: 1000,
    loop: false,
    direction: 'alternate',
});

var lineDrawing2 = anime({
    targets: '.color-3',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutElastic',
    duration: 4000,
    delay: 1200,
    loop: false,
    direction: 'alternate',
});

var lineDrawing3 = anime({
    targets: '.color-2',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutElastic',
    duration: 4000,
    delay: 1400,
    loop: false,
    direction: 'alternate',
});



const textElement = document.getElementById('animatedText');
const buttonElement = document.getElementById('myButton');
const texts = ['Желаю хорошего дня', 'и веселого настроения', 'Цьомаю)))'];
let index = 0;

function changeText() {
    if (index < texts.length) {
        textElement.textContent = texts[index];
        textElement.style.animation = 'none'; // Скидаємо анімацію
        textElement.offsetHeight; // Перезапускаємо анімацію
        textElement.style.animation = 'type 5s infinite, blink 1s step-end infinite';
        index++;
    } else {
        document.querySelector('.text-container').style.display = 'none';
        buttonElement.style.display = 'block';
        clearInterval(interval);
    }
}



const interval = setInterval(changeText, 5000);
buttonElement.addEventListener('click', transitionToNewPage);