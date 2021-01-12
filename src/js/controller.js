import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const APIKEY = "c6fb1b78-dcfa-4c16-94f9-853c58bcce45"; 

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);

    if(!id) return;

    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);
    
    // 2) Rendering recipe
    recipeView.render(model.state.recipe);

  } catch(err) {
    alert(err);
  }
}

const eventsArray = ['hashchange', 'load'];

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));



