/* =====================================
MY MODERN VIDEO
APP.JS FINAL SYSTEM
PART 1/3
===================================== */



// =================================
// TOAST MESSAGE
// =================================


function showMessage(message){



let box =

document.createElement("div");





box.className=

"message-box";





box.innerHTML=

message;





document.body.appendChild(box);







setTimeout(()=>{


box.remove();



},3000);



}









// =================================
// FAVORITE SYSTEM
// =================================


function addFavorite(id){



let favorites =

JSON.parse(

localStorage.getItem(

"favorites"

)

)

|| [];





if(

favorites.includes(id)

){



showMessage(

"Already in favorites ⭐"

);



return;


}







favorites.push(id);







localStorage.setItem(

"favorites",

JSON.stringify(favorites)

);





showMessage(

"Added to favorites ⭐"

);



}









function removeFavorite(id){



let favorites =

JSON.parse(

localStorage.getItem(

"favorites"

)

)

|| [];





favorites =

favorites.filter(

item=>item!==id

);





localStorage.setItem(

"favorites",

JSON.stringify(favorites)

);





showMessage(

"Removed from favorites"

);



}









// =================================
// DOWNLOAD TRACKING
// =================================


function saveDownload(id){



let downloads =

JSON.parse(

localStorage.getItem(

"downloads"

)

)

|| [];





if(

!downloads.includes(id)

){



downloads.push(id);



}







localStorage.setItem(

"downloads",

JSON.stringify(downloads)

);





showMessage(

"Download started ⬇"

);



}









// =================================
// GET FAVORITES
// =================================


function getFavorites(){



return JSON.parse(

localStorage.getItem(

"favorites"

)

)

|| [];



}









// =================================
// GET DOWNLOAD HISTORY
// =================================


function getDownloads(){



return JSON.parse(

localStorage.getItem(

"downloads"

)

)

|| [];



}
/* =====================================
MY MODERN VIDEO
APP.JS FINAL SYSTEM
PART 2/3
===================================== */



// =================================
// DARK LIGHT MODE
// =================================


function toggleTheme(){



document.body.classList.toggle(

"light-mode"

);





let mode =

document.body.classList.contains(

"light-mode"

)

?

"light"

:

"dark";





localStorage.setItem(

"theme",

mode

);



showMessage(

mode==="light"

?

"Light Mode Enabled ☀️"

:

"Dark Mode Enabled 🌙"

);



}









function loadTheme(){



let theme =

localStorage.getItem(

"theme"

);





if(theme==="light"){



document.body.classList.add(

"light-mode"

);



}



}









// =================================
// MOBILE MENU
// =================================


function toggleMenu(){



const nav =

document.querySelector(

"nav"

);





if(nav){



nav.classList.toggle(

"active"

);



}



}









// =================================
// BACK TO TOP
// =================================


function createTopButton(){



let button =

document.createElement(

"button"

);





button.innerHTML=

"⬆";





button.className=

"top-button";





document.body.appendChild(

button

);





button.onclick=()=>{



window.scrollTo({



top:0,


behavior:"smooth"



});



};






window.addEventListener(

"scroll",

()=>{



if(window.scrollY>400){



button.style.display="block";



}

else{



button.style.display="none";



}



});



}









// =================================
// SCROLL EFFECT
// =================================


function scrollAnimation(){



const items =

document.querySelectorAll(

".card,.video-card,.trend-box"

);





items.forEach(item=>{



item.style.transition=

"0.5s";



});



}









// =================================
// WEBSITE SETTINGS
// =================================


function saveSetting(key,value){



localStorage.setItem(

key,

value

);



}






function getSetting(key){



return localStorage.getItem(

key

);



}









// =================================
// AUTO START
// =================================


document.addEventListener(

"DOMContentLoaded",

()=>{


loadTheme();


createTopButton();


scrollAnimation();



}

);
/* =====================================
MY MODERN VIDEO
APP.JS FINAL SYSTEM
PART 3/3 FINAL
===================================== */



// =================================
// RECENTLY WATCHED
// =================================


function saveRecentVideo(id){



let recent =

JSON.parse(

localStorage.getItem(

"recentVideos"

)

)

|| [];





recent = recent.filter(

item=>item!==id

);





recent.unshift(id);





recent = recent.slice(0,10);





localStorage.setItem(

"recentVideos",

JSON.stringify(recent)

);



}









function getRecentVideos(){



return JSON.parse(

localStorage.getItem(

"recentVideos"

)

)

|| [];



}









// =================================
// USER PREFERENCES
// =================================


function savePreference(name,value){



let preferences =

JSON.parse(

localStorage.getItem(

"userPreferences"

)

)

|| {};





preferences[name]=value;





localStorage.setItem(

"userPreferences",

JSON.stringify(preferences)

);



}









function getPreference(name){



let preferences =

JSON.parse(

localStorage.getItem(

"userPreferences"

)

)

|| {};





return preferences[name];



}









// =================================
// PAGE LOADER
// =================================


function createLoader(){



let loader =

document.createElement(

"div"

);





loader.id="pageLoader";





loader.innerHTML=

`

<div class="loading">

</div>

`;





document.body.appendChild(

loader

);







window.addEventListener(

"load",

()=>{



setTimeout(()=>{


loader.remove();



},500);



}

);



}









// =================================
// KEYBOARD SHORTCUTS
// =================================


document.addEventListener(

"keydown",

function(event){





// Press "/" for search


if(

event.key==="/"

){



let search =

document.querySelector(

"input[type='search']"

);





if(search){



event.preventDefault();


search.focus();



}



}








// Press Home key


if(

event.key==="Home"

){



window.scrollTo({


top:0,


behavior:"smooth"


});



}





}

);









// =================================
// DISABLE RIGHT CLICK
// OPTIONAL SECURITY
// =================================


// document.addEventListener(
// "contextmenu",
// e=>e.preventDefault()
// );









// =================================
// FINAL WEBSITE START
// =================================


document.addEventListener(

"DOMContentLoaded",

()=>{


createLoader();



console.log(

"My Modern Video Loaded Successfully 🚀"

);



});