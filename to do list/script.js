const taskbtn=document.querySelector('button')
const userlist=document.querySelector('.list')
const userinput=document.querySelector('#task')
const newbtn=document.createElement('button')




taskbtn.addEventListener('click',(e)=>{
    const newtask=document.createElement('li')
    const newbtn=document.createElement('button')
    newbtn.innerText='Delete'
    userlist.appendChild(newtask)
    newtask.innerText=userinput.value
    newtask.append(newbtn)
    newbtn.addEventListener('click',(e)=>{
        newtask.remove()
         
        })
    userinput.value=''
    
})
