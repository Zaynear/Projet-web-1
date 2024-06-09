

function flip(event){
    let element = event.currentTarget;
    if (element.className === "photo"){                       /*si le nom de la classe de l'element sur lequel on clique est strictement identique alors il entre dans la condition suivante*/
        if(element.style.transform == "rotateY(180deg)"){     /*Si la carte est cachée il la révéle en influant sur le css sinon il la cache*/
            element.style.transform = "rotateY(0deg)";
        }
        else{
            element.style.transform = "rotateY(180deg)";
        }
    }
}