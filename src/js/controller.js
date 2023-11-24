
import icons from 'url:../img/icons.svg';
import { Fraction } from 'fractional';
import { API_URL } from './config';
//console.log(Fraction);

const recipeContainer = document.querySelector('.recipe');
const reciepesidebar = document.querySelector('.results');

var sidebardata = async function (){
  try{
  const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc90b/`);
  const data = await res.json();
var a  = data.data.recipe.id;
var b  = data.data.recipe.title;
//var c  = data.data.recipe.description;

var img = data.data.recipe.source_url;

reciepesidebar.innerHTML = ` <div class="search-results">
<p id ="testload"></p>
<div class="results">
  <a href ="#5ed6604591c37cdc054bc90b">ab recipe</a>
  <a href ="#5ed6604591c37cdc054bc90b"> recipe2</a>

  <li class="preview">
    <a class="preview__link preview__link--active" href=${a}>
      <figure class="preview__fig">
        <img src="${img}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${b}</h4>
        <p class="preview__publisher">The Pioneer Woman</p>
        <div class="preview__user-generated">
          <svg>
            <use href="src/img/icons.svg#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>

  </div>`;

}
  catch(err){
    console.log(err)

  }

}

sidebardata();


//var geturllink = document.getElementsByClassName('results');
//var childtest = geturllink;
//console.log(childtest.childNode);

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};


var path = window.location.href;


//https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc90b


//https://forkify-api.herokuapp.com/api/v2/recipes/$%7Bid%7D
//https://forkify-api.herokuapp.com/api/v2/recipes/$%7Bid%7D


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
//console.log('hi srinivas im react project')
//loader
const renderSpinner = function(parentEl){
  const markup =`<div class="loader"></div>`
  
parentEl.innerHTML='';
parentEl.insertAdjacentHTML('afterbegin', markup);
};

// var test = document.getElementById('testsri');

// var abctest = function(){
//   const abc  = `<h1>hi srinivas kandlikar`;


// test.insertAdjacentHTML('afterbegin',xyz);
// }
// var xyz = abctest()

//locading recipe data 

// const showReceipetest = async function(id){


//   var pageurl = window.location.href;
//   console.log(pageurl);

// var fedata = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
// //console.log(fedata)
// const dat = await fedata.json();
// console.log(dat.data.recipe.ingredients);
// var xyz = dat.data.recipe.ingredients
// var test  = xyz.forEach(x => {
//   console.log(x);
//   console.log(x.quantity)
  
// });

// }

//showReceipetest('5ed6604591c37cdc054bc90b');






const showRecipe = async function(){
  try{
    const id = window.location.hash.slice(1);
   // console.log(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
    renderSpinner(recipeContainer);
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
    const data = await res.json();
 //console.log(data);
if(!id) return;





  function datafetch(recipedata){
    var completefetch = recipedata.data.recipe;
  // console.log(recipedata);

  //console.log('i am test');

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
//console.log(id)
  var test = completefetch.ingredients;

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
        <use href="${icons}?1691005465140
#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${cooking_time}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${path}/icons.dfd7a6db.svg?1691005465140
#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${servings}</span>
      <span class="recipe__info-text">servings</span>
      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${path}/icons.dfd7a6db.svg?1691005465140
            #icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${path}/icons.dfd7a6db.svg?1691005465140
            #icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="${path}/icons.dfd7a6db.svg?1691005465140
        #icon-user"></use>
      </svg>
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="${path}/icons.dfd7a6db.svg?1691005465140
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
      <use href="${icons}?1691005465140
      #icon-check"></use>
    </svg>
    <div class="recipe__quantity">${x.quantity ? new Fraction(x.quantity):'x.quan'}</div>
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
        <use href="${icons}?1691005465140
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

window.addEventListener('hashchange',showRecipe)
//window.addEventListener('load',showRecipe)




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
//to get the location of window
//console.log(window.location);
//console.log(window.location.href);


//  var t = document.getElementById('testnew');
//  function abcde(){
//   return (
// t.innerHTML ="ssdgsgsgsdg")
//  }
//  abcde();