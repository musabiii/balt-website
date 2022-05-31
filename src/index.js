import "./style.scss";

const inn = document.querySelector('.box-inn');
const next = document.querySelector('.right-control');
const prev = document.querySelector('.left-control');

const dots = document.querySelectorAll('.page-dot');
dots[0].classList.add('active');

//closure for save offset value
const offsetControl =(page=0)=>(len=1)=>{
        page += len;
        if (page>2) page=0;  if (page<0) page=2;
        inn.style.transform = `translateX(-${page*1170}px)`;

        dots.forEach(el=>console.log(el.classList.remove('active')));
        dots[page].classList.add('active');
}

const letOffset = offsetControl();

setInterval(letOffset,10000); //auto shift

next.addEventListener('click',()=>{
    letOffset();
})

prev.addEventListener('click',()=>{
    letOffset(-1);
})