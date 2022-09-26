

//to call the main init function in every load
window.addEventListener("load",init)


// for accesing values 

let word=document.querySelector("#current-word")
let wordinput=document.querySelector("#word-input") 
let message=document.querySelector("#message")
let time=document.querySelector("#time")
let scoredisplay=document.querySelector("#score")
let restart=document.getElementById("restart")



//to show time

let score=0;
let timedisplay=6;





// array of words 

const words =['hat','samat','vshat','sahat','gghat','brhat','rhukhat','ttvhat','hbtuat','vrhat','ryhbhat','bjsshat','aethat','hat','chhat','vshat','sahat','gghat','brhat','rhukhat','ttvhat','hbtuat','vrhat','ryhbhat','bjsshat','hat','chhat','vshat','sahat','gghat','brhat','rhukhat','ttvhat','hbtuat','vrhat','ryhbhat','bjsshat','hat','chhat','vshat','sahat','gghat','brhat','rhukhat','ttvhat','hbtuat','vrhat','ryhbhat','bjsshat',];


// main function containig all other functions 
function init(){
    
showWords(words)
wordinput.addEventListener("input",startmatch)
setInterval(coundown,1000)


}



// to change word from array words
function showWords(words){
    const randomindex=Math.floor(Math.random()*words.length)
    word.innerHTML=words[randomindex]
}


function matchwords(){
    if(wordinput.value==word.innerHTML){
        return true
    }
    else{
        return false
    }
    

}



function startmatch(){
    if (matchwords()){
        showWords(words)
        wordinput.value=""
        message.innerHTML="esmarttttttttt!!!!"
        score++
        scoredisplay.innerHTML=score
        timedisplay=6

    }
}

function coundown(){

if(timedisplay>0){
    timedisplay--
}
else{
    message.innerHTML="Game over!!!"
}
time.innerHTML=timedisplay
}




restart.addEventListener("click",()=>{
    timedisplay = 0;
    score = 0;
    time.innerHTML = timedisplay;
    scoredisplay.innerHTML = score
    showWords(words)
})




