let add = document.querySelector(".add");
let remove = document.querySelector(".Remove");
let addbutton = document.querySelector(".container-text-color");
let submitbutton = document.querySelector(".btn-submit");
let appenddiv = document.querySelector(".creat-cont-box");
let color_text = document.querySelectorAll(".color-text");
let color = ["yellow", "green", "voilet", "red"];
let boxcolor = color[color.length - 1];
let textarea = document.querySelector("#text");
let flag = false;
let removeflag = false;
let editflag = false;

// add functinality

add.addEventListener("click",()=>{
    flag  = !flag;
    if(flag){
        addbutton.style.display = "flex";
        
    }else{
        addbutton.style.display = "none";
    }
})

// remove functionality

remove.addEventListener("click", (e) =>{
    removeflag = !removeflag;
    if(removeflag){
        remove.classList.add("removebtn");
    }else{
        remove.classList.remove("removebtn");
    }
   
})

// color text border style 

color_text.forEach((color, index) =>{
    color.addEventListener("click", (e) =>{
        color_text.forEach((colorText, index) =>{
            colorText.classList.remove("border");
        })
        color.classList.add("border");
        boxcolor = color.classList[0];
       
        
    })
})

submitbutton.addEventListener("click", (e) =>{
    addticket(boxcolor, shortid(), textarea.value);
   
});
// add a ticket code


function addticket(ticketColor, ticketId, ticketText ){
    let creatddiv = document.createElement("div");
    creatddiv.setAttribute("class", "creat-contaier");
    creatddiv.innerHTML = ` <div class="color-contatiner-style ${ticketColor}"></div>
         <div class="id-number-genrate">#${ticketId}</div>
         <div class="text-area-creat">${ticketText}</div>
         <div class="edit-div"><button class="edit">edit</button></div>
       
    `;
    appenddiv.appendChild(creatddiv);
    addbutton.style.display = "none";
    flag = !flag;
    textarea.value = "";

    // remove ticket

    creatddiv.addEventListener("click", () =>{
        if(removeflag){
            creatddiv.remove();
        }
        
    })
    
   // editable contact 
  
//    let btndiv = document.querySelector(".edit");
//    let editcontent = document.querySelector("text-area-creat");
//    console.log(btndiv);
//    btndiv.addEventListener("click",() =>{
    
//     console.log(editcontent);   
//     editflag = !editflag;
//     console.log(editflag);
//     if(editflag){
//         btndiv.classList.add("removebtn");
//         editcontent.setAttribute("contenteditable", "true");
//     }else{
//         btndiv.classList.remove("removebtn");
//         editcontent.setAttribute("contenteditable", "false")
//     }
//    })
   
 
 }
 
 
    


  


 




