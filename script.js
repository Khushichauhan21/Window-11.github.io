let taskbar=document.getElementsByClassName("taskbar")[0]//[0] to take the first element of the class which is taskbar here
let startmenu=document.getElementsByClassName("startmenu")[0]
console.log("hello");

taskbar.addEventListener('click',()=> {
   
    //toggle the startmenu
    //toggle startmenu up
    if(startmenu.style.bottom=="50px"){
        startmenu.style.bottom="-655px"
    
    }
    //toggle startmenu down
    else{
        startmenu.style.bottom="50px"
    }
})
