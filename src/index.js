import "./style.scss";

const inn = document.querySelector('.box-inn');
const next = document.querySelector('.right-control');
const prev = document.querySelector('.left-control');

//closure for save offset value
const offsetControl =(offset=0)=>(len=1170)=>{
        offset +=len;
        if (offset>1170*2) offset = 0;
        if (offset<0) offset = 1170*2;
        inn.style.transform = `translateX(-${offset}px)`;
}

const letOffset = offsetControl();

setInterval(letOffset,5000); //auto shift

next.addEventListener('click',()=>{
    letOffset();
})

prev.addEventListener('click',()=>{
    letOffset(-1170);
})