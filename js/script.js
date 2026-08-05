(function () {
"use strict";


<<<<<<< HEAD
window.addEventListener(
    "error",
    function(event){
=======
// Global Error Handler
window.addEventListener("error", function(event){
>>>>>>> 4323423 (Updated backend API URL for deployment)

        console.error(
            "Application Error:",
            event.message
        );

    }
);
  // Elements
  const text = document.querySelector("main p");
  const input = document.querySelector("#locationInput");
  const header = document.querySelector("header");
  const logo = document.querySelector(".logo img");

  // Rate limiting (anti-spam)
  const RATE_LIMIT_MS = 3000;
 let lastActionTime = performance.now();

<<<<<<< HEAD
 function sanitizeInput(value) {

=======

// Elements
const text = document.querySelector("main p");
const input = document.querySelector("#locationInput");
const header = document.querySelector("header");
const logo = document.querySelector(".logo img");




// Rate Limit
const RATE_LIMIT_MS = 3000;
let lastActionTime = 0;




// Sanitizer
function sanitizeInput(value){

>>>>>>> 4323423 (Updated backend API URL for deployment)
    if(typeof value !== "string"){
        return "";
    }


    return value
<<<<<<< HEAD
        .replace(/[<>]/g,"")
        .replace(/\s+/g," ")
        .trim();
=======
    .replace(/[<>]/g,"")
    .replace(/\s+/g," ")
    .trim();
>>>>>>> 4323423 (Updated backend API URL for deployment)

}

  // Regex validation for location input
  const LOCATION_REGEX = /^[\w\s.,'-]+$/u;

<<<<<<< HEAD
  // Safe class helpers
  function addClassSafe(el, cls) {
    if (!el) return;
    if (!el.classList.contains(cls)) el.classList.add(cls);
  }

  // Page Load Animation
  window.addEventListener("load", () => {
    setTimeout(() => {
      if (text) text.classList.add("fadeUp");
    }, 300);

    setTimeout(() => {
      if (input) input.classList.add("fadeUp");
    }, 700);
  });

  // Placeholder Animation
  const placeholders = [
    "Search for restaurant...",
    "Enter your delivery location...",
    "Search 'Pizza'...",
    "Search 'Burger'...",
    "Search 'Biryani'...",
    "Search 'Ice Cream'..."
  ];
  let idx = 0;

  if (input) {
    setInterval(() => {
      input.placeholder = placeholders[idx];
      idx = (idx + 1) % placeholders.length;
    }, 2500);
  }

  // Enter Key with validation
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const value = sanitizeInput(input.value);

        if (!value) {
          console.warn("Location required");
          return;
        }

        if (!LOCATION_REGEX.test(value)) {
         console.warn("Location required");
          return;
        }

        const now = performance.now();
        if (now - lastActionTime < RATE_LIMIT_MS) {
          console.warn("Action rate-limited. Please wait a moment.");
          return;
        }
        lastActionTime = now;

        console.log(
    "Searching restaurants near:",
    value
);
      }
    });
  }

  // Navbar background on scroll
  window.addEventListener("scroll", () => {
    if (!header) return;
    if (window.scrollY > 20) {
      header.style.background = "rgba(203,32,45,.95)";
      header.style.backdropFilter = "blur(8px)";
      header.style.transition = ".4s";
    } else {
      header.style.background = "transparent";
      header.style.backdropFilter = "";
      header.style.transition = "";
    }
  });

  // Logo click animation
  if (logo) {
    logo.addEventListener("click", () => {
      logo.animate(
        [
          { transform: "rotate(0deg) scale(1)" },
          { transform: "rotate(10deg) scale(1.1)" },
          { transform: "rotate(-10deg) scale(1.1)" },
          { transform: "rotate(0deg) scale(1)" }
        ],
        { duration: 700 }
      );
    });
  }

  // Hover effect for links
  document.querySelectorAll("a").forEach((link) => {
    if (!link) return;
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-3px)";
    });
    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateY(0px)";
    });
  });

  // Input glow effect
  if (input) {
    input.addEventListener("focus", () => {
      input.style.boxShadow = "0 0 30px rgba(255,255,255,.55)";
    });
    input.addEventListener("blur", () => {
      input.style.boxShadow = "0 15px 35px rgba(0,0,0,.18)";
    });
  }

  // Scroll Reveal Animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".collections,.about,.reviews").forEach((section) => {
    observer.observe(section);
  });

  // 3D card tilt effect
  document.querySelectorAll(".card").forEach((card) => {
    if (!card) return;
    card.addEventListener("mousemove", (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      const rect = card.getBoundingClientRect();
      const rotateX = (y - rect.height / 2) / 10;
      const rotateY = (rect.width / 2 - x) / 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  });

  // Profile panel
  window.addEventListener("DOMContentLoaded", () => {
    const profileBtn = document.getElementById("profileBtn");
    const profilePanel = document.getElementById("profilePanel");
    const closeBtn = document.getElementById("closeBtn");

    if (profileBtn && profilePanel && closeBtn) {
      profileBtn.addEventListener(
=======



// Location Validation
const LOCATION_REGEX = /^[\w\s.,'-]+$/u;





// Page Animation

window.addEventListener("load",()=>{


setTimeout(()=>{

if(text){

text.classList.add("fadeUp");

}

},300);



setTimeout(()=>{

if(input){

input.classList.add("fadeUp");

}

},700);


});








// Placeholder Rotation


const placeholders=[

"Search for restaurant...",
"Enter your delivery location...",
"Search Pizza...",
"Search Burger...",
"Search Biryani..."

];


let index=0;


if(input){


setInterval(()=>{


input.placeholder =
placeholders[index];


index =
(index+1)%placeholders.length;


},2500);


}








// Search Validation


if(input){


input.addEventListener(
"keydown",
(e)=>{


if(e.key==="Enter"){



const value =
sanitizeInput(input.value);



if(!value){

console.warn(
"Location required"
);

return;

}



if(!LOCATION_REGEX.test(value)){


console.warn(
"Invalid location"
);

return;

}




const now =
performance.now();



if(
now-lastActionTime <
RATE_LIMIT_MS
){


console.warn(
"Too many requests"
);


return;

}



lastActionTime=now;



console.log(
"Searching:",
value
);



}



});


}










// Navbar Effect


window.addEventListener(
"scroll",
()=>{


if(!header)return;


if(window.scrollY>20){


header.style.background =
"rgba(203,32,45,.95)";


header.style.backdropFilter =
"blur(8px)";


}

else{


header.style.background =
"transparent";


header.style.backdropFilter =
"";


}



});









// Logo Animation


if(logo){


logo.addEventListener(
"click",
()=>{


logo.animate(

[

{
transform:"scale(1)"
},

{
transform:"scale(1.15)"
},

{
transform:"scale(1)"
}


],

{
duration:600
}


);


});


}









// Profile Panel


document.addEventListener(
"DOMContentLoaded",
()=>{


const profileBtn =
document.getElementById(
"profileBtn"
);


const profilePanel =
document.getElementById(
"profilePanel"
);


const closeBtn =
document.getElementById(
"closeBtn"
);




if(
profileBtn &&
profilePanel &&
closeBtn
){



profileBtn.addEventListener(
"click",
()=>{


profilePanel.classList.add(
"active"
);


});




profileBtn.addEventListener(
>>>>>>> 4323423 (Updated backend API URL for deployment)
"keydown",
(e)=>{

    if(e.key==="Enter"){

        profilePanel.classList.add("active");

    }

});
<<<<<<< HEAD
function loadRestaurants() {

    fetch("http://127.0.0.1:5000/restaurants")
        .then(response => response.json())
        .then(data => {

            let output = "";

            data.forEach(item => {

<<<<<<< HEAD
                output += `
                <div class="card">
                    <h2>${item.name}</h2>
                    <p>⭐ ${item.rating}</p>
                    <p>${item.location}</p>
                </div>
                `;
=======

closeBtn.addEventListener(
"click",
()=>{
>>>>>>> 4323423 (Updated backend API URL for deployment)

            });

            document.getElementById("restaurantList").innerHTML = output;

        });

}
function loadRestaurants() {

    fetch("http://127.0.0.1:5000/restaurants")
    .then(response => response.json())
    .then(data => {

<<<<<<< HEAD
        console.log(data);
=======
});










// Scroll Reveal


const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}


});


},

{
threshold:0.2
}

);



document
.querySelectorAll(
".collections,.about,.reviews"
)
.forEach(section=>{

observer.observe(section);
>>>>>>> 4323423 (Updated backend API URL for deployment)

        alert("Frontend connected with Backend successfully!");

    })
    .catch(error => {

        console.log(error);

        alert("Backend is not running!");

<<<<<<< HEAD
    });

}
=======
      closeBtn.addEventListener("click", () => {
        profilePanel.classList.remove("active");
      });
    }
  });
})();
>>>>>>> 6309ef1 (Added security checklist)
=======





// Card Tilt


document
.querySelectorAll(".card")
.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();


const x =
e.clientX-rect.left;


const y =
e.clientY-rect.top;



const rotateX =
(y-rect.height/2)/10;


const rotateY =
(rect.width/2-x)/10;



card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
`;



});





card.addEventListener(
"mouseleave",
()=>{


card.style.transform =
"";


});


});










// Backend Loading


async function loadRestaurants(){


try{


const response =
await fetch(
"https://food-api.onrender.com/restaurants"
);



if(!response.ok){

throw new Error(
"Backend failed"
);

}



const data =
await response.json();



console.log(
"Restaurants:",
data
);



const restaurantList =
document.getElementById(
"restaurantList"
);



if(restaurantList){



restaurantList.textContent="";



data.forEach(item=>{


const card =
document.createElement(
"div"
);


card.className="card";



const name =
document.createElement(
"h2"
);


name.textContent =
item.name;



const rating =
document.createElement(
"p"
);


rating.textContent =
"⭐ "+item.rating;



const location =
document.createElement(
"p"
);


location.textContent =
item.location;



card.append(
name,
rating,
location
);



restaurantList.appendChild(
card
);


});


}



}

catch(error){


console.error(
"Backend Error:",
error
);


}


}





loadRestaurants();



})();
>>>>>>> 4323423 (Updated backend API URL for deployment)
