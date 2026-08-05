(function () {
"use strict";


// Global Error Handler
window.addEventListener("error", function(event){

    console.error(
        "Application Error:",
        event.message
    );

});



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

    if(typeof value !== "string"){
        return "";
    }


    return value
    .replace(/[<>]/g,"")
    .replace(/\s+/g," ")
    .trim();

}





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
"keydown",
(e)=>{


if(e.key==="Enter"){


profilePanel.classList.add(
"active"
);


}


});





closeBtn.addEventListener(
"click",
()=>{


profilePanel.classList.remove(
"active"
);


});


}


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

});









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