import icons from 'url:../img/icons.svg';
console.log(icons);

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
//console.log('hi srinivas im react project')
//loader
const renderSpinner = function(parentEl){
  const markup =` <div class="spinner">
  <svg>
    <use href="src/img/icons.svg#icon-loader"></use>
  </svg>
</div>`
parentEl.innerHTML='';
parentEl.insertAdjacentHTML('afterbegin', markup);
};

//locading recipe data 
const showRecipe = async function(){
  try{
    renderSpinner(recipeContainer);
    const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc40');
    const data = await res.json();
 console.log(data);

  function datafetch(recipedata){
    var completefetch = recipedata.data.recipe;
  // console.log(recipedata);



  console.log('i am test');

  //   console.log(completefetch.id)
    //   console.log(completefetch.title)
      // console.log(completefetch.publisher)
  //   console.log(completefetch.image_url)
  //   console.log(completefetch.servings)
    //  console.log(completefetch.ingredients);
   


  var id = completefetch.id;
var title = completefetch.title;
  var publisher =completefetch.publisher;
    var image_url = completefetch.image_url;
    var servings = completefetch.servings;
var cooking_time = completefetch.cooking_time;
  var ingredients = completefetch.ingredients;
  var source_url = completefetch.source_url;
console.log(id)
  var test =completefetch.ingredients;

  // test.forEach(x => {
  //   var a  = x.quantity;
  // });

// for(y of test){
//   console.log(y);
// }
//test.map(x =>console.log(x));
  const  markup =`
  <figure class="recipe__fig">
    <img src="${image_url}" alt="${title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="http://localhost:1234/icons.dfd7a6db.svg?1691005465140
#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${cooking_time}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="http://localhost:1234/icons.dfd7a6db.svg?1691005465140
#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${servings}</span>
      <span class="recipe__info-text">servings</span>
      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="http://localhost:1234/icons.dfd7a6db.svg?1691005465140
            #icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="http://localhost:1234/icons.dfd7a6db.svg?1691005465140
            #icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="http://localhost:1234/icons.dfd7a6db.svg?1691005465140
        #icon-user"></use>
      </svg>
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="http://localhost:1234/icons.dfd7a6db.svg?1691005465140
        #icon-bookmark-fill"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">

    ${test.map(x=> {
    return `
    <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="http://localhost:1234/icons.dfd7a6db.svg?1691005465140
      #icon-check"></use>
    </svg>
    <div class="recipe__quantity">${x.quantity}</div>
    <div class="recipe__description">
      <span class="recipe__unit">${x.unit}</span>
      ${x.description}
    </div>
  </li>
 `  }).join('')};
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${source_url}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="http://localhost:1234/icons.dfd7a6db.svg?1691005465140
        #icon-arrow-right"></use>
      </svg>
    </a>
  </div>
  `
  recipeContainer.insertAdjacentHTML('afterbegin', markup);
  }

  datafetch(data);

}
catch(err){
  console.log(err);

}
};
showRecipe();



// var a  = async function (){
//   try{
//     const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
//     const data = await res.json();
//console.log(data.data.recipe.source_url);
//   }
//   catch(err){
//     alert(err);

//   }
// }
// a();