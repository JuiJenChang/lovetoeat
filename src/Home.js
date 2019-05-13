import React, { Component } from 'react';
import Ingredient from './ingredient';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipies: JSON.parse(localStorage.setItem('recipies')) || []
        };
    }

    displayRecipies() {
        let resultsArray = [];

        this.state.recipies.map((recipie, i) => {
            resultsArray.push(
                <div className="col-sm-4">
                    {recipie.name}<br />
                    {recipie.description}<br />
                    <IngredientList recipie={recipie} />
                </div>
            );
        });
        return resultsArray;
    }

    render() {
        return (
            <div className="row">
              <h1>Home</h1>
              {this.displayRecipies()}
            </div>
        );
    }
}

export default Home;