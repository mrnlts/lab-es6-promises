const table = document.getElementById( "table" );

// Iteration 0

// function addFood( recipe, recipeID ) 
// {
//   let currentRecipe = document.querySelector( recipeID );

//   let steps = currentRecipe.getElementsByTagName( "li" );
  
//   let i = 0;

//   const stepCascade = setInterval( () => {

//     if ( steps.length < recipe.length ) {
  
//       currentRecipe.innerHTML += `<li> ${recipe[i]} </li>`;
  
//       i++;
  
//     }

//   }, 1000 );
// }

// addFood(brusselSprouts, '#brusselSprouts');

// addFood(mashPotatoes, '#mashPotatoes');

// addFood(steak, '#steak');



// Iteration 1 using callbacks
let steakImg = document.createElement( "div" );
steakImg.innerHTML = ' <img src = "./public/images/steak.jpg"> ';

addFood(steak[0], '#steak', () => {
  
  addFood( steak[1], '#steak', () => {
    
    addFood( steak[2], '#steak', () => {
      
      addFood( steak[3], '#steak', () => {
        
        addFood( steak[4], '#steak', () => {
          
          addFood( steak[5], '#steak', () => {

            addFood( steak[6], '#steak', () => { 
              
              addFood( steak[7], '#steak', () => { 

                table.appendChild( steakImg );

              });
                          
            });
          
          });
        
        });
      
      });
    
    });
  
  });

});




// Iteration 2 using `.then()`
let potatoesImg = document.createElement( "div" );

potatoesImg.innerHTML = ' <img src = "./public/images/mashPotatoes.jpg"> ';

addFood( mashPotatoes[0], '#mashPotatoes')

  .then( () => {
  
    addFood( mashPotatoes[1], '#mashPotatoes')
      .then( () => {
    
        addFood( mashPotatoes[2], '#mashPotatoes')
          .then( () => {
        
          addFood( mashPotatoes[3], '#mashPotatoes')
            .then( () => {
          
              addFood( mashPotatoes[4], '#mashPotatoes')
                .then( () => {

                  table.appendChild( potatoesImg );

              });
      
          });
  
        });

    });

});




// Iteration 3 using async and await

let brusselSproutsImg = document.createElement( "div" );

brusselSproutsImg.innerHTML = ' <img src = "./public/images/brusselSprouts.jpg"> ';

async function makeFood( steps, id ) {

  for ( let i = 0; i < brusselSprouts.length; i++ ) {

    await addFood( steps[i], '#brusselSprouts' );

  }

  table.appendChild(brusselSproutsImg);

}

makeFood( brusselSprouts );