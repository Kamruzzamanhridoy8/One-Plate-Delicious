const getmeals= (MealNmae ='')=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${MealNmae}`
    fetch(url)
        .then(res=>res.json())
        .then(data=>displayMeals(data.meals))
}
// onclick="CallMealsDetails(${element.idMeal})"
const displayMeals= meals =>{
    const mealsPusher = document.getElementById('mealspusher')
    mealsPusher.innerHTML =''
    meals.forEach(element => {
        const creatDiv = document.createElement('div')
        // console.log(element.strMealThumb);
        creatDiv.classList.add('col')
        creatDiv.innerHTML = `
        <div data-bs-toggle="modal" data-bs-target="#exampleModal" class="card mealCard" >
            <img src="${element.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.strMeal}</h5>
                <p class="card-text">${element.strInstructions.slice(0,90)}...</p>
                
            </div>
        </div>
        `;
        mealsPusher.appendChild(creatDiv)
    });
}

const searchBox =()=>{
    const searchbox= document.getElementById('searchbox')
    const boxvalue = searchbox.value;
    getmeals(boxvalue)
    searchbox.value=''

}

searchbox.addEventListener("keypress", function(event) {
    const searchbox= document.getElementById('searchbox')
    const boxvalue = searchbox.value;
    console.log(event.key);
    if (event.key === "Enter") {
        getmeals(boxvalue);
    }
});


const CallMealsDetails = (mealid)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    fetch(url)
        .then(res=>res.json())
        .then(data=>displayMealsDetails(data))
    
}

const displayMealsDetails = mealid =>{
    const mealmodel = document.getElementById('mealModel');
    mealmodel.innerHTML =`

    `
}




getmeals()