

const send = document.querySelector('.send')
const inputs = document.querySelectorAll('input')
const title = document.querySelector('.title')
let productPhoto = document.querySelector('.productPhoto')
const ingredients = document.querySelector('.ingredients')
const description  = document.querySelector('.description')
const calories = document.querySelector('.calories')
const getPhoto = document.querySelector('.getPhoto')
const addProducts = document.querySelector('.addProducts')
const addIngredients = document.querySelector('.addIngredients')
let random = {}
let allIngredients = []

addProducts.onclick = () =>{
    allIngredients.push(inputs[1].value)
    console.log(allIngredients)
    addIngredients.value = ""
}

send.onclick = () => {
    title.innerHTML = inputs[0].value
    ingredients.innerText = "Ingredients: " + allIngredients
    description.innerHTML = "Description: " + inputs[2].value
    calories.innerHTML = "Calories: " + inputs[3].value
    productPhoto.src = random.meals[0].strMealThumb

    if(allIngredients.length < 3){
        alert("Must be at least 3 ingredients")
        title.innerHTML = "Title"
        ingredients.innerText = "Ingredients"
        description.innerHTML = "Description"
        calories.innerHTML = "Calories"
    }
    inputs[0].value = ""
    inputs[2].value = ""
    inputs[3].value = ""
}

getPhoto.onclick = () =>{
    function getData() {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(res => res.json())
            .then(data => {
                random = data
            })
    }
    getData()
  }
