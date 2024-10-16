const current_date=document.querySelector('.current-date')
let hours=document.querySelector('.Hours')
let minute=document.querySelector('.minute')
let second=document.querySelector('.sec')



function printdatetime(){
    const mydate=new Date()
    current_date.innerText=mydate.toLocaleString('en-GB',{dateStyle:'full'})
    hours.innerText=mydate.getHours()
    minute.innerText=mydate.getMinutes()
    second.innerText=mydate.getSeconds()

    
   

    
}

setInterval(printdatetime,1000)


