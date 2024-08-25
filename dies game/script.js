
const imageone=document.querySelector('#check')
const imagetwo=document.querySelector('#check2')
const rollclick=document.querySelector('.roll')
const massage=document.querySelector('.winner-massage')



rollclick.addEventListener('click',()=>{
    let playdies=Math.floor(Math.random()*6+1);
    let playerone=`/dies game/img/dies${playdies}.jpeg`;
    imageone.setAttribute('src',playerone);
    let score1=Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1)
  

    let playdies2=Math.floor(Math.random()*6+1)
    let playertwo=`/dies game/img/dies${playdies2}.jpeg`;
    imagetwo.setAttribute('src',playertwo);
    let score2=Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1)

   

    if(playdies>playdies2){
         massage.innerText=`Player One Is Winner 🏆 Score ${playdies}`

    }
    else if(playdies<playdies2){
          massage.innerText=`Player Two Is Winner🏆 Score ${playdies2}`
    }
    
    else{
        massage.innerText=`Draw 👎`

         
    }


})
