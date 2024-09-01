const addbtn=document.querySelector('.add-button')


const  updatelocalstoreg=()=>{
    const textareadata=document.querySelectorAll('textarea');
    // console.log(textareadata);
    const notes=[];
    textareadata.forEach((note)=>{
        return notes.push(note.value)
       
     
    });
    localStorage.setItem('notes',JSON.stringify(notes));
}





// display the note div
const addnote=(text = '')=>{

const note=document.createElement('div');
 note.classList.add('note');

const htmldata=`
              <div class="oprations">
                <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
                 </div>
                <div class="main ${text ?'':'hidden'}"></div>
                <textarea class="${text ?'hidden':''}"></textarea>`
                
         
           
      
      note.insertAdjacentHTML('afterbegin',htmldata); //to add child element in parent element

      // getting refrence
      const editbtn=note.querySelector('.edit');
      const delbtn=note.querySelector('.delete');
      const maindiv=note.querySelector('.main');
      const textarea=note.querySelector('textarea');

      //deleting the note
      
      delbtn.addEventListener('click',()=>{
        note.remove();
        updatelocalstoreg();
      });
      
      //toggle a using edit button
      
       textarea.value=text;
       maindiv.innerHTML=text;

      editbtn.addEventListener('click',()=>{
          maindiv.classList.toggle('hidden');
          textarea.classList.toggle('hidden');
      });


     //set the textarea value in maindiv
      textarea.addEventListener('change',(e)=>{
         const value=e.target.value
         maindiv.innerHTML=value
         updatelocalstoreg();
      })
    
      
    
    
      


      console.log(note);
      document.body.appendChild(note)     

}

//geting a data from local storeg

const notes=JSON.parse(localStorage.getItem('notes'))
if(notes){
  notes.forEach((note)=>addnote(note))
};

addbtn.addEventListener('click',()=>addnote())