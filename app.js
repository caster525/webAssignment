let header =document.querySelector("header");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset !=0){
        header.style.backgroundColor = "green";
    }else{
        header.style.backgroundColor = "#497537";
    }
})  