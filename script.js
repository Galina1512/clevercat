// Печатаем текст
let text = 'Давай поиграем!..';
let i=0;
let speed = 300;
function type(){
    if (i<text.length){
        document.querySelector('.typing').textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
        document.querySelector('#myAudio3').play();
}
type();

// Начинаем игру со случайными числами
const input = document.querySelector('.input-number');
const button = document.querySelector('.btn');
const compNumber = Math.floor(Math.random()*100)+1;

// Ставим прослушку на нажатие Enter
input.addEventListener('keypress', function(e){
if(e.keyCode === 13) play();
})
// Ставим прослушку на нажатие button
button.addEventListener('click', play);

function play(){
    const userNumber = document.querySelector('.input-number').value;
    if (userNumber <1 || userNumber>100) {
        Swal.fire({
            icon: 'error',
            title: 'Ой! Так не пойдет!',
            text: 'Введи число от 1 до 100!',
          })
          input.value = ' ';
    }
else if (isNaN(userNumber)){
    Swal.fire({
        icon: 'error',
        title: 'Не безобразничай!',
        text: 'Введи цифру, а не букву!',
      })
      input.value = ' ';
    }
else if 
     (userNumber>compNumber) {
        Swal.fire('Бери ниже.',
        'Пока котик побеждает.')
        input.value = ' ';
    }
else if (userNumber <compNumber) {
        Swal.fire('Попробуй число повыше.',
        'Пока котик побеждает.')
        input.value = ' ';
    }
else {   
    Swal.fire({
        title: 'Победа!',
        imageUrl: 'salute.jpg',
        imageWidth: 500,
        imageHeight: 400,
        imageAlt: 'salute.jpg',
      })
      input.value = ' ';
      document.querySelector('#myAudio2').play();

    //   останавливаем таймер
      clearTimeout(timerID); 
    }
}

// Победа котика через 30 сек

let timerID = setTimeout(catswin, 30000);
function catswin(){
    Swal.fire({
        title: 'Время вышло!',
        text: 'Котик победил!',
        imageUrl: 'cat2.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      input.value = ' ';
      document.querySelector('#myAudio').play();
      clearTimeout(timerID); 
}

// останавливаем мяуканье и меняем клавишу play-stop
const btn = document.querySelector('#mybtn');
const audioMyau = document.querySelector('#myAudio3');
const image = document.querySelector('.stop');
let ii=0;

btn.addEventListener('click', () =>{
if (ii===0){
    ii=1;
    audioMyau.play();
    audioMyau.volume=0.5;
    image.setAttribute("src", "pause.png");
}
else{
    ii=0;
    audioMyau.pause();
    image.setAttribute("src", "play.png");

}
})




