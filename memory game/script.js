let cardArray=[
    {
       'name':'css',
       'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqlnC8KLtpO2eEze1Bi18xqzgeyKfCjV3FA&s',
    },
    {
        'name':'HTML',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jFtLZXYzXBvjS3J12uWzAA5e7i_yfyYvfw&s',
     },
     {
        'name':'JQuary',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD41rzXD5Se6xG9rk74yLxHCKFIxDLo1JhzA&s',
     },
     {
        'name':'js',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6DTmB377aQ16mxu4wNCF8MdHQFe4UIHs7g&s',
     },
     {
        'name':'Node',
        'img':'https://www.dudeme.in/cdn/shop/products/Node-JS-BLACK.jpg?v=1662005545',
     },
     {
        'name':'Python',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWypWZsoHALkaCFiCFIia8W_KinXGI2Sz1VA&s',
     },
]




const parentdiv=document.querySelector('#card-section')
const songgame=document.querySelector('song')
//step 2 duplicate each card

const gamecard=cardArray.concat(cardArray)
console.log(gamecard);

// suffle the card
let suffleCard=Array.from(gamecard).sort(()=>0.5-Math.random());



// step 4 check which card class is slected
let clickcount=0
let firstcard=""
secondcard=""
//styling the matchcard

const card_matches=()=>{
    let card_selected=document.querySelectorAll('.card-selected');
    card_selected.forEach((currelm)=>{
      currelm.classList.add('card-match')
    })
}
//step 7

const reset=()=>{
   firstcard=""
   secondcard=""
   clickcount=0;
   let card_selected=document.querySelectorAll('.card-selected');
   card_selected.forEach((currelm)=>{
     currelm.classList.remove('card-selected')
   })
}

parentdiv.addEventListener('click',(e)=>{
   let currentcard=e.target;
   if(currentcard.id === 'card-section'){return false}
   clickcount++
   if(clickcount<3){
     if(clickcount===1){
         firstcard=currentcard.parentNode.dataset.name;
         currentcard.parentNode.classList.add('card-selected')
     }else{
        secondcard=currentcard.parentNode.dataset.name;
        currentcard.parentNode.classList.add('card-selected')
     }
     if(firstcard!=="" && secondcard!==""){
      if(firstcard==secondcard){
         setTimeout(()=>{
         card_matches()
        reset()
         },1000)
      }else{
         setTimeout(()=>{
            reset()
            },1000)
      }
     }
   }
   

})
// step 1 to add new card
for(i=0;i<suffleCard.length;i++){
    const childdiv=document.createElement('div')
    childdiv.classList.add('card')
    childdiv.dataset.name=suffleCard[i].name;
   //  childdiv.style.backgroundImage=`url(${suffleCard[i].img})`;

   const front_div=document.createElement('div');
   front_div.classList.add('front-card');
   const back_div=document.createElement('div')
   back_div.style.backgroundImage=`url(${suffleCard[i].img})`;
   back_div.classList.add('back-card')
    parentdiv.appendChild(childdiv)
    childdiv.appendChild(front_div)
    childdiv.appendChild(back_div)
}
