const sliders=document.querySelectorAll(".slider .slide");

const index = Math.floor(Math.random()*sliders.length)
sliders[index].classList.add("active")

for(let elem of sliders){
    elem.addEventListener("click",() => {
        document.querySelector(".slider .slide.active").classList.remove("active");
        elem.classList.add("active")
    })
}