import React, {Component} from 'react';

class IngredientList extends Component {

    displayIngredient() {
        let resultsArray = [];

        this.props.recipie.ingredients.map((item, i) => {
            resultsArray.push(<li key={i}>{item.quantity} - {item.ingredient}</li>);
        });
        return resultsArray;
    }

    render() {
        return(
            <ul>
                {this.displayIngredient()}
            </ul>
        );
    }
}

export default IngredientList;