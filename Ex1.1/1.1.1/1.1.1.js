var game =	Math.floor(Math.random()*(100-1+1)+1);
var question = true;
var message	=	"JEU : DEVINEZ UN NOMBRE EN 1 ET 100";
var veryNear=[1,2,3,4,5];
var near =[6,7,8,9,10];

while(question){
    var response = prompt(message);

    if(game==response){
        alert("FELICITATIONS ! LA REPONSE EST BIEN : "+ game)
        break;
    }

    if(game<response){
        message = "C'EST MOINS ";
        message=(veryNear.indexOf(Math.abs(game-response))!=-1)?message+"MAIS TRES PROCHE (<=5)":message;
        message=(near.indexOf(Math.abs(game-response))!=-1)?message+"MAIS PROCHE(<=10)":message;
    }else if(game>response){
        message = "C'EST PLUS ";
        message=(veryNear.indexOf(Math.abs(game-response))!=-1)?message+"MAIS TRES PROCHE(<=5)":message;
        message=(near.indexOf(Math.abs(game-response))!=-1)?message+"MAIS PROCHE(<=10)":message;
    }

    if(response <1 || response > 100){
        message = "VALEUR NON COMPRISE ENTRE 1 ET 100";
    }
}

