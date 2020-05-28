import React, { Component } from 'react';
import Cocktail from './cocktail';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import RecapOrder from '../recapOrder/RecapOrder'

export default class ListCocktails  extends Component { 
  constructor(props){
    super(props)
    this.state = {
      cocktails: [],
      order: []
    }
    this.removeItem = this.removeItem.bind(this);

  }

  addItem(id) {
    let order = [...this.state.order, id]
    this.setState({
      order
    })
  }
  removeItem(index) {
    let order = this.state.order
    order.splice(index,1)
    this.setState({
      ...this.state,
      order
    })
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
    <>
      <Cocktail
        data={element}
      />
      <Button
        variant="contained"
        color="primary"
        className="addToOrder"
        onClick={() => this.addItem(element.idDrink)}
      >Add to Order</Button>
    </>
      
    )
    return ( 
      <>
        <Container className="template">
          <Grid container spacing={1}>
            <Grid item xs={8}>
              { cocktail }
            </Grid>
            <Grid item xs={4}>
              <RecapOrder
                action={this.removeItem}
                drinks={this.state.order}
              />
            </Grid>
          </Grid>
        </Container>
      </>
    )
  }
}