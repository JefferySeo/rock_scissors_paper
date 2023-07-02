const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const npc = document.getElementById('npc');

function rps(n){
    let myGame = event.target.id;
    let message;
    const srp = ['scissors', 'rock', 'paper'];
    const com = srp[Math.floor(Math.random()*3)];

    if(myGame == com){
        message = "비겼습니다. 다시 하세요.";
    }
    else if(myGame == 'scissors'){
        switch(com) {
            case 'scissors' :
                message = '비겼습니다. 다시 하세요.';
            break;
            case 'rock' :
                message = "푸하하, 내가 이겼어요 메롱~";
                npc.classList.add('npcmove')
            break;
            case 'paper' :
                message = '실력자시군요. 다시 도전합니다.';
            break;
        }
    }
    else if(myGame == 'rock'){
        switch(com) {
            case 'scissors' :
                message = '실력자시군요. 다시 도전합니다.';
            break;
            case 'rock' :
                message = '비겼습니다. 다시 하세요.';
            break;
            case 'paper' :
                message = "푸하하, 내가 이겼어요 메롱~";
                npc.classList.add('npcmove')
            break;
        }
    }
    else if(myGame == 'paper'){
        switch(com) {
            case 'scissors' :
                message = "푸하하, 내가 이겼어요 메롱~";
                npc.classList.add('npcmove')
            break;
            case 'rock' :
                message = '실력자시군요. 다시 도전합니다.';
            break;
            case 'paper' :
                message = '비겼습니다. 다시 하세요.';
            break;
        }
    }
    document.getElementById('playgame').innerHTML = message;
    document.getElementById('mrps').innerHTML = trans(myGame);
    document.getElementById('crps').innerHTML = trans(com);
    document.getElementById('mimg').src = "images/" + myGame + ".png";
    document.getElementById('cimg').src = "images/" + com + ".png";
}

// 애니메이션이 끝나면(animationend) npcmove 클래스를 지운다.
npc.addEventListener('animationend', classrm, false);
function classrm(){
    npc.classList.remove('npcmove');
}

function trans(ts){
    let tss = '모름';
    switch(ts){
        case 'scissors':
            tss = '가위';
        break;
        case 'rock':
            tss = '바위';
        break;
        case 'paper':
            tss = '보';
        break;
    }
    return tss;
}

scissors.addEventListener('click', rps);
rock.addEventListener('click', rps);
paper.addEventListener('click', rps);

