const turnOn = document.getElementById ('turnOn')
const turnOff = document.getElementById ('turnOff')
const lamp = document.getElementById ('lamp')

function lampQueb (){
    return lamp.src.indexOf ('quebrada') >   -1
}


function lampOn(){
    if(!lampQueb ()){
        lamp.src="img/ligada.png"}
        
    }

function lampOff(){
    if(!lampQueb ()){
    lamp.src="img/desligada.png"}
    
}

function lampBroken(){
    lamp.src="img/quebrada.png"
}







turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', lampBroken);


