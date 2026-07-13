/* ======================================================
   AIDIL PORTFOLIO
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       LOADER
    ========================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 700);

    });

    /* ==========================================
       STICKY HEADER
    ========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /* ==========================================
       SCROLL TOP
    ========================================== */

    const scrollTop = document.getElementById("scrollTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTop.style.display = "flex";

            scrollTop.style.alignItems = "center";

            scrollTop.style.justifyContent = "center";

        } else {

            scrollTop.style.display = "none";

        }

    });

    scrollTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /* ==========================================
       ACTIVE MENU
    ========================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", ()=>{

        let current = "";

        sections.forEach(section=>{

            const sectionTop = section.offsetTop-120;

            if(window.scrollY>=sectionTop){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){

                link.classList.add("active");

            }

        });

    });

    /* ==========================================
       FADE ANIMATION
    ========================================== */

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    document.querySelectorAll(

        ".section,.experience-card,.project-card,.skill-card,.contact-card,.highlight-card"

    ).forEach(el=>{

        el.classList.add("hidden");

        observer.observe(el);

    });

    /* ==========================================
       HERO TYPING
    ========================================== */

    const heroTitle = document.querySelector(".hero h2");

    const jobs = [

        "Warehouse Team Leader",

        "Supply Chain Professional",

        "Inventory Specialist",

        "Data Analytics Enthusiast"

    ];

    let index = 0;

    function changeTitle(){

        heroTitle.style.opacity = 0;

        setTimeout(()=>{

            heroTitle.textContent = jobs[index];

            heroTitle.style.opacity = 1;

            index++;

            if(index>=jobs.length){

                index=0;

            }

        },250);

    }

    setInterval(changeTitle,3500);

    /* ==========================================
       COUNTER
    ========================================== */

    const counters = document.querySelectorAll(".stats-card h3");

    let counterStarted=false;

    function animateCounter(){

        if(counterStarted) return;

        counterStarted=true;

        counters.forEach(counter=>{

            const target = parseInt(counter.innerText);

            let current = 0;

            const timer = setInterval(()=>{

                current++;

                counter.innerText=current+"+";

                if(current>=target){

                    clearInterval(timer);

                    if(target===4){

                        counter.innerText="4";

                    }

                    if(target===20){

                        counter.innerText="20+";

                    }

                    if(target===2){

                        counter.innerText="2+";

                    }

                }

            },70);

        });

    }

    window.addEventListener("scroll",()=>{

        if(window.scrollY>150){

            animateCounter();

        }

    });

    /* ==========================================
       MOUSE GLOW
    ========================================== */

    const leftGlow=document.querySelector(".glow-left");

    const rightGlow=document.querySelector(".glow-right");

    document.addEventListener("mousemove",(e)=>{

        const x=e.clientX/window.innerWidth;

        const y=e.clientY/window.innerHeight;

        leftGlow.style.transform=`translate(${x*40}px,${y*40}px)`;

        rightGlow.style.transform=`translate(${-x*40}px,${-y*40}px)`;

    });

});

/* ==========================================
   MOUSE SPOTLIGHT
========================================== */

const spotlight = document.querySelector(".mouse-glow");

document.addEventListener("mousemove",(e)=>{

    spotlight.style.left = e.clientX + "px";

    spotlight.style.top = e.clientY + "px";

});
