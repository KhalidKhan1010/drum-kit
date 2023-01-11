document.addEventListener('keydown', playKey);

const drumKeys = document.querySelectorAll('.drum-key');
drumKeys.forEach(addTransitionEventHandler);

function addTransitionEventHandler(element) {
    element.addEventListener('transitionend', (e) => e.target.classList.remove('playing'));
}

function playKey(e)
{
    switch (e.key)
    {
        case 'a':
        case 'A':
            document.getElementById('keyA').classList.add('playing');
            document.getElementById('soundA').currentTime = 0;
            document.getElementById('soundA').play();
            break;
        case 's':
        case 'S':
            document.getElementById('keyS').classList.add('playing');
            document.getElementById('soundS').currentTime = 0;
            document.getElementById('soundS').play();
            break;
        case 'd':
        case 'D':
            document.getElementById('keyD').classList.add('playing');
            document.getElementById('soundD').currentTime = 0;
            document.getElementById('soundD').play();
            break;
        case 'f':
        case 'F':
            document.getElementById('keyF').classList.add('playing');
            document.getElementById('soundF').currentTime = 0;
            document.getElementById('soundF').play();
            break;
        case 'g':
        case 'G':
            document.getElementById('keyG').classList.add('playing');
            document.getElementById('soundG').currentTime = 0;
            document.getElementById('soundG').play();
            break;
        case 'h':
        case 'H':
            document.getElementById('keyH').classList.add('playing');
            document.getElementById('soundH').currentTime = 0;
            document.getElementById('soundH').play();
            break;
        case 'j':
        case 'J':
            document.getElementById('keyJ').classList.add('playing');
            document.getElementById('soundJ').currentTime = 0;
            document.getElementById('soundJ').play();
            break;
        case 'k':
        case 'K':
            document.getElementById('keyK').classList.add('playing');
            document.getElementById('soundK').currentTime = 0;
            document.getElementById('soundK').play();
            break;
        case 'l':
        case 'L':
            document.getElementById('keyL').classList.add('playing');
            document.getElementById('soundL').currentTime = 0;
            document.getElementById('soundL').play();
            break;
        default:
    }
}