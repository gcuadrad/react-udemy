import React, {Component} from 'react';

class MyComponent extends Component{

  render(){
    let recipe = {
      name: 'Pizza',
      ingredients: ['Tomato', 'Cheese', 'Ham'],
      calories: 400
    }
    return (
      <React.Fragment>
        <div className="MyComponents">
          <h1>{'Recipe ' + recipe.name}</h1>
          <h1>{'Calories ' + recipe.calories}</h1>
          <ol>
            {
              recipe.ingredients.map((ingredient, i) => {
                console.log(ingredient);
                return (
                  <li key={1}>
                    {ingredient}
                  </li>
                );
              })
            }
          </ol>
        </div>
      </React.Fragment>
    )
  }
}

export default MyComponent;
