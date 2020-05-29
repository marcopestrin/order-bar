import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Letters from '../letters/letters'
import ListCocktails from '../listCocktails/listCocktails'
import Typography from '@material-ui/core/Typography';
import './styles.css'

export default class Template extends Component { 
  constructor(props) {
    super(props)
    this.changeLetter = this.changeLetter.bind(this);
    this.state = {
      letter:''
    }
  }
  changeLetter(newLetter){
    this.setState({
      ...this.state,
      letter:newLetter
    })
  }
  render () {
    return ( 
      <>
        <Container className="template">
          <Grid container spacing={1}>
            <Grid item xs={12}>
            <Typography
              className="guide"
              align='center'
              color='primary'
              variant='h4'
            >CHOOSE YOUR LETTER</Typography>
              <Letters
                action={this.changeLetter}
                letterSelected={this.state.letter}
              />
            </Grid>
            <Grid item xs={12}>
              <ListCocktails
                letter={this.state.letter}
              />
            </Grid>
          </Grid>
        </Container>
      </>
    )
  }
}