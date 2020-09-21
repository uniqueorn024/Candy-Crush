// Creating variables
var myX = 0, myY = 0,updates=0;
var pole = [];
var pr = 20;
var points = 0;
var razmerNaKletkata = 30;
for(let i = 0; i < pr; i ++){
    pole[i] = [];
    for(let j = 0; j < pr; j ++){
        pole[i][j] = 1+randomInteger(5);
    }
}

function changeDupki(){
    for(let i = 0; i  < pr; i ++){
        for (let j = 0; j < pr; j ++){
            if(pole[i][j] ==0){
                pole[i][j] = 1+randomInteger(5);
            }
        }
    }
}
setInterval(changeDupki, 30000);
function update() {
    // Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
    myX = myX+(mouseX-myX)/10;
    myY = myY+(mouseY-myY)/10;
    for(let i = 0; i < pr; i ++){
        for(let j = pr; j > 0; j --){
            if(pole[i][j] == 0){
                pole[i][j] = pole[i][j-1];
                pole[i][j-1] = 0;
            }
        }
    }
}
function draw() {
    // tuk naprogramirai kakvo da se risuva
    drawImage(backClouds,0, 0, 800, 600);
    drawImage(crosshairOutline,myX,myY, 50, 50);
    context.font = "20px Arial";
    context.fillText("Points: " + points, 650, 580);

    for(let i = 0; i < pr; i ++){
        for(let j = 0; j < pr; j ++){
            drawImage(gem[pole[i][j]], i*razmerNaKletkata, j*razmerNaKletkata, 
                razmerNaKletkata - 1, razmerNaKletkata - 1);
        }
    }
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    var cliknatoX = Math.floor(mouseX/razmerNaKletkata);
    var cliknatoY = Math.floor(mouseY/razmerNaKletkata);
    //pole[cliknatoX][cliknatoY] = 0;
    var brSyvpadashtiKletkiVdqsno, broiSyvpadashtiKletkiVlqvo, brSuvpadashtiKletkiOtgore, brSuvpadashtiKletkiOtdolu;
    ///vdqsno
    for(brSyvpadashtiKletkiVdqsno = 1;cliknatoX + brSyvpadashtiKletkiVdqsno < pr && pole[cliknatoX][cliknatoY] == pole[cliknatoX+brSyvpadashtiKletkiVdqsno][cliknatoY]; brSyvpadashtiKletkiVdqsno ++){
    //console.log(cliknatoX + brSyvpadashtiKletkiVdqsno);
    }
    ///vlqvo
    for(brSyvpadashtiKletkiVlqvo = 1;cliknatoX - brSyvpadashtiKletkiVlqvo >= 0 && pole[cliknatoX][cliknatoY] == pole[cliknatoX-brSyvpadashtiKletkiVlqvo][cliknatoY]; brSyvpadashtiKletkiVlqvo ++){
    //console.log(cliknatoX + brSyvpadashtiKletkiVlqvo);
    }
    ///otgore
    for(brSuvpadashtiKletkiOtgore = 1;cliknatoY - brSuvpadashtiKletkiOtgore >= 0 && pole[cliknatoX][cliknatoY] == pole[cliknatoX][cliknatoY-brSuvpadashtiKletkiOtgore]; brSuvpadashtiKletkiOtgore ++){
    //console.log( "otgore " + brSuvpadashtiKletkiOtgore);
    }
    ///otdolu
    for(brSuvpadashtiKletkiOtdolu = 1;cliknatoY + brSuvpadashtiKletkiOtdolu < pr && pole[cliknatoX][cliknatoY] == pole[cliknatoX][cliknatoY+brSuvpadashtiKletkiOtdolu]; brSuvpadashtiKletkiOtdolu ++){
    //console.log( "otdolu " + brSuvpadashtiKletkiOtdolu);
    }
    if(brSyvpadashtiKletkiVdqsno + brSyvpadashtiKletkiVlqvo - 1 > 2){
        for(let i = 0; i < brSyvpadashtiKletkiVdqsno; i ++){
            //pole[cliknatoX+i][cliknatoY] = randomInteger(5);
            pole[cliknatoX+i][cliknatoY] = 0;
            points ++;
        }
                
        for(let i = 0; i < brSyvpadashtiKletkiVlqvo; i ++){
            //pole[cliknatoX+i][cliknatoY] = randomInteger(5);
            pole[cliknatoX-i][cliknatoY] = 0;
            points ++;
        }
        points--;
    }
    if(brSuvpadashtiKletkiOtdolu + brSuvpadashtiKletkiOtgore - 1 > 2){
        //pole[cliknatoX][cliknatoY] = 0;
        for(let i = 0; i < brSuvpadashtiKletkiOtgore; i ++){
            //pole[cliknatoX+i][cliknatoY] = randomInteger(5);
            pole[cliknatoX][cliknatoY-i] = 0;
            points ++;
        }
        for(let i = 0; i < brSuvpadashtiKletkiOtdolu; i ++){
            //pole[cliknatoX+i][cliknatoY] = randomInteger(5);
            pole[cliknatoX][cliknatoY+i] = 0;
            points ++;
        }
        points--;
    }

    if(brSyvpadashtiKletkiVdqsno + brSyvpadashtiKletkiVlqvo - 1 > 2 && 
        brSuvpadashtiKletkiOtdolu + brSuvpadashtiKletkiOtgore - 1 > 2){
        points += 2;
        console.log("DOUBLE COMBO! BONUS POINTS");
    }
};
