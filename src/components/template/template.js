import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Letters from '../letters/letters'
import ListCocktails from '../listCocktails/listCocktails'

export default class Template extends Component { 
  render () {
    return ( 
      <>
        <Container className="template">
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Letters />
            </Grid>
            <Grid item xs={6}>
              <ListCocktails />
            </Grid>
            <Grid item xs={5}>
              ORDER DETAILS
            </Grid>
          </Grid>
        </Container>
      </>
    )
  }
}