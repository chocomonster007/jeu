const div1 =document.querySelector('#choix')
const div2 =document.querySelector('#winorloose')
const papier = document.querySelector('#papier')
const rocher = document.querySelector('#rocher')
const ciseaux = document.querySelector('#ciseaux')
const win = document.querySelector('#pick')
const texte =document.querySelector('#texte')
const house =document.querySelector('.house')
const div3 =document.querySelector('#div3')
const h2 =document.querySelector('#score')
const play=document.querySelector('#play')
const newimg =document.querySelector('#newimg')
const imagehouse=document.querySelector('#imagehouse')
const div4 =document.querySelector('#div4')
var score = 0
var picky
var x
const rules = document.querySelector('#rules')
const afficher = document.querySelector('#afficher')
const back = document.querySelector('#back')
const croix = document.querySelector('.a')


function choixfait (){
    div1.classList.remove('choix')
    div1.classList.add('none')
    div2.classList.remove('none')
    div2.classList.add('block')
    var classe = div3.classList[1]
    var classe2= div4.classList[1]
    var classe3 = div3.classList[2]
    var classe4 = div4.classList[2]
    console.log(classe)
    console.log(div3.classList[2])
    if (classe != undefined){
        div3.classList.remove(classe)
        div4.classList.remove(classe2)
        if (classe3 != undefined)
        {div3.classList.remove(classe3)}
        else if (classe4 != undefined){
            div4.classList.remove(classe4)
        }
    }
   

    var choixsigne = this.getAttribute('id')
    var attr = this.childNodes[0].getAttribute('src')
    newimg.setAttribute('src', attr )
    var picky = this.getAttribute('id')

    if (picky == 'papier'){
        div3.classList.add('papierpick')
    }
    else if (picky =="ciseaux"){
        div3.classList.add('ciseauxpick')
    }
    else{
        div3.classList.add('rocherpick')
    }
    
    
        var x =Math.floor(Math.random()*3)
    
    switch(x){
        case 0 : x = "papier"; 
                imagehouse.setAttribute('src',"images/icon-paper.svg" )
                
                div4.classList.add('papierpick')

                break;
        case 1 : x = "ciseaux";
        
        imagehouse.setAttribute('src',"images/icon-scissors.svg" )
        
        div4.classList.add('ciseauxpick')
        break;
        case 2 : x = "rocher";
        
        imagehouse.setAttribute('src',"images/icon-rock.svg" )
        
        div4.classList.add('rocherpick')
        
        break;
    }
    
    if (x == choixsigne) {
        texte.innerHTML ="Equality"
    }
    else if ( (choixsigne == "papier" && x == "rocher") || (choixsigne =="rocher" && x == "ciseaux") || (choixsigne =="ciseaux" && x =="papier"))
    {   
        texte.innerHTML ="YOU WIN" 
        score++
        div3.classList.add('pif')
        
    }
    else{texte.innerHTML ='YOU LOOSE'
        score--
        div4.classList.add('pif')}
        

    h2.innerHTML = score
    
}


function rejouer(){div1.classList.remove('none')
div1.classList.add('choix')
div2.classList.remove('block')
div2.classList.add('none')

}
function regle(){
    afficher.classList.remove('none')
    afficher.classList.add('regle')
    back.classList.remove('none')
    back.classList.add('backisback')
}

function fermer(){
    afficher.classList.remove('regle')
    afficher.classList.add('none')
    back.classList.remove('backisback')
    back.classList.add('none')
}

croix.addEventListener('click',fermer)
rules.addEventListener('click', regle)
play.addEventListener('click',rejouer)
papier.addEventListener('click',choixfait)
rocher.addEventListener('click',choixfait)
ciseaux.addEventListener('click',choixfait)
