// lets
const body=document.querySelector('body');
let toggle=document.getElementById("toggle");
let music = document.getElementById('music');
let img = document.getElementById('img_music');
let img2 = document.getElementById('img_block');
let menu = document.getElementById('start_menu');
let pns = document.getElementById('play_now_screen');
let container = document.getElementById('container');
let imgXO = document.getElementById('XO');
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let closemenu = document.getElementById('close_menu');
var audio = document.querySelector("#audio");
let count = 0;
let img_count = 0;
let tick = document.getElementById('tick');
let nmb = 0;
let XO_counter = 0;
let color_count = 0;
let place1 = document.getElementById('place1');
let place2 = document.getElementById('place2');
let place3 = document.getElementById('place3');
let place4 = document.getElementById('place4');
let place5 = document.getElementById('place5');
let place6 = document.getElementById('place6');
let place7 = document.getElementById('place7');
let place8 = document.getElementById('place8');
let place9 = document.getElementById('place9');
let menus = document.getElementById('menus');
let p1s = document.getElementById('player1side');
let p2s = document.getElementById('player2side');
let places = ['','','','','','','','','']
let greyO = `<img src='items/greyO.png' class='Os'>`;
let whiteX = `<img src='items/whiteX.png' class='Xs'>`;
let p1w = parseInt(localStorage.p1w) || 0;
let p2w = parseInt(localStorage.p2w) || 0;
let random = between();
// functions
function playagain(){
    location.reload();
}
function closeMe(){
    window.opener = self;
    window.close();
    localStorage.removeItem('p1w')
    localStorage.removeItem('p2w')
}
function containertoggle(){
    place1.classList.toggle('bright')
    place2.classList.toggle('bright')
    place3.classList.toggle('bright')
    place4.classList.toggle('bright')
    place5.classList.toggle('bright')
    place6.classList.toggle('bright')
    place7.classList.toggle('bright')
    place8.classList.toggle('bright')
    place9.classList.toggle('bright')
    pns.classList.toggle('bright')
    player1.classList.toggle('bright')
    player2.classList.toggle('bright')
    p1s.classList.toggle('bright')
    p2s.classList.toggle('bright')
}
function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        img2.style.display = 'none'
    }else{
        count=0;
        audio.pause();
        img2.style.display = ''
    }
}
function imgChanger(){
    if(img_count === 0){
        img.src = './items/music_2.png'
        img2.src = './items/blocked_2.png'
        img_count = 1
    }else{
        img.src = './items/music.png'
        img2.src = './items/blocked.png'
        img_count = 0
    }
}
function menuClose(){
    menus.style.display = 'none'
    menu.style.display = 'none'
    container.classList.remove('none')
}
function Changer_color_count(){
    if (color_count == 0) {
        if(XO_counter===0){
            imgXO.src = 'items/yellowO.png'
        }else{
            imgXO.src = 'items/yellowX.png'
        }
        color_count = 1 ;
    }else{
        if(XO_counter===0){
            imgXO.src = 'items/blueO.png'
        }else{
            imgXO.src = 'items/blueX.png'
        }
        color_count = 0;
    }
}
function imgloop(){
    if (color_count == 0) {
        if(XO_counter===0){
            imgXO.src = 'items/blueX.png'
            XO_counter = 1; 
        }else{
            imgXO.src = 'items/blueO.png'
            XO_counter = 0;
        }
    } else {
        if(XO_counter===0){
            imgXO.src = 'items/yellowX.png'
            XO_counter = 1; 
        }else{
            imgXO.src = 'items/yellowO.png'
            XO_counter = 0;
        }
    }
    nmb++
    tick.play()
}
function between() {  
    return Math.floor(
      Math.random() * (50 - 40) + 40
    )
}
function startloop(){
    let interval = setInterval(()=>{
        imgloop()
        if(nmb == random){clearInterval(interval)}
    },100)
}
function friend(){
    place1.setAttribute('onclick','play1()')
    place2.setAttribute('onclick','play2()')
    place3.setAttribute('onclick','play3()')
    place4.setAttribute('onclick','play4()')
    place5.setAttribute('onclick','play5()')
    place6.setAttribute('onclick','play6()')
    place7.setAttribute('onclick','play7()')
    place8.setAttribute('onclick','play8()')
    place9.setAttribute('onclick','play9()')
    p1s.style.display = ''
    p2s.style.display = ''
    startcolorchange()
}
let red;
let blue;
function colorchange(){
    if (color_count == 1) {
        if((random % 2) == 1){
            red = setTimeout(() => {
                p1s.style.backgroundColor = '#926015'
                setTimeout(() => {
                    p1s.style.backgroundColor = '#d28717'
                }, 800);
            }, 800);
        }else if((random % 2) == 0){
            blue = setTimeout(() => {
                p2s.style.backgroundColor = '#327058'
                setTimeout(() => {
                    p2s.style.backgroundColor = '#5eb090'
                }, 800);
            }, 800);
        }else{}
    }else{
        if((random % 2) == 1){
            red = setTimeout(() => {
                p1s.style.backgroundColor = 'rgb(94, 0, 0)'
                setTimeout(() => {
                    p1s.style.backgroundColor = 'rgb(116, 0, 0)'
                }, 800);
            }, 800);
        }else if((random % 2) == 0){
            blue = setTimeout(() => {
                p2s.style.backgroundColor = 'rgb(0, 0, 100)'
                setTimeout(() => {
                    p2s.style.backgroundColor = 'rgb(0, 0, 160)'
                }, 800);
            }, 800);
        }else{}
    }
    
}
let win1;
let win2;
function win(){
    clearInterval(change)
    if((random % 2) == 0){
        win1 = setTimeout(() => {
            p1s.style.backgroundColor = 'gold'
            setTimeout(() => {
                p1s.style.backgroundColor = 'yellow'
            }, 800);
        }, 800);
    }else if((random % 2) == 1){
        win2 = setTimeout(() => {
            p2s.style.backgroundColor = 'gold'
            setTimeout(() => {
                p2s.style.backgroundColor = 'yellow'
            }, 800);
        }, 800);
    }else{}
}
let change;
function startcolorchange(){
setTimeout(() => {
    change = setInterval(() => {
        colorchange()
    }, 1601);
}, ((random*100)-1000));
}
function WinLoseDraw(){
    if(places[0] == 'X' && places[1] == 'X' && places[2] == 'X'){
        pns.innerHTML = 'Player X wins'
        p1w++
        player1.innerText = `Player X wins = ${p1w}`
        win()
        closeoff()
    }else if (places[3] == 'X' && places[4] == 'X' && places[5] == 'X') {
        pns.innerHTML = 'Player X wins'
        p1w++
        player1.innerText = `Player X wins = ${p1w}`
        win()
        closeoff()
    }else if (places[6] == 'X' && places[7] == 'X' && places[8] == 'X') {
        pns.innerHTML = 'Player X wins'
        p1w++
        player1.innerText = `Player X wins = ${p1w}`
        win()
        closeoff()
    }else if (places[0] == 'O' && places[1] == 'O' && places[2] == 'O') {
        pns.innerHTML = 'Player O wins'
        p2w++
        player2.innerText = `Player O wins = ${p2w}`
        win()
        closeoff()
    }else if (places[3] == 'O' && places[4] == 'O' && places[5] == 'O') {
        pns.innerHTML = 'Player O wins'
        p2w++
        player2.innerText = `Player O wins = ${p2w}`
        win()
        closeoff()
    }else if (places[6] == 'O' && places[7] == 'O' && places[8] == 'O') {
        pns.innerHTML = 'Player O wins'
        p2w++
        player2.innerText = `Player O wins = ${p2w}`
        win()
        closeoff()
    }else if (places[0] == 'X' && places[3] == 'X' && places[6] == 'X') {
        pns.innerHTML = 'Player X wins'
        p1w++
        player1.innerText = `Player X wins = ${p1w}`
        win()
        closeoff()
    }else if (places[1] == 'X' && places[4] == 'X' && places[7] == 'X') {
        pns.innerHTML = 'Player X wins'
        p1w++
        player1.innerText = `Player X wins = ${p1w}`
        win()
        closeoff()
    }else if (places[2] == 'X' && places[5] == 'X' && places[8] == 'X') {
        pns.innerHTML = 'Player X wins'
        p1w++
        player1.innerText = `Player X wins = ${p1w}`
        win()
        closeoff()
    }else if (places[0] == 'O' && places[3] == 'O' && places[6] == 'O') {
        pns.innerHTML = 'Player O wins'
        p2w++
        player2.innerText = `Player O wins = ${p2w}`
        win()
        closeoff()
    }else if (places[1] == 'O' && places[4] == 'O' && places[7] == 'O') {
        pns.innerHTML = 'Player O wins'
        p2w++
        player2.innerText = `Player O wins = ${p2w}`
        win()
        closeoff()
    }else if (places[2] == 'O' && places[5] == 'O' && places[8] == 'O') {
        pns.innerHTML = 'Player O wins'
        p2w++
        player2.innerText = `Player O wins = ${p2w}`
        win()
        closeoff()
    }else if (places[0] == 'X' && places[4] == 'X' && places[8] == 'X') {
        pns.innerHTML = 'Player X wins'
        p1w++
        player1.innerText = `Player X wins = ${p1w}`
        win()
        closeoff()
    }else if (places[2] == 'X' && places[4] == 'X' && places[6] == 'X') {
        pns.innerHTML = 'Player X wins'
        p1w++
        player1.innerText = `Player X wins = ${p1w}`
        win()
        closeoff()
    }else if (places[0] == 'O' && places[4] == 'O' && places[8] == 'O') {
        pns.innerHTML = 'Player O wins'
        p2w++
        player2.innerText = `Player O wins = ${p2w}`
        win()
        closeoff()
    }else if (places[2] == 'O' && places[4] == 'O' && places[6] == 'O') {
        pns.innerHTML = 'Player O wins'
        p2w++
        player2.innerText = `Player O wins = ${p2w}`
        win()
        closeoff()
    }else if(places[0] !== '' && places[1] !== '' && places[2] !== '' && places[3] !== '' && places[4] !== '' && places[5] !== '' && places[6] !== '' && places[7] !== '' && places[8] !== ''){
        pns.innerHTML = "it's a Draw"
        closeoff()
    }
    localStorage.p1w = p1w;
    localStorage.p2w = p2w;
}
function closeoff(){
    let t = 0;
        let intr = setInterval(() => {
            pns.innerHTML += '.' 
            t++
            if(t == 4){
                clearInterval(intr)
            }
        }, 1000);
        setTimeout(() => {
            container.classList.add('none')
            closemenu.classList.remove('none')
            menus.style.display = ''
            p1s.classList.add('none')
            p2s.classList.add('none')
        }, 4001);
}
function play1(){
    if ( (random % 2)== 0){
        place1.innerHTML = greyO
        places[0] = 'O'
        place1.classList.add('placeO')
    }else{
        place1.innerHTML = whiteX
        places[0] = 'X'
        place1.classList.add('placeX')
    }
    imgloop()
    place1.removeAttribute('onclick')
    place1.style.cursor = 'auto'
    random++
    WinLoseDraw()
}
function play2(){
    if ( (random % 2)== 0){
        place2.innerHTML = greyO
        places[1] = 'O'
        place2.classList.add('placeO')
    }else{
        place2.innerHTML = whiteX
        places[1] = 'X'
        place2.classList.add('placeX')
    }
    imgloop()
    place2.removeAttribute('onclick')
    place2.style.cursor = 'auto'
    random++
    WinLoseDraw()
}
function play3(){
    if ( (random % 2)== 0){
        place3.innerHTML = greyO
        places[2] = 'O'
        place3.classList.add('placeO')
    }else{
        place3.innerHTML = whiteX
        places[2] = 'X'
        place3.classList.add('placeX')
    }
    imgloop()
    place3.removeAttribute('onclick')
    place3.style.cursor = 'auto'
    random++
    WinLoseDraw()
}
function play4(){
    if ( (random % 2)== 0){
        place4.innerHTML = greyO
        places[3] = 'O'
        place4.classList.add('placeO')
    }else{
        place4.innerHTML = whiteX
        places[3] = 'X'
        place4.classList.add('placeX')
    }
    imgloop()
    place4.removeAttribute('onclick')
    place4.style.cursor = 'auto'
    random++
    WinLoseDraw()
}
function play5(){
    if ( (random % 2)== 0){
        place5.innerHTML = greyO
        places[4] = 'O'
        place5.classList.add('placeO')
    }else{
        place5.innerHTML = whiteX
        places[4] = 'X'
        place5.classList.add('placeX')
    }
    imgloop()
    place5.removeAttribute('onclick')
    place5.style.cursor = 'auto'
    random++
    WinLoseDraw()
}
function play6(){
    if ( (random % 2)== 0){
        place6.innerHTML = greyO
        places[5] = 'O'
        place6.classList.add('placeO')
    }else{
        place6.innerHTML = whiteX
        places[5] = 'X'
        place6.classList.add('placeX')
    }
    imgloop()
    place6.removeAttribute('onclick')
    place6.style.cursor = 'auto'
    random++
    WinLoseDraw()
}
function play7(){
    if ( (random % 2)== 0){
        place7.innerHTML = greyO
        places[6] = 'O'
        place7.classList.add('placeO')
    }else{
        place7.innerHTML = whiteX
        places[6] = 'X'
        place7.classList.add('placeX')
    }
    imgloop()
    place7.removeAttribute('onclick')
    place7.style.cursor = 'auto'
    random++
    WinLoseDraw()
}
function play8(){
    if ( (random % 2)== 0){
        place8.innerHTML = greyO
        places[7] = 'O'
        place8.classList.add('placeO')

    }else{
        place8.innerHTML = whiteX
        places[7] = 'X'
        place8.classList.add('placeX')
    }
    imgloop()
    place8.removeAttribute('onclick')
    place8.style.cursor = 'auto'
    random++
    WinLoseDraw()
}
function play9(){
    if ( (random % 2)== 0){
        place9.innerHTML = greyO
        places[8] = 'O'
        place9.classList.add('placeO')
    }else{
        place9.innerHTML = whiteX
        places[8] = 'X'
        place9.classList.add('placeX')
    }
    imgloop()
    place9.removeAttribute('onclick')
    place9.style.cursor = 'auto'
    random++
    WinLoseDraw()
}
// others
toggle.onclick=function(){
toggle.classList.toggle('active');
body.classList.toggle('active');
music.classList.toggle('bright');
menu.classList.toggle('bright');
closemenu.classList.toggle('bright')
imgChanger()
containertoggle()
Changer_color_count()
}
player1.innerText += ` ${parseInt(localStorage.p1w) || 0}`
player2.innerText += ` ${parseInt(localStorage.p2w) || 0}`