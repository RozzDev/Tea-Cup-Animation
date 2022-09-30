//let w = window.innerWidth;
//console.log(screen.height)
//console.log(screen.availWidth)
//console.log(screen.colorDepth)
let list, start, ana, sec_four, back, listed, toogle, closed, li;
list = document.querySelector("#list");
start = document.querySelector(".start");
ana = document.querySelector(".a");
sec_four = document.querySelector("#four");
back = document.querySelector(".back");
listed = document.querySelector(".list");
toogle = document.querySelector(".toogle");
closed = document.querySelector(".close");
li = document.getElementsByTagName("li");



for(let i = 0; i < li.length; i++){
    let setListed = li[i];

    toogle.addEventListener("click", () => {
        listed.classList.add("active");
    });
    toogle.addEventListener("click", () => {
        closed.classList.add("actives");
    });
    closed.addEventListener("click", () => {
        listed.classList.remove("active");
        closed.classList.remove("actives");
    })   

    setListed.addEventListener("click", () => {
        listed.classList.remove("active");
        closed.classList.remove("actives");
    })
}

document.addEventListener("scroll", () => {
    let doc_h = window.scrollY;


    if(doc_h >= 713) {
        back.classList.add("fixed");
    }
    else{
        back.classList.remove("fixed");
    }
    if (doc_h >= 1){
        list.classList.add("fixed");
        start.classList.add("fixed");
        ana.classList.add("fixed");
        toogle.classList.add("fixed");
    }else {
        list.classList.remove("fixed");
        start.classList.remove("fixed");
        ana.classList.remove("fixed");
        toogle.classList.remove("fixed");
    }
})
