const switchToggle = document.querySelector('.switch');
const slider = document.querySelector('.slider');
const body = document.getElementById('body');
const btns = document.querySelectorAll('.btn-classic');
const equalBtn = document.querySelector('.btn-equal');
const reset = document.querySelector('.reset');
const del = document.querySelector('.del');
const content = document.getElementById('content')


switchToggle.addEventListener('click', () => {
    if(slider.classList.contains('start')) {
        console.log(true);
        slider.classList.remove('start');
        slider.classList.remove('end');
        slider.classList.add('middle');
        body.classList.add('theme-two');
        body.classList.remove('theme-one');
        body.classList.remove('theme-three');
    } else if(slider.classList.contains('middle')) {
        slider.classList.remove('start');
        slider.classList.remove('middle');
        slider.classList.add('end');
        body.classList.add('theme-three');
        body.classList.remove('theme-two');
        body.classList.remove('theme-one');
    } else if(slider.classList.contains('end')) {
        slider.classList.remove('middle');
        slider.classList.remove('end');
        slider.classList.add('start');
        body.classList.add('theme-one');
        body.classList.remove('theme-two');
        body.classList.remove('theme-three');
    }
})

var operation;
var dotCheck;
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(btn.innerHTML == '+' 
            || btn.innerHTML == '-' 
            || btn.innerHTML == '/'
            || btn.innerHTML == '*'
        ) {
            if(!operation && content.innerHTML != 0) {
                content.innerHTML += btn.innerHTML
            } else if(!operation) {
                content.innerHTML = btn.innerHTML
            }
            operation = true;
            dotCheck = false;
        } else if(btn.innerHTML == '.') {
            if(!dotCheck && content.innerHTML != 0) {
                content.innerHTML += btn.innerHTML
            } else if(!dotCheck) {
                content.innerHTML = btn.innerHTML
            }
            dotCheck = true
        } else if(
            btn.innerHTML != '+' 
            || btn.innerHTML != '-' 
            || btn.innerHTML != '/'
            || btn.innerHTML != '*'
            || btn.innerHTML != '.'
        ) {
            operation = false;
            if(content.innerHTML != 0) {
                content.innerHTML += btn.innerHTML
            } else {
                content.innerHTML = btn.innerHTML
            }
        }
        console.log(operation, dotCheck);
    }) 
})

equalBtn.addEventListener('click', () => {
    content.innerHTML = eval(content.innerHTML)
})

reset.addEventListener('click', () => {
    content.innerHTML = 0
})

del.addEventListener('click', () => {
    if(content.innerHTML.length > 1) {
        content.innerHTML = content.innerHTML.slice(0,-1);
    } else {
        content.innerHTML = 0;
    }
})