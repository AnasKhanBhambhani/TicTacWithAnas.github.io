
console.log('This is anas.......');
let box = Array.from(document.getElementsByClassName('box'));
let reset = document.getElementById('reset');
let gameover = new Audio("gameover.mp3");
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let isgameover = false;
let turn = "X";
const changeturn = () => {
    return turn === "X" ? "0" : "X";
}
const checkwin = () => {
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],
    ]
    let boxtext = document.getElementsByClassName('boxtext');
    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[0]].innerText) && (boxtext[e[0]].innerText!== '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won";
            isgameover = true;
            music.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })

}
box.forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            ting.play();
            checkwin();
            if (isgameover !== true) {
                document.getElementsByClassName('info')[0].innerText = "Turn For " + turn;
            }
        }
    })

})

reset.addEventListener('click', () => {
    // location.reload();
    location.reload();
})