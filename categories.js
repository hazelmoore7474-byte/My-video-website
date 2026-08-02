 /* =====================================
MY MODERN VIDEO
CATEGORY.JS FINAL SYSTEM
PART 1/3
===================================== */



const videoCategories = [



"All",


// Entertainment

"Entertainment",
"Comedy",
"Funny",
"Memes",
"Pranks",
"Drama",
"Action",
"Adventure",
"Horror",
"Thriller",
"Romance",
"Fantasy",
"Crime",
"Mystery",
"Animation",
"Anime",
"Cartoon",
"Web Series",
"Movies",
"Movie Review",
"Movie Trailer",
"Short Film",
"Story",



// Music

"Music",
"Songs",
"Music Video",
"Live Music",
"Concert",
"DJ",
"Remix",
"Cover Song",
"Karaoke",



// Technology

"Technology",
"Artificial Intelligence",
"AI",
"ChatGPT",
"Machine Learning",
"Robotics",
"Programming",
"Coding",
"Web Development",
"App Development",
"Cyber Security",
"Blockchain",
"Software",
"Hardware",
"Internet",
"Cloud Computing",
"Data Science",



// Gaming

"Gaming",
"Gameplay",
"Gaming Stream",
"Live Gaming",
"Game Review",
"Game Trailer",
"Mobile Games",
"PC Games",
"Console Games",
"Esports",



// Education

"Education",
"Tutorial",
"Study",
"Math",
"Physics",
"Chemistry",
"Biology",
"History",
"Geography",
"Language Learning",
"Exam Preparation",
"Research",
"Facts",
"Quiz",



// Science

"Science",
"Space",
"NASA",
"Astronomy",
"Universe",
"Environment",
"Climate",
"Wildlife",



// Sports

"Sports",
"Football",
"Cricket",
"Basketball",
"Tennis",
"Wrestling",
"Boxing",
"MMA",
"Sports News",
"Match Highlights",



// Lifestyle

"Lifestyle",
"Fashion",
"Beauty",
"Fitness",
"Workout",
"Yoga",
"Meditation",
"Health",
"Food",
"Cooking",
"Recipe",
"Travel",
"Tourism",



// Business

"Business",
"Finance",
"Investment",
"Stock Market",
"Economy",
"Startup",
"Marketing",
"Career",
"Jobs",
"Real Estate",



// Vehicles

"Cars",
"Bikes",
"Car Review",
"Bike Review",
"Electric Vehicle",
"Drone",



// Creative

"Photography",
"Design",
"Graphic Design",
"3D Design",
"Art",
"Dance",
"Video Editing",



// Community

"Vlog",
"Podcast",
"Interview",
"Celebrity",
"Biography",
"Motivation",
"Success Story",



// Other

"News",
"Politics",
"Law",
"Culture",
"Festival",
"Wedding",
"Pets",
"Animals",
"Shopping",
"Product Review",
"Unboxing",
"Live Stream",
"Documentary",
"Spiritual",
"Weather",
"Local News"



];





console.log(
"My Modern Video Categories Loaded 🚀"
);
/* =====================================
MY MODERN VIDEO
CATEGORY.JS FINAL SYSTEM
PART 2/3
===================================== */



// =================================
// CREATE CATEGORY BUTTONS
// =================================


function createCategoryButtons(){


const container =

document.getElementById(
"categoryList"
);



if(!container)
return;




container.innerHTML="";




videoCategories.forEach(category=>{


container.innerHTML +=

`

<button

class="category-btn"

onclick="selectCategory('${category}')"

>

${category}

</button>

`;



});



}









// =================================
// SELECT CATEGORY
// =================================


function selectCategory(category){



localStorage.setItem(

"selectedCategory",

category

);




filterVideosByCategory(category);



}









// =================================
// FILTER VIDEOS CATEGORY
// =================================


function filterVideosByCategory(category){



const cards =

document.querySelectorAll(
".video-card"
);





cards.forEach(card=>{



const text =

card.innerText
.toLowerCase();





if(

category==="All"

||

text.includes(
category.toLowerCase()
)

){



card.style.display="block";


}

else{


card.style.display="none";


}



});



}









// =================================
// SEARCH CATEGORY
// =================================


function searchCategory(keyword){



return videoCategories.filter(

category=>


category
.toLowerCase()
.includes(

keyword.toLowerCase()

)



);



}









// =================================
// SHOW CATEGORY SEARCH RESULT
// =================================


function showCategorySearch(){



const input =

document.getElementById(
"categorySearch"
);



const resultBox =

document.getElementById(
"categoryResult"
);




if(!input || !resultBox)
return;





const result =

searchCategory(
input.value
);




resultBox.innerHTML="";





result.forEach(item=>{


resultBox.innerHTML +=


`

<p

onclick="selectCategory('${item}')"

>

${item}

</p>


`;



});



}









// =================================
// LOAD SAVED CATEGORY
// =================================



function loadSavedCategory(){



const saved =

localStorage.getItem(
"selectedCategory"
);




if(saved){


filterVideosByCategory(saved);


}



}









// =================================
// AUTO START
// =================================


document.addEventListener(

"DOMContentLoaded",

()=>{


createCategoryButtons();


loadSavedCategory();



});
 /* =====================================
MY MODERN VIDEO
CATEGORY.JS FINAL SYSTEM
PART 3/3 FINAL
===================================== */



// =================================
// CATEGORY USAGE TRACKING
// =================================


function trackCategory(category){



let data =

JSON.parse(

localStorage.getItem(
"categoryUsage"
)

)

|| {};





if(!data[category]){


data[category]=1;


}

else{


data[category]++;


}




localStorage.setItem(

"categoryUsage",

JSON.stringify(data)

);



}









// =================================
// TRENDING CATEGORIES
// =================================


function getTrendingCategories(){



let data =

JSON.parse(

localStorage.getItem(
"categoryUsage"
)

)

|| {};





return Object.keys(data)

.sort(

(a,b)=>

data[b]-data[a]

)

.slice(0,10);



}









// =================================
// RELATED CATEGORY SYSTEM
// =================================


function getRelatedCategories(category){



const groups = {



Entertainment:[

"Comedy",
"Movies",
"Drama",
"Action",
"Animation"

],



Technology:[

"AI",
"Technology",
"Coding",
"Programming",
"Robotics"

],



Education:[

"Study",
"Tutorial",
"Research",
"Facts"

],



Gaming:[

"Gaming",
"Gameplay",
"Esports",
"Game Review"

],



Music:[

"Songs",
"Music Video",
"Live Music",
"DJ"

],



Lifestyle:[

"Travel",
"Food",
"Fitness",
"Fashion"

]



};





for(let group in groups){



if(
groups[group]
.includes(category)
){


return groups[group];


}



}




return [];



}









// =================================
// CATEGORY RECOMMENDATION
// =================================


function recommendCategories(){



const trending =

getTrendingCategories();




if(trending.length>0){


return trending;


}




return videoCategories.slice(0,10);



}









// =================================
// DISPLAY TRENDING CATEGORY
// =================================


function showTrendingCategories(){



const box =

document.getElementById(
"trendingCategories"
);




if(!box)
return;





box.innerHTML="";





recommendCategories()

.forEach(category=>{


box.innerHTML +=


`

<button

class="category-btn"

onclick="selectCategory('${category}')"

>

🔥 ${category}

</button>


`;



});



}









// =================================
// FINAL INITIALIZE
// =================================


document.addEventListener(

"DOMContentLoaded",

()=>{


showTrendingCategories();



console.log(

"Category System Complete 🚀"

);



});