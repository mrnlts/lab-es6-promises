// Iteration 0

function addFood( recipe, recipeID ) 
{
  let currentRecipe = document.querySelector( recipeID );

  let steps = currentRecipe.getElementsByTagName( "li" );
  
  let i = 0;

  const stepCascade = setInterval( () => {

    if ( steps.length < recipe.length ) {
  
      currentRecipe.innerHTML += `<li> ${recipe[i]} </li>`;
  
      i++;
  
    }

  }, 1000 );
}

addFood(brusselSprouts, '#brusselSprouts');

addFood(mashPotatoes, '#mashPotatoes');

addFood(steak, '#steak');

// // Iteration 1 using callbacks
// addFood(steak[0], '#steak', () => {
//   // ... your code here
//   addFood(steak[1], '#steak', () => {

//   })
// });



// // Iteration 2 using `.then()`
// addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
//   // ... your code here
//   addFood(mashPotatoes[1], '#mashPotatoes')
// });

// // Iteration 3 using async and await

//   async function makeFood(step) {
//     // ... your code here
    
//   }
//   makeFood(eachStep);
