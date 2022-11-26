const shoe = document.querySelector(".sidebar-toggle")
const sid = document.querySelector(".sidebar")
const clos = document.querySelector(".close-btn")

shoe.addEventListener("click",()=>{
    // if(sid.classList.contains("show-sidebar") == false){
    //     sid.classList.add("show-sidebar")
    // }else{
    //     sid.classList.remove("show-sidebar")
    // }
    sid.classList.toggle("show-sidebar")
})
clos.addEventListener('click',()=>{
    sid.classList.remove("show-sidebar")
})