function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t,r,i,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},s={},c=o.parcelRequire3a11;null==c&&((c=function(e){if(e in a)return a[e].exports;if(e in s){var n=s[e];delete s[e];var t={id:e,exports:{}};return a[e]=t,n.call(t.exports,t,t.exports),t.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){s[e]=n},o.parcelRequire3a11=c),c.register("27Lyk",function(n,t){e(n.exports,"register",()=>r,e=>r=e),e(n.exports,"resolve",()=>i,e=>i=e);var r,i,o={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)o[n[t]]=e[n[t]]},i=function(e){var n=o[e];if(null==n)throw Error("Could not resolve bundle with id "+e);return n}}),c("27Lyk").register(JSON.parse('{"f9fpV":"index.7d5dcc72.js","eyyUD":"icons.c14567a0.svg"}'));var u={};u=new URL(c("27Lyk").resolve("eyyUD"),import.meta.url).toString(),(Fraction=function(e,n){if(void 0!==e&&n)"number"==typeof e&&"number"==typeof n?(this.numerator=e,this.denominator=n):"string"==typeof e&&"string"==typeof n&&(this.numerator=parseInt(e),this.denominator=parseInt(n));else if(void 0===n){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var t,r,i=num.split(" ");if(i[0]&&(t=i[0]),i[1]&&(r=i[1]),t%1==0&&r&&r.match("/"))return new Fraction(t).add(new Fraction(r));if(!t||r)return;if("string"==typeof t&&t.match("/")){var o=t.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof t&&t.match("."))return new Fraction(parseFloat(t));this.numerator=parseInt(t),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),n=this.numerator%this.denominator,t=this.denominator,r=[];return 0!=e&&r.push(e),0!=n&&r.push((0===e?n:Math.abs(n))+"/"+t),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var n=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=n.denominator,n.rescale(e.denominator),e.rescale(td),n.numerator+=e.numerator,n.normalize()},Fraction.prototype.subtract=function(e){var n=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=n.denominator,n.rescale(e.denominator),e.rescale(td),n.numerator-=e.numerator,n.normalize()},Fraction.prototype.multiply=function(e){var n=this.clone();if(e instanceof Fraction)n.numerator*=e.numerator,n.denominator*=e.denominator;else{if("number"!=typeof e)return n.multiply(new Fraction(e));n.numerator*=e}return n.normalize()},Fraction.prototype.divide=function(e){var n=this.clone();if(e instanceof Fraction)n.numerator*=e.denominator,n.denominator*=e.numerator;else{if("number"!=typeof e)return n.divide(new Fraction(e));n.denominator*=e}return n.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var n=this.clone().normalize(),e=e.clone().normalize();return n.numerator===e.numerator&&n.denominator===e.denominator},Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,n){if(!n)return Math.round(e);var t=Math.pow(10,n);return Math.round(e*t)/t},function(){if(t(this.denominator)){var e=r(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(t(this.numerator)){var e=r(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,n){var t=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(n);return(r.forEach(function(e){var n=i.indexOf(e);n>=0&&(t.push(e),i.splice(n,1))}),0===t.length)?1:function(){var e,n=t[0];for(e=1;e<t.length;e++)n*=t[e];return n}()},Fraction.primeFactors=function(e){for(var n=Math.abs(e),t=[],r=2;r*r<=n;)n%r==0?(t.push(r),n/=r):r++;return 1!=n&&t.push(n),t},i=Fraction;const d=document.querySelector(".recipe");var l=window.location.href;const p=function(e){let n=`<div class="loader"></div>
`;e.innerHTML="",e.insertAdjacentHTML("afterbegin",n)},f=async function(){try{let e=window.location.hash.slice(1);p(d);let t=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}`),r=await t.json();if(!e)return;!function(e){var t=e.data.recipe;t.id;var r=t.title,o=t.publisher,a=t.image_url,s=t.servings,c=t.cooking_time;t.ingredients;var p=t.source_url,f=t.ingredients;let h=`
  <figure class="recipe__fig">
    <img src="${a}" alt="${r}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${r}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${n(u)}?1691005465140
#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${c}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${l}/icons.dfd7a6db.svg?1691005465140
#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${s}</span>
      <span class="recipe__info-text">servings</span>
      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${l}/icons.dfd7a6db.svg?1691005465140
            #icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${l}/icons.dfd7a6db.svg?1691005465140
            #icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="${l}/icons.dfd7a6db.svg?1691005465140
        #icon-user"></use>
      </svg>
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="${l}/icons.dfd7a6db.svg?1691005465140
        #icon-bookmark-fill"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">

    ${f.map(e=>`
    <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${n(u)}?1691005465140
      #icon-check"></use>
    </svg>
    <div class="recipe__quantity">${e.quantity?new i(e.quantity):"x.quan"}</div>
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
      <span class="recipe__publisher">${o}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${p}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${n(u)}?1691005465140
        #icon-arrow-right"></use>
      </svg>
    </a>
  </div>
  `;d.insertAdjacentHTML("afterbegin",h)}(r)}catch(e){console.log(e)}};window.addEventListener("hashchange",f),window.addEventListener("load",f);
//# sourceMappingURL=index.7d5dcc72.js.map
