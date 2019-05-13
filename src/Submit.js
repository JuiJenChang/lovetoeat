import React, { Component } from 'react';
import Ingredients from './ingredient';
import IngredientList from './IngredientList';
import {browserHistory} from 'react-router';

class Submit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipies: JSON.parse(localStorage.setItem('recipies')) || [],
            newRecipie: {
                name: "New Recipie",
                description: "Description",
                ingredients: []
            }
        };
        this.submitRecipe = this.submitRecipe.bind(this);
    }

    submitRecipe() {
        let newRecipie = this.state.newRecipie;
        newRecipie.name = this.name.value;
        newRecipie.description = this.description.value;

        this.setState({newRecipie});
        let recipies = this.state.recipies;
        recipies.push(newRecipie);
        this.setState({recipies});
        localStorage.setItem('recipies', JSON.stringify(recipies));
        browserHistory.push('/');
    }

    addIngredient(quantity, ingredient) {
        let newRecipie = this.state.newRecipie;
        newRecipie.ingredients.push({quantity: quantity, ingredient: ingredient});
        this.setState({newRecipie: newRecipie});
    }

    render() {
        return (
            <div classNameName="row">
                <div classNameName="col-xs-12 col-sm-12">
                    <h1>Submit</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                ref={(input) => { this.name = input; }}
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter the name of the recipie" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control"
                                ref={(input) => { this.description = input; }}
                                id="description"
                                placeholder="Enter a brief description" />
                        </div>
                        <IngredientList recipie={this.state.newRecipie}/>
                        <Ingredients addIngredient={(quantity, ingredient) => {this.addIngredient(quantity, ingredient)}}/>
                        <button type="button" onClick={this.submitRecipe} className="btn btn-default">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Submit;