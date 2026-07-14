window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>30){

header.style.background="rgba(5,8,22,.8)";

}else{

header.style.background="rgba(5,8,22,.45)";

}

});
/*==========================================
        TOKE Landing Page Script v1
==========================================*/

/*=============================
        STICKY NAVBAR
=============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

});


/*=============================
        CURSOR GLOW
=============================*/

const glow = document.querySelector(".glow");

document.addEventListener("mousemove",(e)=>{

    if(glow){

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    }

});


/*=============================
        SMOOTH SCROLL
=============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*=============================
        SCROLL ANIMATION
=============================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.2
});

document.querySelectorAll(".fade-up").forEach(el=>{

observer.observe(el);

});


/*=============================
      HERO PARALLAX
=============================*/

const phone=document.querySelector(".phone");

window.addEventListener("mousemove",(e)=>{

if(!phone) return;

const x=(window.innerWidth/2-e.clientX)/45;

const y=(window.innerHeight/2-e.clientY)/45;

phone.style.transform=

`rotateY(${x}deg)
 rotateX(${-y}deg)
 translateY(-8px)`;

});


/*=============================
     FLOATING CARDS
=============================*/

const cards=document.querySelectorAll(".card");

window.addEventListener("mousemove",(e)=>{

cards.forEach(card=>{

const speed=card.dataset.speed || 25;

const x=(window.innerWidth/2-e.clientX)/speed;

const y=(window.innerHeight/2-e.clientY)/speed;

card.style.transform=

`translate(${x}px,${y}px)`;

});

});


/*=============================
      BUTTON RIPPLE
=============================*/

const buttons=document.querySelectorAll(".btn-primary");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-8px) scale(1.02)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px) scale(1)";

});

});


/*=============================
      COUNTER
=============================*/

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const c=+counter.innerText;

const increment=target/150;

if(c<target){

counter.innerText=Math.ceil(c+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});

