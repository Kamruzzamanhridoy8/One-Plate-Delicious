const getmeals= (MealNmae ='')=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${MealNmae}`
    fetch(url)
        .then(res=>res.json())
        .then(data=>displayMeals(data.meals))
}

const displayMeals= meals =>{
    const mealsPusher = document.getElementById('mealspusher')
    mealsPusher.innerHTML =''
    meals.forEach(element => {
        const creatDiv = document.createElement('div')
        // console.log(element.strMealThumb);
        creatDiv.classList.add('col')
        creatDiv.innerHTML = `
        <div onclick="CallMealsDetails(${element.idMeal})" class="card mealCard">
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
    console.log(boxvalue);
    getmeals(boxvalue)
    searchbox.value=''

}

const CallMealsDetails = (mealid)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
    
}
getmeals()