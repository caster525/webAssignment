let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');

btn.onclick = function () {
    sidebar.classList.toggle('active');
};


// const menuBtn = document.querySelector(".menu.btn");
// const nav = document.querySelector(".navigation");
// menuBtn.addEventListener("click",()=>{
//     menuBtn.classList.toggle("active");
//     nav.classList.toggle("actice");
// });

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");


var sliderNav = function(manual){
    btns.forEach((btn)=>{
        btn.classList.remove("active");
    })
    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });
    contents.forEach((content)=>{
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");

}

btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        sliderNav(i);
    })
})