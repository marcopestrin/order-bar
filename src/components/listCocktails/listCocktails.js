import React, { Component } from 'react';
import Cocktail from './cocktail';

export default class ListCocktails  extends Component { 
  constructor(props){
    super(props)
    this.state = {
      cocktails: []
    }
  }
  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=f")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            cocktails: result
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }


  render () {
    const cocktail = this.state.cocktails.drinks && this.state.cocktails.drinks.map((element,index) =>
      <Cocktail
        data={element}
        key={index.toString()}
      />
    )
    return ( 
      <>
       { cocktail }
      </>
    )
  }
}