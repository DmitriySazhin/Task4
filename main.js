let chessDesk = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
];

function drawDesk(){
    document.querySelector('#desk').innerHTML='';
    let m = 0;
    for(let i=0; i<chessDesk.length; i++){
        let row = chessDesk[i];
        for(let j=0; j<row.length; j++){
            if(m%2 == 0) {
                document.querySelector('#desk').innerHTML += `<div class="chess-block" data-x="${j}" data-y="${i}"></div>`;
            } else {
                document.querySelector('#desk').innerHTML += `<div class="chess-block bg-black" data-x="${j}" data-y="${i}"></div>`;
            }
            m += 1;
        }
        m += 1;
    }

    document.querySelectorAll('.chess-block').forEach(element =>{
        element.onclick = horse;
    })
}

function horse(){
    document.querySelectorAll('.chess-block').forEach(element => {
        element.classList.remove('active');
        element.classList.remove('green');
    });
    let x = this.dataset.x;
    let y = this.dataset.y;
    this.classList.add('green');
    if(+x+2 < 8 && +y+1 < 8){
        document.querySelector(`.chess-block[data-x="${+x+2}"][data-y="${+y+1}"]`).classList.add('active');
    }
    if(+x+2 < 8 && +y-1 >= 0){
        document.querySelector(`.chess-block[data-x="${+x+2}"][data-y="${+y-1}"]`).classList.add('active');
    }
    if(+x-2 >= 0 && +y+1 < 8){
        document.querySelector(`.chess-block[data-x="${+x-2}"][data-y="${+y+1}"]`).classList.add('active');
    }
    if(+x-2 >= 0 && +y-1 >= 0){
        document.querySelector(`.chess-block[data-x="${+x-2}"][data-y="${+y-1}"]`).classList.add('active');
    }
    if(+x+1 < 8 && +y+2 < 8){
        document.querySelector(`.chess-block[data-x="${+x+1}"][data-y="${+y+2}"]`).classList.add('active');
    }
    if(+x+1 < 8 && +y-2 >= 0){
        document.querySelector(`.chess-block[data-x="${+x+1}"][data-y="${+y-2}"]`).classList.add('active');
    }
    if(+x-1 >= 0 && +y+2 < 8){
        document.querySelector(`.chess-block[data-x="${+x-1}"][data-y="${+y+2}"]`).classList.add('active');
    }
    if(+x-1 >= 0 && +y-2 >= 0){
        document.querySelector(`.chess-block[data-x="${+x-1}"][data-y="${+y-2}"]`).classList.add('active');
    }
}

drawDesk();