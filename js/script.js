// Elements
const text = document.querySelector("main p");
const input = document.querySelector("input");

// Page Load Animation

window.addEventListener("load", ()=>{

    setTimeout(()=>{
        text.classList.add("fadeUp");
    },300);

    setTimeout(()=>{
        input.classList.add("fadeUp");
    },700);

});

// Placeholder Animation

const placeholders=[
    "Search for restaurant...",
    "Enter your delivery location...",
    "Search 'Pizza'...",
    "Search 'Burger'...",
    "Search 'Biryani'...",
    "Search 'Ice Cream'..."
];

let i=0;

setInterval(()=>{

    input.placeholder=placeholders[i];

    i++;

    if(i>=placeholders.length){
        i=0;
    }

},2500);


// Enter Key

input.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        if(input.value.trim()===""){
            alert("Please enter your location.");
        }

        else{

            alert("Searching restaurants near: "+input.value);

        }

    }

});


// Navbar Background on Scroll

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>20){

        header.style.background="rgba(203,32,45,.95)";
        header.style.backdropFilter="blur(8px)";
        header.style.transition=".4s";

    }

    else{

        header.style.background="transparent";

    }

});


// Logo Click Animation

const logo=document.querySelector(".logo img");

logo.addEventListener("click",()=>{

    logo.animate([

        {transform:"rotate(0deg) scale(1)"},
        {transform:"rotate(10deg) scale(1.1)"},
        {transform:"rotate(-10deg) scale(1.1)"},
        {transform:"rotate(0deg) scale(1)"}

    ],{

        duration:700

    });

});


// Smooth Hover Effect for Links

document.querySelectorAll("a").forEach(link=>{

    link.addEventListener("mouseenter",()=>{

        link.style.transform="translateY(-3px)";

    });

    link.addEventListener("mouseleave",()=>{

        link.style.transform="translateY(0px)";

    });

});


// Input Glow Effect

input.addEventListener("focus",()=>{

    input.style.boxShadow="0 0 30px rgba(255,255,255,.55)";

});

input.addEventListener("blur",()=>{

    input.style.boxShadow="0 15px 35px rgba(0,0,0,.18)";

});
// Scroll Reveal Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".collections,.about,.reviews").forEach((section)=>{

    observer.observe(section);

});
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove",(e)=>{

        const x=e.offsetX;
        const y=e.offsetY;

        const rotateX=(y-card.offsetHeight/2)/10;
        const rotateY=(card.offsetWidth/2-x)/10;

        card.style.transform=`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});
window.addEventListener("DOMContentLoaded", () => {

    const profileBtn = document.getElementById("profileBtn");
    const profilePanel = document.getElementById("profilePanel");
    const closeBtn = document.getElementById("closeBtn");

    if(profileBtn && profilePanel && closeBtn){

        profileBtn.addEventListener("click", () => {
            profilePanel.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            profilePanel.classList.remove("active");
        });

    }

});
function loadRestaurants() {

    fetch("http://127.0.0.1:5000/restaurants")
        .then(response => response.json())
        .then(data => {

            let output = "";

            data.forEach(item => {

                output += `
                <div class="card">
                    <h2>${item.name}</h2>
                    <p>⭐ ${item.rating}</p>
                    <p>${item.location}</p>
                </div>
                `;

            });

            document.getElementById("restaurantList").innerHTML = output;

        });

}
function loadRestaurants() {

    fetch("http://127.0.0.1:5000/restaurants")
    .then(response => response.json())
    .then(data => {

        console.log(data);

        alert("Frontend connected with Backend successfully!");

    })
    .catch(error => {

        console.log(error);

        alert("Backend is not running!");

    });

}