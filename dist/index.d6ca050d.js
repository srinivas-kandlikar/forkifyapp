function e(e,s,i,n){Object.defineProperty(e,s,{get:i,set:n,enumerable:!0,configurable:!0})}var s,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},c=i.parcelRequire3a11;null==c&&((c=function(e){if(e in n)return n[e].exports;if(e in t){var s=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,s.call(i.exports,i,i.exports),i.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,s){t[e]=s},i.parcelRequire3a11=c),c.register("27Lyk",function(s,i){e(s.exports,"register",()=>n,e=>n=e),e(s.exports,"resolve",()=>t,e=>t=e);var n,t,c={};n=function(e){for(var s=Object.keys(e),i=0;i<s.length;i++)c[s[i]]=e[s[i]]},t=function(e){var s=c[e];if(null==s)throw Error("Could not resolve bundle with id "+e);return s}}),c("27Lyk").register(JSON.parse('{"f9fpV":"index.d6ca050d.js","eyyUD":"icons.c14567a0.svg"}'));console.log((s=new URL(c("27Lyk").resolve("eyyUD"),import.meta.url).toString())&&s.__esModule?s.default:s);const r=document.querySelector(".recipe"),a=function(e){let s=` <div class="spinner">
  <svg>
    <use href="src/img/icons.svg#icon-loader"></use>
  </svg>
</div>`;e.innerHTML="",e.insertAdjacentHTML("afterbegin",s)},o=async function(){try{a(r);let e=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc40"),s=await e.json();console.log(s),function(e){var s=e.data.recipe,i=s.id,n=s.title,t=s.publisher,c=s.image_url,a=s.servings,o=s.cooking_time;s.ingredients;var l=s.source_url;console.log(i);var d=s.ingredients;let p=`
  <figure class="recipe__fig">
    <img src="${c}" alt="${n}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${n}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="http://localhost:1234/icons.dfd7a6db.svg?1691005465140
#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${o}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="http://localhost:1234/icons.dfd7a6db.svg?1691005465140
#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${a}</span>
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

    ${d.map(e=>`
    <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="http://localhost:1234/icons.dfd7a6db.svg?1691005465140
      #icon-check"></use>
    </svg>
    <div class="recipe__quantity">${e.quantity}</div>
    <div class="recipe__description">
      <span class="recipe__unit">${e.unit}</span>
      ${e.description}
    </div>
  </li>
 `).join("")};
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${t}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${l}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="http://localhost:1234/icons.dfd7a6db.svg?1691005465140
        #icon-arrow-right"></use>
      </svg>
    </a>
  </div>
  `;r.insertAdjacentHTML("afterbegin",p)}(s)}catch(e){console.log(e)}};o();
//# sourceMappingURL=index.d6ca050d.js.map
