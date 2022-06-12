var counter=1;

function increase(){
    counter=counter+1;
    document.querySelector('#counter').innerHTML=counter;

}
function reset(){
    counter=1;
    document.querySelector('#counter').innerHTML=counter;
}
function decrease(){
    if(counter!=1){
        counter=counter-1;
        document.querySelector('#counter').innerHTML=counter;
    }

}
function load(){
    document.querySelector('#counter').innerHTML=counter;
}
window.onload=load;